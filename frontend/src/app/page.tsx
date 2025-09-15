import { Banner } from "@/components/Banner";
import { ProductsList } from "@/components/ProductsList";
import { ShopsList } from "@/components/ShopsList";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="grid grid-cols-[1fr_2fr] gap-2 px-6 py-12 bg-white rounded-b-xl min-h-screen">
        <div className="border-2 border-[var(--rosewood)] rounded-xl flex flex-col">
          <h2 className="p-4 text-xl text-center font-bold text-[var(--brown)]">
            Shops:
          </h2>
          <ShopsList />
        </div>

        <div className="border-2 border-[var(--rosewood)] rounded-xl">
          <div className="flex gap-4 justify-end text-xs text-[var(--brown)] p-4">
            <button
              type="button"
              className="p-1 border border-[var(--rosewood)] rounded-xl bg-[var(--cream)] hover:bg-[var(--blush)] transition-bg duration-200 cursor-pointer"
            >
              Sort by price
            </button>
            <button
              type="button"
              className="p-1 border border-[var(--rosewood)] rounded-xl bg-[var(--cream)] hover:bg-[var(--blush)] transition-bg duration-200 cursor-pointer"
            >
              Sort by date
            </button>
          </div>
          <ProductsList />
        </div>
      </section>
    </>
  );
}
