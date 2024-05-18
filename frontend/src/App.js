import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReceiveMaterialForm from './components/ReceiveMaterial/ReceiveMaterialForm';
import AssignEngineerForm from './components/AssignEngineer/AssignEngineerForm';
import Table from './components/Table/Table';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
        <Route path="/dashboard/admin" element={ <Dashboard />} />
          
          <Route path="/" element={ <ReceiveMaterialForm />} />
          <Route path="/admin" element={ <Table />} />
          <Route path="/admin/assign" element={ <AssignEngineerForm />} />

          {/* <Route path="/services" element={ <Services />} />
          <Route path="/contact" element={ <Contact />} /> */}
        </Routes>

        {/* <Footer /> */}
        </BrowserRouter>
      
    </div>
  );
}

export default App;
