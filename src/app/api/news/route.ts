import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const formData = await request.formData();

    // 1. Extract text data
    const title = formData.get("title") as string;
    const text = formData.get("text") as string;
    const tag = formData.get("tag") as string;
    const insta_link = formData.get("insta_link") as string;
    const facebook_link = formData.get("facebook_link") as string;

    // 2. Extract files
    const files = formData.getAll("images") as File[];
    const imageUrls: string[] = [];

    // 3. Handle Storage Uploads
    for (const file of files) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}.${fileExt}`;
      const filePath = `news/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("news-images")
        .getPublicUrl(filePath);

      imageUrls.push(urlData.publicUrl);
    }

    // 4. Insert into Database
    const { data, error: dbError } = await supabase
      .from("news")
      .insert([
        {
          title,
          text,
          images: imageUrls,
          tag: tag || null,
          insta_link: insta_link || null,
          facebook_link: facebook_link || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (dbError) throw dbError;

    return Response.json({
      success: true,
      data,
      message: "News published successfully!",
    });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Keep your GET as it was
export async function GET() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("news").select("*");
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}
