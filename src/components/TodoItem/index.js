// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteButton = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
