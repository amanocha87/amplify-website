import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ttakqtnfpkxheqsisavr.supabase.co';
const supabaseAnonKey = 'sb_publishable_ZFJgJ_HyACUSIOm-zUC_QA_wleyd66L';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
