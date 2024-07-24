import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cebecalhos}> 
         <h1 className={styles.letra}>
            
                Bem-vindo!
                <br/>
                Séries Favoritas             
               </h1>
               <img className={styles.logo}
              width= {40}
              height={40}
              src="https://img.icons8.com/?size=100&id=10294&format=png&color=FFFFFF"/>
        </header>
    )
}