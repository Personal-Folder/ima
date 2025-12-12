import ContactUsForm from "@/components/contact-us/ContactUsForm";
import NavBar from "@/components/layout/Navbar";

function ContactUs() {
  return (
    <div className="relative w-full">
      {/* Fixed NavBar */}
      <div className="fixed top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[90%] z-50">
        <NavBar red={true} />
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center mt-40">
        <div className="w-[80%] mb-14">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
