import React from "react";

export type BlogPost = {
  id: string | number;
  title: string;
  category: string;
  author: string;
  date: string; // e.g. "May 23, 2025"
  excerpt: string;
  image: string;
  href?: string;
};

type BlogSectionProps = {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  viewAllHref?: string;
  className?: string;
};

const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  title = "Latest Articles",
  subtitle = "Insights and stories that capture the moment.",
  viewAllHref,
  className,
}) => {
  return (
    <section className={className}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl">{subtitle}</p>
          </div>

          {viewAllHref ? (
            <a
              href={viewAllHref}
              className="hidden md:inline-flex items-center uppercase tracking-wider text-sm font-medium group"
            >
              View All
              <svg
                className="ml-2 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ) : null}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <a href={post.href || "#"} className="block">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block text-xs font-medium uppercase tracking-wider text-blue-600">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium mb-3">{post.title}</h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Mobile "View All" */}
        {viewAllHref ? (
          <div className="mt-12 text-center md:hidden">
            <a
              href={viewAllHref}
              className="inline-flex items-center uppercase tracking-wider text-sm font-medium group"
            >
              View All Articles
              <svg
                className="ml-2 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogSection;
