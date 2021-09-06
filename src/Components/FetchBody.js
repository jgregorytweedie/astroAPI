import React, { useState, useEffect } from 'react'

export default function FetchBody() {
  const [ID, setID] = useState("")
  const [EnglishName, setEnglishName] = useState("")
  const [IsPlanet, setIsPlanet] = useState("")

  useEffect(()=> {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setID(data.bodies.ID)
      setEnglishName(data.bodies.EnglishName)
      setIsPlanet(data.bodies.IsPlanet)
      
    })
  })
  
  return (
    
    <div>
      <h1>ID: {ID}</h1>
      <h1>English Name: {EnglishName}</h1>
      <h1>is it a planet: {IsPlanet}</h1>
      
    </div>
  )
}
