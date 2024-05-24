import Icon from "../icon/Icon"
import styles from "./GameInfo.module.css"
import Button from "../button/Button"

function GameInfo({ currentPlayer, winner, onReset, disabled, isDraw }) {

    const shouldEnableButtun = () => {
        if(winner !== 0) return true
        if(isDraw) return true
    }

    return (
        <div className={styles.gameInfo}>
            {
               !isDraw && winner === 0 &&
                <>
                    <h4>próximo a jogar</h4>
                    {
                        currentPlayer === 1 && <Icon iconName="circle" />
                    }
                    {
                        currentPlayer === -1 && <Icon iconName="x" />
                    }
                </>
            }
            {
               !isDraw && winner !== 0 &&
                <>
                    <h4>Fim de jogo!</h4>
                    <h4>Vencedor:</h4>
                    {
                        winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName="x" />
                    }
                </>
            }
            {
                isDraw && <h4>Empate!</h4>
            }
            <Button 
            onClick={onReset}
            disabled={!shouldEnableButtun()}
            >
                Reiniciar
            </Button>
        </div>
    )
} export default GameInfo
