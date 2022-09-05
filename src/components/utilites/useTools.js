import { useEffect } from "react";
import { useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState();

  const url = `http://localhost:5000/allTools`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTools(data);
      });
  }, []);

  return [tools];
};

export default useTools;
