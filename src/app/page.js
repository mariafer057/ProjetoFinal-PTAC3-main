'use client'
import Image from "next/image";
import styles from "./styles.css";
import Link from "next/link";
import Header from "./Componentes/Header";
import Carregar from "./Componentes/Carregar";
import Footer from "./Componentes/Footer";
import NotFound from "./not-found";
import { useEffect, useState } from "react";
import ErrorGetData from "./Componentes/ErrorGetData";


export default function Home() {

    const [listaSeries, setListaSeries] = useState([]);
    const [listaComplete, setListaComplete] = useState([]);
    const [search, setSearch] = useState("");
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
      //ordem de Az
      const orderAz = () => {
        const newList = [...listaSeries].sort((a, b) => 
        a.titulo.localeCompare(b.titulo)
        );
        setListaSeries(newList);
      }

      //ordem de Za
      const orderZa = () =>{
        const newList = [...listaSeries].sort((a, b)=>
          b.titulo.localeCompare(a.titulo)
        );
        setListaSeries(newList);
      }
  
      //temporadas
      const tempMaior = () =>{
        let newList = [...listaSeries].sort((a, b)=> 
          a.temporadas - b.temporadas
        );
        setListaSeries(newList); 
      }

      const tempMenor = () =>{
        let newList = [...listaSeries].sort((a, b)=>
          a.temporadas - b.temporadas
        );
        newList = newList.reverse(); //o reverse serve para inverter oq será feito, sem mudar muito o codigo
        setListaSeries(newList); //atualiza o estado listProdutos com a nova lista ordenada
      }

      //filtrar o listaSeries
      const searchText = (text) => {
        setSearch(text);
        if(text.trim() == ""){
          setListaSeries(listaComplete);
          return
        }
        const newList = listaSeries.filter((series) =>
        series.titulo.toUpperCase().trim().includes(search.toUpperCase().trim()));
        setListaSeries(newList);
      }


    if(errorFetch == true){
      return <ErrorGetData/>
    }

    if (listaSeries[0] == null){
      return <center><Carregar/></center>
    }
    return(
      <>
       <input type="text" value={search} placeholder="Pesquise a série" onChange={(event) => searchText( event.target.value)}/>
    <main>
      <div>
    <button onClick={orderAz}>Az</button>
    </div>

    <div>
    <button onClick={orderZa}>Za</button>
    </div>

    <div>
    <button onClick={tempMaior}>-</button>
    </div>

    <div>
    <button onClick={tempMenor}>+</button>
    </div>


      {listaSeries.map((series)=> //o map vai mapear cada produto de uma forma individual
            <div className={styles.card} key={series.id}>
              <h2 >Título: {series.titulo}</h2>
              <h2>Temporadas: {series.temporadas}</h2>
              <Image 
              width= {150}
              height={150}
              src={series.imagem}/>

              
              <Link href={"/serie/" + series.id}><p>Ver mais</p></Link>
              

            </div>
      )}
    </main>
    </>
  );
}
