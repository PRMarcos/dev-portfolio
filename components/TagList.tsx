export function TagList({tagList}:{tagList:{label:string,posts:number}[]}){


    function TagItem({tag}:{tag:{label:string,posts:number}}){
        return (
            <li className="flex items-center gap-x-3">
            <a href={`/tags/${tag.label}`}>
              <h3 className="font-bold hover:text-[#0582b6]">{`#${tag.label}`}</h3>
            </a>
            <span className="text-gray-400 italic ">{tag.posts} Posts</span>
          </li>
        )
    }

    return(
        <ul className="space-y-2 ">

       {tagList.map((item,idx)=><TagItem tag={item} key={idx} />)}
      
      </ul>
    )
}
