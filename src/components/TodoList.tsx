import React from 'react'

interface Props {
    id: number;
    title: string;
    isCompleted: boolean;
    handleRemoveTodo: (id: number) => void;
    handleUpdateTodo: (id: number, title: string) => void,
    handleStatusTodo: (id: number, status: boolean) => void
}

const TodoList = ({id, title, isCompleted, handleRemoveTodo, handleUpdateTodo, handleStatusTodo }: Props) => {

    const handleConfirm = (id:number) => {
        let confirm = window.confirm(`Are you sure ? You want to delete this Todo \n"${title}"`)

        if(confirm) handleRemoveTodo(id)
    }

    const handlePrompt = () => {
        let updatedTitle = window.prompt('Please enter Todo title here');

        if(updatedTitle) handleUpdateTodo(id, updatedTitle)        
    }

    return (
        <div className={`todolist ${isCompleted ? 'completed' : ''}`}>
            <div className='todolist__heading'>
                <h4>{title}</h4>
            </div>
            <div className="todolist__actions">
                <a title='Edit Todo' style={{color: '#f2f212'}} onClick={handlePrompt}>
                    <i className="material-icons">border_color</i>
                </a>
                <a title='Delete Todo' onClick={()=>handleConfirm(id)} style={{color: '#ff5050'}}>
                    <i className="material-icons">delete</i>
                </a>
                <a title={`${isCompleted ? 'Incomplete' : 'Complete'} Todo`} style={{color: "#38b638"}} onClick={()=>handleStatusTodo(id ,!isCompleted)}>
                    <i className="material-icons">{isCompleted ? 'highlight_off' : 'done'}</i>
                </a>
            </div>
        </div>
    )
}

export default React.memo(TodoList)