import React from 'react'

const Sender = ({ children }) => {
    return (
        <div className='sender'> 
            <h3>Sender Address</h3>
            {children}
        </div>
    )
}

export default Sender;