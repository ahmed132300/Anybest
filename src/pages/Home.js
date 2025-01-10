import './Home.css';
import osman from '../images/osman.jpeg'
import salah from '../images/salah.jpeg'
import elfateh from '../images/elfateh.jpeg'
import ImageSlider from '../components/Imgs';
import Cards from '../components/cards';
function Home() {
    const imageUrls = [
        osman,
        salah,
        elfateh,
    ];
    return (
        <div>
            <ImageSlider images={imageUrls} />
            <br />
            <h1>احدث المسلسلات</h1>
            <br />
            <div className="container">
                <div className='cards'>
                    <Cards img={osman} name='عثمان' description='شاهد الان جميع حلقات المؤسس عثمان بجودة عالية مع امكانية التحميل' link='osman' />
                    <Cards img={salah} name='صلاح الدين' description='شاهد الان جميع حلقات صلاح الدين الايوبي بجودة عالية مع امكانية التحميل' link='salah' />
                    <Cards img={elfateh} name='محمد الفاتح' description='شاهد الان جميع حلقات محمد الفاتح بجودة عالية مع امكانية التحميل' link='elfateh' />
                </div>
            </div>

        </div>
    );
}
export default Home;