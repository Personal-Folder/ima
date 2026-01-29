import SecondarySection from "@/components/about-us/SecondarySection";
import Section from "@/components/about-us/Section";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";



async function AboutUs() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase
    .from("sections")
    .select("*")
    .or("key.ilike.%about%,key.ilike.%all%");

  return (
    <div>
      {data?.map((section: any) =>
          section["reverse"] ? (
            <SecondarySection
              key={section.id}
              image={section.image}
              title={section.title}
              text={section.text}
              logo={section.logo}
              button_text={section.button_text}
              button_logo={section.button_logo}
              button_path={section.button_path}
            />
          ) : (
            <Section
              key={section.id}
              image={section.image}
              title={section.title}
              text={section.text}
              logo={section.logo}
              button_text={section.button_text}
              button_logo={section.button_logo}
              button_path={section.button_path}
            />
          )
        )}
    </div>
  );
}

export default AboutUs;
