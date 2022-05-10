import React from 'react'

const Sta = ({name,id,user,body}) => {
  return (
    <div className='sta'>
        <p>User: {user}</p>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Body: {body}</p>
    </div>
  )
}

export default Sta