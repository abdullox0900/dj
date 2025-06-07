import { useEffect } from "react";

export const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivo.ru/widget.js";
    script.async = true;
    script.dataset.jvId = "YOUR_WIDGET_ID";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
