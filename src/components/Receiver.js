import React from 'react'

const Receiver = ({ children }) => {
    return (
        <div className='receiver'>
            <h3>Receiver Address</h3>
            {children}
        </div>
    )
}

export default Receiver;