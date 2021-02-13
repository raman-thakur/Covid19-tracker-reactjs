import style from './App.module.css';
import axios from 'axios';
import Card from './components/Cards/cards';
import Countries from './components/Countries/countries';
import Chart from "./components/Chart/chart";
import {react, useState, useEffect} from 'react'
function App() {

const [countries,setcountries]=useState([]);
const [currentcountry,setcurrentcountry]=useState('Afghanistan');
const [infected,setinfected]=useState(55384);
const [recovered,setrecovered]=useState(48109);
const [deaths,setdeaths]=useState(2414);
const [lastupdate,setlastupdate]=useState('2021-02-10T06:22:28.000Z');

//api url for a perticular country data
const URL='https://covid19.mathdro.id/api/countries/';

//countries array
useEffect(()=> { 
  axios.get('https://covid19.mathdro.id/api/countries')
    .then((data)=>{
      const fun=(prop)=>{
        return prop.data.countries.map((x)=>{
         return x.name;
       });
       };
      const countries=fun(data);
      setcountries(countries);
    });
},[]);


//confirmed
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      const x=props.data.confirmed.value;
    //   const newx=(x)=>{
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
      setinfected(x);
    });
},[currentcountry]);


//recovered
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      const x=props.data.recovered.value;
    //   const newx=(x)=>{
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
      setrecovered(x);
    });
    
},[currentcountry]);


//deaths
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      const x=props.data.deaths.value;
    //   const newx=(x)=>{
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
      setdeaths(x);

    });
    
},[currentcountry]);

// last updation time and date
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      let dateString = props.data.lastupdate;

      const formatDate = (dateString) => {
          const options = { year: "numeric", month: "long", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      }
      // dateString=formatDate(dateString);
      setlastupdate(formatDate);
      // console.log(props.data.lastUpdate);
    });
},[currentcountry]);

//optionchange handler
const countrychangehandler=(event)=>{
  setcurrentcountry(event.target.value);
};

if(countries.length>0)
{
  return (
    <div className="App" className={style.page}>
      <div className={style.container}>
        <img src="https://covid19statswebsite.netlify.app/static/media/image.d7265326.png" alt="cool-image" />
        <div className={style.header}>
          <h3>STAY HOME, STAY SAFE</h3>
        </div>
        <div className={style.country}>
          <h3>{currentcountry}'s Data</h3>
        </div>
        <div className={style.row}>
          <Card type={"infected"} number={infected} date={lastupdate} color={"aqua"} country={currentcountry}/>
          <Card type={"recovered"} number={recovered} date={lastupdate} color={"green"} country={currentcountry}/>
          <Card type={"deaths"} number={deaths} date={lastupdate} color={"red"} country={currentcountry}/>
        </div>
        <Countries props={countries} countrychangehandler={countrychangehandler}/>
        <Chart infectedCount={infected} recoveredCount={recovered} deathCount={deaths}/>
      </div>
    </div>
  );

}
else
  return(
    <center>
    <h1>loding...</h1>
    </center>
  );

 
}

export default App;
