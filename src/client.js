import { createClient } from "@supabase/supabase-js";
const URL = "https://rpdrdsedrdmqkylvpwwn.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZHJkc2VkcmRtcWt5bHZwd3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjk0MTQsImV4cCI6MjA2NTY0NTQxNH0.MevVAWbnAAp5dwptA4oiZL1m0k3dGMGaqL_3mJltcos";

export const supabase = createClient(URL, API_KEY);
