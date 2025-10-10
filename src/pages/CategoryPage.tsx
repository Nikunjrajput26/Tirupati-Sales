import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link, useParams, useLocation } from "react-router-dom";
import { CarouselDApiDemo } from "@/components/productDetails/ProductImagesCarousel";
import {
  getDataByParentAndCategory,
  getParentName,
  getProductSpecs,
} from "../data/dataUtils";
import { AppSidebar } from "@/components/DEMOProduct/app-sidebar";

// ---- Types ----
type Product = {
  id: string;
  name: string;
  brand?: string;
  images?: string[];
  image?: string;
};

type CategoryWithProducts = {
  category: string;
  id: string;
  products: Product[];
};

type ParentWithCategories = {
  parentCategory: string;
  id: string;
  categories: CategoryWithProducts[];
};

type RouteParams = {
  parentCatId: string;
  categoryId?: string;
};

// ---- Type guards ----
function hasProducts(obj: unknown): obj is CategoryWithProducts {
  return (
    !!obj && typeof obj === "object" && Array.isArray((obj as any).products)
  );
}
function hasCategories(obj: unknown): obj is ParentWithCategories {
  return (
    !!obj && typeof obj === "object" && Array.isArray((obj as any).categories)
  );
}

// normalize helper for matching product names coming from the query
const normalize = (s?: string) =>
  (s || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

export default function CategoryPage() {
  const { parentCatId, categoryId } = useParams<RouteParams>();
  const { search } = useLocation();

  // brand filter state
  const [brandFilter, setBrandFilter] = React.useState<string>("All");

  // query comes in as "?High%20Tension%20Power%20Cable%20%20%201%20Core"
  const rawQuery = search.startsWith("?")
    ? decodeURIComponent(search.slice(1))
    : "";
  const productQuery = normalize(rawQuery);

  let parentCatName: string | undefined;
  let productData: unknown;

  if (parentCatId) {
    parentCatName = getParentName(parentCatId);
    productData = getDataByParentAndCategory(parentCatId, categoryId);
  }

  // products in scope for this route
  const scopedProducts: Product[] = React.useMemo(() => {
    if (hasProducts(productData)) return productData.products ?? [];
    if (hasCategories(productData))
      return (productData.categories ?? []).flatMap((c) => c.products ?? []);
    return [];
  }, [productData]);

  // unique brands from scoped products
  const brands: string[] = React.useMemo(() => {
    const set = new Set<string>();
    for (const p of scopedProducts) {
      const b = p.brand?.trim();
      if (b) set.add(b);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [scopedProducts]);

  // apply product name query first (exact, then partial)
  const queryMatched: Product[] = React.useMemo(() => {
    if (!productQuery) return scopedProducts;

    const exact = scopedProducts.find(
      (p) => normalize(p.name) === productQuery
    );
    if (exact) return [exact];

    const partial = scopedProducts.find((p) =>
      normalize(p.name).includes(productQuery)
    );
    return partial ? [partial] : [];
  }, [scopedProducts, productQuery]);

  // then apply brand filter
  const items: Product[] = React.useMemo(() => {
    if (brandFilter === "All") return queryMatched;
    const target = brandFilter.toLowerCase();
    return queryMatched.filter(
      (p) => (p.brand || "").trim().toLowerCase() === target
    );
  }, [queryMatched, brandFilter]);

  const categoryTitle =
    hasProducts(productData) && productData.category
      ? productData.category
      : "";

  // simple count map for chips (optional but handy)
  const brandCounts = React.useMemo(() => {
    const m = new Map<string, number>();
    for (const p of queryMatched) {
      const key = p.brand?.trim() || "Unbranded";
      m.set(key, (m.get(key) || 0) + 1);
    }
    return m;
  }, [queryMatched]);

  return (
    <SidebarProvider style={{ fontFamily: "Inter, sans-serif" }}>
      <AppSidebar
        className=""
        selectedFilters={{}}
        setSelectedFilters={() => {}}
      />

      <SidebarInset>
        {/* Sticky header */}
        <header className="z-20 shadow-md border-b sticky top-0 bg-white">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-4">
            <SidebarTrigger className="-ml-1 shrink-0" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4 hidden sm:block"
            />
            {/* Breadcrumb — truncates on small screens */}
            <Breadcrumb className="font-bold min-w-0">
              <BreadcrumbList className="flex items-center gap-1 sm:gap-2">
                <BreadcrumbItem className="hidden md:block min-w-0">
                  {parentCatName ? (
                    <Link to={`/category/${parentCatId}`}>
                      <BreadcrumbLink className="uppercase block truncate max-w-[30vw]">
                        {parentCatName}
                      </BreadcrumbLink>
                    </Link>
                  ) : (
                    <BreadcrumbLink className="uppercase">
                      All Products
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {categoryTitle ? (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem className="min-w-0">
                      <BreadcrumbPage className="uppercase font-bold text-base sm:text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block truncate max-w-[60vw] sm:max-w-none">
                        <Link to={`/category/${parentCatId}/${categoryId}`}>
                          <BreadcrumbLink className="uppercase block truncate">
                            {categoryTitle}
                          </BreadcrumbLink>
                        </Link>
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : null}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Brand filter chips — scrollable row on mobile */}
          <div className="px-3 sm:px-4 pb-2 sm:pb-3">
            <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
              {[
                { label: "All", key: "All" },
                ...brands.map((b) => ({ label: `${b}`, key: b })),
              ].map(({ label, key }) => {
                const active = brandFilter === key;
                const count =
                  key === "All"
                    ? brandCounts.size
                      ? Array.from(brandCounts.values()).reduce(
                          (a, b) => a + b,
                          0
                        )
                      : queryMatched.length
                    : brandCounts.get(key) ?? 0;

                if (key !== "All" && count === 0) return null;

                return (
                  <button
                    key={key}
                    onClick={() => setBrandFilter(key)}
                    className={[
                      "whitespace-nowrap px-3 sm:px-4 py-1 rounded-full border text-xs sm:text-sm transition",
                      active
                        ? "border-transparent text-white bg-gradient-to-r from-orange-500 to-red-500"
                        : "border-gray-300 hover:border-orange-400 hover:text-orange-600",
                    ].join(" ")}
                  >
                    <span className="align-middle">{label}</span>
                    <span className="ml-2 text-[10px] sm:text-xs opacity-80 align-middle">
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 px-3 sm:px-4 py-4">
          <div className="grid auto-rows-min gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {items.length === 0 ? (
              <div className="col-span-full text-sm text-gray-500">
                No products match the selected filters.
              </div>
            ) : (
              items.map((prod) => {
                const cover = prod.images?.[0] ?? prod.image ?? "";
                const dialogImages =
                  prod.images ?? (prod.image ? [prod.image] : []);
                const safeName =
                  prod.name?.replace?.(/<br\s*\/?>/gi, " ") || "this product";

                return (
                  <Dialog key={prod.id}>
                    <DialogTrigger asChild>
                      <div className="group relative cursor-pointer bg-[#F7F7F7] p-3 sm:p-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transform transition duration-300 hover:shadow-lg h-full flex flex-col">
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                        {/* Image area with aspect ratio */}
                        <div className="w-full aspect-[16/10] bg-white/70 flex items-center justify-center overflow-hidden">
                          {cover ? (
                            <img
                              src={cover}
                              alt={safeName}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full grid place-items-center text-xs text-gray-400">
                              No image
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-2 sm:p-3">
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-base text-gray-800 line-clamp-2">
                              {safeName}
                            </h3>
                            {prod.brand ? (
                              <p className="text-[11px] sm:text-xs mt-1 text-gray-600 uppercase tracking-wide truncate">
                                {prod.brand}
                              </p>
                            ) : null}
                          </div>

                          {/* Actions */}
                          <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
                            <button className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm font-medium text-black border border-orange-500 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500">
                              View Details
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 7l-10 10m0-10h10v10"
                                />
                              </svg>
                            </button>

                            <a
                              href={`https://wa.me/919227915114?text=Hello,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                                safeName
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm font-medium text-black border border-orange-500 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"
                            >
                              Enquiry Now
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 7l-10 10m0-10h10v10"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>

                    {/* Dialog */}
                    {/* Dialog */}
                    <DialogContent className="w-[100vw] md:w-[92vw] max-w-[1100px] h-[92vh] md:h-[90vh] flex flex-col md:p-6 sm:p-8">
                      <DialogHeader className="flex flex-col md:flex-row md:items-start md:justify-between md:pe-6 gap-3">
                        <div className="min-w-0">
                          <DialogTitle className="text-base sm:text-2xl font-semibold leading-tight line-clamp-2">
                            {safeName}
                          </DialogTitle>
                          <DialogDescription className="text-xs sm:text-sm truncate">
                            {prod.brand ? `${prod.brand}` : ""}
                          </DialogDescription>
                        </div>
                        <a
                          href={`https://wa.me/919227915114?text=Hello,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                            safeName
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 sm:px-4 py-2 text-sm font-medium text-black border border-orange-500 rounded-lg flex items-center gap-2 transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500"
                        >
                          Enquiry Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 7l-10 10m0-10h10v10"
                            />
                          </svg>
                        </a>
                      </DialogHeader>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-y-auto pr-0 md:pr-2">
                        {/* Images */}
                        <div className="flex justify-center items-start">
                          <CarouselDApiDemo images={dialogImages} />
                        </div>

                        {/* Details */}
                        <div className="space-y-5 md:space-y-6">
                          <section>
                            <h3 className="text-base md:text-lg font-semibold mb-3">
                              Specifications
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {Object.entries(
                                getProductSpecs(prod.id) || {}
                              ).map(([key, value]) => (
                                <div
                                  key={key}
                                  className="p-3 rounded-lg border bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition transform hover:scale-[1.01]"
                                >
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    {key}
                                  </p>
                                  <p className="text-sm font-semibold text-gray-800 mt-1">
                                    {value}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
