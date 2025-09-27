import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL || "https://tvnkgndhzysacvgfrxls.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2bmtnbmRoenlzYWN2Z2ZyeGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTA1MTYsImV4cCI6MjA3NDU2NjUxNn0.AviHPtAhoty1WqouCsT7hVYWyIlb_h8ddD3Kqk7Whe4";

// Create a mock client if environment variables are not provided
export const supabase = createClient(supabaseUrl, supabaseKey);
