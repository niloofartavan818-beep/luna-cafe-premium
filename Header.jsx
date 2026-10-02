import React from "react";
import {
  Coffee,
  ShoppingBag,
  Menu,
  X,
  MapPin,
  Clock3,
  ChevronDown,
} from "lucide-react";

export default function Header({
  count,
  cartOpen,
  reservation,
  mobileOpen,
  setMobileOpen,
  scrollTo,
}) {
  const links = [
    ["خانه", "home"],
    ["منو", "menu"],
    ["درباره ما", "about"],
    ["گالری", "gallery"],
    ["تماس", "contact"],
  ];

  const handleNav = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdfbf7]/95 backdrop-blur-xl">

      {/* ================= TOP BAR ================= */}
      <div className="hidden border-b border-[#e9dfd2] bg-[#30231b] text-[#f5eee5] sm:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 lg:px-8">

          <div className="flex items-center gap-5 text-[10px] tracking-wide">
            <span className="flex items-center gap-1.5 text-[#e6d8c8]">
              <MapPin size={12} />
              ولیعصر، تهران
            </span>

            <span className="h-3 w-px bg-[#806b5a]" />

            <span className="flex items-center gap-1.5 text-[#e6d8c8]">
              <Clock3 size={12} />
              هر روز ۸ صبح تا ۱۱ شب
            </span>
          </div>

          <span className="text-[9px] tracking-[0.28em] text-[#c9ad91]">
            SPECIALTY COFFEE & FINE DINING
          </span>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="border-b border-[#e8ddd0]">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex h-[105px] items-center justify-between gap-6">

            {/* ================= LOGO ================= */}
            <button
              onClick={() => handleNav("home")}
              className="group flex items-center gap-4"
            >

              {/* Logo Circle */}
              <span
                className="
                  relative flex h-[68px] w-[68px]
                  shrink-0 items-center justify-center
                  rounded-full
                  border border-[#c8a27d]
                  bg-[#f5eee5]
                  text-[#6d4832]
                  shadow-[0_5px_20px_rgba(48,35,27,0.06)]
                  transition-all duration-500
                  group-hover:rotate-[-7deg]
                  group-hover:bg-[#30231b]
                  group-hover:text-[#d9b48c]
                "
              >
                <Coffee
                  size={30}
                  strokeWidth={1.35}
                />

                {/* Decorative Dot */}
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#b98659] ring-4 ring-[#fdfbf7]" />

                {/* Small line */}
                <span className="absolute bottom-2 left-1/2 h-px w-4 -translate-x-1/2 bg-current opacity-40" />
              </span>

              {/* Logo Text */}
              <span className="flex flex-col text-right">

                <strong
                  className="
                    font-serif text-[34px]
                    font-medium leading-none
                    tracking-[0.16em]
                    text-[#30231b]
                  "
                >
                  LUNA
                </strong>

                <span className="mt-2 flex items-center gap-2">

                  <span className="h-px w-5 bg-[#c49a72]" />

                  <small
                    className="
                      text-[8px]
                      font-medium
                      tracking-[0.35em]
                      text-[#8b7765]
                    "
                  >
                    CAFE & RESTAURANT
                  </small>

                  <span className="h-px w-5 bg-[#c49a72]" />

                </span>
              </span>
            </button>

            {/* ================= NAVIGATION ================= */}
            <nav className="hidden items-center gap-10 lg:flex">

              {links.map(([label, id], index) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="
                    group relative flex flex-col
                    items-center gap-1
                    py-3
                    text-[#51463e]
                    transition-all duration-300
                    hover:text-[#8b5f3f]
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      text-[8px]
                      tracking-[0.2em]
                      text-[#b79b80]
                      transition
                      group-hover:text-[#a66d42]
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Label */}
                  <span className="text-[13px] font-medium">
                    {label}
                  </span>

                  {/* Underline */}
                  <span
                    className="
                      absolute bottom-0
                      h-[1px] w-0
                      bg-[#a66d42]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </button>
              ))}

            </nav>

            {/* ================= ACTIONS ================= */}
            <div className="flex items-center gap-3">

              {/* Cart */}
              <button
                onClick={cartOpen}
                aria-label="سبد خرید"
                className="
                  group relative flex
                  h-[52px] w-[52px]
                  items-center justify-center
                  rounded-full
                  border border-[#ddcfbf]
                  bg-[#f7f1e8]
                  text-[#30231b]
                  shadow-sm
                  transition-all duration-300
                  hover:border-[#30231b]
                  hover:bg-[#30231b]
                  hover:text-[#e0bd96]
                  hover:shadow-lg
                "
              >
                <ShoppingBag
                  size={21}
                  strokeWidth={1.5}
                />

                {count > 0 && (
                  <span
                    className="
                      absolute -right-1 -top-1
                      flex h-5 w-5
                      items-center justify-center
                      rounded-full
                      bg-[#a66d42]
                      text-[9px]
                      font-bold
                      text-white
                      ring-2
                      ring-[#fdfbf7]
                    "
                  >
                    {count}
                  </span>
                )}
              </button>

              {/* Reservation */}
              <button
                onClick={reservation}
                className="
                  hidden h-[52px]
                  items-center justify-center
                  gap-2
                  rounded-[2px]
                  bg-[#30231b]
                  px-7
                  text-[12px]
                  font-medium
                  text-white
                  shadow-[0_8px_20px_rgba(48,35,27,0.12)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#6f4932]
                  hover:shadow-[0_12px_28px_rgba(48,35,27,0.18)]
                  sm:flex
                "
              >
                رزرو میز
                <ChevronDown
                  size={13}
                  className="rotate-90"
                />
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="باز کردن منو"
                className="
                  flex h-[52px] w-[52px]
                  items-center justify-center
                  rounded-full
                  border border-[#ddcfbf]
                  bg-[#f7f1e8]
                  text-[#30231b]
                  transition-all duration-300
                  hover:bg-[#30231b]
                  hover:text-white
                  lg:hidden
                "
              >
                {mobileOpen ? (
                  <X size={22} strokeWidth={1.5} />
                ) : (
                  <Menu size={22} strokeWidth={1.5} />
                )}
              </button>

            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`
              overflow-hidden
              transition-all duration-500
              lg:hidden
              ${
                mobileOpen
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >

            <div className="border-t border-[#e9dfd2] py-4">

              <nav className="flex flex-col">

                {links.map(([label, id], index) => (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    className="
                      group flex
                      items-center
                      justify-between
                      border-b border-[#eee6dc]
                      py-4
                      text-right
                    "
                  >

                    <span className="flex items-center gap-3">

                      <span
                        className="
                          text-[9px]
                          tracking-[0.2em]
                          text-[#b58b67]
                        "
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="
                          text-sm
                          font-medium
                          text-[#51463e]
                          transition
                          group-hover:text-[#a66d42]
                        "
                      >
                        {label}
                      </span>

                    </span>

                    <span className="text-[#c5aa91]">
                      ←
                    </span>

                  </button>
                ))}

              </nav>

              {/* Mobile Info */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-sm bg-[#f5eee5] p-4">
                  <MapPin
                    size={18}
                    className="mb-2 text-[#a66d42]"
                  />

                  <p className="text-[10px] text-[#806f60]">
                    ولیعصر، تهران
                  </p>
                </div>

                <div className="rounded-sm bg-[#f5eee5] p-4">
                  <Clock3
                    size={18}
                    className="mb-2 text-[#a66d42]"
                  />

                  <p className="text-[10px] text-[#806f60]">
                    ۸ صبح تا ۱۱ شب
                  </p>
                </div>

              </div>

              {/* Mobile Reservation */}
              <button
                onClick={() => {
                  reservation();
                  setMobileOpen(false);
                }}
                className="
                  mt-4 flex h-14
                  w-full
                  items-center
                  justify-center
                  rounded-sm
                  bg-[#30231b]
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#6f4932]
                "
              >
                رزرو میز
              </button>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}