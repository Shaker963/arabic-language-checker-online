
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Phone, Mail } from "lucide-react";

const Food = () => {
  const restaurants = [
    {
      id: 1,
      name: "مطعم الياقوت الأزرق",
      type: "مأكولات عربية",
      description: "أشهى الأطباق العربية التقليدية",
      hours: "6:00 ص - 11:00 م",
      rating: "4.8"
    },
    {
      id: 2,
      name: "مطعم البحر الأزرق",
      type: "مأكولات بحرية",
      description: "أطباق السمك والمأكولات البحرية الطازجة",
      hours: "12:00 ظ - 11:00 م",
      rating: "4.9"
    },
    {
      id: 3,
      name: "كافيه الماس",
      type: "مشروبات وحلويات",
      description: "قهوة مميزة وحلويات شرقية وغربية",
      hours: "24 ساعة",
      rating: "4.7"
    }
  ];

  const dishes = [
    {
      id: 1,
      name: "كبسة لحم",
      description: "كبسة تقليدية مع اللحم الطري والبهارات الخاصة",
      price: "85 ريال",
      category: "أطباق رئيسية"
    },
    {
      id: 2,
      name: "سمك مشوي",
      description: "سمك طازج مشوي مع الخضار والأرز",
      price: "95 ريال",
      category: "مأكولات بحرية"
    },
    {
      id: 3,
      name: "مندي دجاج",
      description: "دجاج مندي بالطريقة التقليدية مع الأرز المعطر",
      price: "75 ريال",
      category: "أطباق رئيسية"
    },
    {
      id: 4,
      name: "حمص بالطحينة",
      description: "حمص كريمي مع الطحينة وزيت الزيتون",
      price: "25 ريال",
      category: "مقبلات"
    },
    {
      id: 5,
      name: "كنافة نابلسية",
      description: "كنافة طازجة مع الجبن والقطر",
      price: "35 ريال",
      category: "حلويات"
    },
    {
      id: 6,
      name: "عصير المانجو",
      description: "عصير مانجو طازج ومنعش",
      price: "20 ريال",
      category: "مشروبات"
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
              <Link to="/rooms" className="hover:text-blue-200 transition-colors">الغرف</Link>
              <Link to="/food" className="text-blue-200 font-semibold">المأكولات</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">تواصل معنا</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">مطاعمنا ومأكولاتنا</h2>
          <p className="text-xl">تذوق أشهى الأطباق في أجواء مميزة</p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">مطاعمنا</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
                <div className="h-40 bg-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">صورة {restaurant.name}</span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 ml-1" />
                      <span className="text-sm">{restaurant.rating}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{restaurant.type}</Badge>
                  <CardDescription>{restaurant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    عرض القائمة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">من قائمة طعامنا</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish) => (
              <Card key={dish.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{dish.name}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {dish.price}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs">{dish.category}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dish.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">عروض خاصة</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">بوفيه الإفطار</CardTitle>
                <CardDescription className="text-blue-100">
                  بوفيه إفطار مفتوح يومياً من 6:00 ص إلى 10:00 ص
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">120 ريال/شخص</p>
                <Button variant="secondary">احجز الآن</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">عشاء رومانسي</CardTitle>
                <CardDescription className="text-blue-100">
                  عشاء خاص للأزواج مع إطلالة على البحر
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">350 ريال/زوجين</p>
                <Button variant="secondary">احجز الآن</Button>
              </CardContent>
            </Card>
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

export default Food;
