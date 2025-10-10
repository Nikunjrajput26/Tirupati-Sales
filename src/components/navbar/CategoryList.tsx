import { Link } from "react-router-dom";
import { getCategoriesDropdownData } from "../../data/dataUtils";

interface CategoryListProps {
  onLinkClick?: () => void;
}

export default function CategoryList({ onLinkClick }: CategoryListProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl my-2 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {getCategoriesDropdownData().map((parentCat) => {
              return (
                <div key={parentCat.id} className="relative">
                  <p className="text-sm/6 font-semibold text-gray-900">
                    <Link
                      to={`/category/${parentCat.id}`}
                      className="hover:text-red-600 transition-colors"
                      onClick={onLinkClick}
                    >
                      {parentCat.name}
                    </Link>
                  </p>

                  {parentCat.categories.map((cat) => {
                    return (
                      <p
                        key={`${cat.id}`}
                        className="mt-1 text-xs/5 text-gray-500 hover:text-[#E03131] border-b-[1px] border-indigo-100 transition-colors"
                      >
                        <Link to={`/category/${parentCat.id}/${cat.id}`} onClick={onLinkClick}>
                          {cat.name}
                        </Link>
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
