import './cards.css';
function Cards(props) {
    return (
        <div className='card'>
            <div>
            <img src={props.img} />
            </div>
            <br/>
            <h2>{props.name}</h2>
            <br/>
            <p>{props.description}</p>
            <br/>
            <button onClick={() => window.location.pathname = `/${props.link}`}>المشاهدة و التحميل</button>
        </div>
    )
}
export default Cards;