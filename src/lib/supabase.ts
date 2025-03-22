
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlvwdlksqgzqugqltoxq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsdndkbGtzcWd6cXVncWx0b3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NDM3OTEsImV4cCI6MjA1ODIxOTc5MX0.7qjPxhmujecoAs_d7bJjG54UVzfvzDONBuXCB5V1UEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
