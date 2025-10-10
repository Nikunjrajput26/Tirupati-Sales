import React, { useMemo, useState } from "react";
import postsData from "../../data/blogs.json";
import { BlogCard } from "./BlogCard";
import { BlogModal } from "./BlogModal";

export default function BlogPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const { featured, others } = useMemo(() => {
    const list = (postsData as any[])
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const featured = list.find((p) => p.featured) ?? list[0];
    const rest = list.filter((p) => p.id !== featured.id);
    return { featured, others: rest };
  }, []);

  const openPost = (id: string) => setOpenId(id);
  const closePost = () => setOpenId(null);

  const currentPost = useMemo(() => {
    return (postsData as any[]).find((p) => p.id === openId) ?? null;
  }, [openId]);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ">
        {/* Featured */}
        <section className="mb-10 grid gap-6 lg:grid-cols-1">
          <article className="md:flex overflow-hidden  border border-gray-200 bg-white shadow-sm">
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 p-6 sm:p-8">
              <div className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                {featured.category}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="text-gray-600">{featured.excerpt}</p>
              <div className="flex flex-wrap items-center gap-x-4 text-sm text-gray-500">
                <span>{new Date(featured.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{featured.readTime} min read</span>
              </div>
              <button
                onClick={() => openPost(featured.id)}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
              >
                Read full story
              </button>
            </div>
          </article>

        </section>

        {/* Six blogs in two rows */}
        <section className="max-w-5xl mx-auto">
          <div className="mb-4 ">
            <span className="text-xs uppercase">browse and Read the latest Stuff</span>
            <h3 className="text-4xl font-bold text-gray-900">
              Latest stories
            </h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 6).map((post) => (
              <BlogCard key={post.id} post={post as any} onOpen={openPost} />
            ))}
          </div>
        </section>

        {/* Modal for reading full blog */}
        <BlogModal
          open={!!openId}
          onClose={closePost}
          post={currentPost as any}
        />
      </main>
    </div>
  );
}
