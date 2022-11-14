import React, { useEffect, useState } from 'react'
import Header from './Header';

export default function Artworks() {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log(data);

    return (
        <section>
            <Header/>
            <div className='container my-12 mx-auto px-4 md:px-12'>
                {data?.map((e, id) =>
                    <div className=''>
                        <div key={id} className="col-2">
                                    <img className="overflow-hidden rounded-lg shadow-lg flex flex-wrap -mx-1 lg:-mx-4 my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 h-auto w-full" src={e.image} alt={e.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{e.title}</div>
                                <p className="text-gray-700 text-base">
                                    {e.technique}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
