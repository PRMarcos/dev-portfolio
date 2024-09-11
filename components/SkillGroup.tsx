type SkillItem = { subTitle: string, text: string };

type SkillItemInput = {listLength:number, idx:number, content:SkillItem}

type SkillGroupInput = { title: string, content: { subTitle: string; text: string }[]}


function SkillItem (input: SkillItemInput){

  const {listLength,idx,content} = input;
  return(
    <div className="flex flex-col">
    <h3 className="font-semibold text-gray-900">{content.subTitle}</h3>
    <p className="text-gray-700">{content.text}</p>
    {listLength === idx + 1 ? null : (
      <div className="border-t border-t-gray-500 h-0.5 w-full mt-4"></div>
    )}
  </div>
  )
}


export default function SkillGroup (input:SkillGroupInput ) {

  const {title,content} = input;
    return (
      <div className="border border-gray-300 p-4 rounded-lg flex flex-col gap-4">
        <h2 className="font-semibold text-gray-900 sm:text-xl lg:text-2xl">
          {title}
        </h2>
  
        {content.map((item, idx) => (
         <SkillItem content={item} idx={idx} key={idx} listLength={content.length} />
        ))}
      </div>
    );
  };