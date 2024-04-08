import Title from "../title/title"
import Subtitle from "../subtitle/Subtitle"
import styles from "./Header.module.css"


function Header() {
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>criado por Mateus Noleto</Subtitle>
        </div>
    )
}

export default Header