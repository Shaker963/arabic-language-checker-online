
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
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
              <Link to="/contact" className="hover:text-blue-200 transition-colors">تواصل معنا</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">مرحباً بكم في منتجع Diamond Tourist</h2>
          <p className="text-xl mb-8">تجربة إقامة لا تُنسى في قلب الطبيعة الخلابة</p>
          <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100">
            احجز الآن
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">لماذا تختار منتجعنا؟</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle>خدمة 5 نجوم</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  نقدم أفضل الخدمات لضمان راحتكم وإقامة مميزة
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MapPin className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle>موقع استراتيجي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  في قلب المناظر الطبيعية الخلابة وقريب من جميع المعالم السياحية
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Phone className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle>خدمة 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  فريق خدمة العملاء متاح على مدار الساعة لخدمتكم
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">عن منتجع Diamond Tourist</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                منتجع Diamond Tourist Resort هو وجهتك المثالية للإقامة والاستجمام. نوفر لك تجربة سياحية فريدة
                تجمع بين الفخامة والراحة في أجواء طبيعية خلابة. منتجعنا مجهز بأحدث الوسائل والمرافق لضمان 
                إقامة مريحة وممتعة.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Link to="/rooms">اكتشف غرفنا</Link>
              </Button>
            </div>
            <div className="h-64 bg-blue-200 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-lg">صورة المنتجع</span>
            </div>
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

export default Index;
