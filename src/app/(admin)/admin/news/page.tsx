import NewsForm from "@/components/news/NewsForm";

export default async function AdminNews() {
  // Fetch categories server-side
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-categories`);
  const categories = await response.json();


  return (
    <main className="min-h-screen bg-gray-100">
      <NewsForm categories={categories!} />
    </main>
  );
}
