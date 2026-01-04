import ContactUsForm from "@/components/contact-us/ContactUsForm";

function ContactUs() {
  return (
    <div className="relative w-full">
      <div className="w-full flex justify-center mt-40">
        <div className="w-[80%] mb-14">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
