import React from 'react'

export default function Art({
  id,
  title,
  technique,
  image,
  description,
  release_year
}) {
  return (
    <div className="container w-80 h-100 text-center relative overflow-hidden rounded-lg mb-5" key={id}>
      <div className='relative h-100 w-100'>
        <img
          className='w-80 h-82 flex'
          src={image}
          alt={title} />
        <div className="h-20 bg-gray-200 p-3 flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <h2 className="font-semibold text-lg w-52 ">{title}</h2>
            <div className="flex text-center justify-start gap-1 absolute left-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
