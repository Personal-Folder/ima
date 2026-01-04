// lib/actions/news.ts
"use server";

import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

interface PublishNewsPayload {
  title: string;
  text: string;
  tag: string | null;
  insta_link: string | null;
  facebook_link: string | null;
  images: string[];
}

export async function publishNews(payload: PublishNewsPayload) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from("news").insert([
      {
        title: payload.title,
        text: payload.text,
        images: payload.images,
        tag: payload.tag,
        insta_link: payload.insta_link,
        facebook_link: payload.facebook_link,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    return {
      success: true,
      data,
      message: "News published successfully!",
    };
  } catch (error) {
    console.error("News publication error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}

export async function uploadNewsImage(file: File): Promise<string> {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}.${fileExt}`;
    const filePath = `news/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("news-images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("news-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error("Image upload error:", error);
    throw new Error(
      `Failed to upload image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function getCategories() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from("news-category").select("*");

    if (error) throw error;

    return {
      success: true,
      data: data || [],
    };
  } catch (error) {
    console.error("Fetch categories error:", error);
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}
