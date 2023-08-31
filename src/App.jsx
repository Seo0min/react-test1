import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [plans, setPlans] = useState([
    { id: 1, content: 'React를 배워봅시다.'},
  ])

  const [content, setContent] = useState('')

  const clickAddButtonHandler = () => {
      const newPlans = {
        id: Date.now(),
        content,
      }
      setPlans([...plans, newPlans]);
  };

  const onContentChangeHandler = (event) => {
      setContent(event.target.value)
  }

  return (
    <div className='Body'>
      <div className='Button-tag'>
        <input 
        onChange = {onContentChangeHandler} 
        value ={content} 
        type='text' 
        />

        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <h2>Todo List</h2>
      <div className='Plans-container'>
        {
          plans.map((item) => {
            return (
              <div key = {item.id} className='Box'>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default App