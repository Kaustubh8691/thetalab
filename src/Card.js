import React from 'react'

const Card = ({name,email,flag}) => {
  return (
    <div>


{flag? <div><h1>{name}</h1>
      <h1>{email}</h1></div>:<h1>No data found</h1>}
    </div>
  )
}

export default Card