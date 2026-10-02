import React, { useState } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  MessageSquare,
  Coffee,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function CheckoutModal({
  open,
  close,
  cart,
  total,
  onSuccess,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    orderType: "cafe",
    table: "",
    address: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const formatPrice = (price) =>
    new Intl.NumberFormat("fa-IR").format(price) + " تومان";

  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      return;
    }

    setSubmitted(true);

    if (onSuccess) {
      onSuccess(form);
    }
  };

  // ================= SUCCESS =================

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">

        <button
          onClick={close}
          className="absolute inset-0 bg-[#211811]/65 backdrop-blur-sm"
          aria-label="بستن"
        />

        <div className="relative w-full max-w-md overflow-hidden bg-[#fcfaf6] shadow-2xl">

          <div className="flex flex-col items-center px-8 py-12 text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eee3d5] text-[#8b5e3c]">
              <CheckCircle2 size={42} strokeWidth={1.3} />
            </div>

            <span className="mt-6 text-[9px] tracking-[0.3em] text-[#a66d42]">
              ORDER CONFIRMED
            </span>

            <h2 className="mt-2 font-serif text-3xl text-[#30231b]">
              سفارش ثبت شد
            </h2>

            <p className="mt-4 max-w-xs text-xs leading-7 text-[#85766a]">
              ممنون که لونا رو انتخاب کردی.
              سفارش شما با موفقیت ثبت شد و به‌زودی آماده می‌شود.
            </p>

            <div className="mt-7 w-full border border-[#e5d8c8] bg-[#f5efe7] p-5 text-right">

              <div className="flex items-center justify-between text-xs">
                <span className="text-[#85766a]">
                  تعداد آیتم
                </span>

                <strong className="text-[#30231b]">
                  {count.toLocaleString("fa-IR")}
                </strong>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#e1d5c8] pt-3 text-xs">
                <span className="text-[#85766a]">
                  مبلغ سفارش
                </span>

                <strong className="text-[#30231b]">
                  {formatPrice(total)}
                </strong>
              </div>

            </div>

            <button
              onClick={close}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#30231b] text-xs font-medium text-white transition hover:bg-[#6f4932]"
            >
              بستن
              <ArrowRight size={15} />
            </button>

          </div>

        </div>
      </div>
    );
  }

  // ================= CHECKOUT =================

  return (
    <div className="fixed inset-0 z-[120] overflow-y-auto">

      {/* Overlay */}
      <button
        onClick={close}
        className="fixed inset-0 bg-[#211811]/65 backdrop-blur-sm"
        aria-label="بستن"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center p-4 lg:p-8">

        <div className="relative w-full overflow-hidden bg-[#fcfaf6] shadow-2xl">

          {/* HEADER */}

          <div className="flex items-center justify-between border-b border-[#e5d8c8] px-6 py-5 lg:px-8">

            <button
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e1d4c5] text-[#30231b] transition hover:bg-[#30231b] hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="text-right">

              <span className="text-[9px] tracking-[0.3em] text-[#a66d42]">
                LUNA CHECKOUT
              </span>

              <h2 className="mt-1 font-serif text-2xl text-[#30231b]">
                ثبت سفارش
              </h2>

            </div>

          </div>

          {/* CONTENT */}

          <div className="grid lg:grid-cols-[1fr_360px]">

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="order-2 p-6 lg:order-1 lg:p-8"
            >

              <div className="mb-7">

                <h3 className="text-base font-semibold text-[#30231b]">
                  اطلاعات سفارش
                </h3>

                <p className="mt-1 text-[10px] text-[#96877a]">
                  اطلاعات زیر را برای تکمیل سفارش وارد کن.
                </p>

              </div>

              {/* Name */}

              <div className="mb-5">

                <label className="mb-2 block text-right text-xs text-[#5f5147]">
                  نام و نام خانوادگی
                </label>

                <div className="relative">

                  <User
                    size={17}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a68d78]"
                  />

                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="مثلاً نیلوفر احمدی"
                    className="h-12 w-full border border-[#dfd2c3] bg-white pr-11 pl-4 text-xs text-[#30231b] outline-none transition placeholder:text-[#b4a69a] focus:border-[#a66d42]"
                  />

                </div>

              </div>

              {/* Phone */}

              <div className="mb-5">

                <label className="mb-2 block text-right text-xs text-[#5f5147]">
                  شماره موبایل
                </label>

                <div className="relative">

                  <Phone
                    size={17}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a68d78]"
                  />

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                    className="h-12 w-full border border-[#dfd2c3] bg-white pr-11 pl-4 text-xs text-[#30231b] outline-none transition placeholder:text-[#b4a69a] focus:border-[#a66d42]"
                  />

                </div>

              </div>

              {/* Order Type */}

              <div className="mb-6">

                <label className="mb-3 block text-right text-xs text-[#5f5147]">
                  نوع سفارش
                </label>

                <div className="grid grid-cols-3 gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        orderType: "cafe",
                      }))
                    }
                    className={`border px-2 py-3 text-[10px] transition ${
                      form.orderType === "cafe"
                        ? "border-[#a66d42] bg-[#30231b] text-white"
                        : "border-[#dfd2c3] bg-white text-[#66594f]"
                    }`}
                  >
                    داخل کافه
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        orderType: "takeaway",
                      }))
                    }
                    className={`border px-2 py-3 text-[10px] transition ${
                      form.orderType === "takeaway"
                        ? "border-[#a66d42] bg-[#30231b] text-white"
                        : "border-[#dfd2c3] bg-white text-[#66594f]"
                    }`}
                  >
                    بیرون‌بر
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        orderType: "delivery",
                      }))
                    }
                    className={`border px-2 py-3 text-[10px] transition ${
                      form.orderType === "delivery"
                        ? "border-[#a66d42] bg-[#30231b] text-white"
                        : "border-[#dfd2c3] bg-white text-[#66594f]"
                    }`}
                  >
                    ارسال
                  </button>

                </div>

              </div>

              {/* Table */}

              {form.orderType === "cafe" && (
                <div className="mb-5">

                  <label className="mb-2 block text-right text-xs text-[#5f5147]">
                    شماره میز
                  </label>

                  <input
                    name="table"
                    value={form.table}
                    onChange={handleChange}
                    placeholder="مثلاً ۱۲"
                    className="h-12 w-full border border-[#dfd2c3] bg-white px-4 text-right text-xs outline-none transition focus:border-[#a66d42]"
                  />

                </div>
              )}

              {/* Address */}

              {form.orderType === "delivery" && (
                <div className="mb-5">

                  <label className="mb-2 block text-right text-xs text-[#5f5147]">
                    آدرس
                  </label>

                  <div className="relative">

                    <MapPin
                      size={17}
                      className="absolute right-3 top-4 text-[#a68d78]"
                    />

                    <textarea
                      required
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      rows={3}
                      placeholder="آدرس کامل برای ارسال..."
                      className="w-full resize-none border border-[#dfd2c3] bg-white p-3 pr-11 text-xs outline-none transition placeholder:text-[#b4a69a] focus:border-[#a66d42]"
                    />

                  </div>

                </div>
              )}

              {/* Note */}

              <div className="mb-7">

                <label className="mb-2 block text-right text-xs text-[#5f5147]">
                  توضیحات سفارش
                </label>

                <div className="relative">

                  <MessageSquare
                    size={17}
                    className="absolute right-3 top-4 text-[#a68d78]"
                  />

                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={3}
                    placeholder="مثلاً بدون شکر، سس جدا و..."
                    className="w-full resize-none border border-[#dfd2c3] bg-white p-3 pr-11 text-xs outline-none transition placeholder:text-[#b4a69a] focus:border-[#a66d42]"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-3 bg-[#30231b] py-4 text-xs font-medium text-white transition hover:bg-[#6f4932] hover:shadow-lg"
              >
                تأیید و ثبت سفارش
                <ArrowRight size={16} />
              </button>

            </form>

            {/* ================= SUMMARY ================= */}

            <div className="order-1 border-b border-[#e5d8c8] bg-[#f4ede3] p-6 lg:order-2 lg:border-b-0 lg:border-r lg:p-8">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#30231b] text-[#d8b084]">
                  <Coffee size={19} />
                </div>

                <div className="text-right">

                  <span className="text-[9px] tracking-[0.25em] text-[#a66d42]">
                    LUNA
                  </span>

                  <h3 className="mt-1 text-sm font-semibold text-[#30231b]">
                    خلاصه سفارش
                  </h3>

                </div>

              </div>

              <div className="mt-7 space-y-4">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b border-[#dfd1c1] pb-4"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 shrink-0 rounded-sm object-cover"
                    />

                    <div className="min-w-0 flex-1 text-right">

                      <h4 className="truncate text-xs font-medium text-[#30231b]">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-[9px] text-[#938276]">
                        تعداد: {item.qty.toLocaleString("fa-IR")}
                      </p>

                    </div>

                    <strong className="shrink-0 text-[10px] text-[#6f4932]">
                      {formatPrice(item.price * item.qty)}
                    </strong>

                  </div>
                ))}

              </div>

              {/* Total */}

              <div className="mt-7 border-t border-[#d9cbbb] pt-5">

                <div className="flex items-center justify-between">

                  <span className="text-xs text-[#77695e]">
                    مبلغ نهایی
                  </span>

                  <strong className="text-lg text-[#30231b]">
                    {formatPrice(total)}
                  </strong>

                </div>

              </div>

              <div className="mt-6 flex items-center gap-2 text-[9px] leading-5 text-[#8d7d70]">
                <ShoppingBag size={13} />
                سفارش شما پس از تأیید برای آماده‌سازی ارسال می‌شود.
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}