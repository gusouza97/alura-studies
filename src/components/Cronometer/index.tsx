import { useEffect, useState } from "react";
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

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Clock tempo={tempo}/>
        </div>
        <Button>
            Iniciar!
        </Button>
    </div>
  )
}

export default Cronometer