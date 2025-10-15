import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template1 from './Templates/template1';
import { ColorProvider } from './Components/ColorRoute';
import Template2 from './Templates/template2';
import { CouplesProvider } from './Components/CouplesProvider';
import Card1 from './weddingivcards/Cards/General/Card1';
import ImageCard from './weddingivcards/Cards/General/ImageCard';
import YorubaWeddingTemplate from './Templates/YorubaTemplate';

function App() {

  // Note the path must be the same with CouplesInviteTempInfo.ts >> CouplesInviteTemp && tempName

  return (
    <Router>
      <CouplesProvider>
        <ColorProvider>
          <Routes>
            <Route path="/template1" element={<Template1 />} />
            <Route path="/couplesdream" element={<Template2 />} />
            <Route path="/card1" element={<Card1 />} />
            <Route path="/imagedcard" element={<ImageCard />} />
            <Route path="/yorubawedding" element={<YorubaWeddingTemplate />} />
          </Routes>
        </ColorProvider>
      </CouplesProvider>
    </Router>
  );
}

export default App;
