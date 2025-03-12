// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.
import {useState} from 'react'
import axios from 'axios'

export default function TaskForm() {
    const [title,setTitle]=useState('')
    const [dueDate,setDueDate]=useState('')
    const [priority,setPriority]=useState('')
    const [status,setStatus]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/create',{title:title,dueDate:dueDate,priority:priority,status:status}).then((res)=>{
            alert(res.data.message)
            window.location.reload();
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="screenn">
            <form style={{display:'flex',flexDirection:'row'}} onSubmit={handleSubmit} action="">
                <h3 style={{textAlign:'center'}}>Task</h3>
                <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
                <input type="date" placeholder='Due Date' onChange={(e)=>setDueDate(e.target.value)}/>
                <input type="text" placeholder='Priority' onChange={(e)=>setPriority(e.target.value)}/>
                <input type="text" placeholder='Status' onChange={(e)=>setStatus(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}