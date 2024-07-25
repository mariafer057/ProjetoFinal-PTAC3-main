'use client'
import Image from "next/image";
import styles from "./pgHome.module.css";
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
  
      //temporadas de menor p/ maior
      const tempMaior = () =>{
        let newList = [...listaSeries].sort((a, b)=> 
          a.temporadas - b.temporadas
        );
        setListaSeries(newList); 
      }

      //temp do maior p/ menor
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
    <div className={styles.pesquisaContainer}>
       <input className={styles.pesquisa} type="text" value={search} placeholder="Pesquise a série" onChange={(event) => searchText( event.target.value)}/>
   </div>
    <main className={styles.main}>
  
    <div className={styles.botaoContainer}>
    <button className={styles.button} onClick={orderAz}>Ordenar de Az</button>
    <button className={styles.button} onClick={orderZa}>Ordenar de Za</button>
    <button className={styles.button} onClick={tempMaior}>- Temporadas</button>
    <button className={styles.button} onClick={tempMenor}>+ Temporadas</button>
    </div>

      <div className={styles.container}>
      {listaSeries.map((series)=> //o map vai mapear cada produto de uma forma individual
            <div className={styles.card} key={series.id}>
              <h2 >Título: {series.titulo}</h2>
              <h2>Temporadas: {series.temporadas}</h2>
              <Image
              width= {300}
              height={300}
              src={series.imagem}/>

              
              <Link href={"/serie/" + series.id}><p>Ver mais</p></Link>
              

            </div>
      )}
      </div>
    </main>
    </>
  );
}
