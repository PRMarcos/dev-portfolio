import Image from "next/image";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import authorPic from "@/assets/person/Marcos_Peres_Ramos.jpg";

import SocialMedia  from "@/components/SocialMediaBtn";
import ProfessionalSumaryItem  from "@/components/ProfissionalSumaryItem";
import SkillGroup  from "@/components/SkillGroup";


import {
  homePage_SocialMediaLinks,
  homePage_SkillGroupList,
  homePage_ProfessionalSumary} from "@/site-data"

export const metadata = {
  title: 'Bem vindo!',
  description:"Produtor e diretor de transmissão de eventos ao vivo",
}

export default function Home() {

  return (
                     // flex min-h-screen flex-col items-center
      <div className={`w-full`}>
  
        <section className="mt-5 w-full relative flex items-center  flex-col sm:flex-row gap-6">
            <Image
              src={authorPic}
              alt="Image Marcos"
              className="w-40 shrink-0 rounded-full"
            />
          <div className="flex w-full sm:items-start flex-col gap-2 justify-center">
            <h1 className="font-bold text-2xl">
              Olá, me chamo Marcos!
            </h1>
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu commodo metus, non pellentesque ex. Praesent in porta leo. Mauris nec auctor augue. Maecenas luctus fringilla odio, a hendrerit quam aliquet et. Donec at ullamcorper libero.
            </p>
            <ul className="flex gap-2 mt-4">

            {homePage_SocialMediaLinks.map(function(item,idx) {
              return (
                <SocialMedia SocialIcon={item.SocialIcon} label={item.label} link={item.link} key={idx}/>
              )
            })}
            </ul>
          </div>       
        </section>
    

      </div>
  );
}
