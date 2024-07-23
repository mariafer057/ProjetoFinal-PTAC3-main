import Image from "next/image"


export default async function Produto({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id)
    const data = await response.json();
    return(
        <div key={data.id}>
          <h2>Título: {data.titulo}</h2>
          <h2>Diretor: {data.diretor}</h2>
          <h2>Ano de publicacao: {data.anoPublicacao}</h2>
          <h2>Genero: {data.genero}</h2>
          <h2>Temporadas: {data.temporadas}</h2>
          <Image 
          width= {150}
          height={150}
          src={data.imagem}/>
        </div>
  )
}  