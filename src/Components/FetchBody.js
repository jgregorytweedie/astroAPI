import React, { useState, useEffect } from 'react'

export default function FetchBody() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .catch((error) => {
        console.error("Uh oh! I had a problem fetching data: ", error)
        setError(error);
      })
      .finally(() => {
        setLoading(false)
      })
      console.log(data)
  }, [])

  if (loading) return "Loading..."
  if (error) return "Uh oh! Error!"

  return (
    <div>
      {data}
    </div>
  )
}
