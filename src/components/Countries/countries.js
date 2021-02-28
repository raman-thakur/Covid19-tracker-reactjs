import style from './countries.module.css'

const countries=(props)=>
{
    const countries=Object.values(props)[0];

    let listelement = []
    
    for (var i = 0; i < countries.length; i++) {
        listelement.push(
            <option key={i} value={countries[i]}>{countries[i]}</option>
     )
 }

    return(
    <form className={style.row}>
        <select id="country" name="country" onChange={props.countrychangehandler}>
           {listelement}
        </select>
    </form>
    );
}

export default countries;
