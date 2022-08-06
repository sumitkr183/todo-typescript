import React, { useCallback, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  title: string;
  date: Date,
  isCompleted: boolean
}

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleAddTodo = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Add new objects in Todo List items
    if (todo) setTodoList([...todoList, { id: Date.now(), title: todo, date: new Date(), isCompleted: false }])

    setTodo("") // Remove values from input todo    
  }


  const memoizeHandleRemoveTodo = useCallback((id: number) => {
    let filterdTodos = todoList.filter(item => item.id !== id)
    console.log(filterdTodos, id)

    setTodoList(filterdTodos)
  },[todoList])

  const memoizeHandleUpdateTodo = useCallback((id: number, title: string) => {
    let updatedTodos = todoList.map(item => {return {...item, title: item.id === id ? title : item.title}})

    setTodoList(updatedTodos)
  },[todoList])

  const handleStatusTodo = (id: number, status: boolean) => {
    let updatedTodos = todoList.map(item => {return {...item, isCompleted: item.id === id ? status : item.isCompleted}})

    setTodoList(updatedTodos)
  }

  return (
    <div className="app">
      <h1>To-Do App</h1>

      {/* Input form for adding Todo List */}
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />

      {/* Display added Todo Lists */}
      <div>
        {
          todoList.length > 0 ?
            todoList.map(todo => (
              <TodoList
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                handleRemoveTodo={memoizeHandleRemoveTodo}
                handleUpdateTodo={memoizeHandleUpdateTodo}
                handleStatusTodo={handleStatusTodo}
              />
            ))
            : null
        }
      </div>

    </div>
  );
}

export default App;
