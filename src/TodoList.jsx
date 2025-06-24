import { useState } from 'react'
import './TodoList.css'

function TodoList() {
  const [tasks, setTasks] = useState([
    { text: 'Estudar React', completed: false },
    { text: 'Fazer compras', completed: false },
    { text: 'Limpar a casa', completed: false }
  ]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    setTasks([]);
  };

  const handleToggle = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div>
        <h1>Lista de Tarefas</h1>
              <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit">Adicionar</button>
          <button type="button" onClick={handleClear} disabled={tasks.length === 0} className='clear-button'>
            Limpar Lista
          </button>
        </form>
      </div>
      <div className="todo-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => handleRemove(index)}>Remover</button>
            </li>
          ))}
        </ul>
        <div className="empty-list">
          {tasks.length === 0 && <p>Lista de tarefas vazia</p>}
        </div>
        <div className="completed-tasks">
          <p>Tarefas concluídas: {tasks.filter(task => task.completed).length}</p>
        </div>
        <div className="pending-tasks">
          <p>Tarefas pendentes: {tasks.filter(task => !task.completed).length}</p>
        </div>       
        <div className="counter">
          <p>Total de tarefas: {tasks.length}</p>
        </div>
        <div className="footer">
          <p>            
            Desenvolvido por [Lucas Bertho Paulo dos Santos]</p>
        </div>
      </div>
    </div>
  );
}

export default TodoList