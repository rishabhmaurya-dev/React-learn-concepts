import { useState, useEffect } from "react";

export default function useDebouncedSearch(delay = 500) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?q=${query}`,
          { signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setResults(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Request aborted cleanly.");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }, delay);

    // Cleanup: Timer clear aur request abort dono ek sath
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, delay]);

  return { query, setQuery, results, loading, error };
}
