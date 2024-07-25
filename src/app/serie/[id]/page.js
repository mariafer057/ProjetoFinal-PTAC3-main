import Image from "next/image"
import styles from "./page.module.css"
export default async function Produto({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id)
    const data = await response.json();
    return(
        <div className={styles.container} key={data.id}>
          <div className={styles.card}>
          <h2>Título: {data.titulo}</h2>
          <Image 
          width= {300}
          height={300}
          src={data.imagem}/>
          <h2>Diretor: {data.diretor}</h2>
          <h2>Ano de publicação: {data.anoPublicacao}</h2>
          <h2>Gênero: {data.genero}</h2>
          <h2>Temporadas: {data.temporadas}</h2>
          <a href="/">Voltar ao início</a>
        </div>
        </div>
  )
}  