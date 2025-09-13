import { useEffect, useState } from "react";


export const useFetch=(url:string)=> {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      let isMounted = true; // prevent state update after unmount
      setLoading(true);
  
  
      fetch(url)
        .then(res => res.json())
        .then(json => isMounted && setData(json))
        .catch(err => isMounted && setError(err))
        .finally(() => isMounted && setLoading(false));
  
      return () => {isMounted = false};
    }, [url]);
  
    return { data, loading, error };
  
}