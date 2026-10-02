import React from "react";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  Coffee,
} from "lucide-react";

export default function Hero({ scrollTo, reservation }) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[#30231b]"
    >
      {/* ================= Background Image ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/luna-hero.jpg')",
        }}
      />

      {/* ================= Dark Overlay ================= */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#211811]/95 via-[#30231b]/75 to-[#30231b]/35" />

      {/* ================= Warm Glow ================= */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#c49568]/10 blur-3xl" />

      {/* ================= Content ================= */}
      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="w-full max-w-2xl text-right text-white">

          {/* Label */}
          <div className="mb-7 flex items-center justify-end gap-4 text-[10px] font-medium tracking-[0.25em] text-[#d8b084]">
            <span className="h-px w-12 bg-[#c49568]" />

            SPECIALTY COFFEE & FINE DINING

            <span className="h-px w-12 bg-[#c49568]" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-medium leading-[1.25] sm:text-6xl lg:text-7xl">
            لحظه‌های خوب
            <br />

            <em className="not-italic text-[#d8b084]">
              از یک فنجان شروع می‌شوند.
            </em>
          </h1>

          {/* Description */}
          <p className="mt-7 ml-auto mr-0 max-w-xl text-sm leading-8 text-[#eadfd4] sm:text-base">
            یک فضای گرم و آرام برای قهوه‌های تخصصی، غذاهای دست‌ساز و
            قرارهایی که دوست داری طولانی‌تر شوند.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-end gap-3">

            {/* Menu Button */}
            <button
              onClick={() => scrollTo("menu")}
              className="
                group flex h-13 items-center gap-3
                bg-[#c49568] px-7 py-4
                text-sm font-medium text-[#30231b]
                transition-all duration-300
                hover:bg-[#d8b084]
                hover:shadow-xl hover:shadow-black/20
              "
            >
              دیدن منو

              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            {/* Reservation Button */}
            <button
              onClick={reservation}
              className="
                h-13 border border-white/35
                px-7 py-4 text-sm font-medium text-white
                backdrop-blur-sm
                transition-all duration-300
                hover:border-[#d8b084]
                hover:bg-white/10
              "
            >
              رزرو میز
            </button>
          </div>

          {/* Info */}
          <div className="mt-12 flex flex-wrap items-center justify-end gap-x-8 gap-y-4 border-t border-white/15 pt-6">

            {/* Fresh Roast */}
            <div className="flex items-center gap-2 text-xs text-[#ded2c6]">
              <Coffee
                size={17}
                strokeWidth={1.5}
                className="text-[#c49568]"
              />
              <span>رُست تازه</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs text-[#ded2c6]">
              <MapPin
                size={17}
                strokeWidth={1.5}
                className="text-[#c49568]"
              />
              <span>ولیعصر، تهران</span>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-2 text-xs text-[#ded2c6]">
              <Clock3
                size={17}
                strokeWidth={1.5}
                className="text-[#c49568]"
              />
              <span>۸ صبح تا ۱۱ شب</span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-[#c49568]/40 to-transparent" />
    </section>
  );
}