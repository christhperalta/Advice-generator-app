import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otherAdvice, setOtherAdvice] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.slip))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [otherAdvice]);

  function handleOtherAdvice() {
    setOtherAdvice(otherAdvice + 1);
  }

  return { data, loading, error, handleOtherAdvice };
}
