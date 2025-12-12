"use client";
const ContactUsForm = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg p-6 sm:p-12 space-y-8 sm:space-y-0 sm:space-x-8">
      {/* Left Section - Full Height Form */}
      <div className="w-full sm:w-1/2 flex flex-col justify-between">
        {/* Big Red Title - Centered */}
        <div className="text-secondary text-center border-b-2 border-secondary font-bold text-2xl mb-8">
          اتصل بنا{" "}
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              الاسم
            </label>
            <input
              type="text"
              placeholder={"أدخل اسمك"}
              className="w-full mt-1 p-2 border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder={"أدخل بريدك الإلكتروني"}
              className="w-full mt-1 p-2 border border-gray-300 "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              الرسالة
            </label>
            <textarea
              placeholder={"أدخل رسالتك"}
              className="w-full h-[250px] mt-1 p-2 border border-gray-300 "
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 h-14 font-bold mt-4"
          >
            إرسال
          </button>
        </form>
      </div>

      {/* Right Section - Social Media Logos and Image */}
      <div className="w-full sm:w-1/2 flex flex-col justify-between">
        {/* Social Media Logos and Image */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              <img src="phone.svg" alt="Phone" className="w-6 h-6" />
              <span>+961 71 344 345</span>
            </div>

            <div className="flex items-center gap-4">
              <img src="whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              <span>+961 71 344 345</span>
            </div>

            <div className="flex items-center gap-4">
              <img src="instagram.svg" alt="Instagram" className="w-6 h-6" />
              <span>@ima.lb 101</span>
            </div>

            <div className="flex items-center gap-4">
              <img src="facebook.svg" alt="Facebook" className="w-6 h-6" />
              <span>@ima.lb 101</span>
            </div>
          </div>

          {/* Big Image */}
          <div className="flex justify-center p-4 mt-4 sm:mt-0">
            <img
              src="picContact.svg"
              alt="Big Image"
              className="h-[200px] w-[200px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Location Pin */}
        <div className="bg-gray-300 rounded-lg flex items-center justify-center mt-6">
          <a href="https://maps.google.com" className="w-full">
            <img
              src="location.png"
              alt="Location"
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
