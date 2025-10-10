import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import TCSLog from "../../assets/Tirupati-Sales-Logo.webp";
import { getCategoriesDropdownData } from "../../data/dataUtils";

export function AppSidebar({
  selectedFilters,
  setSelectedFilters,
  ...props
}: {
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<Record<string, string[]>>
  >;
} & React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed] = React.useState(false);

  const onLinkClick = () => setSelectedFilters({});
  const parents = getCategoriesDropdownData();

  const [search, setSearch] = React.useState("");
  const isSearching = search.trim().length > 0;

  // Track user-toggled open state when NOT searching
  const [openMap, setOpenMap] = React.useState<Record<string, boolean>>({});
  const setOpenFor = (id: string) => (open: boolean) =>
    setOpenMap((m) => ({ ...m, [id]: open }));

  // Filter parents + children by search
  const filteredParents = React.useMemo(() => {
    if (!isSearching) return parents;

    const q = search.toLowerCase();
    return parents
      .map((p) => {
        const matchedChildren = p.categories.filter((c) =>
          c.name.toLowerCase().includes(q)
        );
        const parentMatches = p.name.toLowerCase().includes(q);

        // if parent matches, show all its children; else show only matched children
        if (parentMatches || matchedChildren.length > 0) {
          return {
            ...p,
            categories: parentMatches ? p.categories : matchedChildren,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof parents;
  }, [parents, isSearching, search]);

  return (
    <Sidebar
      className={`transition-all duration-300 border-none bg-white ${
        isCollapsed ? "w-16" : "w-72"
      }`}
      {...props}
    >
      <SidebarHeader className="bg-white shadow-sm">
        <div className="flex items-center px-6 py-5">
          <Link to="/" onClick={onLinkClick}>
            <img src={TCSLog} className="w-[72%] min-w-40" alt="TSC" />
          </Link>
        </div>
      </SidebarHeader>
      {!isCollapsed && (
        <SidebarContent className="gap-0 p-2">
          {/* Search */}
          <div className="px-2 pb-3">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            {filteredParents.length === 0 ? (
              <p className="px-3 py-2 text-sm text-gray-500">
                No results found
              </p>
            ) : (
              filteredParents.map((parent) => {
                // Force-open while searching; otherwise respect user's last toggle
                const open = isSearching ? true : openMap[parent.id] ?? false;

                return (
                  <Collapsible
                    key={parent.id}
                    open={open}
                    onOpenChange={setOpenFor(parent.id)}
                    className="group/collapsible"
                  >
                    <SidebarGroup>
                      {/* Parent row */}
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger asChild>
                          <div className="rounded-sm overflow-hidden flex items-center justify-between">
                            <div
                              // to={`/category/${parent.id}`}
                              // onClick={onLinkClick}
                              className="flex items-center w-full justify-between cursor-pointer rounded-sm font-bold text-lg text-black"
                            >
                              <span className="truncate">{parent.name}</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </div>
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>

                      {/* Subcategory list */}
                      <CollapsibleContent>
                        <SidebarGroupContent className="mt-2">
                          <SidebarMenu className="space-y-2">
                            {parent.categories.map((cat) => (
                              <SidebarMenuItem key={cat.id}>
                                <Link
                                  to={`/category/${parent.id}/${cat.id}`}
                                  onClick={onLinkClick}
                                  className={[
                                    "relative block w-full overflow-hidden",
                                    "bg-white px-2 py-[6px] uppercase text-[12px] tracking-wide font-semibold",
                                    "text-gray-700 border border-neutral-200 hover:bg-[#dcddde]",
                                    "transition-colors duration-200",
                                    "after:pointer-events-none after:content-['']",
                                    "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full",
                                    "after:origin-left after:scale-x-0 hover:after:scale-x-100",
                                    "after:bg-gradient-to-r after:from-orange-500 after:to-red-500",
                                    "after:transition-transform after:duration-300",
                                  ].join(" ")}
                                >
                                  {cat.name}
                                </Link>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                );
              })
            )}
          </div>
        </SidebarContent>
      )}
    </Sidebar>
  );
}
