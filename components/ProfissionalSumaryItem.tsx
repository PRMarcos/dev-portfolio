type ProfessionalSumaryItem = {title: string;text: string;}

export function ProfessionalSumaryItem(input: ProfessionalSumaryItem) {
  const {title,text} = input;
    return (
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-white">{title}</h2>
        <p className="sm:text-base text-gray-400 text-sm">{text}</p>
        <div className="border-t border-t-gray-500 h-0.5 w-full flex md:hidden"></div>
      </div>
    );
  };