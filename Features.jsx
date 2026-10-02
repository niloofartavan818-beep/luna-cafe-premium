import React from "react";
import { Coffee, Leaf, Heart, ArrowLeft } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Coffee,
      title: "قهوه تخصصی",
      text: "دانه‌های تازه و رُست روز",
    },
    {
      icon: Leaf,
      title: "مواد اولیه تازه",
      text: "انتخاب‌شده با وسواس",
    },
    {
      icon: Heart,
      title: "تجربه متفاوت",
      text: "گرم، آرام و صمیمی",
    },
  ];

  return (
    <section className="relative border-y border-[#e5d8c8] bg-[#f4ede3]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid divide-y divide-[#dfd1c1] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-x-reverse">

          {features.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className="
                group
                flex items-center
                gap-5
                px-4 py-7
                text-right
                transition-all duration-300
                hover:bg-[#eee4d8]
                sm:px-7
                lg:px-10
                lg:py-8
              "
            >

              {/* Icon */}
              <div
                className="
                  relative flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[#c49568]/40
                  bg-[#fcfaf6]
                  text-[#a66d42]
                  transition-all duration-300
                  group-hover:border-[#a66d42]
                  group-hover:bg-[#30231b]
                  group-hover:text-[#d8b084]
                "
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span
                  className="
                    absolute -right-1 -top-1
                    h-2 w-2 rounded-full
                    bg-[#c49568]
                    opacity-0
                    transition-opacity
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">

                <div className="flex items-center justify-between gap-3">

                  <h3 className="text-sm font-semibold text-[#30231b]">
                    {title}
                  </h3>

                  <ArrowLeft
                    size={14}
                    className="
                      shrink-0
                      text-[#c49568]
                      opacity-0
                      -translate-x-2
                      transition-all duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                </div>

                <p className="mt-1.5 text-[10px] leading-5 text-[#85766a]">
                  {text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}