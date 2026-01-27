import { notFound } from "next/navigation";
import blogData from "@/data/blog.json";
import AdSlot from "@/components/layouts/AdSlot";

/* ---------------------------------------------
   Helper: Find article by slug across categories
---------------------------------------------- */
function getPostBySlug(slug: string) {
  for (const category of blogData.categories) {
    const article = category.articles.find(
      (article) => article.slug === slug
    );
    if (article) {
      return { article, category: category.category };
    }
  }
  return null;
}

/* ---------------------------------------------
   Metadata
---------------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const result = getPostBySlug(params.slug);

  if (!result) {
    return {
      title: "Post Not Found",
      description: "The requested article does not exist.",
    };
  }

  const { article } = result;

  return {
    title: article.seo.meta_title,
    description: article.seo.meta_description,
  };
}

/* ---------------------------------------------
   Page Component
---------------------------------------------- */
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const result = getPostBySlug(params.slug);

  if (!result) {
    notFound();
  }

  const { article, category } = result;

  const {
    title,
    excerpt,
    last_updated,
    author,
    content,
  } = article;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      {/* ---------- Header ---------- */}
      <header className="mb-10">
        <div className="text-sm font-bold text-sky-600 uppercase mb-4">
          {category}
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        <div className="text-gray-500 text-sm">
          Last updated on{" "}
          {new Date(last_updated).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {author && (
            <>
              {" "}
              · By <span className="font-medium">{author.name}</span>
            </>
          )}
        </div>
      </header>

      <AdSlot id="blog-top" />

      {/* ---------- Content ---------- */}
      <div className="prose prose-slate prose-lg max-w-none text-gray-700 leading-8">
        <p className="font-medium">{excerpt}</p>

        <h2>Introduction</h2>
        <p>{content.introduction}</p>

        <h2>Why This Matters</h2>
        <p>{content.why_it_matters_in_india}</p>

        <h2>Who Should Read This</h2>
        <p>{content.who_should_read}</p>

        {content.detailed_sections.map((section, idx) => (
          <section key={idx}>
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </section>
        ))}

        {content.step_by_step_guides?.length > 0 && (
          <>
            <h2>Step-by-Step Guide</h2>
            <ol>
              {content.step_by_step_guides.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </>
        )}

        {content.common_mistakes?.length > 0 && (
          <>
            <h2>Common Mistakes</h2>
            <ul>
              {content.common_mistakes.map((mistake, idx) => (
                <li key={idx}>{mistake}</li>
              ))}
            </ul>
          </>
        )}

        {content.faqs?.length > 0 && (
          <>
            <h2>FAQs</h2>
            {content.faqs.map((faq, idx) => (
              <div key={idx}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </>
        )}

        <h2>Conclusion</h2>
        <p>{content.conclusion}</p>
      </div>

      <AdSlot id="blog-bottom" className="mt-12" />
    </article>
  );
}