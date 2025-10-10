import { CircleFadingArrowUp } from "lucide-react";
import React from "react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: number;
  };
  onOpen: (id: string) => void;
};

export function BlogCard({ post, onOpen }: Props) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
      onClick={() => onOpen(post.id)}
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="text-xs font-medium uppercase tracking-wide text-orange-500">
          {post.category}
        </div>
        <h3 className="text-lg font-semibold leading-snug text-gray-900">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-gray-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{post.readTime} min read</span>
        </div>
        <button className="flex text-left text-sm pt-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
          Read full story
          <ArrowUpRight className="mx-2 text-black w-4 text-orange-500 animate-bounce" />
        </button>
      </div>
    </article>
  );
}
