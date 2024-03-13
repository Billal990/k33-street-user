import React, { useEffect, useState } from 'react'
import useAxiosInstance from './useAxiosInstance';

export default function useFetchSingleProperty(slugId) {
    const axiosInstance = useAxiosInstance()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({})

    useEffect(()=>{
        setLoading(true)
        axiosInstance.get(`/api/users/property/public/${slugId}`)
        .then(res => {
            setData(res.data.response.property)
            setLoading(false)
            setError(false)
        })
        .catch(error => {
            setError(true)
        })
    }, [slugId, axiosInstance])

  return {loading, error, data}
}