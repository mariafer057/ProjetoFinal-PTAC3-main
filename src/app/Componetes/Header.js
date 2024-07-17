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
        </header>
    )
}