import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1a202c] text-white pt-[40px] pb-[20px] mt-[90px]">
      <div className="container max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Kontakt Ma'lumotlari */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#FFD700]">
              Aloqa Ma'lumotlari
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Telefon: +998 99 123 45 67
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Email: support@niners.uz
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Manzil: Toshkent sh., Amir Temur ko'chasi 55
            </p>
          </div>

          {/* Xizmatlar */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#FFD700]">Xizmatlar</h3>
            <ul className="mt-2 text-sm text-gray-400">
              <li>O'qituvchilar uchun imkoniyatlar</li>
              <li>Talabalar uchun onlayn darslar</li>
              <li>Platforma uchun texnik qo'llab-quvvatlash</li>
              <li>Shaxsiy treninglar va kurslar</li>
            </ul>
          </div>

          {/* Foydalanuvchi Sharhlari */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#FFD700]">
              Foydalanuvchi Sharhlari
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              "Niners platformasi juda foydali! O'qituvchilar bilan ishlash juda
              oson." - Foydalanuvchi 1
            </p>
            <p className="mt-1 text-sm text-gray-400">
              "Ajoyib tizim! Tez va oson darslar." - Foydalanuvchi 2
            </p>
          </div>
        </div>

        <div className="text-center mt-[20px] text-sm text-gray-400">
          <p>&copy; 2025 Niners. Barcha huquqlar himoyalangan.</p>
          <p className="mt-2">
            <a href="/terms" className="hover:text-[#FFD700]">
              Shartlar
            </a>{" "}
            |
            <a href="/privacy" className="hover:text-[#FFD700]">
              Maxfiylik Siyosati
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
