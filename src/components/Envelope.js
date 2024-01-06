import React from 'react'
import Sender from './Sender'
import Receiver from './Receiver'
import AddressLabel from './AddressLabel'

const Envelope = () => {
    const address = [
        {
            name: "suraj thadarai",
            streetAddress: "Near Ryan International School",
            cityZip: "Navi Mumbai Kharghar 410210"
        },
        {
            name: "Neer Thadarai",
            streetAddress: "Near Kharadi Bypass Road",
            cityZip: "Pune Kharadi 411014"
        },

    ]
    return (
        <div className='envelope'>
            <Sender>
                <AddressLabel address={address[0]} />
            </Sender>
            <Receiver >
                <AddressLabel address={address[1]} />
            </Receiver>
            <div className='stamp'>
                <div className='rotated-text'>
                    Stamp
                </div>
            </div>
        </div>
    )
}

export default Envelope