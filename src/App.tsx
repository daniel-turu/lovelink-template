import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template1 from './Templates/template1';
import { ColorProvider } from './Components/ColorRoute';
import Template2 from './Templates/template2';
import { CouplesProvider } from './Components/CouplesProvider';
import Card1 from './weddingivcards/Cards/General/Card1';
import ImageCard from './weddingivcards/Cards/General/ImageCard';


function App() {

  // Note the path must be the same with LovelinkTempInfo.ts >> lovelinkTemp && tempName

  return (
    <Router>
      <CouplesProvider>
        <ColorProvider>
          <Routes>
            <Route path="/template1" element={<Template1 />} />
            <Route path="/couplesdream" element={<Template2 />} />
            <Route path="/card1" element={<Card1 />} />
            <Route path="/imagedcard" element={<ImageCard />} />
          </Routes>
        </ColorProvider>
      </CouplesProvider>
    </Router>

  );
}

export default App;
