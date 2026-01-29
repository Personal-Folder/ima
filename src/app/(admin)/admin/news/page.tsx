import NewsForm from "@/components/news/NewsForm";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminNews() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: categories = [] } = await supabase
    .from("news_category")
    .select("*");

  return (
    <main className="min-h-screen bg-gray-100">
      <NewsForm categories={categories!} />
    </main>
  );
}
