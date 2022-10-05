import React, {useState} from 'react'
import './TodosInput.css';

const TodosInput = () => {

    const [inputText,setInputText]=useState(null);
    const [inputCont,setInputCont] = useState([]);

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

  return (
    <section className='todoInput'>
        <h1>todos</h1>

        <div className='submit-container'>
            <form onSubmit={submitHandler}>
                <input type="text" className='input' onChange={inputChangeHandler} value={inputText} />
            </form>

            <ul className='inputs-text'>
                {inputCont.map((item,ind) => {
                    return(
                        <li key={ind}>
                            <p>{item.text}</p>
                            <button className='delete' onClick={()=> removeHandler(item)}><i class="fa-solid fa-x"></i></button>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    </section>
  )
}

export default TodosInput
