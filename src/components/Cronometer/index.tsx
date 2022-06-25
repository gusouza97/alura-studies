import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button"
import Clock from "./Clock"
import style from "./Cronometer.module.scss";

interface Props {
  selecionado: ITarefa | undefined
}

function Cronometer({ selecionado } : Props) {

  const [tempo, setTempo] = useState<number>();

  if(selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        Tempo: {tempo}
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