type Post={
    title: string,
    slug: string,
    date: string,
    readingTime: string,
    tags: string[],
    skill: string,
    description: string
  }

function PostLink({post}:{post:Post}){
const {slug,date,title,description} = post

return(

    <li className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-2 ">
      <span className="text-gray-400 min-w-[120px] flex-none">{date}</span>

      <a href={`/blog/${slug}`} className=" hover:text-[#0582b6]">
        <h3 className="font-bold">{title}</h3>
      </a>
    </div>

    <q className="line-clamp-3 italic">
      {description}
    </q>
  </li>

)
}

export function PostPreviewLinkList({postList}:{postList:Post[]}){


    return(
        <ul className="space-y-8 text-start">

        {postList.map((item,idx)=><PostLink key={idx} post={item} />)}
            
      </ul>
    )
}