import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Star, Clock, Users, Award, Car } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/layout/CTABanner";

const SITE_URL = "https://www.sunflodetailing.com";

export const metadata: Metadata = {
  title: "About Sunflo Detailing — Oakland Park, FL Auto Detailing Studio",
  description:
    "Learn about Sunflo Detailing — a professional auto detailing studio in Oakland Park, FL founded in 2017. Meet the owner and team behind 2,000+ ceramic coatings, paint corrections, and detail jobs across South Florida.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sunflo Detailing — Oakland Park, FL Auto Detailing Studio",
    description:
      "Learn about Sunflo Detailing — a professional auto detailing studio in Oakland Park, FL founded in 2017. Meet the owner behind 2,000+ ceramic coatings, paint corrections, and detail jobs across South Florida.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/images/about/founder.jpg",
        width: 1200,
        height: 800,
        alt: "Jason — Owner & Lead Detailer at Sunflo Detailing in Oakland Park, FL",
      },
    ],
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about`,
  name: "About Sunflo Detailing",
  url: `${SITE_URL}/about`,
  mainEntity: { "@id": `${SITE_URL}#business` },
  about: { "@id": `${SITE_URL}#jason` },
};

// Expanded Person schema for the About page.
// The root layout emits a lightweight Person node; this one adds richer detail
// for E-E-A-T and Knowledge Panel signals.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#jason`,
  name: "Jason Girasol",
  jobTitle: "Owner & Lead Detailer",
  worksFor: { "@id": `${SITE_URL}#business` },
  description:
    "Jason has been in the auto detailing trade since 2017, specializing in paint correction, ceramic coatings, and PPF in South Florida.",
  knowsAbout: [
    "Auto Detailing",
    "Ceramic Coating",
    "Paint Correction",
    "Paint Protection Film",
    "Window Tinting",
    "South Florida vehicle care",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

const stats = [
  { label: "Years in Business", value: "9+", icon: Clock },
  { label: "Vehicles Detailed", value: "2,000+", icon: Car },
  { label: "Google Reviews", value: "120+", icon: Star },
  { label: "Average Rating", value: "5.0★", icon: Award },
  { label: "Studio Hours", value: "Mon–Fri 8am–6pm", icon: Users },
];

const services = [
  {
    title: "Ceramic Coating",
    body: "Ceramic coating is the most durable paint protection available outside of PPF. Sunflo applies CarPro CQuartz ceramic coatings in a fully climate-controlled bay, which is critical — humidity, dust, and temperature swings during cure will compromise the bond. A single-layer CQuartz coating adds years of UV and chemical resistance to clear coat; our multi-layer packages extend that protection further. In South Florida's relentless sun, an unprotected clear coat can oxidize within two to three years. Ceramic coating dramatically slows that degradation, keeps the paint hydrophobic, and makes routine washing significantly easier.",
  },
  {
    title: "Paint Correction",
    body: "Paint correction is the process of removing swirl marks, light scratches, water-spot etching, and oxidation from the clear coat using machine polishers and professional-grade compounds. At Sunflo, every correction begins with a paint-depth measurement to confirm there is enough clear coat to safely work. We use a multi-stage process — cutting, refining, finishing — with ShineSupply compounds matched to the specific defect severity of each panel. The result is a dramatically improved gloss and clarity before any coating or protection is applied on top. Skipping correction before ceramic coating or PPF simply locks in the defects permanently.",
  },
  {
    title: "Paint Protection Film (PPF)",
    body: "XPEL PPF is a virtually invisible urethane film applied to the most vulnerable surfaces of a vehicle — typically the front bumper, hood, fenders, mirrors, rocker panels, and door edges. PPF self-heals from minor swirls and stone chips with heat, and unlike ceramic coating it provides physical impact protection. South Florida's highways — particularly I-95 and the Turnpike — generate substantial road debris, and vehicles driven frequently on these corridors see meaningful stone chip damage within the first year of ownership. Full-front or full-body PPF installs are among the most popular services at the shop.",
  },
  {
    title: "Detailing Packages",
    body: "Full detail packages range from our entry-level exterior wash and decontamination through our flagship multi-day paint correction and ceramic coating combination. Interior work includes leather conditioning and reconditioning, deep carpet extraction, headliner cleaning, and engine bay detailing. We also offer headlight restoration for severely yellowed or hazed lenses — a common problem in Florida where UV exposure accelerates lens degradation. Every package begins with a thorough paint decontamination: iron fallout removal and clay bar to strip embedded brake dust and road grime before any machine work begins.",
  },
];

const serviceArea = [
  {
    city: "Oakland Park",
    note: "Our home base. Most of our repeat clientele are Oakland Park residents who drop in monthly for maintenance washes and annual coating inspections.",
  },
  {
    city: "Fort Lauderdale",
    note: "Fort Lauderdale clients account for a large share of our ceramic coating and PPF work — many drop off before heading to Las Olas or their office downtown.",
  },
  {
    city: "Wilton Manors",
    note: "Wilton Manors is a short drive away and we see a steady stream of luxury and daily driver clients from there for everything from interior refreshes to multi-stage corrections.",
  },
  {
    city: "Pompano Beach",
    note: "Clients from Pompano Beach often drive in for larger jobs — PPF installs, ceramic coating packages — and the drive time is under 15 minutes.",
  },
  {
    city: "Pembroke Pines",
    note: "One of our most active south Broward markets. Families, daily drivers, and a strong referral network bring a steady volume of clients up from the Pines for ceramic coatings and interior work.",
  },
  {
    city: "Weston",
    note: "Weston clients often arrive with luxury and exotic vehicles looking for paint correction and PPF — an affluent community with high standards for vehicle appearance.",
  },
  {
    city: "Davie",
    note: "Davie's mix of trucks, equestrian vehicles, and daily drivers keeps a diverse range of work coming through — decontamination details, ceramic coatings, and tint installs.",
  },
  {
    city: "Cooper City",
    note: "Cooper City residents tend to be long-term vehicle owners who want protection that holds up. A tight-knit community that takes detail quality seriously.",
  },
  {
    city: "Hollywood",
    note: "Hollywood clients range from beachside vehicles needing heavy decontamination to Emerald Hills luxury cars coming in for PPF and high-end ceramic coatings.",
  },
  {
    city: "Plantation",
    note: "Plantation's professional commuter population brings in leased luxury vehicles for ceramic coating and new vehicle protection — one of our fastest-growing service areas.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 bg-dark-muted border-b border-dark-border">
        <Container>
          <SectionHeading
            as="h1"
            label="Oakland Park, FL — Est. 2017"
            title="About Sunflo Detailing"
            subtitle="Sunflo Detailing is a professional auto detailing studio in Oakland Park, Florida, serving South Florida since 2017. From daily drivers to exotics, we handle ceramic coatings, paint correction, PPF, window tinting, vinyl wraps, and full detail packages — all in-house, by the same hands, every time."
          />
        </Container>
      </section>

      {/* ── Section 2: The Story ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-dark">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            {/* Founder image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-dark-border">
                <Image
                  src="/images/about/founder.jpg"
                  alt="Jason — Owner & Lead Detailer at Sunflo Detailing, Oakland Park FL"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm">
                  <MapPin size={11} className="text-brand-400 shrink-0" />
                  <span className="text-brand-400 text-[11px] font-medium tracking-wide">
                    Oakland Park · South Florida
                  </span>
                </div>
              </div>
            </div>

            {/* Story copy */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4">
                The Story
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Built on One Principle: Do It Right
              </h2>

              <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                <p>
                  Jason Girasol started Sunflo Detailing in Oakland Park in 2017 with a straightforward philosophy:
                  if you&apos;re going to protect someone&apos;s vehicle, do it correctly — or don&apos;t do
                  it at all. He had been detailing cars for several years before opening the studio, working
                  through every mistake and learning curve in private before building the business around
                  what he knew worked. That foundation shows in the consistency of the work today.
                </p>
                <p>
                  The studio at 4708 NE 11th Ave is a climate-controlled, professional-grade detailing bay
                  with purpose-built lighting rigs. That setup is not incidental — it is central to the
                  quality of the output. Paint defects that are invisible under a cloudy sky show up
                  immediately under a high-CRI raking light. Humidity control during ceramic coating cure
                  is the difference between a coating that bonds properly and one that fails in six months.
                  The investment in the environment reflects the commitment to the work.
                </p>
                <p>
                  South Florida is one of the harshest environments in the country for vehicle paint.
                  The UV index in Broward County routinely hits 10 or 11 — levels that accelerate clear
                  coat oxidation at twice the rate of states in the Mid-Atlantic or Midwest. Salt air from
                  the Atlantic coast embeds into panel gaps and brake components. Tropical rainstorms deposit
                  minerals that etch into unprotected clear coat in as little as a few weeks during summer.
                  And the combination of stop-and-go traffic on I-95 and the Florida Turnpike means constant
                  stone chip exposure for the front-end of any vehicle driven regularly. Jason built Sunflo
                  specifically for these conditions — not as a general detail shop that also operates in
                  Florida, but as a studio that has spent nine years developing protocols tuned specifically
                  to the South Florida environment.
                </p>
                <p>
                  Over the past nine years the shop has completed more than 2,000 vehicle services — from
                  a single-stage paint correction on a Honda to a full-body XPEL PPF install on a McLaren.
                  The range of vehicles and conditions the team has worked through gives Sunflo a depth
                  of experience that general-purpose detail shops simply don&apos;t accumulate. Every car
                  teaches something, and over 2,000 cars later, the catalog of experience is extensive.
                </p>
                <p>
                  The in-house policy is non-negotiable. Every service performed at Sunflo is done by
                  the Sunflo team — no subcontractors, no outsourced installs, no off-site work. That
                  policy is what makes the consistency possible. When the same hands are doing the work
                  every time, standards stay constant. The 120+ five-star Google reviews are a direct
                  result of that consistency.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-dark-border flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <p
                    className="text-xl text-white italic mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    — Jason a.k.a Flo
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-gray-400">
                    Owner &amp; Lead Detailer
                  </p>
                </div>
                <div className="flex sm:justify-end items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={13} className="text-brand-400 shrink-0" />
                  <span>4708 NE 11th Ave, Oakland Park, FL 33334</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Section 3: What We Work On ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-dark-muted border-t border-dark-border">
        <Container>
          <div className="mb-14">
            <SectionHeading
              label="Services & Vehicles"
              title="What We Work On"
              subtitle="Daily drivers, exotics, trucks, boats, and RVs — if it has paint or an interior, we can detail it. Porsche, BMW, Ferrari, McLaren, Tesla, Ford, RAM, Rolls-Royce — we have seen them all in the bay."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative p-7 border border-dark-border rounded-sm bg-dark/60"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-px bg-brand-500/60" />
                <div className="absolute top-0 left-0 w-px h-8 bg-brand-500/60" />

                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>

          {/* Vehicle type pills */}
          <div className="mt-12">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4">
              Vehicle Types We See
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Daily Drivers",
                "Luxury Sedans",
                "Sports Cars",
                "Exotics",
                "SUVs & Crossovers",
                "Trucks",
                "Boats",
                "RVs",
                "Show Cars",
                "Pre-Delivery Inspections",
              ].map((type) => (
                <span
                  key={type}
                  className="px-3 py-1.5 text-xs font-medium tracking-wide border border-dark-border text-gray-400 rounded-sm bg-dark/40"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 4: By the Numbers ────────────────────────────────────── */}
      {/* TODO(owner): update Google review count before launch — pull from live GBP */}
      <section className="py-20 sm:py-28 bg-dark border-t border-dark-border">
        <Container>
          <div className="mb-14 text-center">
            <SectionHeading
              label="The Record"
              title="By the Numbers"
              centered
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="relative flex flex-col items-center text-center p-6 border border-dark-border rounded-sm bg-dark-muted/60"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-px bg-brand-500/50" />
                <Icon size={20} className="text-brand-400 mb-3" />
                <p
                  className="text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value}
                </p>
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 5: Products & Approach ──────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-dark-muted border-t border-dark-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

            <div className="lg:col-span-5">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-4">
                Products & Approach
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Professional-Grade Materials Only
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-5">
                Consumer-grade detailing products sold at auto parts stores are formulated to be
                forgiving and easy to apply — which means they&apos;re diluted and short-lived.
                Professional-grade products require more preparation, more skill, and more controlled
                conditions to apply correctly. They also last significantly longer and perform better
                under real-world conditions. That trade-off is exactly why professional shops exist.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The materials Sunflo uses — CarPro CQuartz for ceramic coatings, XPEL for PPF,
                3M for window film, and ShineSupply for compounds and polishes — are the same
                products used by top-ranked detailing shops across the country. They are not the
                cheapest option. They are the correct option for clients who want work that holds up
                for years in South Florida conditions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    brand: "CarPro CQuartz",
                    use: "Ceramic Coating",
                    detail:
                      "A professional-grade SiO₂ ceramic coating that bonds to clear coat at the nano level. Applied in a climate-controlled environment for a proper cure — no shortcuts.",
                  },
                  {
                    brand: "XPEL",
                    use: "Paint Protection Film",
                    detail:
                      "XPEL Ultimate Plus PPF is self-healing, optically clear, and backed by a manufacturer warranty. We cut and apply it using precision plotters for consistent, seamless coverage.",
                  },
                  {
                    brand: "3M",
                    use: "Window Film",
                    detail:
                      "3M Crystalline and FX series window films block UV and infrared heat without the purple tint that cheaper films develop over time. Important in Florida's year-round sun.",
                  },
                  {
                    brand: "ShineSupply",
                    use: "Compounds & Polishes",
                    detail:
                      "ShineSupply compounds are matched to paint hardness and defect severity. Using the wrong cut on the wrong paint removes too much clear coat — matching the product to the job matters.",
                  },
                ].map((product) => (
                  <div
                    key={product.brand}
                    className="p-6 border border-dark-border rounded-sm bg-dark/60"
                  >
                    <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-brand-500 mb-1">
                      {product.use}
                    </p>
                    <p
                      className="text-base font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {product.brand}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">{product.detail}</p>
                  </div>
                ))}
              </div>

              {/* In-house policy callout */}
              <div className="mt-5 p-6 border border-brand-500/25 rounded-sm bg-brand-500/5">
                <p
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  In-House Only — No Subcontractors
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every service at Sunflo is performed by our own team in our own studio. We do not
                  send PPF installs to a third party, outsource ceramic coating applications, or
                  subcontract window tinting. Keeping the work in-house is the only way to maintain
                  consistent quality and stand behind every job we do.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 6: Service Area ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-dark border-t border-dark-border">
        <Container>
          <div className="mb-14">
            <SectionHeading
              label="Where We Serve"
              title="South Florida Service Area"
              subtitle="Sunflo Detailing serves Oakland Park and surrounding Broward County cities. Drop off at our studio at 4708 NE 11th Ave, or book a mobile appointment and we come to you."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceArea.map(({ city, note }) => (
              <div
                key={city}
                className="flex flex-col gap-3 p-6 border border-dark-border rounded-sm bg-dark-muted/40"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-brand-400 shrink-0" />
                  <p
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {city}
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 border border-dark-border rounded-sm bg-dark-muted/40">
            <div className="flex items-start gap-3">
              <Phone size={14} className="text-brand-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  Not sure if we serve your area?
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Call or text us at{" "}
                  <a
                    href="tel:+19542356882"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    (954) 235-6882
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:sunflodetailing@gmail.com"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    sunflodetailing@gmail.com
                  </a>
                  . Most of our clients are within 20 minutes of the studio.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 7: CTA ──────────────────────────────────────────────── */}
      <CTABanner
        title="Ready to Protect Your Vehicle?"
        subtitle="Schedule a consultation or drop off at our Oakland Park studio. We'll evaluate your paint and recommend the right service for your vehicle and budget."
        buttonText="Book Your Service"
        buttonHref="/contact"
      />
    </>
  );
}
