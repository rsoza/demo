import React, { useEffect, useState } from "react";
import axios from "axios";


function Compiler({ code }) {
  const [res, setResponse] = useState({});
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
        console.log("response ", response);
        //   setResponse(data);
        console.log("Response from API:", response.data.execResult.stdout);
        setResponse(response.data.execResult.stdout[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    sendRequest();
  }, [code]);

  return (
    <div
    >
      <h1>Compiler Output</h1>
      <pre>
        <code>{res.text}</code>
      </pre>
    </div>
  );
}

export default Compiler;
