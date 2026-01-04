import Charts from "@/components/discover/Charts";
import DiscoverGrid from "@/components/discover/DiscoverGrid";

async function Insights() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/insights`
  );
  const { insights, charts } = await response.json();

  return (
    <div>
      <DiscoverGrid insights={insights} />
      <Charts />
    </div>
  );
}

export default Insights;
