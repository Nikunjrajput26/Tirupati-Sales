import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { getCategoriesDropdownData } from "../../data/dataUtils";


interface CategoryListDropdownProps {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function CategoryListDropdown({
  setMobileMenuOpen,
}: CategoryListDropdownProps) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="-mx-3  rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {getCategoriesDropdownData().map((parentCat)  => (
                <AccordionItem key={parentCat.id} value={parentCat.name}>
                  <AccordionTrigger>{parentCat.name}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul className="pl-5 text-xs/5 text-gray-500">
                      {parentCat.categories.map((cat) => (
                        <Link
                          to={`/category/${parentCat.id}/${cat.id}`}
                          className="hover:text-red-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <li key={cat.id}>{cat.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
