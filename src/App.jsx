import { useMemo, useState } from "react";
import { ShoppingBag, Search, ChevronRight } from "lucide-react";

import logo from "./assets/logo-01.png";
const LOGO_SRC = logo;

// 🎯 Demo product data — replace with your real items
// const DEMO_PRODUCTS = [
//   { id: "p1", name: "Crystal Hoodie", price: "49,90 €", badge: "Nouveauté", tags: ["textile", "streetwear"], description: "Sweat à capuche coupe unisexe, impression violet profond, coton bio 300 g/m².", image: "https://images.unsplash.com/photo-1548883354-7622d03aca29?q=80&w=1200&auto=format&fit=crop" },
//   { id: "p2", name: "Sticker Pack — Violet Shards", price: "5,00 €", badge: "Best-seller", tags: ["stickers", "goodies"], description: "Lot de 6 stickers vinyle résistants à l’eau, finition mate, formats variés.", image: "https://images.unsplash.com/photo-1620484912022-9b8b2cd5e7f9?q=80&w=1200&auto=format&fit=crop" },
//   { id: "p3", name: "Tote Bag Améthyste", price: "14,90 €", tags: ["goodies", "textile"], description: "Tote bag robuste 320 g/m², sérigraphie violet, anses longues.", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop" },
//   { id: "p4", name: "Mousepad Crystal Grid", price: "19,90 €", tags: ["accessoires", "bureau"], description: "Tapis de souris XL, base antidérapante, bord cousu, design géométrique.", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" },
// ];
const DEMO_PRODUCTS = [
  { id: "p1", name: "Aucun produit pour le moment", price: "", badge: "Nouveauté", tags: [], description: "", image: "https://images.unsplash.com/photo-1548883354-7622d03aca29?q=80&w=1200&auto=format&fit=crop" }
]


