import { PostPreviewLinkList } from "@/components/PostPreviewLinkList";
import {data } from "@/site-data/posts/fakepostdata";

export default function Blog() {

  return (
    <div
      className={`w-full mb-9`}
    >
   
        <h2 className="font-bold text-xl mb-5">{data.length==0? "Nada para mostrar ainda...": "Posts"}</h2>

       <PostPreviewLinkList postList={data} />

   

    </div>
  );
}