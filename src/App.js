import { useEffect, useState } from "react";
import "./styles.css";
import { useFetch } from "./useFetch";

export default function App() {
  const [url, setUrl] = useState("");
  const { responseJson, error, loading } = useFetch({
    url: url,
    method: "GET"
  });

  console.log(responseJson, loading, error);
  return (
    <>
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      {error ? (
        <p>Error: {JSON.stringify(error)}</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <p> Response: {JSON.stringify(responseJson)} </p>
      )}
    </>
  );
}
