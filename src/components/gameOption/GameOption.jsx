import styles from "./GameOption.module.css"
import Icon from "../icon/Icon"

function GameOption({status, onClick}) {
    return (
        <div className={styles.gameOption} onClick={onClick}>

            {
                status === 1 && <Icon iconName="circle" />

            }
            {
                status === -1 && <Icon iconName="x" />
            }
        </div>
    )
}

export default GameOption 