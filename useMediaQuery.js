import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [match, setMatch] = useState("");

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches) setMatch(media.matches);

    const listener = () => setMatch(media.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query, match]);

  return match;
}

export default useMediaQuery;
