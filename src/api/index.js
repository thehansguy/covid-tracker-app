import axios from "axios";

const json_url = 'https://covid19.mathdro.id/api';


export const fetchSummaryData = async (country) => {
    
    let changeableUrl = json_url;

    if(country){
        changeableUrl = `${json_url}/countries/${country}`
    }


    try {
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);

    //    console.table(confirmed) 
       
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${json_url}/daily`);
       
         

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

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${json_url}/countries`)

        return countries.map((country)=>country.name);
    } catch (error) {
        console.log(error)
    }
}