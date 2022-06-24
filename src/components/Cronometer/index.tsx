import Button from "../Button"
import Clock from "./Clock"
import style from "./Cronometer.module.scss";

function Cronometer() {
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Clock/>
        </div>
        <Button>
            Iniciar!
        </Button>
    </div>
  )
}

export default Cronometer