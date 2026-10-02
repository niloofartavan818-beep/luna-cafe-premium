import React, { useState } from "react";
import {
  X,
  Check,
  CalendarDays,
  Clock3,
  Users,
  User,
  Phone,
  MessageSquare,
  Coffee,
} from "lucide-react";

export default function ReservationModal({ open, close }) {
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    note: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // فعلاً فقط برای فرانت‌اند
    console.log("LUNA RESERVATION:", form);

    setDone(true);
  };

  const handleClose = () => {
    close();

    // بعد از بسته شدن فرم، وضعیت success ریست شود
    setTimeout(() => {
      setDone(false);

      setForm({
        name: "",
        phone: "",
        guests: "2",
        date: "",
        time: "",
        note: "",
      });
    }, 300);
  };

  return (
    <div
      dir="rtl"
      className="
        fixed inset-0 z-[120]
        flex items-center justify-center
        overflow-y-auto
        bg-[#211811]/65
        p-4
        backdrop-blur-sm
      "
      onClick={handleClose}
    >

      {/* ================= MODAL ================= */}

      <div
        className="
          relative
          w-full max-w-[560px]
          overflow-hidden
          bg-[#fcfaf6]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* ================= TOP DECOR ================= */}

        <div className="h-1 w-full bg-[#a66d42]" />

        {/* ================= CLOSE ================= */}

        <button
          onClick={handleClose}
          aria-label="بستن"
          className="
            absolute left-5 top-5 z-10
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-[#dfd2c3]
            bg-[#fcfaf6]
            text-[#30231b]
            transition-all duration-300
            hover:bg-[#30231b]
            hover:text-white
          "
        >
          <X size={18} />
        </button>

        {!done ? (

          /* =================================================
             FORM
          ================================================= */

          <div className="px-6 pb-8 pt-9 sm:px-9">

            {/* Heading */}

            <div className="mb-8 text-center">

              <div className="
                mx-auto
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-[#f0e6d9]
                text-[#8b5e3c]
              ">
                <Coffee
                  size={24}
                  strokeWidth={1.4}
                />
              </div>

              <span className="
                mt-5
                block
                text-[9px]
                tracking-[0.3em]
                text-[#a66d42]
              ">
                TABLE RESERVATION
              </span>

              <h2 className="
                mt-2
                font-serif
                text-3xl
                text-[#30231b]
              ">
                جای تو را نگه می‌داریم.
              </h2>

              <p className="
                mx-auto mt-3
                max-w-sm
                text-[11px]
                leading-6
                text-[#8d7d70]
              ">
                اطلاعاتت را وارد کن تا میز موردنظرت
                برایت رزرو شود.
              </p>

            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="
                  mb-2
                  block
                  text-right
                  text-[11px]
                  font-medium
                  text-[#5f5147]
                ">
                  نام و نام خانوادگی
                </label>

                <div className="relative">

                  <User
                    size={17}
                    className="
                      absolute right-3
                      top-1/2
                      -translate-y-1/2
                      text-[#a68d78]
                    "
                  />

                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="مثلاً نیلوفر احمدی"
                    className="
                      h-12
                      w-full
                      border border-[#dfd2c3]
                      bg-white
                      pr-11 pl-4
                      text-xs
                      text-[#30231b]
                      outline-none
                      transition
                      placeholder:text-[#b4a69a]
                      focus:border-[#a66d42]
                    "
                  />

                </div>

              </div>

              {/* PHONE */}

              <div>

                <label className="
                  mb-2
                  block
                  text-right
                  text-[11px]
                  font-medium
                  text-[#5f5147]
                ">
                  شماره موبایل
                </label>

                <div className="relative">

                  <Phone
                    size={17}
                    className="
                      absolute right-3
                      top-1/2
                      -translate-y-1/2
                      text-[#a68d78]
                    "
                  />

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                    className="
                      h-12
                      w-full
                      border border-[#dfd2c3]
                      bg-white
                      pr-11 pl-4
                      text-xs
                      text-[#30231b]
                      outline-none
                      transition
                      placeholder:text-[#b4a69a]
                      focus:border-[#a66d42]
                    "
                  />

                </div>

              </div>

              {/* DATE + GUESTS */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* DATE */}

                <div>

                  <label className="
                    mb-2
                    block
                    text-right
                    text-[11px]
                    font-medium
                    text-[#5f5147]
                  ">
                    تاریخ
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={17}
                      className="
                        absolute right-3
                        top-1/2
                        -translate-y-1/2
                        text-[#a68d78]
                      "
                    />

                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="
                        h-12
                        w-full
                        border border-[#dfd2c3]
                        bg-white
                        pr-11 pl-3
                        text-xs
                        text-[#30231b]
                        outline-none
                        transition
                        focus:border-[#a66d42]
                      "
                    />

                  </div>

                </div>

                {/* GUESTS */}

                <div>

                  <label className="
                    mb-2
                    block
                    text-right
                    text-[11px]
                    font-medium
                    text-[#5f5147]
                  ">
                    تعداد نفرات
                  </label>

                  <div className="relative">

                    <Users
                      size={17}
                      className="
                        absolute right-3
                        top-1/2
                        -translate-y-1/2
                        text-[#a68d78]
                      "
                    />

                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="
                        h-12
                        w-full
                        appearance-none
                        border border-[#dfd2c3]
                        bg-white
                        pr-11 pl-4
                        text-xs
                        text-[#30231b]
                        outline-none
                        transition
                        focus:border-[#a66d42]
                      "
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(
                        (number) => (
                          <option
                            key={number}
                            value={number}
                          >
                            {number} نفر
                          </option>
                        )
                      )}
                    </select>

                  </div>

                </div>

              </div>

              {/* TIME */}

              <div>

                <label className="
                  mb-2
                  block
                  text-right
                  text-[11px]
                  font-medium
                  text-[#5f5147]
                ">
                  ساعت
                </label>

                <div className="relative">

                  <Clock3
                    size={17}
                    className="
                      absolute right-3
                      top-1/2
                      -translate-y-1/2
                      text-[#a68d78]
                    "
                  />

                  <input
                    required
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="
                      h-12
                      w-full
                      border border-[#dfd2c3]
                      bg-white
                      pr-11 pl-4
                      text-xs
                      text-[#30231b]
                      outline-none
                      transition
                      focus:border-[#a66d42]
                    "
                  />

                </div>

              </div>

              {/* NOTE */}

              <div>

                <label className="
                  mb-2
                  block
                  text-right
                  text-[11px]
                  font-medium
                  text-[#5f5147]
                ">
                  توضیحات
                  <span className="mr-1 text-[#a99b8e]">
                    (اختیاری)
                  </span>
                </label>

                <div className="relative">

                  <MessageSquare
                    size={17}
                    className="
                      absolute right-3
                      top-4
                      text-[#a68d78]
                    "
                  />

                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={3}
                    placeholder="مثلاً میز کنار پنجره..."
                    className="
                      w-full
                      resize-none
                      border border-[#dfd2c3]
                      bg-white
                      p-3
                      pr-11
                      text-xs
                      text-[#30231b]
                      outline-none
                      transition
                      placeholder:text-[#b4a69a]
                      focus:border-[#a66d42]
                    "
                  />

                </div>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  mt-2
                  flex
                  h-13
                  w-full
                  items-center
                  justify-center
                  gap-2
                  bg-[#30231b]
                  py-4
                  text-xs
                  font-medium
                  text-white
                  transition-all duration-300
                  hover:bg-[#6f4932]
                  hover:shadow-lg
                "
              >
                ثبت درخواست رزرو
                <Check size={16} />
              </button>

              <p className="
                text-center
                text-[8px]
                leading-5
                text-[#9b8b7e]
              ">
                ثبت این فرم به معنی ارسال درخواست رزرو است.
              </p>

            </form>

          </div>

        ) : (

          /* =================================================
             SUCCESS
          ================================================= */

          <div className="
            flex
            min-h-[500px]
            flex-col
            items-center
            justify-center
            px-8
            py-12
            text-center
          ">

            <div className="
              flex h-20 w-20
              items-center justify-center
              rounded-full
              bg-[#eee3d5]
              text-[#8b5e3c]
            ">
              <Check
                size={40}
                strokeWidth={1.4}
              />
            </div>

            <span className="
              mt-7
              text-[9px]
              tracking-[0.3em]
              text-[#a66d42]
            ">
              RESERVATION CONFIRMED
            </span>

            <h2 className="
              mt-2
              font-serif
              text-3xl
              text-[#30231b]
            ">
              رزرو ثبت شد ✨
            </h2>

            <p className="
              mt-4
              max-w-sm
              text-xs
              leading-7
              text-[#85766a]
            ">
              درخواست رزرو شما با موفقیت دریافت شد.
              <br />
              منتظر دیدنت در لونا هستیم ☕
            </p>

            {/* Reservation Summary */}

            <div className="
              mt-7
              w-full
              max-w-sm
              border border-[#e5d8c8]
              bg-[#f5efe7]
              p-5
              text-right
            ">

              <div className="flex justify-between text-xs">

                <span className="text-[#8c7c70]">
                  نام
                </span>

                <strong className="text-[#30231b]">
                  {form.name}
                </strong>

              </div>

              <div className="
                mt-3
                flex
                justify-between
                border-t border-[#dfd1c1]
                pt-3
                text-xs
              ">

                <span className="text-[#8c7c70]">
                  تعداد
                </span>

                <strong className="text-[#30231b]">
                  {form.guests} نفر
                </strong>

              </div>

              <div className="
                mt-3
                flex
                justify-between
                border-t border-[#dfd1c1]
                pt-3
                text-xs
              ">

                <span className="text-[#8c7c70]">
                  ساعت
                </span>

                <strong className="text-[#30231b]">
                  {form.time}
                </strong>

              </div>

            </div>

            <button
              onClick={handleClose}
              className="
                mt-6
                flex
                h-12
                min-w-[180px]
                items-center
                justify-center
                gap-2
                bg-[#30231b]
                px-7
                text-xs
                font-medium
                text-white
                transition-all duration-300
                hover:bg-[#6f4932]
                hover:shadow-lg
              "
            >
              باشه
              <Check size={15} />
            </button>

          </div>
        )}

      </div>
    </div>
  );
}