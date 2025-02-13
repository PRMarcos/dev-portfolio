export function TagList({tagList}:{tagList:{label:string,posts:number}[]}){


    function TagItem({tag}:{tag:{label:string,posts:number}}){
        return (
            <li className="flex items-center gap-x-3">
            <a href={`/tags/${tag.label}`}>
              <h3 className="font-bold hover:text-primary">{`#${tag.label}`}</h3>
            </a>
            <span className="text-copy/50 italic ">{tag.posts} Posts</span>
          </li>
        )
    }

    return(
        <ul className="space-y-2 ">

       {tagList.map((item,idx)=><TagItem tag={item} key={idx} />)}
      
      </ul>
    )
}
