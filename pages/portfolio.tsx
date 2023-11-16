import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Menu from "@/components/Menu";

import recording1 from "@/assets/portfolio/wacom-film-animation-five-common-mistakes-m-i.jpeg";
import recording2 from "@/assets/portfolio/images.jpeg";
import recording3 from "@/assets/portfolio/download.jpeg";
import recording4 from "@/assets/portfolio/29-04-Saga-Blog-Edicao-Video-blog-1080x675.jpeg";
import { useCallback } from "react";
import Footer from "@/components/Footer";

const portfolio = [
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording1,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording2,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording3,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording4,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording1,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording2,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording3,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Lorem Ipsum is simply dummy",
    image: recording4,
    spoiler:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

type Card = {
  title: string;
  image: StaticImageData;
  spoiler: string;
};

const CardPortfolio = ({ title, spoiler, image }: Card) => {
  return (
    <div className="border border-gray-400 p-4 rounded-lg flex flex-col gap-2">
      <div className="h-40 rounded-lg">
        <Image
          src={image}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <h2 className="font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-700">{spoiler}</p>
    </div>
  );
};

export default function Portfolio() {
  const renderPortfolio = useCallback(
    ({ title, image, spoiler }: Card, idx: number) => (
      <CardPortfolio key={idx} title={title} image={image} spoiler={spoiler} />
    ),
    []
  );

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
      <main>
        <div className="relative w-full flex flex-col items-center isolate pb-4">
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

          <section className="w-full px-9 pt-20 flex justify-center">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl">
              {portfolio.map(renderPortfolio)}
            </ul>
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
        <Footer />
      </main>
    </>
  );
}
