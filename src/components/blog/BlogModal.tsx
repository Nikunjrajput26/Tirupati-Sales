import React, { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  post?: {
    id: string;
    title: string;
    content: string;
    image: string;
    author: string;
    date: string;
    readTime: number;
    category: string;
  } | null;
};

export function BlogModal({ open, onClose, post }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4">
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="relative aspect-[16/9] w-full bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow hover:bg-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 p-6">
          <div className="text-xs font-medium uppercase tracking-wide text-indigo-600">{post.category}</div>
          <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
          <div className="text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>
          <div className="prose prose-gray max-w-none">
            {/* Render markdown-ish content safely as paragraphs */}
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="whitespace-pre-wrap leading-relaxed text-gray-800">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}