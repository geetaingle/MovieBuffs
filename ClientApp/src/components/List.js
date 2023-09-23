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
                <>{resData.results.map((mov) =>
                    <>
                        <img src={mov.primaryImage?.url} />
                        <div className='mov-card'>
                            {mov.titleText.text}
                        </div>
                    </>

                )}
                </>
            ) : (<p>Loading...</p>)}

        </div>
    )
}
