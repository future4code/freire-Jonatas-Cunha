import axios from "axios"
import { useState, useEffect } from "react"
import BASE_URL from '../constants/BASE_URL'

export const useRequestList = () => {

    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(true)

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`).then((res) => {
            setTrips(res.data.trips)
            setLoading(false)
        }).catch((error) => {
            alert(error.response)
        })
    }


    useEffect(() => {
        getTrips()
    }, [])

    return [trips, loading]
}