import classNames from "classnames"
import styles from "./GameOption.module.css"
import Icon from "../icon/Icon"

function GameOption({ status, onClick, isWinner, isDraw }) {
    return (
        <div
            className={
                classNames(styles.gameOption, {
                    [styles.winner]: isWinner,
                    [styles.draw]: isDraw
                })
            }
            onClick={onClick}>

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