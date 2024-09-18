export function PostLinkHome({date,slug,title}:{date:string,slug:string,title:string}){
// tratar data para formato diferente
    return(
        <div className=" my-2 flex gap-2 ">
        <span className="flex-none">{date}</span>
        <a href={`/${slug}`} className=" hover:text-[#0582b6]">
          <h3 className="font-bold">{title}</h3>
        </a>
    </div>
    )
}