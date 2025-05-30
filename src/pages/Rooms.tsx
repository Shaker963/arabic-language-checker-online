
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Car, Coffee, Phone, Mail } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "جناح ملكي",
      description: "جناح فاخر مع إطلالة على البحر",
      price: "500 ريال/الليلة",
      capacity: "2-4 أشخاص",
      features: ["واي فاي مجاني", "إفطار مجاني", "خدمة الغرف", "شرفة خاصة"]
    },
    {
      id: 2,
      name: "غرفة ديلوكس",
      description: "غرفة واسعة ومريحة مع جميع وسائل الراحة",
      price: "300 ريال/الليلة",
      capacity: "2 أشخاص",
      features: ["واي فاي مجاني", "تكييف", "تلفزيون ذكي", "ميني بار"]
    },
    {
      id: 3,
      name: "غرفة عائلية",
      description: "غرفة مثالية للعائلات مع سريرين منفصلين",
      price: "400 ريال/الليلة",
      capacity: "4-6 أشخاص",
      features: ["واي فاي مجاني", "غرفة معيشة", "مطبخ صغير", "منطقة لعب للأطفال"]
    },
    {
      id: 4,
      name: "غرفة اقتصادية",
      description: "غرفة بسيطة ومريحة بسعر مناسب",
      price: "200 ريال/الليلة",
      capacity: "1-2 أشخاص",
      features: ["واي فاي مجاني", "تكييف", "حمام خاص", "خدمة التنظيف"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-blue-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Diamond Tourist Resort</h1>
            <nav className="hidden md:flex space-x-reverse space-x-6">
              <Link to="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
              <Link to="/rooms" className="text-blue-200 font-semibold">الغرف</Link>
              <Link to="/food" className="hover:text-blue-200 transition-colors">المأكولات</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">تواصل معنا</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">غرفنا وأجنحتنا</h2>
          <p className="text-xl">اختر من مجموعة متنوعة من الغرف المصممة لراحتك</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">صورة {room.name}</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{room.name}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {room.price}
                    </Badge>
                  </div>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="h-4 w-4 ml-2" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">المميزات:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    احجز الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">مرافق إضافية</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Wifi className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold">واي فاي مجاني</h4>
              <p className="text-gray-600 text-sm">إنترنت عالي السرعة</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold">موقف سيارات</h4>
              <p className="text-gray-600 text-sm">موقف مجاني ومؤمن</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold">خدمة الغرف</h4>
              <p className="text-gray-600 text-sm">24 ساعة يومياً</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold">مركز لياقة</h4>
              <p className="text-gray-600 text-sm">مجهز بأحدث الأجهزة</p>
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

export default Rooms;
