import "../list/list.css";

export default function List({todos, onDelete, changeCheckbox}) {
    return (
        <div className="list">
            {
                todos.map((todo) => {
                    return (
                        <div className="todo-item" key={todo.id}>
                            <h1>{todo.text}</h1>
                            <input type="checkbox" checked={todo.checked} onChange={(e) => {
                                changeCheckbox({
                                    ...todo,
                                    checked : e.target.checked
                                })
                            }} />
                            <button onClick={() => {
                                onDelete(todo)
                            }}>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}