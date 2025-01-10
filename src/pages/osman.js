import Cards from "../components/cards";
import osman from '../images/osman.jpeg'
import './osman.css'

function Osman() {
    return (
        <div>
            <h1 className="title">جميع حلقات مسلسل المؤسس عثمان </h1>
            <div className="container">
                <div className="cards">
                    <Cards name='الحلقة 177 مترجمة' img={osman} description='شاهد الان الحلقة 177 بجودة عالية مع امكانية التحميل' link='watch-osman-177'/>
                    <Cards name='الحلقة 176 مترجمة' img={osman} description='شاهد الان الحلقة 176 بجودة عالية مع امكانية التحميل' link='watch-osman-176'/>
                </div>
            </div>
        </div>
    )
}
export default Osman;