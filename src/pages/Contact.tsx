
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-blue-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Diamond Tourist Resort</h1>
            <nav className="hidden md:flex space-x-reverse space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
              <Link to="/rooms" className="hover:text-blue-200 transition-colors">الغرف</Link>
              <Link to="/food" className="hover:text-blue-200 transition-colors">المأكولات</Link>
              <Link to="/contact" className="text-blue-200 font-semibold">تواصل معنا</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-xl">نحن هنا للإجابة على جميع استفساراتكم</p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-800">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <Card className="border-r-4 border-r-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Phone className="h-8 w-8 text-blue-500 ml-4" />
                      <div>
                        <h4 className="font-semibold text-lg">الهاتف</h4>
                        <p className="text-gray-600">+966 123 456 789</p>
                        <p className="text-gray-600">+966 987 654 321</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-r-4 border-r-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Mail className="h-8 w-8 text-blue-500 ml-4" />
                      <div>
                        <h4 className="font-semibold text-lg">البريد الإلكتروني</h4>
                        <p className="text-gray-600">info@diamondresort.com</p>
                        <p className="text-gray-600">booking@diamondresort.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-r-4 border-r-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <MapPin className="h-8 w-8 text-blue-500 ml-4" />
                      <div>
                        <h4 className="font-semibold text-lg">العنوان</h4>
                        <p className="text-gray-600">شارع الكورنيش، جدة</p>
                        <p className="text-gray-600">المملكة العربية السعودية</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-r-4 border-r-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Clock className="h-8 w-8 text-blue-500 ml-4" />
                      <div>
                        <h4 className="font-semibold text-lg">ساعات العمل</h4>
                        <p className="text-gray-600">استقبال: 24 ساعة</p>
                        <p className="text-gray-600">خدمة العملاء: 8:00 ص - 10:00 م</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">تابعونا على</h4>
                <div className="flex space-x-reverse space-x-4">
                  <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
                  <CardDescription>
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+966 xxxxxxxxx"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        الرسالة *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">موقعنا</h3>
          <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-lg">خريطة الموقع</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Diamond Tourist Resort</h4>
              <p className="text-gray-300">منتجع سياحي فاخر يوفر أفضل الخدمات والإقامة المريحة</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white">الرئيسية</Link></li>
                <li><Link to="/rooms" className="hover:text-white">الغرف</Link></li>
                <li><Link to="/food" className="hover:text-white">المأكولات</Link></li>
                <li><Link to="/contact" className="hover:text-white">تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 ml-2" />
                  <span>+966 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 ml-2" />
                  <span>info@diamondresort.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">© 2024 Diamond Tourist Resort. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
