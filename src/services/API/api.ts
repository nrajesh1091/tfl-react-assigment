import { useLoader } from "@contexts/loader-context";
import { useEffect, useState } from "react";


export const useFetch=(url:string)=> {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { showLoader, hideLoader } = useLoader();
    useEffect(() => {
      let isMounted = true; // prevent state update after unmount
      showLoader();
  
  
      fetch(url)
        .then(res => res.json())
        .then(json => isMounted && setData(json))
        .catch(err => isMounted && setError(err))
        .finally(() => isMounted && hideLoader());
  
      return () => {isMounted = false};
    }, [url]);
  
    return { data, error };
  
}