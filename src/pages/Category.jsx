import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function Category() {
  const location = useLocation()

  console.log(location.pathname.split('/')[2])
  useEffect(() => {
    axios.get(`https://ecommerce.main-gate.appx.uz/dev/v1/category/${location.pathname.split('/')[2]}`).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })
  }, [location])
  return (
    <div>Category</div>
  )
}
