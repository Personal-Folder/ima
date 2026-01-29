import Charts from "@/components/discover/Charts";
import DiscoverGrid from "@/components/discover/DiscoverGrid";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

async function Insights() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: insights } = await supabase
    .from("insights")
    .select("*")
    .in("key", ["amb_mission", "lending_supplies", "training_and_development"]);

  return (
    <div>
      <DiscoverGrid insights={insights!} />
      <Charts />
    </div>
  );
}

export default Insights;
