import axios from "axios";
const {curl} = process.env


//  async function getAllArtwork(){
//     const fetched = await curl
//     const response = fetched.resources.url
//     return response
// }

export function getAllArtwork() {
    return async () => {
        try {
            var art = await axios(curl);
            const allArt = art.resources
            return (
                allArt
            )
        } catch (error) {
            console.log(error);
        }

    }
}
export default getAllArtwork();