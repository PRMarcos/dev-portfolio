export function SkillList ({
    title,
    content,
  }: {
    title: string;
    content: { subTitle: string; text: string }[];
  }) {
    return (
      <div className="border border-gray-300 p-4 rounded-lg flex flex-col gap-4">
        <h2 className="font-semibold text-gray-900 sm:text-xl lg:text-2xl">
          {title}
        </h2>
  
        {content.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="font-semibold text-gray-900">{item.subTitle}</h3>
            <p className="text-gray-700">{item.text}</p>
            {content?.length === idx + 1 ? null : (
              <div className="border-t border-t-gray-500 h-0.5 w-full mt-4"></div>
            )}
          </div>
        ))}
      </div>
    );
  };