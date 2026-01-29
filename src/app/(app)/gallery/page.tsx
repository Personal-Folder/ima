import MainGalleryGrid from "@/components/gallery/MainGalleryGrid";
import { createClient } from "@/lib/supabase/server";
import { getBaseUrl } from "@/lib/utils";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function Gallery() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });
  return (
    <div>
      <MainGalleryGrid items={data ?? []} />
    </div>
  );
}

export default Gallery;
