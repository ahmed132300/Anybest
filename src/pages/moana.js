import Cards from "../components/cards";
import moana from '../images/moana.jpeg'
import './elfateh.css'

function Moana() {
    return (

        <div>
            <div>
                <h1 className="title">جميع اجزاء فيلم موانا </h1>
                <div className="container">
                    <div className="cards">
                        <Cards name='الجزء 1 مترجم' img={moana} description='شاهد الان الجزء 1 بجودة عالية مع امكانية التحميل' link='watch-moana-1' />
                        <Cards name='الجزء 2 مترجم' img={moana} description='شاهد الان الجزء 2 بجودة عالية مع امكانية التحميل' link='watch-moana-2' />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Moana;