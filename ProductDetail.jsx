import React, { useState } from "react";
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  Coffee,
} from "lucide-react";

import { formatPrice } from "../../data/menu";

export default function ProductDetail({
  item,
  open,
  close,
  addToCart,
}) {
  const [qty, setQty] = useState(1);

  if (!open || !item) return null;

  const increase = () => {
    setQty((prev) => prev + 1);
  };

  const decrease = () => {
    setQty((prev) => Math.max(1, prev - 1));
  };

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(item);
    }

    close();
    setQty(1);
  };

  return (
    <div
      dir="rtl"
      className="
        fixed inset-0 z-[110]
        flex items-center justify-center
        overflow-y-auto
        bg-[#211811]/70
        p-4
        backdrop-blur-sm
      "
      onClick={close}
    >
      <div
        className="
          relative
          w-full max-w-4xl
          overflow-hidden
          bg-[#fcfaf6]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}

        <button
          onClick={close}
          aria-label="بستن"
          className="
            absolute left-5 top-5 z-20
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/30
            bg-black/30
            text-white
            backdrop-blur-md
            transition
            hover:bg-[#30231b]
          "
        >
          <X size={19} />
        </button>

        <div className="grid md:grid-cols-2">

          {/* ================= IMAGE ================= */}

          <div className="
            relative
            min-h-[330px]
            bg-[#eee5da]
            md:min-h-[560px]
          ">

            <img
              src={item.image}
              alt={item.name}
              className="
                absolute inset-0
                h-full w-full
                object-cover
              "
            />

            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-black/10
            " />

            <span className="
              absolute bottom-5 right-5
              rounded-full
              bg-[#fcfaf6]
              px-4 py-2
              text-[10px]
              text-[#6f4932]
              shadow-lg
            ">
              {item.category}
            </span>

          </div>

          {/* ================= CONTENT ================= */}

          <div className="
            flex
            flex-col
            justify-center
            p-7
            sm:p-10
          ">

            <span className="
              text-[9px]
              tracking-[0.3em]
              text-[#a66d42]
            ">
              LUNA MENU
            </span>

            <div className="mt-3 flex items-start justify-between gap-4">

              <h2 className="
                font-serif
                text-3xl
                font-medium
                text-[#30231b]
                sm:text-4xl
              ">
                {item.name}
              </h2>

              <Coffee
                size={25}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#a66d42]"
              />

            </div>

            {/* Price */}

            <div className="
              mt-5
              inline-flex
              w-fit
              items-center
              border-b
              border-[#c49568]
              pb-2
            ">
              <strong className="
                text-xl
                font-medium
                text-[#6f4932]
              ">
                {formatPrice(item.price)}
              </strong>
            </div>

            {/* Description */}

            <p className="
              mt-7
              text-sm
              leading-8
              text-[#7e7064]
            ">
              {item.desc}
            </p>

            {/* Decorative line */}

            <div className="
              my-7
              h-px
              w-full
              bg-[#e5d8c8]
            " />

            {/* Quantity */}

            <div className="
              flex
              items-center
              justify-between
              gap-4
            ">

              <div>
                <span className="
                  block
                  text-[10px]
                  text-[#9a897b]
                ">
                  تعداد
                </span>

                <span className="
                  mt-1
                  block
                  text-xs
                  text-[#5e5045]
                ">
                  انتخاب تعداد سفارش
                </span>
              </div>

              <div className="
                flex
                h-11
                items-center
                border
                border-[#dfd2c3]
                bg-white
              ">

                <button
                  onClick={decrease}
                  className="
                    flex h-full w-11
                    items-center justify-center
                    text-[#6f4932]
                    transition
                    hover:bg-[#f1e8dd]
                  "
                >
                  <Minus size={15} />
                </button>

                <span className="
                  flex h-full w-10
                  items-center justify-center
                  border-x
                  border-[#dfd2c3]
                  text-sm
                  font-medium
                  text-[#30231b]
                ">
                  {qty}
                </span>

                <button
                  onClick={increase}
                  className="
                    flex h-full w-11
                    items-center justify-center
                    text-[#6f4932]
                    transition
                    hover:bg-[#f1e8dd]
                  "
                >
                  <Plus size={15} />
                </button>

              </div>

            </div>

            {/* Add To Cart */}

            <button
              onClick={handleAdd}
              className="
                mt-7
                flex
                h-14
                w-full
                items-center
                justify-center
                gap-3
                bg-[#30231b]
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#6f4932]
                hover:shadow-xl
              "
            >
              <ShoppingBag size={18} strokeWidth={1.6} />

              افزودن {qty > 1 ? `${qty} عدد` : "به سفارش"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}