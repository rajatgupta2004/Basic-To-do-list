"use client"
import Ract, { useState } from 'react'
const page =() => {
  const [title, ctitile]= useState("")
  const [dis, cdis] = useState("")
  const [mainTask,setMainTask]= useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,dis}])
    console.log(mainTask);
    ctitile("")
    cdis("")
  }
  const dlthandler =(i) => {
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let rederTask = <h2 className="text-center text-white text-9xl font-bold ">Koi task nhi h</h2>
  
    if(mainTask.length>0){
      rederTask=mainTask.map((t,i)=>{
      
      return (
        <li key={i} className="flex items-center justify-between mb-8" >
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-bold">{t.title }</h5>
            <h6 className="text-xl font-bold">{t.dis}</h6>
          </div>
          <button onClick={()=>{
            dlthandler(i)
          }} 
          className="bg-black text-white px-3 py-2 rounded font-bold">Delete krdo</button>
        </li>
        )
      })
    }
    
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5x1 font-bold text-center'>Rajat's ToDoList</h1>
    <form onSubmit={submitHandler}>
      <input type ="text" className='text-2xl border-zinc-950 border-2 m-5 px-4 py-2' 
      placeholder="ENTER Your task"
      value= {title}
      onChange={(e)=>{
        ctitile(e.target.value)
      }}
      />
       <input type ="text" className='text-2xl border-zinc-950 border-2 m-5 px-4 py-2' 
      placeholder="Description"
      value ={dis}
      onChange={(e)=>{
        cdis(e.target.value)
      }}


      />
      <button className='bg-blue-700 text-white px-4 py-2 text-2xl font-bold rounded'>click me</button>
    </form>
    <hr />
    <div class="p-8 bg-red-500 ">
      <ul>{rederTask}</ul>
    </div>


    </>
  )
}
export default page