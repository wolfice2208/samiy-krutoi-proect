import { useState, useEffect } from 'react';
import users from './FakeData.json'
interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

async function loadUsers() {
  const response = await fetch('/api/users');
  const users = await response.json();
}
function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((result: T) => setData(result))
      .catch((err) => setError(String(err)))
      .finally(() => setIsLoading(false));
  }, [url]);



  return { data, isLoading, error };
}

export default useFetch;