export default function ShowcaseSite() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState(null);

  const allTags = useMemo(() => Array.from(new Set(DEMO_PRODUCTS.flatMap(p => p.tags))).sort(), []);
  const products = useMemo(() => {
    const t = (q || tag) ? DEMO_PRODUCTS.filter(p => {
      const hitQ = q ? `${p.name} ${p.description} ${p.tags.join(" ")}`.toLowerCase().includes(q.toLowerCase()) : true;
      const hitTag = tag ? p.tags.includes(tag) : true;
      return hitQ && hitTag;
    }) : DEMO_PRODUCTS;
    return t;
  }, [q, tag]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Logo" className="h-9 w-9 object-contain select-none" />
            <span className="font-semibold tracking-tight text-violet-700">Esimerch</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {/* <a href="#produits" className="hover:text-violet-700 transition-colors">Produits</a> */}
            <a href="#apropos" className="hover:text-violet-700 transition-colors">À propos</a>
            <a href="#contact" className="hover:text-violet-700 transition-colors">Contact</a>
          </nav>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScyOPXon3mr4aobryx-jSAtyyv0CN1GD1AtZHcL_2RHy5dplg/viewform?usp=header" className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-violet-800 transition-colors">Remplir le sondage</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_90%_at_10%_10%,rgba(124,58,237,0.12),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-200">
                <ShoppingBag className="h-3.5 w-3.5" />Phase 1 : Sondage
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                <span className="text-violet-700">Esimerch</span> revient bientôt !
              </h1>
              <p className="mt-4 text-neutral-600 max-w-prose">
                Faites-nous part de vos envies en remplissant ce Gform. Promis, il ne vous prendra que 2 minutes.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScyOPXon3mr4aobryx-jSAtyyv0CN1GD1AtZHcL_2RHy5dplg/viewform?usp=header" className="rounded-2xl bg-violet-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-violet-800 transition-colors inline-flex items-center gap-2">
                  Remplir le sondage 
                </a>
                {/* <a href="#contact" className="rounded-2xl ring-1 ring-neutral-300 px-5 py-3 font-medium hover:bg-neutral-50 transition-colors">
                  Passer commande
                </a> */}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-100 via-white to-white" />
              <div className="rounded-[2rem] p-6 ring-1 ring-neutral-200 bg-white shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl grid place-items-center">
                  <img src={LOGO_SRC} alt="Logo" className="max-w-[400px] w-full h-auto object-contain opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits
      <section id="produits" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Produits</h2>
            <p className="text-neutral-600 mt-1">Ajoutez / modifiez vos fiches dans le tableau JS (DEMO_PRODUCTS).</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="flex items-center gap-2 rounded-2xl ring-1 ring-neutral-300 px-3 py-2 w-full sm:w-80 bg-white">
              <Search className="h-4 w-4 text-neutral-500" />
              <input type="text" placeholder="Rechercher…" value={q} onChange={(e) => setQ(e.target.value)} className="w-full outline-none placeholder:text-neutral-400 text-sm" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-600 hidden sm:inline">Filtre</span>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setTag(null)} className={`text-sm rounded-xl px-3 py-1.5 ring-1 transition-colors ${tag === null ? "bg-violet-700 text-white ring-violet-700" : "ring-neutral-300 hover:bg-neutral-50"}`}>Tous</button>
                {allTags.map((t) => (
                  <button key={t} onClick={() => setTag(t)} className={`text-sm rounded-xl px-3 py-1.5 ring-1 transition-colors ${tag === t ? "bg-violet-700 text-white ring-violet-700" : "ring-neutral-300 hover:bg-neutral-50"}`}>{t}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        {/* 
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl ring-1 ring-neutral-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
                {p.badge && (
                  <div className="absolute left-3 top-3 rounded-full bg-violet-700/90 text-white text-xs px-2.5 py-1 shadow">{p.badge}</div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-tight">{p.name}</h3>
                  <span className="font-medium text-violet-700 whitespace-nowrap">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (<span key={t} className="text-xs rounded-full bg-violet-50 text-violet-700 px-2 py-1 ring-1 ring-violet-200">{t}</span>))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#contact" className="text-sm font-medium text-violet-700 hover:text-violet-800 inline-flex items-center gap-1">Demander infos <ChevronRight className="h-4 w-4" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> 
      */}

      {/* À propos */}
      <section id="apropos" className="bg-gradient-to-b from-white to-violet-50/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">À propos d'Esimerch</h2>
            <p className="mt-3 text-neutral-700">Esimerch est un projet étudiant de Grenoble INP - Esisar ayant pour objectif de financer en partie le <b>Stage Ski Etude</b> des 1A et 2A. Pour cela, nous vous proposerons bientôt la vente de merch aux couleurs de notre école et de notre belle mascotte Poulpy ! </p>
          </div>
          <div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src={LOGO_SRC} alt="Logo" className="h-12 w-12" />
              <div>
                <p className="font-semibold">L'équipe 2025-2026</p>
                <p className="text-sm text-neutral-600">Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Commande */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Passer une commande</h2>
            <p className="mt-2 text-neutral-700">Les commandes ouvriront bientôt. Restez informés.</p>
            <div className="mt-6">
              {/* <a href="https://forms.gle/votreLienIci" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-violet-800">
                Ouvrir le formulaire Google Form
              </a> */}
            </div>
          </div>
          <div className="rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-violet-600 to-violet-800 text-white p-6">
            <h3 className="text-lg font-semibold">Infos pratiques</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-white/80">Email</dt>
                <dd className="col-span-2"><a className="underline hover:no-underline" href="mailto:esimerch1@gmail.com">esimerch1@gmail.com</a></dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-white/80">Instagram</dt>
                <dd className="col-span-2">@<a className="underline hover:no-underline" href="https://instagram.com/esimerch">esimerch</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Logo" className="h-7 w-7" />
            <span className="text-sm text-neutral-600">© {new Date().getFullYear()} — Esimerch</span>
          </div>
          <div className="text-sm text-neutral-600"><a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">admin</a></div>
        </div>
      </footer>
    </div>
  );
}
