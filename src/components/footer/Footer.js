import "../footer/footer.css";

export default function Footer({todosLenght, isChecked, onClear}) {
    return (
        <div className="footer">
            <p>{isChecked}/{todosLenght} Completed</p>
            <button onClick={() => {
                onClear()
            }}>Clear Completed</button>
        </div>
    )
}