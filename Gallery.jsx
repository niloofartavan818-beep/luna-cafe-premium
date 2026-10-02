import React from "react";
import { ArrowUpLeft, Sparkles } from "lucide-react";

const imgs = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f5efe7] py-24 sm:py-28 lg:py-32"
    >
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#c49568]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#8b5f3f]/5 blur-3xl" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-12 flex flex-col items-end justify-between gap-6 border-b border-[#dfd2c3] pb-8 sm:flex-row sm:items-end">

          <div className="text-right">

            <div className="mb-4 flex items-center justify-end gap-3">

              <span className="h-px w-10 bg-[#c49568]" />

              <span className="text-[10px] font-medium tracking-[0.3em] text-[#a66d42]">
                A GLIMPSE OF LUNA
              </span>

            </div>

            <h2 className="font-serif text-4xl font-medium text-[#30231b] sm:text-5xl">
              فضای{" "}
              <em className="not-italic text-[#a66d42]">
                ما
              </em>
            </h2>

          </div>

          <p className="max-w-sm text-right text-xs leading-7 text-[#77695d]">
            جایی برای قهوه، گفتگو و لحظه‌هایی که دوست داریم
            کمی بیشتر طول بکشند.
          </p>

        </div>

        {/* ================= GALLERY ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-12
            lg:grid-rows-[320px_320px]
          "
        >

          {/* ===================================================== */}
          {/* IMAGE 1 - MAIN LARGE IMAGE */}
          {/* ===================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              sm:col-span-2
              lg:col-span-7
              lg:row-span-2
            "
          >

            <img
              src={imgs[0]}
              alt="فضای اصلی کافه لونا"
              className="
                h-full
                min-h-[420px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#211811]/75
                via-[#211811]/10
                to-transparent
              "
            />

            {/* Text */}

            <div className="absolute bottom-7 right-7 text-white">

              <span
                className="
                  mb-2
                  block
                  text-[9px]
                  tracking-[0.3em]
                  text-[#d8b084]
                "
              >
                LUNA
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl">
                جایی برای مکث
              </h3>

            </div>

            {/* Hover Icon */}

            <div
              className="
                absolute
                left-5
                top-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                opacity-0
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              <ArrowUpLeft size={18} />
            </div>

          </div>

          {/* ===================================================== */}
          {/* IMAGE 2 - COFFEE */}
          {/* ===================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              sm:min-h-[320px]
              lg:col-span-5
              lg:row-span-1
            "
          >

            <img
              src={imgs[1]}
              alt="قهوه تخصصی لونا"
              className="
                h-full
                min-h-[320px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#211811]/10
                transition
                duration-300
                group-hover:bg-[#211811]/30
              "
            />

            <div
              className="
                absolute
                bottom-5
                right-5
                rounded-full
                bg-[#30231b]/80
                px-5
                py-2.5
                text-[10px]
                text-white
                opacity-0
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              قهوه تخصصی
            </div>

          </div>

          {/* ===================================================== */}
          {/* IMAGE 3 - FOOD */}
          {/* ===================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              sm:min-h-[320px]
              lg:col-span-3
              lg:row-span-1
            "
          >

            <img
              src={imgs[2]}
              alt="غذاهای کافه لونا"
              className="
                h-full
                min-h-[320px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#211811]/10
                transition
                duration-300
                group-hover:bg-[#211811]/30
              "
            />

            <div
              className="
                absolute
                bottom-5
                right-5
                rounded-full
                bg-[#30231b]/80
                px-5
                py-2.5
                text-[10px]
                text-white
                opacity-0
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              دست‌ساز
            </div>

          </div>

          {/* ===================================================== */}
          {/* IMAGE 4 - INTERIOR */}
          {/* ===================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              sm:min-h-[320px]
              lg:col-span-2
              lg:row-span-1
            "
          >

            <img
              src={imgs[3]}
              alt="فضای داخلی کافه لونا"
              className="
                h-full
                min-h-[320px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[#211811]/10
                transition
                duration-300
                group-hover:bg-[#211811]/30
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-[#30231b]
                "
              >
                <ArrowUpLeft size={18} />
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM NOTE ================= */}

        <div className="mt-8 flex items-center justify-end gap-3 text-right">

          <span className="text-[10px] text-[#8a796b]">
            لحظه‌های کوچک، خاطره‌های بزرگ
          </span>

          <Sparkles
            size={15}
            strokeWidth={1.5}
            className="text-[#c49568]"
          />

        </div>

      </div>
    </section>
  );
}