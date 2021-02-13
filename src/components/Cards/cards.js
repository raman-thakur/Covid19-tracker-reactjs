import style from './cards.module.css'
import CountUp from'react-countup'
const card = (props) => {
    return (
        <div className={style.row}>
            <div className={style.card} style={{borderColor: props.color}}>
                <p style={{fontSize:'25px',textDecorationLine: 'underline',textDecorationStyle: 'double' ,textTransform: 'capitalize'}}>{props.type}</p>
                {/* <p>{props.number}</p> */}
                <CountUp start={0} end={props.number} duration={2}/>
                <p>{props.date}</p>
                <p>no. of people {props.type} from covid19 in {props.country}</p>

            </div>
           
        </div>
    )
}

export default card;