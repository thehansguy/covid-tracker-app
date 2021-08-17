import axios from "axios";

const json_url = 'https://covid19.mathdro.id/api';

export const fetchSummaryData = async () => {
    try {
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(json_url);
       
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${json_url}/daily`);
       
        // console.log(data)

        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;
        // return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        
    }
}