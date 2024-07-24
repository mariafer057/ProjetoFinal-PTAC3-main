import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.rodapes}>
  
             <ul className={styles.redes}>
                <li>
                <span>
                    <img className={styles.imgs} width= {80} height={80} src="https://img.icons8.com/?size=100&id=BN0HLUwp0NRM&format=png&color=FFFFFF"/>    
                    </span>
                </li>

                <li>
                 <span>
                    <img className={styles.imgs}  width= {80} height={80} src="https://img.icons8.com/?size=100&id=9tVdlpWe1F9k&format=png&color=FFFFFF"/>    
                    </span>
                </li>

                <li>
                <span>
                    <img className={styles.imgs} width= {80} height={80} src="https://img.icons8.com/?size=100&id=10861&format=png&color=FFFFFF"/>    
                </span>
                </li>

                <li>
                <span>
                    <img className={styles.imgs} width= {80} height={80} src="https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=FFFFFF"/>    
                    </span>
                </li>
            </ul>
        </footer>
    )
}