import React, {useState} from 'react'
import './TodosInput.css';

const TodosInput = () => {

    const [inputText,setInputText]=useState('');
    const [inputCont,setInputCont] = useState([]);

  return (
    <section className='todoInput'>
        <h1>todos</h1>

        <div className='submit-container'>
            <form>
                <input type="text" className='input' />
            </form>

            
            
        </div>
    </section>
  )
}

export default TodosInput
