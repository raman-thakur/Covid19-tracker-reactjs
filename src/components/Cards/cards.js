import style from './cards.module.css'
const card = (props) => {
    return (
        <div className={style.row}>
            <div className={style.card} style={{borderColor: props.color}}>
                <h4>{props.type}</h4>
                <p>Total ="{props.number}"</p>
                <p>{props.date}</p>
                <p>no. of people {props.type} from covid19 in this country</p>

            </div>
           
        </div>
    )
}

export default card;