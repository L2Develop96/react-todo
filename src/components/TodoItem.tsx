import './TodoItem.css';
import { IToDo } from '../models/todo';
import TrashIcon from '../assets/trash.svg';

interface ToDoItemProps extends Partial<IToDo> {
  setTodoList: React.Dispatch<React.SetStateAction<IToDo[]>>;
  toDoList: IToDo[];
}

const TodoItem = ({
  id,
  name,
  isComplete,
  setTodoList,
  toDoList,
}: ToDoItemProps) => {
  const handleUpdateTodo = (id?: number) => {
    if (toDoList?.length) {
      const updatedTodoList = toDoList.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      });
      if (updatedTodoList) {
        setTodoList(updatedTodoList);
      }
    }
  };

  return (
    <div className="contents">
      <span
        style={{
          textDecoration: isComplete ? 'line-through' : 'none',
        }}
      >
        {name}
      </span>
      <div>
        <input
          type="checkbox"
          checked={isComplete ? true : false}
          onChange={() => handleUpdateTodo(id)}
        />
        <div
          onClick={() =>
            setTodoList((current) => current.filter((item) => item.id !== id))
          }
        >
          <img width={20} src={TrashIcon} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
