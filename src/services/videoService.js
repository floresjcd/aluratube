import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://qfsdxjvnxnhtykqzutpp.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmc2R4anZueG5odHlrcXp1dHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDk4NjMsImV4cCI6MTk4Mzc4NTg2M30.EyydRvhfeyva9xgtaAJmlH6UAp6aiOmFYMmpHNOqC50";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}