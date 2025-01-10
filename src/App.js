import Home from './pages/Home';
import Osman from './pages/osman';
import Salah from './pages/Salah';
import Elfateh from './pages/elfateh';
import Cards from './components/cards';
import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Watch from './components/Watch'
import osman from './images/osman.jpeg'
import elfateh from './images/elfateh.jpeg'
import salah from './images/salah.jpeg';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route index path="/home" element={<Home />} ><Home /></Route>
          {/* <Route index path="/" element={<Home />} ><Home /></Route> */}
          <Route path="/osman" element={<Osman />} ><Osman /></Route>
          <Route path="/salah" element={<Salah />} ><Salah /></Route>
          <Route path="/elfateh" element={<Elfateh />} ><Elfateh /></Route>
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
              <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40'/>
            </Watch>
          </Route>
          <Route path="/watch-elfateh-30" element={<Watch />}>
            <Watch link='https://www.youtube.com/embed/17l6AOc8s10?si=-5dn6m8dhtI2TTsM' head='شاهد ايضا'>
              <Cards name='الحلقة 30 مترجمة' img={elfateh} description='شاهد الان الحلقة 30 بجودة عالية مع امكانية التحميل' link='watch-elfateh-30' />
              <Cards name='الحلقة 177 مترجمة' img={osman} description='شاهد الان الحلقة 177 بجودة عالية مع امكانية التحميل' link='watch-osman-177' />
              <Cards name='الحلقة 40 مترجمة' img={salah} description='شاهد الان الحلقة 40 بجودة عالية مع امكانية التحميل' link='watch-salah-40' />
            </Watch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
