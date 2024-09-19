import {AiOutlineCloseCircle} from "react-icons/ai"
 
export default function NotFound() {
  return (
    <div className='mt-9 flex flex-col items-center justify-center gap-2 sm:flex-row sm:h-full'>
        <AiOutlineCloseCircle  className="h-20 w-20"/>
      <h1 className='text-center text-xl font-bold'>Não foi possivel encontrar esse recurso</h1>
    </div>
  )
}