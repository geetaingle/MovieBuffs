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
                <>{resData.data.map((mov) =>
                    <div key={mov.ID} className='grid'>
                        <div className='mov-card col'>
                            <div className=''>
                                <img src={mov.Image} />
                            </div>
                            <div>
                                <span className='title' >
                                    {mov["Movie Title"]}
                                </span>
                                <span className='desc'>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</span>

                            </div>
                        </div>
                    </div>

                )}
                </>
            ) : (<p>Loading...</p>)}

        </div>
    )
}
