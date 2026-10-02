import React from "react";
import {
  MapPin,
  Phone,
  Instagram,
  ArrowLeft,
  Clock3,
  Coffee,
} from "lucide-react";

export default function Contact({ reservation }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#30231b] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#c49568]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d8b084]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-right">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-end gap-3">
              <span className="h-px w-10 bg-[#c49568]" />

              <span className="text-[10px] font-medium tracking-[0.3em] text-[#d8b084]">
                COME SAY HELLO
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-5xl font-medium leading-[1.4] sm:text-6xl lg:text-7xl">
              یک میز برای
              <br />

              <em className="not-italic text-[#d8b084]">
                تو آماده‌ست.
              </em>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg mr-auto text-sm leading-8 text-[#d2c5b9] sm:text-base">
              برای رزرو یا هماهنگی، با ما در تماس باش.
              منتظریم تا یک فنجان قهوه خوب و یک میز گرم
              رو با هم به یک خاطره تبدیل کنیم.
            </p>

            {/* Reservation */}
            <button
              onClick={reservation}
              className="
                group mt-8
                inline-flex items-center gap-3
                bg-[#c49568]
                px-7 py-4
                text-sm font-medium
                text-[#30231b]
                transition-all duration-300
                hover:bg-[#d8b084]
                hover:shadow-xl hover:shadow-black/20
              "
            >
              رزرو میز

              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            {/* Small decorative line */}
            <div className="mt-12 flex items-center justify-end gap-3">
              <span className="text-[9px] tracking-[0.2em] text-[#8e7d6d]">
                LUNA CAFE & RESTAURANT
              </span>

              <Coffee
                size={16}
                strokeWidth={1.4}
                className="text-[#c49568]"
              />
            </div>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="border-t border-white/10 lg:border-t-0 lg:border-r lg:pr-14">

            <div className="space-y-0">

              {/* Address */}
              <div className="group flex items-center gap-5 border-b border-white/10 py-7">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#c49568]/30
                    bg-white/[0.04]
                    text-[#c49568]
                    transition-all duration-300
                    group-hover:bg-[#c49568]
                    group-hover:text-[#30231b]
                  "
                >
                  <MapPin size={19} strokeWidth={1.5} />
                </div>

                <div className="text-right">
                  <span className="block text-[10px] tracking-wide text-[#8e7d6d]">
                    آدرس
                  </span>

                  <strong className="mt-2 block text-sm font-medium text-[#eee5dc]">
                    تهران، خیابان ولیعصر
                  </strong>
                </div>

              </div>

              {/* Phone */}
              <div className="group flex items-center gap-5 border-b border-white/10 py-7">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#c49568]/30
                    bg-white/[0.04]
                    text-[#c49568]
                    transition-all duration-300
                    group-hover:bg-[#c49568]
                    group-hover:text-[#30231b]
                  "
                >
                  <Phone size={19} strokeWidth={1.5} />
                </div>

                <div className="text-right">
                  <span className="block text-[10px] tracking-wide text-[#8e7d6d]">
                    تلفن
                  </span>

                  <strong
                    dir="ltr"
                    className="mt-2 block text-sm font-medium text-[#eee5dc]"
                  >
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </strong>
                </div>

              </div>

              {/* Instagram */}
              <div className="group flex items-center gap-5 border-b border-white/10 py-7">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#c49568]/30
                    bg-white/[0.04]
                    text-[#c49568]
                    transition-all duration-300
                    group-hover:bg-[#c49568]
                    group-hover:text-[#30231b]
                  "
                >
                  <Instagram size={19} strokeWidth={1.5} />
                </div>

                <div className="text-right">
                  <span className="block text-[10px] tracking-wide text-[#8e7d6d]">
                    اینستاگرام
                  </span>

                  <strong
                    dir="ltr"
                    className="mt-2 block text-sm font-medium text-[#eee5dc]"
                  >
                    @luna.cafe
                  </strong>
                </div>

              </div>

              {/* Opening Hours */}
              <div className="group flex items-center gap-5 py-7">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#c49568]/30
                    bg-white/[0.04]
                    text-[#c49568]
                    transition-all duration-300
                    group-hover:bg-[#c49568]
                    group-hover:text-[#30231b]
                  "
                >
                  <Clock3 size={19} strokeWidth={1.5} />
                </div>

                <div className="text-right">
                  <span className="block text-[10px] tracking-wide text-[#8e7d6d]">
                    ساعت کاری
                  </span>

                  <strong className="mt-2 block text-sm font-medium text-[#eee5dc]">
                    هر روز، ۸ صبح تا ۱۱ شب
                  </strong>
                </div>

              </div>

            </div>

            {/* Bottom Card */}
            <div className="mt-5 border border-[#c49568]/20 bg-[#3a2a20] p-5">

              <div className="flex items-center justify-end gap-3 text-right">

                <div>
                  <p className="text-xs font-medium text-[#e9ddd2]">
                    منتظر دیدنت هستیم
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#9f8f81]">
                    یک قهوه خوب همیشه بهانه خوبی برای دورهمی است.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c49568] text-[#30231b]">
                  <Coffee size={17} strokeWidth={1.5} />
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}