import Icon from "../icon/Icon"
import styles from "./GameInfo.module.css"
import Button from "../button/Button"

function GameInfo({ currentPlayer, winner, onReset, disabled }) {

    const shouldEnableButtun = () => {
        if(winner !== 0) return true
    }

    return (
        <div className={styles.gameInfo}>
            {
                winner === 0 &&
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
                winner !== 0 &&
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
            <Button 
            onClick={onReset}
            disabled={!shouldEnableButtun()}
            >
                Reiniciar
            </Button>
        </div>
    )
} export default GameInfo
