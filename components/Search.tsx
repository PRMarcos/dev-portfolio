import React, { useState, useEffect, MouseEventHandler } from "react";
import Link from "next/link";

interface PagefindResult {
  id: string;
  data: () => Promise<{ meta: { title: string }; excerpt: string; raw_url: string }>;
}

declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<{ results: PagefindResult[] }>;
    };
  }
}

export default function SearchPage({action}:{action:MouseEventHandler}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === "undefined") {
        try {
            console.log("pagefind encontrado")
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
          );
        } catch (e) {
            console.log("pagefind não encontrado",e)
          window.pagefind = { search: async () => ({ results: [] }) };
        }
      }
    }
    loadPagefind();
  }, []);

  async function handleSearch() {
    if (window.pagefind) {
      const search = await window.pagefind.search(query);
      console.log("search:", search)
      setResults(search.results);
    }
  }

  return (
    
    <div className="flex flex-col items-center justify-start w-full max-w-3xl px-5">
      
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>  
          <input value={query} onChange={(e) => setQuery(e.target.value)} onInput={handleSearch} type="text"  className="block w-full p-4 ps-10 text-sm text-copy  border border-copy/5 rounded-lg bg-copy/5  " placeholder="Search..." />
          <button onClick={action} className="text-white absolute end-2.5 right-8 bottom-2.5 bg-primary hover:bg-primary/80 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 ">Fechar</button>
        </div>
      <div  className="flex flex-col f px-5" id="results">
      
        {results.map((result) => (
          <Result action={action} key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

interface ResultProps {
  result: PagefindResult;
  action:MouseEventHandler
}

function Result({ result,action }: ResultProps) {
  const [data, setData] = useState<{ meta: { title: string }; excerpt: string; raw_url: string } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await result.data();
      console.log(fetchedData);
      setData(fetchedData);
    }
    fetchData();
  }, [result]);

  if (!data) return null;

  return (
    <Link onClick={action} className=" p-2 mt-4 mt hover:bg-primary/50" href={`/blog${data.raw_url.split(".")[0]}`}>
      <h3 className="font-bold ">{data.meta.title}</h3>
      <p className= "text-copy/50">Template de resumo do conteudo do link...</p>
    </Link>
    
  );
}
