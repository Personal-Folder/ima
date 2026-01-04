import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: categories = [] } = await supabase
    .from("news_category")
    .select("*");
    

  return Response.json(categories);
}
