import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function List() {

    const [resData, setResData] = useState(null);

    const url = "home";

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(url);

                setResData(response.data);
            }
            catch (e) {
                console.error('Error fetching data: ', e);
            }
        }

        fetchData();

    }, [])

    return (
        <div>
            <h1>Movies</h1>
            {resData ? (
                <pre>{JSON.stringify(resData, null, 2)}</pre>
            ) : (<p>Loading...</p>)}
        </div>
    )
}
