import './Home.css';
import osman from '../images/osman.jpeg'
import salah from '../images/salah.jpg'
import elfateh from '../images/elfateh.jpeg'
import ImageSlider from '../components/Imgs';
import Cards from '../components/cards';
import sonic from '../images/sonic.jpeg'
import moana from '../images/moana.jpeg'

function Home() {
    const imageUrls = [
        osman,
        salah,
        elfateh,
    ];
    return (
        <div>
            {/* <ImageSlider images={imageUrls} /> */}
            <br />
            <h1>احدث المسلسلات</h1>
            <br />
            <div className="container">
                <div className='cards'>
                    <Cards img={osman} name='عثمان' description='شاهد الان جميع حلقات المؤسس عثمان بجودة عالية مع امكانية التحميل' link='osman' />
                    <Cards img={salah} name='صلاح الدين' description='شاهد الان جميع حلقات صلاح الدين الايوبي بجودة عالية مع امكانية التحميل' link='salah' />
                    <Cards img={elfateh} name='محمد الفاتح' description='شاهد الان جميع حلقات محمد الفاتح بجودة عالية مع امكانية التحميل' link='elfateh' />
                    <Cards img={sonic} name='Sonic ' description='شاهد الان جميع أجزاء فيلم سونيك بجودة عالية مع امكانية التحميل' link='sonic' />
                    <Cards img={moana} name='Moana ' description='شاهد الان جميع أجزاء فيلم موانا بجودة عالية مع امكانية التحميل' link='moana' />
                </div>
            </div>

        </div>
    );
}
export default Home;