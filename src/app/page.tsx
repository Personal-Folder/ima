import Header from "@/components/home/Header";

import AlertMessages from "@/components/home/AlertMessages";
import DiscoverGrid from "@/components/discover/DiscoverGrid";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import Section from "@/components/about-us/Section";
import NewsGrid from "@/components/news/NewsGrid";
import HomeGalleryGrid from "@/components/gallery/HomeGalleryGrid";
import SecondarySection from "@/components/about-us/SecondarySection";

export default function Home() {
  const messages = [
    "إصابة واحدة نتيجة انزلاق درّاجة على طريق المية وميّة",
    "إستهداف مبنى في جون",
    "إصابة واحدة نتيجة انزلاق درّاجة على طريق المية وميّة",
    "استهداف سيارة على الأوّلي",
    "إصابة واحدة نتيجة انزلاق درّاجة على طريق المية وميّة",
    "استهداف سيارة على الأوّلي",
  ];

  const images = ["image1.png", "image2.png", "image3.png"];

  const newsData = [
    {
      image: "/news1.jpg",
      title: "أخبار عاجلة",
      description: "التطورات الأخيرة في مجالك",
    },
    {
      image: "/news2.jpg",
      title: "التحديثات القادمة",
      description: "مواكبة لأحدث التغيرات",
    },
    { image: "/news3.jpg", title: "حدث مهم", description: "فعاليات وورش عمل" },
    {
      image: "/news4.jpg",
      title: "تقرير جديد",
      description: "قراءة تحليلية مفصلة",
    },
    {
      image: "/news5.jpg",
      title: "بيانات جديدة",
      description: "كيفية فهم البيانات",
    },
    {
      image: "/news6.jpg",
      title: "مراجعة الأداء",
      description: "مؤشرات النجاح والخطة القادمة",
    },
  ];
  return (
    <div>
      <Header
        img="/backimage.svg"
        title="Islamic Medical Association"
        description="Tel: 07 735 734"
        logo="/logo.svg"
      />
      <AlertMessages messages={messages} />
      <DiscoverGrid itemsToShow={3} />
      <WhoWeAre
        img="/amb.svg"
        title="Who We Are"
        text="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        button={true}
      />
      <Section
        enableButton={true}
        leftImg="/mission.svg"
        leftLogo="/play_button.svg"
        rightTitle="Our Mission"
        rightText="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        rightButtonText="Get to Know Us"
        rightLogoUrl="knowUs.svg"
      />
      <div className="bg-linear-to-br from-slate-50 to-slate-100 ">
        <NewsGrid newsData={newsData} />
      </div>
      <SecondarySection
        leftImg="home_last.png"
        leftLogo="heart.svg"
        enableButton={true}
        rightTitle="Support a Lifesaving Mission"
        rightText="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        rightButtonText="Support Our Mission"
        rightLogoUrl="knowUs.svg"
      />
      <HomeGalleryGrid images={images} remainingImages={200} />
    </div>
  );
}
