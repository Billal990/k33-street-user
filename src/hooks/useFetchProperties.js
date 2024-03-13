import React, { useEffect, useState } from 'react'
import useAxiosInstance from './useAxiosInstance';

export default function useFetchProperties() {
    const axiosInstance = useAxiosInstance()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([])

    useEffect(()=>{
        setLoading(true)
        axiosInstance.get("/api/users/all/property/")
        .then(res => {
            console.log(res)
            setData(res.data.response.property)
            setLoading(false)
            setError(false)
        })
        .catch(error => {
            setError(true)
        })
    }, [])

  return {loading, error, data}
}
