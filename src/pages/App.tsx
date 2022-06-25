import { useState } from "react";
import Cronometer from "../components/Cronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITarefa } from "../types/tarefa";
import style from './App.module.scss';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, settSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    settSelecionado(tarefaSelecionada);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometer/>
    </div>
  );
}

export default App;