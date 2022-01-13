import "../adding/adding.css";

export default function Adding({add, name, setName}) {
    return (
        <div className="adding">
            <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
            <button className="add-btn" onClick={() => {
                if(name !== "") {
                        add()    
                } else {
                    alert("Nothing to write")
                }
                setName("")
            }}>Submit</button>
        </div>
    )
}