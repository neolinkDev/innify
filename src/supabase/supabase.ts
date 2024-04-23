import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase-types';

export const supabase = createClient<Database>(
  'https://hdppzthzmwrwxloopwuw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcHB6dGh6bXdyd3hsb29wd3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjU0NjAsImV4cCI6MjAyODU0MTQ2MH0.cbuJmRX9gjCcZbe_JIK4YJWHDrOpkZSlU82pN5qGJfs'
);
