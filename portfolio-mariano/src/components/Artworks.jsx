import React, { useEffect, useState } from 'react'
import Art from './Art';


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
        <h1 className='mt-[200px] ml-32 text-lg font-extrabold'>DIGITAL ART</h1>
      <div className='ml-32 pt-4 pl-1 pr-1 columns-3 '>
        {data?.map((e, id) =>
          e.technique === 'Digital Art' ?
          <Art
          className='w-[100%] mb-4 block'
          image={e.image}
          title={e.title}
          release_year={e.release_year}
          id={e.id}
          />
            : null
        )}
      </div>
      <h1 className='mt-[200px] ml-32 text-lg font-extrabold'>OIL ON CANVAS</h1>
      <div className='ml-32 pt-4 pl-1 pr-1 columns-3 '>
        {data?.map((e, id) =>
          e.technique === 'Oil on canvas' ?
          <Art
          className='w-[100%] mb-4 block'
          image={e.image}
          title={e.title}
          release_year={e.release_year}
          id={e.id}
          />
            : null
        )}
      </div>
      <h1 className='mt-[200px] ml-32 text-lg font-extrabold'>INK - WATERCOLOR</h1>
      <div className='ml-32 pt-4 pl-1 pr-1 columns-3 '>
        {data?.map((e, id) =>
          e.technique === 'Ink. Watercolor' ?
          <Art
          className='w-[100%] mb-4 block'
          image={e.image}
          title={e.title}
          release_year={e.release_year}
          id={e.id}
          />
            : null
        )}
      </div>
      <h1 className='mt-[200px] ml-32 text-lg font-extrabold'>PASTEL - GRAPHITE</h1>
      <div className='ml-32 pt-4 pl-1 pr-1 columns-3 '>
        {data?.map((e, id) =>
          e.technique === 'Pastel chalk. Graphite' ?
          <Art
          className='w-[100%] mb-4 block'
          image={e.image}
          title={e.title}
          release_year={e.release_year}
          id={e.id}
          />
            : null
        )}
      </div>

    </section>
  )
}


                    // <div>
                    //     <div key={id}>
                    //                 <img className='mt-20' src={e.image} alt={e.title} />
                    //         <div className="px-6 py-4">
                    //             <div className="font-bold text-xl mb-2">{e.title}</div>
                    //             <p className="text-gray-700 text-base">
                    //                 {e.technique}
                    //             </p>
                    //         </div>
                    //     </div>
                    // </div>