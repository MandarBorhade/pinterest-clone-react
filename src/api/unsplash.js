import axios from "axios";

export default axios.create(
    {
        basUrl : 'https://api.unsplash.com/',
        headers : {
            Authorization: 'Client-ID 29ZbazWyj9w8FDZNpLDynTUlu2AU52Xlp2-HTex5vJY'
        }
    }
)




