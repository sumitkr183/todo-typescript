import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.SyntheticEvent<EventTarget>) => void
}

const InputField = ({todo, setTodo, handleAddTodo} : Props) => {
  return (
    <>
        <form method="post" className="input__form" onSubmit={(e)=>handleAddTodo(e)} >
            <input type="text" placeholder="Enter Your Todo's here..."
                value={todo}
                onChange={(e)=>setTodo(e.target.value)} required />

            <button type="submit" >Add</button>
        </form>
    </>
  )
}

export default InputField