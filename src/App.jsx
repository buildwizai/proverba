import { Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import ThankYou from './pages/ThankYou.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
