import React from "react";
import {
  Coffee,
  Heart,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#30231b] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c49568]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d8b084]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= CONTENT ================= */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* ================= IMAGE ================= */}
          <div className="relative">

            {/* Image frame */}
            <div className="relative overflow-hidden border border-[#c49568]/30 p-2">

              <div className="relative aspect-[4/5] overflow-hidden">

                <img
                  src="/images/about/about-cafe.jpg"
                  alt="فضای لونا"
                  className="
                    h-full w-full
                    object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211811]/60 via-transparent to-transparent" />

              </div>
            </div>

            {/* Year Card */}
            <div
              className="
                absolute -bottom-6 -right-4
                flex items-center gap-4
                bg-[#f7f0e7]
                px-6 py-5
                text-[#30231b]
                shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                sm:-right-7
              "
            >

              <strong className="font-serif text-5xl font-medium text-[#a66d42]">
                08
              </strong>

              <span className="text-right text-[10px] leading-5 text-[#76675b]">
                سال
                <br />
                ساختن خاطره
              </span>

            </div>

            {/* Decorative Coffee Icon */}
            <div
              className="
                absolute -left-5 -top-5
                flex h-16 w-16
                items-center justify-center
                rounded-full
                border border-[#c49568]/40
                bg-[#3a2a20]
                text-[#d8b084]
                shadow-xl
              "
            >
              <Coffee size={25} strokeWidth={1.3} />
            </div>

          </div>

          {/* ================= TEXT ================= */}
          <div className="text-right">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-end gap-3">

              <span className="h-px w-10 bg-[#c49568]" />

              <span className="text-[10px] font-medium tracking-[0.3em] text-[#d8b084]">
                OUR STORY
              </span>

            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-medium leading-[1.45] sm:text-5xl lg:text-6xl">

              کافه‌ای برای
              <br />

              <em className="not-italic text-[#d8b084]">
                آرام‌تر زندگی کردن.
              </em>

            </h2>

            {/* Description */}
            <div className="mt-8 space-y-5 text-sm leading-8 text-[#d8cec4] sm:text-base">

              <p>
                لونا از عشق به قهوه و غذا شروع شد؛ جایی که کیفیت،
                آرامش و جزئیات کوچک کنار هم قرار می‌گیرند.
              </p>

              <p>
                می‌خواهیم هر بار که می‌آیی، حس کنی وارد گوشه‌ای
                از خانه خودت شده‌ای.
              </p>

            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="border border-white/10 bg-white/[0.04] p-5">

                <Coffee
                  size={21}
                  strokeWidth={1.4}
                  className="mb-4 text-[#c49568]"
                />

                <h3 className="text-xs font-medium">
                  قهوه تخصصی
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-[#a99b8e]">
                  دانه‌های تازه و رُست دقیق
                </p>

              </div>

              <div className="border border-white/10 bg-white/[0.04] p-5">

                <Sparkles
                  size={21}
                  strokeWidth={1.4}
                  className="mb-4 text-[#c49568]"
                />

                <h3 className="text-xs font-medium">
                  کیفیت
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-[#a99b8e]">
                  توجه به جزئیات کوچک
                </p>

              </div>

              <div className="border border-white/10 bg-white/[0.04] p-5">

                <Heart
                  size={21}
                  strokeWidth={1.4}
                  className="mb-4 text-[#c49568]"
                />

                <h3 className="text-xs font-medium">
                  با عشق
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-[#a99b8e]">
                  برای لحظه‌های ماندگار
                </p>

              </div>

            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center justify-end gap-5 border-t border-white/10 pt-7">

              <div className="text-right">

                <div className="font-serif text-2xl tracking-[0.18em] text-[#d8b084]">
                  LUNA
                </div>

                <small className="mt-1 block text-[9px] tracking-[0.25em] text-[#958578]">
                  MADE WITH LOVE
                </small>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c49568]/40 text-[#c49568]">
                <ArrowLeft size={17} />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}