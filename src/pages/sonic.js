import Cards from "../components/cards";
import sonic from '../images/sonic.jpeg'
import sonic2 from '../images/sonic 2.jpg'
import sonic3 from '../images/sonic 3.jpg'
import './osman.css'

function Sonic() {
    return (
        <div>
            <h1 className="title">جميع اجزاء فيلم سونيك </h1>
            <div className="container">
                <div className="cards">
                    <Cards name='سونيك الجزء 1 مترجمة ' img={sonic} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-1' />
                    <Cards name='سونيك الجزء 2 مترجمة' img={sonic2} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-2' />
                    <Cards name='سونيك الجزء 3 مترجمة' img={sonic3} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-3' />
                </div>
            </div>
        </div>
    )
}
export default Sonic;