import React, { useState } from "react";
import { Plus, Eye } from "lucide-react";

import { formatPrice } from "../../data/menu";
import ProductDetail from "./ProductDetail";

export default function MenuSection({
  items,
  addToCart,
}) {
  const [cat, setCat] = useState("همه");
  const [selectedItem, setSelectedItem] = useState(null);

  const cats = [
    "همه",
    "غذا",
    "نوشیدنی",
    "دسر",
  ];

  const filtered =
    cat === "همه"
      ? items
      : items.filter(
          (item) => item.category === cat
        );

  const openProduct = (item) => {
    setSelectedItem(item);
  };

  const closeProduct = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section
        id="menu"
        className="section menu-section"
      >
        <div className="container">

          {/* ================= HEADER ================= */}

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                LUNA MENU
              </span>

              <h2>
                طعم‌هایی که{" "}
                <em>یاد می‌مونن</em>
              </h2>
            </div>

            <p>
              مواد تازه، دستورهای دست‌ساز و کمی
              عشق؛ این خلاصه منوی لوناست.
            </p>

          </div>

          {/* ================= FILTER ================= */}

          <div className="menu-tabs">

            {cats.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setCat(category)
                }
                className={
                  cat === category
                    ? "active"
                    : ""
                }
              >
                {category}
              </button>
            ))}

          </div>

          {/* ================= PRODUCTS ================= */}

          <div className="menu-grid">

            {filtered.map((item) => (
              <article
                className="
                  menu-card
                  cursor-pointer
                "
                key={item.id}
                onClick={() =>
                  openProduct(item)
                }
              >

                {/* IMAGE */}

                <div className="menu-img">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>
                    {item.category}
                  </span>

                  {/* View */}

                  <div className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/20
                    opacity-0
                    transition-all
                    duration-300
                    hover:opacity-100
                  ">

                    <span className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#fcfaf6]
                      px-4 py-2
                      text-[10px]
                      text-[#30231b]
                      shadow-lg
                    ">
                      <Eye size={14} />
                      مشاهده جزئیات
                    </span>

                  </div>

                </div>

                {/* BODY */}

                <div
                  className="menu-card-body"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                >

                  <div className="menu-title">

                    <h3>
                      {item.name}
                    </h3>

                    <strong>
                      {formatPrice(item.price)}
                    </strong>

                  </div>

                  <p>
                    {item.desc}
                  </p>

                  <button
                    onClick={() =>
                      addToCart(item)
                    }
                  >
                    <Plus size={15} />
                    افزودن به سفارش
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PRODUCT DETAIL ================= */}

      <ProductDetail
        item={selectedItem}
        open={Boolean(selectedItem)}
        close={closeProduct}
        addToCart={addToCart}
      />
    </>
  );
}