import type { FAQ, FaqCategory } from "@/types";

export const faqCategories: { id: FaqCategory; label: string }[] = [
  { id: "services", label: "Services & Process" },
  { id: "pricing", label: "Pricing & Booking" },
  { id: "aftercare", label: "Aftercare" },
  { id: "location", label: "Service Area & Location" },
];

export const faqs: FAQ[] = [
  // Services & Process
  {
    id: "1",
    category: "services",
    question: "How long does a full detail take?",
    answer:
      "It depends on the package and vehicle size. A Complete Interior Detail typically takes 3–5 hours. Gloss Enhancement and Paint Enhancement packages take 6–10 hours. Full Paint Correction can take one to two full days. We always prioritize quality over speed — every vehicle gets the time it deserves.",
  },
  {
    id: "2",
    category: "services",
    question: "What's the difference between the Gloss Enhancement and Paint Enhancement packages?",
    answer:
      "The Gloss Enhancement targets above-surface defects — light scratches, water spots, and oxidation — and is finished with an entry-level ceramic coating. The Paint Enhancement goes deeper, addressing light swirls and some below-surface defects, and is topped with a pro-grade ceramic coating for superior protection and depth of shine.",
  },
  {
    id: "3",
    category: "services",
    question: "What does ceramic coating do and how long does it last?",
    answer:
      "Ceramic coating forms a semi-permanent protective layer on your paint that bonds at the molecular level. It repels water, dirt, and contaminants, makes future cleaning much easier, provides UV protection to prevent fading, and adds an intense depth of gloss that wax simply can't match. Unlike wax which wears off in weeks, a professional ceramic coating installed by Sunflo Detailing lasts 2–5+ years depending on the grade applied.",
  },
  {
    id: "4",
    category: "services",
    question: "Do you offer paint protection film (PPF), window tinting, and wraps?",
    answer:
      "Yes. In addition to detailing and ceramic coatings, we offer full paint protection film (PPF), window tinting, and vinyl wraps. These services are quoted individually based on vehicle size and coverage area — contact us for a custom estimate.",
  },
  {
    id: "5",
    category: "services",
    question: "What's included in a Complete Interior Detail?",
    answer:
      "Our Complete Interior Detail covers a thorough vacuum of all surfaces, deep cleaning of carpets and floor mats, leather or fabric seat treatment, dashboard and trim wipe-down, door jamb cleaning, and glass polishing inside. We use professional-grade products safe for every interior material, leaving your cabin fresh and spotless.",
  },
  {
    id: "6",
    category: "services",
    question: "Can you do paint correction on a vehicle with PPF already installed?",
    answer:
      "Paint correction should ideally be performed before PPF installation, not after, since the film itself cannot be machine-polished. If your existing PPF has yellowed or scratched, the correct approach is to remove and replace the affected sections. We can advise you on the best sequence of services during your consultation.",
  },
  // Pricing & Booking
  {
    id: "7",
    category: "pricing",
    question: "What size category does my vehicle fall into?",
    answer:
      "Small vehicles include compact cars and sedans. Medium vehicles include mid-size sedans, coupes, and most crossovers. Large vehicles include full-size SUVs, trucks, and extended vans. If you're unsure about your vehicle's tier, reach out and we'll help you determine the right category before booking.",
  },
  {
    id: "8",
    category: "pricing",
    question: "Do I need to make an appointment?",
    answer:
      "Yes, we work by appointment only. This ensures every client receives our full, undivided attention and the highest quality results. Contact us via phone, our website form, or DM us on Instagram (@sunflodetailing) to schedule your session.",
  },
  {
    id: "9",
    category: "pricing",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, Zelle, Venmo, CashApp, and major credit/debit cards. Payment is typically collected at time of service. For larger packages like full paint correction or ceramic coating, we may require a deposit to hold your appointment — we'll confirm this when you book.",
  },
  {
    id: "10",
    category: "pricing",
    question: "Do you require a deposit to book an appointment?",
    answer:
      "For standard interior and gloss enhancement packages, no deposit is required. For more involved services — paint correction, ceramic coating, PPF, and wraps — a deposit may be required to secure your spot on the schedule. We'll let you know the deposit amount when confirming your booking.",
  },
  // Aftercare
  {
    id: "11",
    category: "aftercare",
    question: "How soon after a ceramic coating can I wash my car?",
    answer:
      "We recommend avoiding any washing, including rain exposure, for at least 7 days after a ceramic coating application. This allows the coating to fully cure and bond to your paint. After that, use only pH-neutral car shampoos and the two-bucket wash method or a foam cannon to protect the coating.",
  },
  {
    id: "12",
    category: "aftercare",
    question: "Can I take my car through an automatic car wash after detailing?",
    answer:
      "We strongly advise against automatic car washes with brushes or bristles — they introduce micro-scratches and swirl marks that undo the paint correction or coating work. If you need a quick rinse, use a touchless or rinseless wash. Better yet, we'll teach you our recommended hand-washing routine so your results last as long as possible.",
  },
  {
    id: "13",
    category: "aftercare",
    question: "What products should I use to maintain my detail at home?",
    answer:
      "For ceramic-coated vehicles, use a pH-neutral car shampoo (we recommend brands like Gtechniq, CarPro, or Chemical Guys). Avoid waxes and sealants on coated paint — they can inhibit the hydrophobic properties. A quick detailer spray between washes is fine. For paint-corrected but un-coated paint, the two-bucket wash method with a quality microfiber mitt is essential.",
  },
  {
    id: "14",
    category: "aftercare",
    question: "How often should I have my vehicle professionally detailed?",
    answer:
      "For ceramic-coated vehicles, we recommend a maintenance detail every 6–12 months to decontaminate the surface and top up the hydrophobic layer. For vehicles without protective coatings, a full detail every 3–6 months is ideal depending on driving conditions, parking situation, and South Florida's intense sun and humidity.",
  },
  // Service Area & Location
  {
    id: "15",
    category: "location",
    question: "Where are you located?",
    answer:
      "We are located at 4708 NE 11th Ave, Oakland Park, Florida 33334. Our shop is just minutes from Fort Lauderdale and easily accessible from I-95. Ample parking is available on-site — simply drop off your vehicle and we'll take it from there.",
  },
  {
    id: "16",
    category: "location",
    question: "What areas of South Florida do you serve?",
    answer:
      "Sunflo Detailing serves all of South Florida — including Fort Lauderdale, Pompano Beach, Wilton Manors, Lauderdale-by-the-Sea, Lighthouse Point, Deerfield Beach, Boca Raton, and Miami. You can drop off at our Oakland Park studio or book a mobile appointment and we&apos;ll come to you. Call us to figure out which option works best for your specific service.",
  },
  {
    id: "17",
    category: "location",
    question: "Do you offer mobile detailing?",
    answer:
      "Yes — Sunflo Detailing offers both studio and mobile appointments. Drop off at our Oakland Park studio at 4708 NE 11th Ave, or we can come to your home, office, or wherever your vehicle is located across South Florida. Some services — like multi-stage paint correction and ceramic coating applications — deliver better results in our climate-controlled studio environment, but we offer mobile for a wide range of detailing work. Call or message us and we&apos;ll recommend the right setup for your job.",
  },
  {
    id: "18",
    category: "location",
    question: "How long has Sunflo Detailing been in business?",
    answer:
      "Sunflo Detailing has been serving South Florida vehicle owners since 2017. With over 9 years of experience and more than 2,000 vehicles serviced across Oakland Park, Fort Lauderdale, and the greater Broward County area, we've built a reputation for premium results and meticulous attention to detail.",
  },
];
