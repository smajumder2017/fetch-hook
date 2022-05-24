const { useState, useEffect } = require("react");

export const useFetch = ({ url, method, body }) => {
  const [loading, setLoading] = useState("false");
  const [result, setResult] = useState({});
  useEffect(() => {
    if (!url) {
      setResult((prev) => ({
        ...prev,
        error: "url not provided"
      }));
      return;
    }
    if (url) {
      fetchData(url);
    }
  }, [url]);

  const fetchData = (urlString) => {
    console.log(urlString);
    setLoading(true);
    fetch(urlString, {
      method,
      body,
      headers: {
        contentType: "application/json"
      }
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(
        (resp) => {
          setLoading(false);
          setResult((prev) => ({
            ...prev,
            error: null,
            responseJson: resp
          }));
        },
        (err) => {
          console.log(err);
          setLoading(false);
          setResult((prev) => ({
            ...prev,
            error: err
          }));
        }
      );
  };

  return { ...result, loading };
};
