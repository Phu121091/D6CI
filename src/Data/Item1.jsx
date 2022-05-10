import React from 'react'

const Todo = ({name,id,user,complete}) => {
  return (
    <div className='todo'>
        <p>User: {user}</p>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Completed: {complete?"done":"Not finish"}</p>
    </div>
  )
}

export default Todo