import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './List.module.scss';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props) {

  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((value) => (
                <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={value.id}
                    {...value}
                />
            ))}
        </ul>
    </aside>
  )
}

export default List;