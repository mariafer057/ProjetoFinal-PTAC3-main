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
        a.title.localeCompare(b.title)
        );
        setListaSeries(newList);
      }

      //ordem de Za
      const orderZa = () =>{
        const newList = [...listaSeries].sort((a, b)=>
          b.title.localeCompare(a.title)
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
        series.title.toUpperCase().trim().includes(search.toUpperCase().trim()));
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
    <main className={styles.main}>
      <div>
    <button className={styles.botao} onClick={orderAz}>Az</button>
    </div>

    <div>
    <button className={styles.botao} onClick={orderZa}>Za</button>
    </div>

    <div>
    <button className={styles.botao} onClick={tempMaior}>-</button>
    </div>

    <div>
    <button className={styles.botao} onClick={tempMenor}>+</button>
    </div>

      {listaSeries.map((series)=> //o map vai mapear cada produto de uma forma individual
            <div className={styles.card} key={series.id}>
              <h2 className={styles.titulo}>Título: {series.title}</h2>
              <h2>Diretor: {series.diretor}</h2>
              <h2 className={styles.desc}>Ano de Publicação: {series.anoPublicacao}</h2>
              <h2>Gênero: {series.genero}</h2>
              <h2>Temporadas: {series.temporadas}</h2>
              <Image 
              width= {150}
              height={150}
              src={series.image}/>
              <Link href={"/series/" + series.id}><p>Ver mais</p></Link>

            </div>
      )}
    </main>
    </>
  );
}
