import axios from "axios";

const json_url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(json_url);
       
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        
    }
}