import style from './App.module.css';
import axios from 'axios';
import Card from './components/Cards/cards';
import Countries from './components/Countries/countries';
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
      setinfected(props.data.confirmed.value);
    });
},[currentcountry]);


//recovered
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      setrecovered(props.data.recovered.value);
    });
},[currentcountry]);


//deaths
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      setdeaths(props.data.deaths.value);
    });
},[currentcountry]);

// last updation time and date
useEffect(()=> { 
  axios.get(URL+currentcountry)
    .then((props)=>{
      setlastupdate(props.data.lastUpdate);
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
          <Card type={"infected"} number={infected} date={lastupdate} color={"aqua"}/>
          <Card type={"recovered"} number={recovered} date={lastupdate} color={"green"}/>
          <Card type={"deaths"} number={deaths} date={lastupdate} color={"red"}/>
        </div>
        <Countries props={countries} countrychangehandler={countrychangehandler}/>
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
