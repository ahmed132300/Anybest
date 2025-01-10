import Cards from "../components/cards";
import Header from "../components/Header";
import salah from '../images/salah.jpeg';
import './osman.css';

function Salah() {
    return(
         <div>
        <div>
            <Header />
            <h1 className="title">جميع حلقات مسلسل صلاح الدين الايوبي </h1>
            <div className="container">
                <div className="cards">
                        <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40' />
                </div>
            </div>
        </div>
    </div>
    )
   
} 
export default Salah;