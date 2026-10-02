import React from "react";
import { Coffee, Instagram, ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#211811] text-white">
      
      {/* Decorative line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c49568]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="flex flex-col gap-10 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo */}
          <button
            onClick={scrollTop}
            className="group flex items-center gap-4 text-right"
          >
            <span
              className="
                flex h-14 w-14 items-center justify-center
                rounded-full
                border border-[#c49568]/40
                bg-[#30231b]
                text-[#c49568]
                transition-all duration-300
                group-hover:rotate-[-8deg]
                group-hover:border-[#c49568]
                group-hover:bg-[#c49568]
                group-hover:text-[#211811]
              "
            >
              <Coffee size={23} strokeWidth={1.5} />
            </span>

            <span className="flex flex-col">
              <strong className="font-serif text-3xl font-medium tracking-[0.18em]">
                LUNA
              </strong>

              <small className="mt-1 text-[8px] tracking-[0.3em] text-[#927e6c]">
                CAFE & RESTAURANT
              </small>
            </span>
          </button>

          {/* Center info */}
          <div className="flex flex-col gap-3 text-right lg:items-center lg:text-center">

            <div className="flex items-center gap-2 text-[#c49568]">
              <MapPin size={15} strokeWidth={1.5} />

              <span className="text-xs">
                تهران، خیابان ولیعصر
              </span>
            </div>

            <p className="text-[10px] text-[#817064]">
              قهوه خوب، غذای خوب، لحظه‌های خوب.
            </p>

          </div>

          {/* Instagram + Back top */}
          <div className="flex items-center gap-3">

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.03]
                text-[#c49568]
                transition-all duration-300
                hover:border-[#c49568]
                hover:bg-[#c49568]
                hover:text-[#211811]
              "
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>

            <button
              onClick={scrollTop}
              aria-label="بازگشت به بالا"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.03]
                text-[#d7c9bc]
                transition-all duration-300
                hover:border-[#c49568]
                hover:bg-[#c49568]
                hover:text-[#211811]
              "
            >
              <ArrowUp size={17} />
            </button>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[9px] text-[#76675b] sm:flex-row sm:items-center sm:justify-between">

          <p dir="ltr">
            © 2026 LUNA. All rights reserved.
          </p>

          <p>
            ساخته شده با عشق برای عاشقان قهوه ☕
          </p>

        </div>

      </div>
    </footer>
  );
}