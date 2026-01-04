import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("sections")
    .select("*")
    .or("key.ilike.%about%,key.ilike.%all%");
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}
