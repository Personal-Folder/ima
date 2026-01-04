import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .limit(3);
  let { data: sections } = await supabase
    .from("sections")
    .select("*")
    .or("key.ilike.%all%,key.ilike.%home%");
  let { data: featuredNews } = await supabase
    .from("news")
    .select("title")
    .eq("featured", true);
  let { data: insights } = await supabase
    .from("insights")
    .select("*")
    .in("key", ["amb_mission", "lending_supplies", "training_and_development"]);
  let { data: gallery } = await supabase.from("gallery").select("*");

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({
    news,
    sections,
    featuredNews,
    insights,
    gallery,
  });
}
