"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Category } from "./Category";
import { CategoryListDropdown } from "./CategoryListDropdown";
import { Link, useNavigate } from "react-router-dom";
import vidBg from "../../assets/bg-vid.mp4";
import { DATA } from "../../data/dataUtils";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
  { name: "Technical Guide", href: "/technical-guide" },
];

type ParentT = {
  parentCategory: string;
  id: string;
  categories: {
    category: string;
    id: string;
    products: { id: string; name: string; brand: string; images: string[] }[];
  }[];
};

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // focus when opened
  useEffect(() => {
    if (!searchOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [searchOpen]);

  // keyboard: Cmd/Ctrl+K to open, Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click outside to close
  useEffect(() => {
    if (!searchOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!shellRef.current) return;
      if (!shellRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [searchOpen]);

  // recent
  useEffect(() => {
    try {
      const raw = localStorage.getItem("tsc_recent_searches");
      if (raw) setRecent(JSON.parse(raw));
    } catch {}
  }, []);
  const pushRecent = (term: string) => {
    try {
      const next = [term, ...recent.filter((r) => r !== term)].slice(0, 7);
      setRecent(next);
      localStorage.setItem("tsc_recent_searches", JSON.stringify(next));
    } catch {}
  };

  // flatten DATA for fast searching
  const source = DATA as ParentT[];

  const parentsIndex = useMemo(
    () =>
      source.map((p) => ({
        id: p.id,
        name: p.parentCategory,
      })),
    [source]
  );

  const categoriesIndex = useMemo(
    () =>
      source.flatMap((p) =>
        p.categories.map((c) => ({
          parentId: p.id,
          parentName: p.parentCategory,
          id: c.id,
          name: c.category,
        }))
      ),
    [source]
  );

  const productsIndex = useMemo(
    () =>
      source.flatMap((p) =>
        p.categories.flatMap((c) =>
          c.products.map((pr) => ({
            parentId: p.id,
            parentName: p.parentCategory,
            categoryId: c.id,
            categoryName: c.category,
            id: pr.id,
            name: pr.name,
            brand: pr.brand,
            image: pr.images?.[0] || "",
          }))
        )
      ),
    [source]
  );

  // filter by query
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) {
      return {
        parents: [] as typeof parentsIndex,
        categories: [] as typeof categoriesIndex,
        products: [] as typeof productsIndex,
      };
    }
    const inName = (s: string) => s.toLowerCase().includes(q);

    const parents = parentsIndex.filter((p) => inName(p.name)).slice(0, 6);
    const categories = categoriesIndex
      .filter((c) => inName(c.name))
      .slice(0, 8);
    const products = productsIndex
      .filter((pr) => inName(pr.name) || inName(pr.brand || ""))
      .slice(0, 10);

    return { parents, categories, products };
  }, [q, parentsIndex, categoriesIndex, productsIndex]);

  // build hrefs per your rules
  const parentHref = (parentId: string) => `/category/${parentId}`;
  const categoryHref = (parentId: string, categoryId: string) =>
    `/category/${parentId}/${categoryId}`;
  const productHref = (
    parentId: string,
    categoryId: string,
    productName: string
  ) => `/category/${parentId}/${categoryId}?${encodeURIComponent(productName)}`;

  return (
    <div className="">
      {/* video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={vidBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* marquee banner */}
      <div className="w-full bg-white border-b-2 border-white text-black py-2 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap text-sm">
          <span className="mx-28">
            Welcome to Tirupati Sales Corporation Since 1993!!!! India’s Biggest
            & Trusted Distributor & Servicing Company with annual turnover 5000
            million & 150+ manpower
          </span>
          <span className="mx-28">
            Welcome to Tirupati Sales Corporation Since 1993!!!! India’s Biggest
            & Trusted Distributor & Servicing Company with annual turnover 5000
            million & 150+ manpower
          </span>
        </div>
      </div>

      <header className="inset-x-0 top-0 z-50 bg-black/20">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:p-5"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 pt-2 rounded-md">
              <span className="sr-only">Tirupati Sales</span>
              <img
                alt="Tirupati Sales Logo"
                src="https://www.tirupatisales.com/site/images/TSC-Logos-White-red.png"
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu + search */}
          <div className="flex lg:hidden">
            <div className="flex items-center gap-x-6">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="font-semibold text-white hover:text-black hover:bg-gray-50 rounded-md p-1"
              >
                <MagnifyingGlassIcon className="inline-block mr-1 size-5" />
              </button>
              <Link
                to="/cart"
                className="font-semibold text-white hover:text-black hover:bg-gray-50"
              >
                <ClipboardDocumentListIcon className="inline-block mr-1 size-5" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                aria-label="Open main menu"
              >
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <Category />
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="outline-0 gap-0 text-white cursor-pointer"
                asChild
              >
                <Link to={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="font-semibold text-white hover:text-black hover:bg-white px-2 py-1 rounded-md"
              title="Search (Ctrl/⌘K)"
            >
              <MagnifyingGlassIcon className="inline-block mr-1 size-5" />
            </button>
            <Link
              to="/cart"
              className="font-semibold text-white hover:text-black hover:bg-white px-2 py-1 rounded-md"
            >
              <ClipboardDocumentListIcon className="inline-block mr-1 size-5" />
            </Link>
          </div>
        </nav>

        {/* Search panel — glass + suggestions from DATA */}
        {searchOpen && (
          <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/30 backdrop-blur-sm transition-all duration-300">
            <div
              ref={shellRef}
              className="
              mt-12
        w-full max-w-[92%] sm:max-w-[750px]
        rounded-2xl bg-white
        ring-1 ring-black/5
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-transform duration-300 scale-100
      "
            >
              {/* input row */}
              <form className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, categories, parents…"
                  className="
            flex-1 border-0 bg-transparent focus:ring-0
            text-sm sm:text-base text-gray-900 placeholder:text-gray-500
          "
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="rounded-md p-1 hover:bg-black/5"
                    aria-label="Clear"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-600" />
                  </button>
                )}
              </form>

              {/* results */}
              <div
                className="px-3 sm:px-4 pb-3 sm:pb-4 grid gap-3 sm:gap-4 
             max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar"
              >
                {query ? (
                  <>
                    {/* Parents */}
                    {filtered.parents.length > 0 && (
                      <div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {filtered.parents.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={parentHref(p.id)}
                                onClick={() => {
                                  pushRecent(query);
                                  setSearchOpen(false);
                                }}
                                title={p.name}
                                className={[
                                  "relative block w-full overflow-hidden",
                                  "bg-white/70 px-3 py-2 text-sm ring-1 ring-black/5 hover:bg-[#dcddde] transition",
                                  "after:pointer-events-none after:content-['']",
                                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full",
                                  "after:origin-left after:scale-x-0 hover:after:scale-x-100",
                                  "after:bg-gradient-to-r after:from-orange-500 after:to-red-500",
                                  "after:transition-transform after:duration-300",
                                ].join(" ")}
                              >
                                <span className="block truncate">{p.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Categories */}
                    {filtered.categories.length > 0 && (
                      <div>
                        <div className="px-1 pb-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Categories
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {filtered.categories.map((c) => (
                            <li key={`${c.parentId}:${c.id}`}>
                              <Link
                                to={categoryHref(c.parentId, c.id)}
                                onClick={() => {
                                  pushRecent(query);
                                  setSearchOpen(false);
                                }}
                                title={`${c.name} — ${c.parentName}`}
                                className={[
                                  "relative block w-full overflow-hidden",
                                  " bg-white px-3 py-2 text-sm ring-1 ring-black/5 hover:bg-[#dcddde] transition",
                                  "after:pointer-events-none after:content-['']",
                                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full",
                                  "after:origin-left after:scale-x-0 hover:after:scale-x-100",
                                  "after:bg-gradient-to-r after:from-orange-500 after:to-red-500",
                                  "after:transition-transform after:duration-300",
                                ].join(" ")}
                              >
                                <span className="block truncate">{c.name}</span>
                                <span className="block text-[11px] text-gray-500 truncate">
                                  {c.parentName}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Products */}
                    {filtered.products.length > 0 && (
                      <div>
                        <div className="px-1 pb-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Products
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {filtered.products.map((pr) => (
                            <li key={pr.id} className="flex">
                              <Link
                                to={productHref(
                                  pr.parentId,
                                  pr.categoryId,
                                  pr.name
                                )}
                                onClick={() => {
                                  pushRecent(query);
                                  setSearchOpen(false);
                                }}
                                title={`${pr.name} — ${pr.brand || ""} ${
                                  pr.categoryName || ""
                                }`.trim()}
                                className={[
                                  "relative flex items-center gap-3 flex-1 overflow-hidden",
                                  "bg-white px-3 py-2 text-sm ring-1 ring-black/5 hover:bg-[#dcddde] transition",
                                  "after:pointer-events-none after:content-['']",
                                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full",
                                  "after:origin-left after:scale-x-0 hover:after:scale-x-100",
                                  "after:bg-gradient-to-r after:from-orange-500 after:to-red-500",
                                  "after:transition-transform after:duration-300",
                                ].join(" ")}
                              >
                                {pr.image ? (
                                  <img
                                    src={pr.image}
                                    alt={pr.name}
                                    className="h-8 w-8 object-contain bg-white shrink-0"
                                  />
                                ) : (
                                  <div className="h-8 w-8 border-[1px] bg-white shrink-0" />
                                )}
                                <div className="min-w-0">
                                  <div className="truncate">{pr.name}</div>
                                  <div className="text-[11px] text-gray-500 truncate">
                                    {[pr.brand, pr.categoryName]
                                      .filter(Boolean)
                                      .join(" · ")}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {filtered.parents.length === 0 &&
                      filtered.categories.length === 0 &&
                      filtered.products.length === 0 && (
                        <div className="px-1 py-2 text-sm text-gray-600">
                          No matches
                        </div>
                      )}
                  </>
                ) : (
                  // Idle: recent chips
                  <div className="grid gap-3">
                    {!!recent.length && (
                      <div>
                        <div className="px-1 pb-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Recent
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recent.map((r) => (
                            <button
                              key={r}
                              type="button"
                              title={r}
                              onClick={() => {
                                setQuery(r);
                              }}
                              className="max-w-[48%] sm:max-w-none truncate rounded-full bg-white/70 px-3 py-1.5 text-xs ring-1 ring-black/5 hover:bg-[#dcddde] transition"
                            >
                              <span className="truncate">{r}</span>
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              setRecent([]);
                              localStorage.removeItem("tsc_recent_searches");
                            }}
                            className="text-xs text-gray-600 underline/30 hover:underline"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full p-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between lg:p-8">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Tirupati Sales</span>
                <img
                  alt="Tirupati Sales Logo"
                  src="https://www.tirupatisales.com/site/images/Tirupati-Sales-Logo.webp"
                  className="h-9 w-auto"
                />
              </Link>
              <div className="flex items-center gap-x-6">
                <button
                  onClick={() => setSearchOpen((v) => !v)}
                  className="font-semibold text-gray-700"
                >
                  <MagnifyingGlassIcon className="inline-block mr-1 size-5" />
                </button>
                <Link
                  to="/cart"
                  className="font-semibold text-gray-700 hover:text-black"
                >
                  <ClipboardDocumentListIcon className="inline-block mr-1 size-5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <CategoryListDropdown setMobileMenuOpen={setMobileMenuOpen} />
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-700 hover:text-black hover:bg-gray-50 hover:border hover:border-[#E03131]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
