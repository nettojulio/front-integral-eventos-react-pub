import { useState } from 'react';
import close from './assets/delete.svg'

function ToDoTask(props) {
  return (
    <div>
      <li className={props.visibility}>
        <p onClick={() => props.handleComplete(props.id)} className={`task_${props.status}`}>
          {props.children}
        </p>
        <button onClick={() => props.handleDelete(props.id)}>
          <img src={close} alt="Close Button" />
        </button>
      </li>
      <div className={`thin-line ${props.visibility}`}></div>
    </div>
  )
}

function App() {

  const [tasks, setTasks] = useState([]);

  function handleAddTask(event) {
    if (event.key !== 'Enter' || event.target.value.trim() === '') return;
    handleAllTasks()

    const newTask = [...tasks,
    {
      id: + new Date(),
      taskDescription: event.target.value,
      display: 'visible',
      complete: false
    }]
    setTasks(newTask)
    console.log()
    event.target.value = '';
  }

  function handleComplete(id) {
    const newTasks = [...tasks];
    const taskComplete = newTasks.find(task => task.id === id)

    taskComplete.complete = !taskComplete.complete;
    setTasks(newTasks);
  }

  function handleDelete(id) {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks);
  }

  function handleAllTasks() {
    const newTasks = [...tasks]
    newTasks.map(task => task.display = 'visilble')
    setTasks(newTasks)
  }

  function handleActiveTasks() {
    const newTasks = [...tasks]
    newTasks.map(task => task.display = task.complete === false ? 'visilble' : 'hidden')
    setTasks(newTasks);
  }

  function handleCompleteTasks() {
    const newTasks = [...tasks];
    newTasks.map(task => task.display = task.complete !== false ? 'visilble' : 'hidden')
    setTasks(newTasks);
  }

  function handleClearAllTasks() {
    const newTasks = [...tasks];
    const pendingTasks = newTasks.filter(task => task.complete === false)
    setTasks(pendingTasks)
  }

  return (
    <div className="App">
      <header className="background">
        <h1>TAREFAS</h1>
        <input onKeyDown={handleAddTask} placeholder="Criar nova tarefa" ></input>
      </header>
      <div className="task-manager">
        <ul>
          {tasks.map(task => <ToDoTask
            key={task.id}
            id={task.id}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            status={task.complete}
            visibility={task.display}
          >
            {task.taskDescription}
          </ToDoTask>)}
        </ul>
        <nav>
          <p>{(tasks.filter(task => task.complete !== true)).length} itens restantes</p>
          <p onClick={() => handleAllTasks()}>Todas</p>
          <p onClick={() => handleActiveTasks()}>Ativas</p>
          <p onClick={() => handleCompleteTasks()}>Completada</p>
          <p onClick={() => handleClearAllTasks()}>Limpar Completadas</p>
        </nav>
      </div>

    </div>
  );
}

export default App;
