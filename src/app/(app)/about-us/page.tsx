import SecondarySection from "@/components/about-us/SecondarySection";
import Section from "@/components/about-us/Section";
import { getBaseUrl } from "@/lib/utils";

async function AboutUs() {
  const response = await fetch(
    `${getBaseUrl()}/api/about-us`
  );
  const data = await response.json();
  return (
    <div>
      {data
        .map((section: any) =>
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
