function List() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, 
    {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, 
    {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]

  return (
    <aside>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((value, index) => (
                <li key={index}>
                    <h3>
                        {value.tarefa}
                    </h3>
                    <span>
                        {value.tempo}
                    </span>
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default List;