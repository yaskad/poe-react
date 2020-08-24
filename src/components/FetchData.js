import React, { useState, useEffect } from "react";
const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      const proxyurl = "https://cors-anywhere.herokuapp.com/";

      try {
      const response = await fetch(proxyurl + url);
      const data = await response.json();
      setData(data);
      setStatus("fetched");
      } catch(error) {
          setIsError(true);
      }
    };
    fetchData();
  }, [url]);
  if (isError) {
      return isError && <div>Something went wrong ...</div>
  } else{
    return { status, data };
  }
};

export { useFetch };
