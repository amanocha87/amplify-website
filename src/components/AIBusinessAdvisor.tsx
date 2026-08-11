import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  Send,
  X,
  User,
  Sparkles,
  Clock,
} from 'lucide-react';
import { supabase } from './lib/supabase';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const COMPLETION_RULES = `## Conversation Completion Rules

Set conversationComplete to true when ANY of the following is true:
- The user has provided their contact details after agreeing to speak with Aman.
- The conversation has naturally concluded.
- The user says goodbye, thanks, bye, goodbye, see you, or indicates they are finished.
- There are no further questions required to qualify the lead.

When conversationComplete is true:
- completionReason should briefly explain why.
Examples: "Lead captured", "User ended conversation", "Conversation complete", "Qualified lead"

After setting conversationComplete=true, provide a warm closing message and DO NOT ask another question.`;

async function sendMessageToAdvisor(
  message: string,
  conversationHistory: Message[]
): Promise<{ reply: string; name?: string; email?: string; phone?: string; businessType?: string; conversationComplete?: boolean; completionReason?: string }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 45000);

  const requestBody = new URLSearchParams();
  requestBody.append("message", message);
  requestBody.append("conversationHistory", JSON.stringify(conversationHistory));
  requestBody.append("completionRules", COMPLETION_RULES);

  try {
    const response = await fetch('https://hook.eu1.make.com/256la8xo8kdvwurec25boe45e4hm4jdv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: requestBody.toString(),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("Sorry, I'm having trouble connecting right now. Please try again in a moment.");
    }

    const data = await response.json();
    if (!data || typeof data.reply !== 'string') {
      throw new Error("Sorry, I'm having trouble connecting right now. Please try again in a moment.");
    }

    return data;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error("Sorry, I'm having trouble connecting right now. Please try again in a moment.");
    }
    throw new Error(error.message || "Sorry, I'm having trouble connecting right now. Please try again in a moment.");
  } finally {
    clearTimeout(timeoutId);
  }
}

function BusinessAdvisorModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [extractedName, setExtractedName] = useState<string | null>(null);
  const [extractedEmail, setExtractedEmail] = useState<string | null>(null);
  const [extractedPhone, setExtractedPhone] = useState<string | null>(null);
  const [extractedBusinessType, setExtractedBusinessType] = useState<string | null>(null);
  const [conversationComplete, setConversationComplete] = useState<boolean>(false);
  const [completionReason, setCompletionReason] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const conversationIdRef = useRef<string>(crypto.randomUUID());

  useEffect(() => {
    if (messages.length === 0) return;

    const saveConversation = async () => {
      try {
        const { error } = await supabase.rpc('save_chat_conversation', {
          p_conversation_id: conversationIdRef.current,
          p_messages: messages,
          p_name: extractedName,
          p_email: extractedEmail,
          p_phone: extractedPhone,
          p_business_type: extractedBusinessType,
          p_conversation_complete: conversationComplete,
          p_completion_reason: completionReason
        });

        if (error) {
          console.error('Error saving conversation record:', error);
        }
      } catch (err) {
        console.error('Exception saving conversation record:', err);
      }
    };

    saveConversation();
  }, [messages, extractedName, extractedEmail, extractedPhone, extractedBusinessType, conversationComplete, completionReason]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, error]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages([
          {
            id: 'welcome',
            sender: 'bot',
            text: "Welcome to Amplify.\n\nI'm your Amplify AI Business Advisor.\n\nWould it be okay if I asked you a few quick questions so I can better understand your business and how we might be able to help?",
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    setError(null);
    if (!textToSend) {
      setInputValue('');
    }

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date()
    };

    const currentHistory = [...messages, userMsg];
    setMessages(currentHistory);
    setIsTyping(true);

    try {
      const responseData = await sendMessageToAdvisor(text, currentHistory);

      if (responseData.name) setExtractedName(responseData.name);
      if (responseData.email) setExtractedEmail(responseData.email);
      if (responseData.phone) setExtractedPhone(responseData.phone);
      if (responseData.businessType) setExtractedBusinessType(responseData.businessType);
      if (responseData.conversationComplete !== undefined) setConversationComplete(responseData.conversationComplete);
      if (responseData.completionReason) setCompletionReason(responseData.completionReason);

      const botMsg: Message = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: responseData.reply,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Error getting response from AI Advisor:', err);
      setError("We encountered a brief communication issue. Please try sending your message again.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-2xl h-[85vh] sm:h-[80vh] shadow-2xl flex flex-col overflow-hidden border border-neutral-100 relative" id="business-advisor-modal">

        <div className="px-6 py-5 border-b border-neutral-100 bg-gradient-to-r from-purple-50 to-neutral-100/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-900 rounded-xl flex items-center justify-center text-white shadow-md shadow-purple-900/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight leading-snug">
                Amplify AI Business Advisor
              </h2>
              <p className="text-xs font-semibold text-purple-900 uppercase tracking-wider">
                Business-Led AI Automation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-800 p-2 hover:bg-neutral-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-neutral-50/30 space-y-4">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-bold text-xs ${isBot ? 'bg-purple-900 text-white' : 'bg-neutral-200 text-neutral-700'}`}>
                  {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                <div className="space-y-1">
                  <div className={`rounded-2xl px-4 py-3 text-xs sm:text-sm shadow-sm whitespace-pre-line leading-relaxed ${isBot ? 'bg-white text-neutral-800 border border-neutral-100' : 'bg-neutral-900 text-white font-medium'}`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-neutral-400 block px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 max-w-[80%] mr-auto animate-pulse">
              <div className="w-8 h-8 rounded-lg bg-purple-900 text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-neutral-100 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1.5">
                <span className="text-xs text-neutral-400 font-medium">Advisor is compiling response</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-purple-700 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-purple-700 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-purple-700 rounded-full animate-bounce"></span>
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className="flex gap-3 max-w-[85%] mr-auto">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 shadow-sm text-xs sm:text-sm text-red-700 font-medium relative">
                {error}
                <button
                  onClick={() => setError(null)}
                  className="text-red-400 hover:text-red-600 font-bold ml-2 cursor-pointer focus:outline-none"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="p-4 border-t border-neutral-100 bg-white">
          <div className="flex gap-2 items-end">
            <textarea
              placeholder="Type your message here..."
              disabled={isTyping}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              rows={1}
              className="flex-1 bg-neutral-50 border border-neutral-200 focus:border-purple-700 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm text-neutral-800 focus:outline-none transition-all disabled:opacity-60 resize-none min-h-[46px] max-h-[120px] overflow-y-auto"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              className="bg-purple-900 hover:bg-purple-700 disabled:bg-neutral-100 disabled:text-neutral-400 text-white p-3.5 rounded-xl transition-all shrink-0 flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Average conversation: <strong className="text-neutral-500 font-semibold">5-7 minutes</strong></span>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700"></span>
              No obligation
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700"></span>
              Business focused
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AIBusinessAdvisor() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener('open-ai-advisor', openHandler);
    return () => window.removeEventListener('open-ai-advisor', openHandler);
  }, []);

  return (
    <>
     <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Business Advisor chat"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-white border border-purple-200 hover:border-purple-400 transition-colors rounded-full pl-4 pr-5 py-3 shadow-xl"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-700"></span>
        </span>
        <Bot className="w-5 h-5 text-purple-900" />
        <span className="font-semibold text-purple-900 text-sm">AI Business Advisor</span>
      </button>>
      <BusinessAdvisorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
