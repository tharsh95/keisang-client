// hooks/useFetch.js

import { useEffect, useCallback, useState } from 'react';
import axios from 'axios';

const useFetch = (url, initialParams = {}) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    // Function to fetch data
    const fetchData = useCallback(async (params = {}) => {
        setLoading();
        try {
            const response = await axios.get(url, { params });
            setData(response.data);
            // console.log(response.data)x/
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
    }, [url]);
    useEffect(() => {
        fetchData(initialParams);
    }, [url]);

    return { data, loading, error, refetch: fetchData };
};

export default useFetch;
