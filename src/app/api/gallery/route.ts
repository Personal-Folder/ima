import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// GET: Fetch all gallery albums
export async function GET() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// POST: Upload images and create gallery entry
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const formData = await request.formData();

    // 1. Extract data from Form
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const files = formData.getAll("images") as File[];

    const imageUrls: string[] = [];

    // 2. Handle Storage Uploads (Loop through files)
    for (const file of files) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}.${fileExt}`;

      // We'll store them in a 'gallery' folder inside your bucket
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery") // Ensure this bucket exists in Supabase
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("gallery")
        .getPublicUrl(filePath);

      imageUrls.push(urlData.publicUrl);
    }

    // 3. Insert into Gallery Table
    const { data, error: dbError } = await supabase
      .from("gallery")
      .insert([
        {
          title,
          description: description || null,
          images: imageUrls, // Store the array of public URLs
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (dbError) throw dbError;

    return Response.json({
      success: true,
      data,
      message: "Gallery item created successfully!",
    });
  } catch (error: any) {
    console.error("Gallery Upload Error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
