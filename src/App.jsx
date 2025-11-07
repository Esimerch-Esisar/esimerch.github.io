import { useMemo, useState } from "react";
import { ShoppingBag, Search, ChevronRight } from "lucide-react";

import logo from "./assets/logo-01.png";
const LOGO_SRC = logo;
import mug from "./assets/mug.png";
import flasque from "./assets/flasque.jpg";
import tapis from "./assets/tapis_souris.png";
import gourde from "./assets/gourde.jpg";
import decapsuleur from "./assets/decapsuleur_logo.jpg";
import plaid from "./assets/plaid.png";
import couverts from "./assets/couverts.png";


// 🎯 Demo product data — replace with your real items
const DEMO_PRODUCTS = [
  { id: "1", name: "Gourde", price: "16,00 €", badge: "", tags: ["Boissons"], description: "800 mL", image: gourde},
  { id: "2", name: "Mug", price: "14,00 €", badge: "Nouveauté", tags: ["Boissons"], description: "Pour offrir à votre prof d'élec préféré.", image: mug},
  { id: "3", name: "Décapsuleur", price: "6,50 €", badge: "Nouveauté", tags: ["Accessoires"], description: "On sait. Vous savez. On se sait.", image: decapsuleur},
  { id: "4", name: "Flasque", price: "15,00 €", tags: ["Boissons"], badge: "Nouveauté", description: "Boisson non incluse.", image: flasque},
  { id: "5", name: "Tapis de souris", price: "15,00 €", badge: "Nouveauté", tags: ["High Tech"], description: "Pour lancer vos meilleures game. Souris non inclue. Dimension : 22cm x 23cm", image: tapis},
  { id: "6", name: "Plaid", price: "28,00 €", badge: "Nouveauté", tags: ["Textile"], description: "Pour être au chaud tout l'hiver. Dimension : 120cm x 150cm", image: plaid},
];
// const DEMO_PRODUCTS = [
//   { id: "p1", name: "Aucun produit pour le moment", price: "", badge: "Nouveauté", tags: [], description: "", image: "url_here" }
// ]


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
            <a href="#produits" className="hover:text-violet-700 transition-colors">Produits</a>
            <a href="#apropos" className="hover:text-violet-700 transition-colors">À propos</a>
            <a href="#contact" className="hover:text-violet-700 transition-colors">Contact</a>
          </nav>
          {/* <a target="_blank" href="http://sondage.esimerch.fr" className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-violet-800 transition-colors">Remplir le sondage</a> */}
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSebED-OUEfa0O_tbKuZqJH65GeP3JUvZ2MaZrLhm3jcAPVLZg/viewform?usp=publish-editor" className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-violet-800 transition-colors">Commander</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_90%_at_10%_10%,rgba(124,58,237,0.12),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-200">
                <ShoppingBag className="h-3.5 w-3.5" />Phase 2 : Commande
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                <span className="text-violet-700">Esimerch</span> est de retour !
              </h1>
              <p className="mt-4 text-neutral-600 max-w-prose">
                {/* Faites-nous part de vos envies en remplissant ce Gform. Promis, il ne vous prendra que 2 minutes. */}
                La nouvelle collection Hiver 2025-2026 est de retour sur Esimerch ! Commandez dès maintenant vos articles préférés aux couleurs de l'Esisar et de notre mascotte Poulpy.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* <a target="_blank" href="http://sondage.esimerch.fr" className="rounded-2xl bg-violet-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-violet-800 transition-colors inline-flex items-center gap-2">
                  Remplir le sondage 
                </a> */}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSebED-OUEfa0O_tbKuZqJH65GeP3JUvZ2MaZrLhm3jcAPVLZg/viewform?usp=publish-editor" className="rounded-2xl bg-violet-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-violet-800 transition-colors inline-flex items-center gap-2">
                  Passer commande
                </a> 
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

      {/* Produits */}
      <section id="produits" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Produits</h2>
          </div>
          <p><i>Visuels non contractuels</i></p>
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
      

      {/* À propos */}
      <section id="apropos" className="bg-gradient-to-b from-white to-violet-50/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">À propos d'Esimerch</h2>
            <p className="mt-3 text-neutral-700">Esimerch est un projet étudiant de Grenoble INP - Esisar ayant pour objectif de financer en partie le <b>Stage Ski Etude</b> des 1A et 2A. Pour cela, nous vous proposons la vente de merch aux couleurs de notre école et de notre belle mascotte Poulpy ! </p>
          </div>
          <div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src={LOGO_SRC} alt="Logo" className="h-12 w-12" />
              <div>
                <p className="font-semibold">L'équipe 2025-2026</p>
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
            <p className="mt-2 text-neutral-700">Paiement par carte ou par virement <br /> <b>FR76 3000 3021 6000 0372 6526 741</b> en précisant dans le motif : <b>SSE-Esimerch-NomPrénom</b> Par exemple : SSE-Esimerch-MichuLulu</p>
            <div className="mt-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSebED-OUEfa0O_tbKuZqJH65GeP3JUvZ2MaZrLhm3jcAPVLZg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-violet-800">
                Commander
              </a>
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
