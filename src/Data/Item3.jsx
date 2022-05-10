import React from 'react'

const Contact = ({name,id,username,email,address,phone,website,company}) => {
  return (
    <div>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Address:</p>
        <p>Street: {address.street}</p>
        <p>Suite: {address.suite}</p>
        <p>City: {address.city}</p>
        <p>Zipcode: {address.zipcode}</p>
        <p>Geo:</p>
        <p>Lat: {address.geo.lat}</p>
        <p>Lng: {address.geo.lng}</p>
        <p>Phone: {phone}</p>
        <p>Websie: {website}</p>
        <p>Company: </p>
        <p>Name: {company.name}</p>
        <p>Catchphrase: {company.catchPhrase}</p>
        <p>Bs: {company.bs}</p>
    </div>
  )
}

export default Contact