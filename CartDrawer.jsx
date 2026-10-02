import React from "react";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Coffee,
} from "lucide-react";

export default function CartDrawer({
  open,
  close,
  cart,
  total,
  changeQty,
  onCheckout,
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <>
      {/* ================= OVERLAY ================= */}

      <div
        className={`
          fixed inset-0 z-[90]
          bg-[#211811]/60
          backdrop-blur-sm
          transition-all duration-300
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={close}
      />

      {/* ================= DRAWER ================= */}

      <aside
        dir="rtl"
        className={`
          fixed right-0 top-0 z-[100]
          flex h-screen w-full max-w-[440px]
          flex-col
          bg-[#fcfaf6]
          shadow-2xl
          transition-transform duration-500 ease-out
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* ================= HEADER ================= */}

        <div className="flex shrink-0 items-center justify-between border-b border-[#e5d8c8] px-6 py-5">

          {/* Close */}

          <button
            onClick={close}
            aria-label="بستن سبد خرید"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#e1d4c5]
              text-[#30231b]
              transition-all duration-300
              hover:border-[#30231b]
              hover:bg-[#30231b]
              hover:text-white
            "
          >
            <X size={18} />
          </button>

          {/* Title */}

          <div className="text-right">

            <div className="flex items-center justify-end gap-2">

              <span className="text-[9px] tracking-[0.28em] text-[#a66d42]">
                LUNA
              </span>

              <Coffee
                size={14}
                className="text-[#a66d42]"
              />

            </div>

            <h2 className="mt-1 font-serif text-2xl text-[#30231b]">
              سبد سفارش
            </h2>

          </div>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="flex-1 overflow-y-auto">

          {cart.length === 0 ? (

            /* ================= EMPTY ================= */

            <div className="flex h-full flex-col items-center justify-center px-8 text-center">

              <div className="
                flex h-24 w-24
                items-center justify-center
                rounded-full
                bg-[#f1e8dc]
                text-[#9a7658]
              ">
                <ShoppingBag
                  size={38}
                  strokeWidth={1.2}
                />
              </div>

              <span className="mt-7 text-[9px] tracking-[0.3em] text-[#a66d42]">
                YOUR CART IS EMPTY
              </span>

              <h3 className="mt-2 font-serif text-2xl text-[#30231b]">
                هنوز چیزی انتخاب نکردی
              </h3>

              <p className="mt-3 max-w-xs text-xs leading-7 text-[#8d7d70]">
                از منوی لونا یک قهوه، غذا یا دسر
                انتخاب کن و به سفارش خودت اضافه کن.
              </p>

              <button
                onClick={() => {
                  close();

                  setTimeout(() => {
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 300);
                }}
                className="
                  mt-7
                  flex h-12
                  items-center justify-center
                  gap-2
                  bg-[#30231b]
                  px-7
                  text-xs font-medium
                  text-white
                  transition-all duration-300
                  hover:bg-[#6f4932]
                  hover:shadow-lg
                "
              >
                مشاهده منو
                <ArrowLeft size={15} />
              </button>

            </div>

          ) : (

            /* ================= CART ITEMS ================= */

            <div className="px-5 py-6">

              {/* Count */}

              <div className="mb-5 flex items-center justify-between">

                <span className="text-[10px] text-[#958579]">
                  {count.toLocaleString("fa-IR")} آیتم
                </span>

                <span className="text-[9px] tracking-[0.22em] text-[#a66d42]">
                  YOUR ORDER
                </span>

              </div>

              {/* Items */}

              <div className="space-y-4">

                {cart.map((item) => (

                  <article
                    key={item.id}
                    className="
                      group
                      border border-[#e5d8c8]
                      bg-white
                      p-3
                      transition-all duration-300
                      hover:border-[#cdb397]
                    "
                  >

                    <div className="flex gap-3">

                      {/* Image */}

                      <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            h-full w-full
                            object-cover
                            transition-transform duration-500
                            group-hover:scale-105
                          "
                        />

                      </div>

                      {/* Info */}

                      <div className="min-w-0 flex-1 text-right">

                        <div className="flex items-start justify-between gap-2">

                          <button
                            onClick={() =>
                              changeQty(item.id, -item.qty)
                            }
                            aria-label={`حذف ${item.name}`}
                            className="
                              flex h-7 w-7
                              shrink-0
                              items-center justify-center
                              text-[#aa9180]
                              transition-colors
                              hover:text-red-700
                            "
                          >
                            <Trash2 size={14} />
                          </button>

                          <div className="min-w-0">

                            <h3 className="
                              truncate
                              text-sm
                              font-semibold
                              text-[#30231b]
                            ">
                              {item.name}
                            </h3>

                            <span className="
                              mt-1
                              block
                              text-[9px]
                              text-[#a66d42]
                            ">
                              {item.category}
                            </span>

                          </div>

                        </div>

                        <div className="mt-4 flex items-center justify-between">

                          {/* Price */}

                          <strong className="text-xs text-[#6f4932]">
                            {formatPrice(
                              item.price * item.qty
                            )}
                          </strong>

                          {/* Quantity */}

                          <div className="
                            flex
                            h-8
                            items-center
                            border border-[#e1d4c5]
                            bg-[#faf7f2]
                          ">

                            <button
                              onClick={() =>
                                changeQty(item.id, -1)
                              }
                              className="
                                flex h-full w-8
                                items-center justify-center
                                text-[#6b5a4d]
                                transition-colors
                                hover:bg-[#eee3d5]
                              "
                              aria-label="کم کردن"
                            >
                              <Minus size={13} />
                            </button>

                            <span className="
                              flex h-full min-w-[32px]
                              items-center justify-center
                              border-x border-[#e1d4c5]
                              text-[11px]
                              font-semibold
                              text-[#30231b]
                            ">
                              {item.qty.toLocaleString("fa-IR")}
                            </span>

                            <button
                              onClick={() =>
                                changeQty(item.id, 1)
                              }
                              className="
                                flex h-full w-8
                                items-center justify-center
                                text-[#6b5a4d]
                                transition-colors
                                hover:bg-[#eee3d5]
                              "
                              aria-label="اضافه کردن"
                            >
                              <Plus size={13} />
                            </button>

                          </div>

                        </div>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

              {/* Continue Shopping */}

              <button
                onClick={close}
                className="
                  mt-6
                  flex w-full
                  items-center justify-center
                  gap-2
                  border border-[#dfd1c1]
                  py-3
                  text-[10px]
                  text-[#6f6258]
                  transition-all duration-300
                  hover:border-[#a66d42]
                  hover:text-[#6f4932]
                "
              >
                ادامه خرید
                <ArrowLeft size={14} />
              </button>

            </div>
          )}

        </div>

        {/* ================= FOOTER ================= */}

        {cart.length > 0 && (

          <div className="
            shrink-0
            border-t border-[#e5d8c8]
            bg-[#f4ede3]
            px-6
            pb-6
            pt-5
          ">

            {/* Subtotal */}

            <div className="mb-3 flex items-center justify-between">

              <span className="text-xs text-[#817267]">
                جمع سفارش
              </span>

              <strong className="text-sm text-[#30231b]">
                {formatPrice(total)}
              </strong>

            </div>

            {/* Delivery */}

            <div className="mb-5 flex items-center justify-between">

              <span className="text-[10px] text-[#9a8a7b]">
                هزینه ارسال
              </span>

              <span className="text-[10px] text-[#8a6b52]">
                در مرحله بعد
              </span>

            </div>

            {/* Total */}

            <div className="
              mb-5
              border-t border-[#d9cbbb]
              pt-4
            ">

              <div className="flex items-end justify-between">

                <span className="text-xs font-medium text-[#5f5147]">
                  مبلغ نهایی
                </span>

                <strong className="
                  font-serif
                  text-2xl
                  text-[#30231b]
                ">
                  {formatPrice(total)}
                </strong>

              </div>

            </div>

            {/* Checkout */}

            <button
              onClick={onCheckout}
              className="
                group
                flex h-14 w-full
                items-center justify-center
                gap-3
                bg-[#30231b]
                text-xs font-medium
                text-white
                transition-all duration-300
                hover:bg-[#6f4932]
                hover:shadow-xl
              "
            >
              ادامه و ثبت سفارش

              <ArrowLeft
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:-translate-x-1
                "
              />

            </button>

            {/* Note */}

            <p className="
              mt-3
              text-center
              text-[8px]
              leading-5
              text-[#98887b]
            ">
              قبل از ثبت نهایی، اطلاعات سفارش خود را بررسی کنید.
            </p>

          </div>

        )}

      </aside>
    </>
  );
}