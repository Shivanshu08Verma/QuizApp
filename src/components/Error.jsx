import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()
  return (
    <h2>Something Went Wrong {error.status}</h2>
  )
}
