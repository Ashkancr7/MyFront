import React from 'react';
import { FiUsers, FiAward, FiShoppingBag, FiHeart } from 'react-icons/fi';

import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

import shopImage from '../src/assets/shop-interior.jpg';
const About = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '200+', label: 'مشتریان راضی', icon: <FiUsers className="text-3xl" /> },
    { value: '5 سال', label: 'تجربه موفق', icon: <FiAward className="text-3xl" /> },
    { value: '5000+', label: 'محصولات فروخته شده', icon: <FiShoppingBag className="text-3xl" /> },
    { value: '98%', label: 'رضایت مشتری', icon: <FiHeart className="text-3xl" /> }
  ];

  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* هیرو بخش */}
      <div className="relative bg-blue-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">درباره ما</h1>
          {/* <p className="text-xl max-w-3xl mx-auto">داستان ما، ارزش‌ها و تیم پشت فروشگاه اینترنتی شما</p> */}
        </div>
      </div>

      {/* داستان شرکت */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">داستان ما</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            فروشگاه اینترنتی ما در سال 1398 با هدف ارائه بهترین تجربه خرید آنلاین تأسیس شد. ما باور داریم که خرید آنلاین باید ساده، امن و لذت‌بخش باشد. از روز اول، تمرکز ما بر روی کیفیت محصولات، خدمات مشتریان عالی و نوآوری در تجارت الکترونیک بوده است.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <img 
              src={shopImage}
              alt="تیم ما" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ماموریت ما</h3>
            <p className="text-gray-600 mb-4">
              ماموریت ما ارائه گسترده‌ترین انتخاب محصولات با کیفیت بالا همراه با خدمات مشتری بی‌نظیر است. ما می‌خواهیم خرید آنلاین را برای همه ایرانیان در هر کجای کشور آسان و در دسترس کنیم.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">چشم‌انداز</h3>
            <p className="text-gray-600">
              تا سال 1405، هدف ما تبدیل شدن به برترین پلتفرم تجارت الکترونیک در ایران است که در آن مشتریان می‌توانند هر چیزی را که نیاز دارند، با اطمینان و راحتی خریداری کنند.
            </p>
          </div>
        </div>
      </section>

      {/* آمار و ارقام */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">ما در یک نگاه</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-blue-600 flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* تیم ما */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تیم ما</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            تیم ما متشکل از متخصصان با تجربه و پرانرژی است که هر روز برای بهبود تجربه خرید شما تلاش می‌کنند.
          </p>
        </div>
{/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <TeamMember 
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div> */}
      </section>

      {/* ارزش‌های ما */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ارزش‌های ما</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">رضایت مشتری</h3>
              <p className="text-gray-600">
                مشتریان در مرکز تمام تصمیم‌گیری‌های ما قرار دارند. ما به دنبال ایجاد روابط بلندمدت و مبتنی بر اعتماد با مشتریان خود هستیم.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">کیفیت بالا</h3>
              <p className="text-gray-600">
                از محصولاتی که ارائه می‌دهیم تا خدمات پشتیبانی، کیفیت بالاترین اولویت ماست. ما فقط محصولاتی را عرضه می‌کنیم که خودمان با اطمینان استفاده کنیم.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">نوآوری</h3>
              <p className="text-gray-600">
                ما دائماً در حال بهبود و نوآوری در تجربه خرید آنلاین هستیم. از فناوری‌های جدید استقبال می‌کنیم و همیشه به دنبال راه‌های بهتر برای خدمت به شما هستیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">آماده شروع خرید هستید؟</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">به جامعه هزاران مشتری راضی ما بپیوندید</p>
          <button onClick={()=> navigate('/')} className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
            مشاهده محصولات
          </button>
        </div>
      </section>

  
    </div>
  );
};

export default About;