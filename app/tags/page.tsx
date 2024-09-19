import { TagList } from "@/components/TagList";
import { data } from "@/site-data/posts/fakepostdata";

export default function Tags() {

  function getTagsFromPostList(){

  let alltags:string[] =[];

  data.map((item)=>{
    alltags.push(...item.tags)
  })
    const filtredTags =  alltags.filter((value,idx)=> alltags.indexOf(value)===idx);

    let TagsWithCountedPosts:{label:string,posts:number}[] = []

    filtredTags.map((item)=>{
      TagsWithCountedPosts.push({label:item,posts:alltags.filter((value)=>value===item).length}) 
    })
    return TagsWithCountedPosts
  }


  return (
    <div
      className={`w-full mb-9`}
    >
      <h2 className="font-bold text-xl mb-5">{data.length == 0 ? "Nada para mostrar ainda..." : "Tags"}</h2>

     <TagList tagList={getTagsFromPostList()}/>

    </div>
  );
}