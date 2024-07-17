import Header from "./Header";
import Carregar from "./Carregar";
import { useEffect, useState } from "react";

export default function Main(){
    const [listaSeries, setListaSeries] = useState([]);
    const [listaComplete, setListaComplete] = useState([]);
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect(()=>{
        const getSeries = async()=>{ 
        try{
          const response = await fetch("http://localhost:3000/api");
          const data = await response.json();
          setListaSeries(data);
          setListaComplete(data)
        }catch{
            setErrorFetch(true);
        };
      }   
      getSeries();
    }, []);
}