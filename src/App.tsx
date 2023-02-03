import { LegacyRef, useRef, useState } from 'react';
import reactLogo from './assets/react.png';
import './App.css';
import TodoItem from './components/TodoItem';
import { IToDo } from './models/todo';

const App = () => {
  const [toDoList, setTodoList] = useState<IToDo[]>([]);
  const inputRef: LegacyRef<HTMLInputElement> = useRef(null);

  const addItem = () => {
    if (!inputRef.current) return;
    if (!inputRef.current.value?.trim()) return;
    const item: IToDo = {
      id: Math.random(),
      name: inputRef.current.value.toString(),
      isComplete: false,
    };
    setTodoList((_prev) => [..._prev, item]);
    inputRef.current.value = '';
  };

  return (
    <div className="container">
      <img className="logo" src={reactLogo} />
      <div>
        <h2>TODO APP</h2>
        <div className="input-form">
          <span>
            <input type="text" ref={inputRef} />
            <button onClick={addItem}>Add Todo</button>
          </span>
        </div>
      </div>
      <div className="content-container">
        {toDoList &&
          toDoList.map((todo, i) => (
            <TodoItem
              key={i}
              {...todo}
              setTodoList={setTodoList}
              toDoList={toDoList}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
