import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rdgyjeklbhemzvnotrhs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZ3lqZWtsYmhlbXp2bm90cmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNjQyMjUsImV4cCI6MTk5Mjg0MDIyNX0.0OmgcvIgHo67smeVXPD6qSYXXS_4qs-gaK7BFFiWOCk';

export const supabase = createClient(supabaseUrl, supabaseKey)
