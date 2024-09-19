import Image from "next/image";
import { data } from "@/site-data/posts/fakepostdata"

import { PostLinkHome } from "@/components/PostLinkHome";

import authorPic from "@/assets/person/Marcos_Peres_Ramos.jpg";

import SocialMedia from "@/components/SocialMediaBtn";

import {
  homePage_SocialMediaLinks
} from "@/site-data"

export const metadata = {
  title: 'Bem vindo!',
  description: "Produtor e diretor de transmissão de eventos ao vivo",
}

export default function Home() {

  return (
    // flex min-h-screen flex-col items-center
    <div className={`w-full mb-9`}>

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

            {homePage_SocialMediaLinks.map(function (item, idx) {
              return (
                <SocialMedia SocialIcon={item.SocialIcon} label={item.label} link={item.link} key={idx} />
              )
            })}
          </ul>
        </div>
      </section>

      <section className={`${data.length==0 && "hidden"} w-full mt-9`}>
        <h2 className="font-bold text-xl">Ultimos Posts</h2>

        <div className=" my-2 flex flex-col gap-1">


          {data.map((item, idx) => {

            if (idx < 7) {
              return <PostLinkHome title={item.title}
                slug={item.slug}
                date={item.date}
                key={idx}
              />
            } else { return }

          })}

        </div>


        <a href="/blog" className={`${data.length<=7 && "hidden"} uppercase font-bold cursor-pointer  hover:text-[#0582b6]`} >Ver Mais</a>

      </section>


    </div>
  );
}
