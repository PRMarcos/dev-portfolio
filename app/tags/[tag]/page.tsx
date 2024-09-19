import { PostPreviewLinkList } from "@/components/PostPreviewLinkList";
import { data } from "@/site-data/posts/fakepostdata"

export async function generateStaticParams() {
    
     let alltags:string[] =[];
  
    data.map((item)=>{
      alltags.push(...item.tags)
    })

     const filtredtags = alltags.filter((value,idx)=> alltags.indexOf(value)===idx);

     return filtredtags.map((tag)=>({tag}))
  }

export default function TagListFilterd({ params }: { params: { tag: string } }) {

    const filtredPosts = data.filter((post)=>post.tags.includes(params.tag))
    return (
        <div
        className={`w-full mb-9`}
      >
          <h2 className="font-bold text-xl mb-5">{filtredPosts.length==0? "Nada para mostrar ainda...": `Tags -> ${params.tag}`}</h2>
         <PostPreviewLinkList postList={filtredPosts} />
      </div>
)
  }