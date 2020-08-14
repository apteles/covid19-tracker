import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

export default function (initialURL, initialData, transform) {
  const [url, setURL] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialData);

  let transformCallback = null;

  if (typeof transform === "function") {
    transformCallback = useCallback(transform, []);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(initialURL);
        setData(response.data);

        if (transformCallback) {
          const dataTransformed = transformCallback(response.data);
          setData(dataTransformed);
        }
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [initialURL, transformCallback, url]);

  return [{ loading, data, error }, setURL];
}
