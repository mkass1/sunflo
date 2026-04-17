import Container from "@/components/ui/Container";

const brands = ["CarPro", "ShineSupply", "Lumar"];

export default function BrandStrip() {
  return (
    <section className="relative py-16 bg-dark border-y border-dark-border">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-400">
            Brands We Trust &amp; Use Every Day
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-x-5 sm:gap-x-12 gap-y-6">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-base sm:text-2xl font-bold text-gray-500 hover:text-gray-300 transition-colors tracking-wide whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
