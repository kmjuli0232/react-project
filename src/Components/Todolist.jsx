import React,{useState} from "react";
export const Todolist = ()=>{
    const [input,inputValue]= useState('');
    const [todos,setTodo] = useState(()=>{
        const storeValue = localStorage.getItem('myTodos');
        return storeValue?
        JSON.parse(storeValue):[];
    });
    const addTask =(e)=>{
        inputValue(e.target.value)
    };

    const TaskHandler = (e)=>{
        if(e.key=== "Enter"&& input.trim()!== ""){
            const UpdateValue = [...todos,input];
            setTodo(UpdateValue);
            inputValue("");
            localStorage.setItem('myTodos',JSON.stringify(UpdateValue));
        }
    };

    return (
      <>
        <h1>Add task</h1>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={addTask}
          value={input}
          onKeyDown={TaskHandler}
        />

        {todos.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </>
    );
}