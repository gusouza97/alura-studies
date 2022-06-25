import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './List.module.scss';



function List({ tarefas }: { tarefas: ITarefa[]}) {

  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((value, index) => (
                <Item 
                    key={index}
                    {...value}
                />
            ))}
        </ul>
    </aside>
  )
}

export default List;