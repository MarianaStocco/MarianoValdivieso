import React, { useEffect, useState } from 'react'
import FilterBar from './FilterBar';
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

    return (
        <section>
            <Header/>
            <FilterBar className='mt-[120px] w-full bg-white mb-5 shadow-md'></FilterBar>
            <div className='pt-4 pl-1 pr-1 columns-4 '>
                {data?.map((e, id) =>
                    <div>
                        <div key={id}>
                                    <img className='mt-20' src={e.image} alt={e.title} />
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
