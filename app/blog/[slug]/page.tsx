import { data } from "@/site-data/posts/fakepostdata"

export async function generateStaticParams() {
    const posts = data;
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
    <h1 className="font-bold text-xl text-center mt-9">
       {params.slug}
    </h1>
)
  }