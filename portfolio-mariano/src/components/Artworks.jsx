import React, { useEffect, useState } from 'react'

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
            <div className='container my-12 mx-auto px-4 md:px-12'>
                {data?.map((e, id) =>

                <div className='grid-cols-3'>
                    <div key={id} className="flex flex-wrap -mx-1 lg:-mx-4">
                        <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
                            <div className='verflow-hidden rounded-lg shadow-lg'>
                                <img className="block h-auto w-full" src={e.image} alt={e.title} />
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{e.title}</div>
                            <p className="text-gray-700 text-base">
                                {e.technique}
                            </p>
                        </div>
                        {/* <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div> */}
                    </div>
                </div>




                )}
            </div>
        </section>
    )
}
