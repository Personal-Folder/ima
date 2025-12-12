import SecondarySection from "@/components/about-us/SecondarySection";
import Section from "@/components/about-us/Section";
import WhoWeAre from "@/components/about-us/WhoWeAre";
import Header from "@/components/home/Header";

function AboutUs() {
  return (
    <div>
      <Header
        img="/backimage.svg"
        title="Islamic Medical Association"
        description="Tel: 07 735 734"
        logo="/logo.svg"
      />
      <WhoWeAre
        img="/amb.svg"
        title="Who We Are"
        text="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        button={false}
      />
      <Section
        enableButton={false}
        leftImg="mission.svg"
        leftLogo="play_button.svg"
        rightTitle="Our Mission"
        rightText="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        rightButtonText="Get to Know Us"
        rightLogoUrl="knowUs.svg"
      />
      <SecondarySection
        leftImg="aboutUs2.png"
        leftLogo="lightbulb.svg"
        enableButton={false}
        rightTitle="Our Vision"
        rightText="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        rightButtonText="Support Our Mission"
        rightLogoUrl="knowUs.svg"
      />
      <Section
        enableButton={false}
        leftImg="values.png"
        leftLogo="eye.svg"
        rightTitle="Our Values"
        rightText="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        rightButtonText="Get to Know Us"
        rightLogoUrl="knowUs.svg"
      />
      <SecondarySection
        leftImg="home_last.png"
        leftLogo="heart.svg"
        enableButton={true}
        rightTitle="Support a Lifesaving Mission"
        rightText="Flyesim is a cutting-edge technology company dedicated to enhancing your travel experience through our state-of-the-art eSIM application. Our team consists of tech enthusiasts, travel aficionados, and customer service experts, all committed to providing you with the best connectivity solutions no matter where your adventures take you."
        rightButtonText="Support Our Mission"
        rightLogoUrl="knowUs.svg"
      />
    </div>
  );
}

export default AboutUs;
