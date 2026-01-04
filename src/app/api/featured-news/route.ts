import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: newsData, error } = await supabase
    .from("news")
    .select("*")
    .eq("featured", true);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(newsData);
}
