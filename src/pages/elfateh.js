import Cards from "../components/cards";
import Header from "../components/Header";
import elfateh from '../images/elfateh.jpeg'
import './elfateh.css'

 function Elfateh() {
    return(

            <div>
        <div>
            <Header />
            <h1 className="title">جميع حلقات مسلسل محمد الفاتح </h1>
            <div className="container">
                <div className="cards">
                    <Cards name='الحلقة 30 مترجمة' img={elfateh} description='شاهد الان الحلقة 30 بجودة عالية مع امكانية التحميل' link='watch-elfateh-30'/>
                </div>
            </div>
        </div>
    </div>
    )

}
export default  Elfateh;