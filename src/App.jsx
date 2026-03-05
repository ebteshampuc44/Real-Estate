import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Booking from './pages/Booking';
import Article from './pages/Article';
import Error from './pages/Error';  // Changed to look in pages folder

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="properties" element={<Properties />} />
        <Route path="booking/:id" element={<Booking />} />
        <Route path="agents" element={<Agents />} />
        <Route path="blog" element={<Blog />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="error" element={<Error/>}/>
        {/* Add catch-all route for 404 pages */}
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  );
}

export default App;