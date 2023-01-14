import React from 'react';
import './stock.css'
import Navbar from '../navbar/navbar';

import { getTreasuries } from './Data';
// Components
let data;
let info;
const column_names = ["Date", "1 Mo", "2 Mo", "3 Mo", "6 Mo", "1 Yr", "2 Yr", "3 Yr", "5 Yr", "7 Yr", "10 Yr", "20 Yr", "30 Yr"]
const APIkey = "3d6HM6gtxwchw3aErsst"
const Plotly = require('react-plotly.js')
const bondSymbol = "USTREASURY/YIELD";

class StockApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            info: [],
            m1: false,
            m2: false,
            m3: false,
            m6: false,
            y1: false,
            y2: false,

            y3: false,
            y5: false,
            y7: false,
            y10: false,
            y20: false,
            y30: false,
        }
    }
    componentDidMount(){
        getTreasuries(true,this.state.m1,this.state.m2,this.state.m3,this.state.m6,this.state.y1,this.state.y2,this.state.y3,this.state.y5,this.state.y7,this.state.y10,this.state.y20,this.state.y30)
        .then((data) => {
            this.setState({data: data})
            console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
        getTreasuries(true,this.m1,this.m2,this.m3,this.m6,this.y1,this.y2,this.y3,this.y5,this.y7,this.y10,this.y20,this.y30);

    }
    


    
    render() {
    return (
    
    <div>
    <Navbar/>


    <div className='YeildData'>
    <h1>US Treasury Yields</h1>
    <div className='YeildChart'>
    
        <canvas id="acquisitions">
            
            </canvas></div>
    
 
    <script type="module" src="#">
    
        
    </script>
   

    </div>
    </div>
    
        );
    }
}

export default StockApi;