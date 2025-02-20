import React, { useState, useEffect } from "react";
import Link from "next/link";

interface PagefindResult {
  id: string;
  data: () => Promise<{ meta: { title: string }; excerpt: string; url: string }>;
}

declare global {
  interface Window {
    pagefind?: {
      search: (query: string) => Promise<{ results: PagefindResult[] }>;
    };
  }
}

export default function SearchPage() {
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
      setResults(search.results);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSearch}
      />
      <div id="results">
        {results.map((result) => (
          <Result key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

interface ResultProps {
  result: PagefindResult;
}

function Result({ result }: ResultProps) {
  const [data, setData] = useState<{ meta: { title: string }; excerpt: string; url: string } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await result.data();
      setData(fetchedData);
    }
    fetchData();
  }, [result]);

  if (!data) return null;

  return (
    <Link href={data.url}>
      <h3>{data.meta.title}</h3>
      <p>{data.excerpt}</p>
    </Link>
    
  );
}
