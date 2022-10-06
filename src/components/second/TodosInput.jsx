import React, {useState} from 'react'
import './TodosInput.css';

const TodosInput = () => {

    const [inputText,setInputText]=useState(null);
    const [inputCont,setInputCont] = useState([]);
    const [buttons, setButtons]=useState(true);

    const inputChangeHandler=(event)=>{
        setInputText(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        if(inputText.trim() === ''){
            return;
        }

        const mass={
            id: Math.random(),
            text: inputText,
        }
        setInputText('');
        setInputCont([...inputCont,mass]);
    }

    const removeHandler=(item)=>{
        setInputCont(inputCont.filter(event => event.id !== item.id));
    }

    const AllChange=() =>{
        setButtons(true);
    }

    const Completed=()=>{
        setButtons(false);
    }

  return (
    <section className='todoInput'>
        <h1>todos</h1>

        <div className='submit-container'>
            <form onSubmit={submitHandler}>
                <input type="text" className='input' onChange={inputChangeHandler} value={inputText} />
            </form>

            <ul className= {buttons ? 'inputs-text' : 'close-text'}>
                {inputCont.map((item,ind) => {
                    return(
                        <li key={ind}>
                            <p>{item.text}</p>
                            <button className='delete' onClick={()=> removeHandler(item)}><i class="fa-solid fa-x"></i></button>
                        </li>
                    )
                })}
            </ul>
          {inputCont.length !== 0 && (
            <div className="items">
             <p>{inputCont.length} items</p>
             <div className="buttons">
                 <button onClick={AllChange}>All</button>
                 <button>Active</button>
                 <button onClick={Completed}>Completed</button>
             </div>
           </div>
          )}
           
            
        </div>
    </section>
  )
}

export default TodosInput
