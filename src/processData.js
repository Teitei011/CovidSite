import React,{useState} from "react";


 async function getData({localidade}) {
  let localidade1 = localidade + ".json";
  let response = await fetch(localidade1);
  const data = await response.json();
  return data;
}

export default getData;