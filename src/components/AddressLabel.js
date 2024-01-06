import React from 'react'

const AddressLabel = ({address}) => {
    console.log('address contains', address)
    console.log('address.name', address.name)
    console.log('address.name', address.streetAddress)
    console.log('address.name', address.name)
  return (
    <div className='addressLabel'>
        <p>{address.name.toUpperCase()}</p>
        <p>{address.streetAddress}</p>
        <p>{address.cityZip}</p>
    </div>
  )
}

export default AddressLabel;