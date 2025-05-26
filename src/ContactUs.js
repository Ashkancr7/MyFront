import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import Navbar from './Navbar';
const ContactUs = () => {
  const contactMethods = [
    {
      icon: <FiMapPin className="text-2xl text-blue-600" />,
      title: "آدرس",
      content: "تهران، خیابان آزادی، کوچه شهید فلانی، پلاک ۱۲۳، طبقه دوم",
      link: "https://maps.google.com"
    },
    {
      icon: <FiPhone className="text-2xl text-blue-600" />,
      title: "تلفن",
      content: "۰۲۱-۱۲۳۴۵۶۷۸",
      link: "tel:02112345678"
    },
    {
      icon: <FiMail className="text-2xl text-blue-600" />,
      title: "ایمیل",
      content: "info@example.com",
      link: "mailto:info@example.com"
    },
    {
      icon: <FiClock className="text-2xl text-blue-600" />,
      title: "ساعات کاری",
      content: "شنبه تا چهارشنبه: ۸:۳۰ تا ۱۶:۳۰ | پنجشنبه‌ها: ۸:۳۰ تا ۱۲:۳۰"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* هیرو بخش */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با ما</h1>
          <p className="text-xl max-w-3xl mx-auto">ما اینجا هستیم تا به سوالات و پیشنهادات شما پاسخ دهیم</p>
        </div>
      </div>

      {/* بخش اصلی */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* اطلاعات تماس */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">راه‌های ارتباطی</h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{method.title}</h3>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {method.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{method.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* نقشه */}
            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">ما روی نقشه</h3>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.837855020857!2d51.3882773152681!3d35.68919798018986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjEiTiA1McKwMjMnMjMuNiJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy"
                  title="نقشه محل شرکت"
                ></iframe>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">پیام به ما</h2>
            <p className="text-gray-600 mb-8">فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">نام کامل <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="نام و نام خانوادگی"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">شماره تماس</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="09xxxxxxxxx"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">موضوع <span className="text-red-500">*</span></label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">انتخاب کنید</option>
                  <option value="support">پشتیبانی</option>
                  <option value="sales">فروش</option>
                  <option value="cooperation">همکاری</option>
                  <option value="complaint">شکایت</option>
                  <option value="suggestion">پیشنهاد</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">متن پیام <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="متن پیام خود را بنویسید..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <label htmlFor="terms" className="mr-2 block text-sm text-gray-700">
                  با <a href="#" className="text-blue-600 hover:text-blue-500">قوانین حریم خصوصی</a> موافقم <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
              >
                ارسال پیام
                <FiSend className="mr-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* سوالات متداول */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">سوالات متداول</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "چگونه می‌توانم از وضعیت سفارش خود مطلع شوم؟",
                answer: "پس از ثبت سفارش، یک کد رهگیری برای شما ارسال می‌شود که می‌توانید با وارد کردن آن در بخش پیگیری سفارش در سایت، از وضعیت سفارش خود مطلع شوید."
              },
              {
                question: "زمان ارسال سفارشات چقدر است؟",
                answer: "سفارشات تهران حداکثر طی 24 ساعت و سفارشات سایر شهرها طی 2-3 روز کاری ارسال می‌شوند."
              },
              {
                question: "روش‌های پرداخت چه هستند؟",
                answer: "شما می‌توانید از طریق درگاه پرداخت آنلاین، پرداخت در محل یا واریز به حساب بانکی اقدام به پرداخت کنید."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default ContactUs;