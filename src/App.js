import React from 'react';

import {fetchSummaryData} from './api';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';


class App extends React.Component{

    state={
        data: {},
    }
    
    async componentDidMount(){
        const fetchedData = await fetchSummaryData();

        this.setState({data:fetchedData})
        // console.table(fetchedData);
    }

    render(){

        const {data} = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;