import { useEffect, useState } from 'react'
import yelpApi from '../api/yelpApi'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm) => {
        try {

            const response = await yelpApi.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'china',
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong!')
        }
    }


    useEffect(() => {
        searchApi('Pasta')
    }, []);


    return [searchApi, results, errorMessage]
}