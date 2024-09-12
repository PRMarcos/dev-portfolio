import Image from "next/image";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import authorPic from "@/assets/person/marcos_peres_ramos.png";

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
      <main
        className={`flex min-h-screen flex-col items-center`}
      >
        <div className="relative h-screen w-full isolate">
  
          <section className="h-100vh-66px w-full relative flex items-center justify-center flex-col-reverse md:flex-row px-9 gap-4">
            <div className=" md:h-full flex  bottom-0 left-0 items-center md:items-start w-full md:w-[420px] md:pl-4 flex-col gap-2 justify-center">
              <h1 className="md:text-xl lg:text-2xl font-bold">
                Marcos Peres Ramos
              </h1>
              <p className="md:text-base text-sm">
                Produtor, diretor e tecnico de som
              </p>
              <ul className="flex gap-2 mt-4">

              {homePage_SocialMediaLinks.map(function(item,idx) {
                return (
                  <SocialMedia label={item.label} link={item.link} key={idx}/>
                )
              })}
              </ul>
            </div>

            <div className="flex md:h-full items-center justify-center -z-10">
              <Image
                src={authorPic}
                alt="Image Marcos"
                className="aspect-[0.98/1] w-96"
              />
            </div>
          </section>
    
        </div>
        <section className="px-9 py-32 gap-6 w-full bg-[#1E293B]">
          <div className="relative w-full isolate">
            <div className="w-full flex items-center justify-center">
              <div className="w-full md:w-10/12 max-w-screen-lg flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h1 className="text-white font-bold sm:text-xl lg:text-2xl">
                    Experiência profissional
                  </h1>

                  <div className="flex flex-col gap-2 mt-4">
                    <h2 className="font-semibold text-white">Função</h2>
                    <p className="sm:text-base text-gray-400 text-sm">
                      Ao longo dos últimos 7 anos, tenho desempenhado a função
                      de Produtor e Diretor de Transmissão de Eventos Ao Vivo.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-white">
                      Principais atividades
                    </h2>
                    <p className="sm:text-base text-gray-400 text-sm">
                      Produção de eventos online e ao vivo, eventos híbridos,
                      videoclipes para divulgações de eventos, series de vídeos
                      para plataformas online, cursos em vídeo, filmagem de
                      casamento.
                    </p>
                  </div>
                </div>

                <div className="border-t border-t-gray-500 h-0.5 w-full flex md:hidden"></div>
                <div className="border-l border-l-gray-500 w-0.5 hidden md:flex"></div>

                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h1 className="text-white font-bold sm:text-xl lg:text-2xl">
                    Formação
                  </h1>

                  <div className="flex flex-col gap-2 mt-4">
                    <h2 className="font-semibold text-white">
                      Sistemas de Informação - Bacharelado
                    </h2>
                    <p className="sm:text-base text-gray-400 text-sm">
                      Instituição: Faculdade Pitágoras de Linhares
                    </p>
                    <p className="sm:text-base text-gray-400 text-sm">
                      Conclusão: 2019
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-white">
                      Técnico em Automação Industrial
                    </h2>
                    <p className="sm:text-base text-gray-400 text-sm">
                      Instituição: IFES Campus Linhares
                    </p>
                    <p className="sm:text-base text-gray-400 text-sm">
                      Conclusão: 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>

        
          </div>
        </section>

        <div className="relative w-full isolate">

          <section className="w-full py-32 px-9 flex flex-col items-center justify-center">
            <h1 className="text-gray-900 w-full max-w-screen-2xl font-bold mb-8 sm:text-xl lg:text-2xl">
              Habilidades
            </h1>

            <div className="w-full flex flex-col lg:flex-row gap-4 max-w-screen-2xl">

              {homePage_SkillGroupList.map(function(item,idx) {
                return (
                  <SkillGroup title={item.title} content={item.content} key={idx} />
                )
              })}
            </div>

            <div></div>
          </section>
        </div>

        <section className="px-9 w-full bg-[#1E293B] py-32">
          <div className=" relative w-full isolate flex items-center justify-center">
        
            <div className="w-full max-w-screen-lg">
              <h1 className="text-white font-bold sm:text-xl lg:text-2xl">
                Resumo Profissional
              </h1>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                
              {homePage_ProfessionalSumary.map(function(item,idx) {
                return (
                  <ProfessionalSumaryItem title={item.title} text={item.text} key={idx} />
                )
              })}
              </div>
            </div>

      
          </div>
        </section>

      </main>
  );
}
