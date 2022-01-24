import React, {useState} from 'react';
import './style.css'

const Todo = () => {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!input) {
            alert('fill the data');
        }else {
            setItems([...items, input]); 
            setInput('');
        }
    }
    return(
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="./todo.svg" alt="logo" />
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>
                <div className='addItems'>
                        <input type="text" 
                            placeholder='✍ Add Item' 
                            className='form-control' 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}/>
                        <i className='fa fa-plus add-btn' onClick={addItem}></i>
                </div>
                <div className='showItems'>
                    {items.map((curr, index) => {
                        return (
                            <div className='eachItem' key={index}>
                                <h3>{curr}</h3>
                                <div className='todo-btn'>
                                    <i className='far fa-edit add-btn'></i>
                                    <i className='far fa-trash-alt add-btn'></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="Remove All"><span>CHECKLIST</span></button>
                </div>
            </div>
        </div>
    )
}

export default Todo;