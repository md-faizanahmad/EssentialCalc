import { notFound } from "next/navigation";
import blogData from "@/data/blog.json";
import AdSlot from "@/components/layouts/AdSlot";

// Update 1: Metadata must await params
export async function generateMetadata({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;
const post = blogData.find((p) => p.slug === slug);

if (!post) return { title: "Post Not Found" };
return { title: post.title, description: post.excerpt };
}

// Update 2: Component must be async and await params
export default async function BlogPost({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;
const post = blogData.find((p) => p.slug === slug);

if (!post) {
notFound();
}

return (
<article className="max-w-3xl mx-auto py-12 px-4">
<header className="mb-10">
<div className="text-sm font-bold text-blue-600 uppercase mb-4">
{post.category}
</div>
<h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
{post.title}
</h1>
<div className="text-gray-400 text-sm font-medium">
Published on {post.date}
</div>
</header>

<AdSlot id="blog-top" />  

  <div className="prose prose-slate prose-lg max-w-none text-gray-700 leading-8">  
    <p className="whitespace-pre-line">{post.content}</p>  
  </div>  

  <AdSlot id="blog-bottom" className="mt-12" />  
</article>

);
}