import React from 'react'

function Profie({fullName , bio , prof}) {
  return (
    <div>
        <div id='control'>
        <h1 className='card'>Card</h1>
        <div className='control'>
        <h2 className='full'>Fullname :</h2>
    <h3 className='test' style={{

        fontFamily:'monospace'
        }}>  {fullName}  </h3>
        </div>
        <div className='control-2'>
            <h2>Bio:</h2>
    <h5  className='bio-2'>{bio}</h5> 
   
    </div>
    <div className='div'>
        <h2>profession :</h2>
        <p className='PP'>{prof}</p>
    </div>
    </div>
    
    </div>
  )
};

export default Profie;