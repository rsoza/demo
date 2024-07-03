import React, { useEffect, useState } from "react";
import axios from "axios";


function Compiler({ code }) {
  const [res, setResponse] = useState({});
  const [e, setError] = useState("");
  useEffect(() => {

    const sendRequest = async () => {
      try {
        const requestData = {
          source:  code,
          compiler: "gcc141",
          options: {
            filters: {
              execute: true,
            },
          },
        };

        const response = await axios.post(
          "https://godbolt.org/api/compiler/cg141/compile",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response from API:", response.data.execResult.stdout);
        setResponse(response.data.execResult.stdout[0]);
      } catch (error) {
        setError("Error: Syntactically wrong, try again");
        console.error("Error fetching data:", error);
      }
    };
    sendRequest();
  }, [code]);

  return (
    <div
    style={{background:"hsl(0, 0%, 30%)", color: "white"}}
    >
      <h2>Compiler Output</h2>
      <pre style={{color:"white"}}>
        {e ? e : res.text}
      </pre>
    </div>
  );
}

export default Compiler;
