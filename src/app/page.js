'use client'
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import Header from "./Componetes/Header";
import Carregar from "./Componetes/Carregar";
import Footer from "./Componetes/Footer";
import { useEffect, useState } from "react";
import ErrorGetData from "./Componetes/ErrorGetData";


export default function Home() {

    const [listaSeries, setListaSeries] = useState([]);
    const [listaComplete, setListaComplete] = useState([]);
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect(()=>{
        const getSeries = async()=>{ 
        try{
          const response = await fetch("http://localhost:3000/api");
          const data = await response.json();
          setListaSeries(data);
        }catch{
            setErrorFetch(true);
        };
      };

      getSeries();
    }, []);

    if(errorFetch == true){
      return <ErrorGetData/>
    }

    if (listaSeries[0] == null){
      return <center><Carregar/></center>
    }

    </main>
  );
}
