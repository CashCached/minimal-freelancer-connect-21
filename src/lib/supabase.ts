
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlvwdlksqgzqugqltoxq.supabase.co';
const supabaseAnonKey = 'your-anon-key'; // You'll need to replace this with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
