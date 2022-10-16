import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from "../src/pages/Auth"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>

    // <Login/>  you can test it out by uncommenting this 
   
    
  );
}

export default App;