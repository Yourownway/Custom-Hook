import React, { useEffect, useState } from "react";
import Axios from "axios";
export default function useWhell(eWhell) {
  const [hash, setHash] = useState(window.location.hash);
  const [index, setIndex] = useState(0);
  const [popState, setPopState] = useState({});
  const URL = "http://localhost:3000/";

  const Array = ["#Accueil", "#Profil", "#Projects", "#Contact"];

  useEffect(() => {
    window.location.hash = Array[0];
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", (e) => setPopState(e));
    setIndex(Array.findIndex((hash) => hash === window.location.hash));
  }, [popState]);

  useEffect(() => {
    setIndex(Array.findIndex((hash) => hash === window.location.hash));
    const container = document.getElementById("container");
    container.scrollTop = 0;

    if (eWhell && eWhell.deltaY > 0 && index < Array.length - 1) {
      window.location.href = URL + Array[index + 1];

      setIndex(index + 1);
      setHash(window.location.hash);
    } else if (eWhell && eWhell.deltaY < 0 && index > 0) {
      window.location.href = URL + Array[index - 1];
      setIndex(index - 1);
      setHash(window.location.hash);
    } else {
      window.location.href = URL + Array[0];
      setIndex(0);
      setHash(window.location.hash);
    }
  }, [eWhell]);

  return hash;
}
