import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table/Table';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          
          <Route path="/" element={ <Form />} />
          <Route path="/admin" element={ <Table />} />
          {/* <Route path="/services" element={ <Services />} />
          <Route path="/contact" element={ <Contact />} /> */}
        </Routes>

        {/* <Footer /> */}
        </BrowserRouter>
      
    </div>
  );
}

export default App;
