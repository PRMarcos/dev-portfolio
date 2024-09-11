import Image from "next/image";
import Head from "next/head";
import { useCallback } from "react";
import { Inter } from "next/font/google";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import marcos from "@/assets/person/marcos1.png";
import { SocialMedia } from "@/components/SocialMediaBtn";
import { Item } from "@/type";
import { ProfessionalSumaryItem } from "@/components/ProfissionalSumaryItem";
import { SkillGroup } from "@/components/SkillGroup";
import { link } from "fs";




const inter = Inter({ subsets: ["latin"] });

const socialMedia = [
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/marcos-peres-ramos-98627b268/",
  },
  { label: "GitHub", link: "https://github.com/prmarcos" },
];

const professionalResume = [
  {
    title: "Introdução",
    text: "Como produtor e técnico de som com uma sólida trajetória desde 2016, adquiri uma ampla experiência na condução de projetos diversos, abrangendo eventos ao vivo e online, produção de videoclipes, séries de vídeos para plataformas online, cursos em vídeo e filmagem de casamentos.",
  },
  {
    title: "Experiência e Especialização",
    text: "Minha expertise inclui a gestão técnica e criativa de eventos híbridos, nos quais integro de forma eficiente tecnologias para proporcionar experiências envolventes tanto presencialmente quanto virtualmente.",
  },
  {
    title: "Adaptação e Versatilidade",
    text: "Ao longo da minha carreira, destaco-me na produção de conteúdo audiovisual, trabalhando desde a concepção até a entrega final, sempre mantendo altos padrões de qualidade.",
  },
  {
    title: "Paixão pela Inovação",
    text: "A minha habilidade em adaptar-me a diferentes contextos e projetos, aliada à minha paixão pela inovação no campo do áudio e vídeo, reflete-se em contribuições significativas para a realização bem-sucedida de diversos eventos e produções.",
  },
];

const skills = [
  {
    title: "Vídeo",
    content: [
      {
        subTitle: "Adobe Premiere",
        text: "Experiência avançada em edição de vídeo, criação de videoclipes e produção de conteúdo visual impactante.",
      },
      {
        subTitle: "Adobe Photoshop",
        text: "Habilidade na edição de imagens, criação de materiais gráficos e ajustes visuais para aprimorar a qualidade estética.",
      },
      {
        subTitle: "Adobe After Effects",
        text: "Competência na produção de animações para enriquecer visualmente projetos audiovisuais.",
      },
    ],
  },
  {
    title: "Áudio",
    content: [
      {
        subTitle: "Adobe Audition",
        text: "Habilidade avançada na edição e aprimoramento de áudio para garantir a qualidade sonora em projetos audiovisuais.",
      },
      {
        subTitle: "Mesa de Som Digital Behringer X32 e XAir",
        text: "Experiência na mixagem digital para otimização de qualidade sonora em eventos ao vivo.",
      },
      {
        subTitle: "Mesas de Som Analógicas",
        text: "Experiência geral em mesas de som analógicas, proporcionando mixagem de áudio de alta qualidade em eventos ao vivo.",
      },
    ],
  },
  {
    title: "Transmissão ao Vivo",
    content: [
      {
        subTitle: "Atem Mini Extreme",
        text: "Utilização eficiente do switcher Atem Mini Extreme para controle avançado durante transmissões ao vivo.",
      },
      {
        subTitle: "OBS Studio",
        text: "Proficiente em transmissões ao vivo, utilizando recursos avançados para melhorar a qualidade e interatividade.",
      },
    ],
  },
];

export default function Home() {

  return (
    <>
      <Head>
        <title>Marcos Peres Ramos</title>
        <meta
          name="description"
          content="Produtor e diretor de transmissão de eventos ao vivo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center ${inter.className}`}
      >
        <div className="relative h-screen w-full isolate">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <Menu />

          <section className="h-100vh-66px w-full relative flex items-center justify-center flex-col-reverse md:flex-row px-9 gap-4">
            <div className=" md:h-full flex  bottom-0 left-0 items-center md:items-start w-full md:w-[420px] md:pl-4 flex-col gap-2 justify-center">
              <h1 className="md:text-xl lg:text-2xl font-bold">
                Marcos Peres Ramos
              </h1>
              <p className="md:text-base text-sm">
                Produtor, diretor e tecnico de som
              </p>
              <ul className="flex gap-2 mt-4">

              {socialMedia.map(function(item,idx) {
                return (
                  <SocialMedia label={item.label} link={item.link} key={idx}/>
                )
              })}
              </ul>
            </div>

            <div className="flex md:h-full items-center justify-center -z-10">
              <Image
                src={marcos}
                alt="Image Marcos"
                className="aspect-[0.98/1] w-96"
              />
            </div>
          </section>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002162] via-50% via-[#3082d4] to-[#9ecfe4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <section className="px-9 py-32 gap-6 w-full bg-[#1E293B]">
          <div className="relative w-full isolate">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#002162] via-50%  to-[#3082d4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
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

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002162] via-50% via-[#3082d4] to-[#9ecfe4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </section>

        <div className="relative w-full isolate">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#002162] via-50%  via-[#3082d4] to-[#9ecfe4 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <section className="w-full py-32 px-9 flex flex-col items-center justify-center">
            <h1 className="text-gray-900 w-full max-w-screen-2xl font-bold mb-8 sm:text-xl lg:text-2xl">
              Habilidades
            </h1>

            <div className="w-full flex flex-col lg:flex-row gap-4 max-w-screen-2xl">

              {skills.map(function(item,idx) {
                return (
                  <SkillGroup title={item.title} content={item.content} key={idx} />
                )
              })}
            </div>

            <div></div>
          </section>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002162] via-50% via-[#3082d4] to-[#9ecfe4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        <section className="px-9 w-full bg-[#1E293B] py-32">
          <div className="relative w-full isolate flex items-center justify-center">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#002162] via-50%  to-[#3082d4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="w-full max-w-screen-lg">
              <h1 className="text-white font-bold sm:text-xl lg:text-2xl">
                Resumo Profissional
              </h1>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                
              {professionalResume.map(function(item,idx) {
                return (
                  <ProfessionalSumaryItem title={item.title} text={item.text} key={idx} />
                )
              })}
              </div>
            </div>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002162] via-50% via-[#3082d4] to-[#9ecfe4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </section>

        <Footer className="h-20 bg-[#1E293B]" />
      </main>
    </>
  );
}
