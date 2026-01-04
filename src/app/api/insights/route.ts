import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  // Ensure your createClient utility is expecting the cookieStore correctly
  const supabase = createClient(cookieStore);

  // Fetch insights
  const { data: insights, error: insightsError } = await supabase
    .from("insights")
    .select("*")
    .in("key", ["amb_mission", "lending_supplies", "training_and_development"]);

  // Fetch charts (Fixed the .not syntax)
  const { data: charts, error: chartsError } = await supabase
    .from("insights")
    .select("*")
    .not(
      "key",
      "in",
      '("amb_mission","lending_supplies","training_and_development")'
    );

  // Handle potential errors for both queries
  if (insightsError || chartsError) {
    return Response.json(
      { error: insightsError?.message || chartsError?.message },
      { status: 500 }
    );
  }

  return Response.json({ insights, charts });
}
