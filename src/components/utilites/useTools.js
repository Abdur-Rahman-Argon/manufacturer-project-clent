import { useEffect } from "react";
import { useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState();

  useEffect(() => {
    const url = `https://adm-industry-ltd.onrender.com/allTools`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  return [tools];
};

export default useTools;
