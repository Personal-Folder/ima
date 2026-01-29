import AlertMessages from "@/components/home/AlertMessages";
import DiscoverGrid from "@/components/discover/DiscoverGrid";
import Section from "@/components/about-us/Section";
import NewsGrid from "@/components/news/NewsGrid";
import SecondarySection from "@/components/about-us/SecondarySection";
import HomeGalleryGrid from "@/components/gallery/HomeGalleryGrid";
import { getBaseUrl } from "@/lib/utils";

export default async function Home() {
  const response = await fetch(`${getBaseUrl()}/api/home`);
  const { news, sections, featuredNews, insights, gallery } =
    await response.json();

  return (
    <div>
      {(featuredNews ?? []).length > 5 && (
        <AlertMessages messages={featuredNews!} />
      )}

      <DiscoverGrid insights={insights!} showButton />

      {sections
        ?.filter((section: any) => section["key"].split("-")[0] === "all")
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

      <div className="bg-linear-to-br from-slate-50 to-slate-100">
        <NewsGrid newsData={news!} />
      </div>

      {sections
        ?.filter((section: any) => section["key"].split("-")[0] === "home")
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

      {gallery.length > 0 && (
        <HomeGalleryGrid data={gallery} remainingImages={gallery.length - 3} />
      )}
    </div>
  );
}
