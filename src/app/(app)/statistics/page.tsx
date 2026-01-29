import Charts from "@/components/discover/Charts";
import DiscoverGrid from "@/components/discover/DiscoverGrid";
import { getBaseUrl } from "@/lib/utils";

async function Insights() {
  const response = await fetch(
    `${getBaseUrl()}/api/insights`
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
