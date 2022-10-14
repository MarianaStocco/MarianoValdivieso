const {curl} = process.env


 async function getAllArtwork(){
    const fetched = await curl
    const response = fetched.url
    return response
}

export default getAllArtwork();