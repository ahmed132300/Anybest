import Home from './pages/Home';
import Osman from './pages/osman';
import Salah from './pages/Salah';
import Elfateh from './pages/elfateh';
import Moana from './pages/moana';
import Cards from './components/cards';
import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Watch from './components/Watch'
import osman from './images/osman.jpeg'
import elfateh from './images/elfateh.jpeg'
import salah from './images/salah.jpeg';
import moana from './images/moana.jpeg';
import Header from './components/Header';
import Sonic from './pages/sonic';
import sonic from './images/sonic.jpeg'
import sonic2 from './images/sonic 2.jpg'
import sonic3 from './images/sonic 3.jpg'
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route index path="/home" element={<Home />} ><Home /></Route>
          {/* <Route index path="/" element={<Home />} ><Home /></Route> */}
          <Route path="/osman" element={<Osman />} ><Osman /></Route>
          <Route path="/salah" element={<Salah />} ><Salah /></Route>
          <Route path="/elfateh" element={<Elfateh />} ><Elfateh /></Route>
          <Route path="/sonic" element={<Sonic />} ><Sonic /></Route>
          <Route path="/moana" element={<Moana />} ><Moana /></Route>
          <Route path="/watch-osman-177" element={<Watch />}>
            <Watch link='https://media-hosting.imagekit.io//38f2555e2fd647a6/%D8%AF%D9%88%D8%B1%D8%A9%20%D8%AA%D8%B9%D9%84%D9%85%20%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1%20%D9%88%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%B1%D9%86%D8%AA%20%D9%84%D9%84%D9%85%D8%A8%D8%AA%D8%AF%D8%A6%D9%8A%D9%86%20%D9%85%D9%86%20%D8%A7%D9%84%D8%B5%D9%81%D8%B1%20-%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%201.mp4?Expires=1831042844&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ybgJsu0W7adGqCznIs8HB3L7mmAGuKRNAsu6YOc7C6i8zCFzR~yCyGS6pXYoMH5nZtQ51z54eO54GUe9UFUAUZZCc1-SjpalKbErpcc-17ehTUkiC9VODDmWyBIiyyy1UnDcpyjUm6x-xIuoJXF1X5RKZFy8C~TuneADcxVN1lXDjBtLEkUu1SsIRpFqYuqtZQwf5YK~SfUjcdmWaR-XTMPGWsLtKPfHdWNHXUmQndT5y9T4Geyka6NRi57MIsj3La7HcspjaD5L7xliPSq83BPmTVkKVX9F8OQz9QHKWuQvuqwKNzWEu6iIi2PwG3v2q5LuGJZIQHyDqcq~KKSV0A__' head='شاهد ايضا'>
              <Cards name='الحلقة 30 مترجمة' img={elfateh} description='شاهد الان الحلقة 30 بجودة عالية مع امكانية التحميل' link='watch-elfateh-30' />
              <Cards name='الحلقة 177 مترجمة' img={osman} description='شاهد الان الحلقة 177 بجودة عالية مع امكانية التحميل' link='watch-osman-177' />
              <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40' />
            </Watch>
          </Route>
          <Route path="/watch-osman-176" element={<Watch />}>
            <Watch link='https://drive.google.com/file/d/1pJlkD0zubvdHtVHlxzbg4dCM7iuazEKM/view?usp=drive_link' head='شاهد ايضا'>
              <Cards name='الحلقة 30 مترجمة' img={elfateh} description='شاهد الان الحلقة 30 بجودة عالية مع امكانية التحميل' link='watch-elfateh-30' />
              <Cards name='الحلقة 177 مترجمة' img={osman} description='شاهد الان الحلقة 177 بجودة عالية مع امكانية التحميل' link='watch-osman-177' />
              <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40' />
            </Watch>
          </Route>
          <Route path="/watch-salah-40" element={<Watch />}>
            <Watch link='https://www.youtube.com/embed/17l6AOc8s10?si=-5dn6m8dhtI2TTsM' head='شاهد ايضا'>
              <Cards name='الحلقة 30 مترجمة' img={elfateh} description='شاهد الان الحلقة 30 بجودة عالية مع امكانية التحميل' link='watch-elfateh-30' />
              <Cards name='الحلقة 177 مترجمة' img={osman} description='شاهد الان الحلقة 177 بجودة عالية مع امكانية التحميل' link='watch-osman-177' />
              <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40' />
            </Watch>
          </Route>
          <Route path="/watch-elfateh-30" element={<Watch />}>
            <Watch link='https://forafile.com/embed-nx4joiixwgq8.html' head='شاهد ايضا'>
              <Cards name='الحلقة 30 مترجمة' img={elfateh} description='شاهد الان الحلقة 30 بجودة عالية مع امكانية التحميل' link='watch-elfateh-30' />
              <Cards name='الحلقة 177 مترجمة' img={osman} description='شاهد الان الحلقة 177 بجودة عالية مع امكانية التحميل' link='watch-osman-177' />
              <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40' />
            </Watch>
          </Route>
          <Route path="/watch-sonic-1" element={<Watch />}>
            <Watch link='https://6sfkrspw4u.sbs/v/ej6g1y62d12s' head='شاهد ايضا'>
              <Cards name='سونيك الجزء 1 مترجمة ' img={sonic} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-1' />
              <Cards name='سونيك الجزء 2 مترجمة' img={sonic2} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-2' />
              <Cards name='سونيك الجزء 3 مترجمة' img={sonic3} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-3' />
            </Watch>
          </Route>
          <Route path="/watch-sonic-2" element={<Watch />}>
            <Watch link='https://6sfkrspw4u.sbs/v/973yji5vsw69' head='شاهد ايضا'>
              <Cards name='سونيك الجزء 1 مترجمة ' img={sonic} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-1' />
              <Cards name='سونيك الجزء 2 مترجمة' img={sonic2} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-2' />
              <Cards name='سونيك الجزء 3 مترجمة' img={sonic3} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-3' />
            </Watch>
          </Route>
          <Route path="/watch-sonic-3" element={<Watch />}>
            <Watch link='https://fastupload.io/7669fe4c7ce56176' head='شاهد ايضا' download='https://arch6.222mn-dd-r8.com/request/media/gDD36PGTpy6dwDusq5hDQAHj/Sonic.The.Hedgehog.3.2024.1080p.HDCAM.EgyDead.C....zip'>
              <Cards name='سونيك الجزء 1 مترجمة ' img={sonic} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-1' />
              <Cards name='سونيك الجزء 2 مترجمة' img={sonic2} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-2' />
              <Cards name='سونيك الجزء 3 مترجمة' img={sonic3} description='شاهد الان الجزء الاول  بجودة عالية مع امكانية التحميل' link='watch-sonic-3' />
            </Watch>
          </Route>
          <Route path="/watch-moana-2" element={<Watch />}>
            <Watch link='https://6tnutl8knw.sbs/e/m7WJxg1jXBAOBze' head='شاهد ايضا' download='https://6tnutl8knw.sbs/e/m7WJxg1jXBAOBze'>
              <Cards name='الجزء 1 مترجم' img={moana} description='شاهد الان الجزء 1 بجودة عالية مع امكانية التحميل' link='watch-moana-1' />
              <Cards name='الجزء 2 مترجم' img={moana} description='شاهد الان الجزء 2 بجودة عالية مع امكانية التحميل' link='watch-moana-2' />
            </Watch>
          </Route>
          <Route path="/watch-moana-1" element={<Watch />}>
            <Watch link='https://6tnutl8knw.sbs/e/m7WJxg1jXBAOBze' head='شاهد ايضا' download='https://6tnutl8knw.sbs/e/m7WJxg1jXBAOBze'>
              <Cards name='الجزء 1 مترجم' img={moana} description='شاهد الان الجزء 1 بجودة عالية مع امكانية التحميل' link='watch-moana-1' />
              <Cards name='الجزء 2 مترجم' img={moana} description='شاهد الان الجزء 2 بجودة عالية مع امكانية التحميل' link='watch-moana-2' />
            </Watch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
