import React from 'react'

export default function WellcomeMessage({onGetPostClick}) {
  return (
    <center className='my-5 text-center text-black py-4'>
        <h1 className='text-center  fs-1'>There is No Post</h1>
        <button className='btn btn-primary my-5 ' onClick={onGetPostClick}>Fetch Data from Server</button>
    </center>
  )
}
