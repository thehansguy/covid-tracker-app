import React from 'react';

import {fetchSummaryData} from './api';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';

import coronaImage from './images/image.png';   

class App extends React.Component{

    state={
        data: {},
        country: '',
    }
    
    async componentDidMount(){
        const fetchedData = await fetchSummaryData();

        this.setState({data:fetchedData})
        //  console.table(fetchedData);
    }

    handleCountryChange = async (country)=>{
        const fetchedData = await fetchSummaryData(country);
    //    console.table(fetchedData);
        this.setState({data:fetchedData, country: country})
        
    }

    render(){

        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img classname={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange }/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;