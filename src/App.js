import React from 'react';
// import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home';
import ResultsPage from './components/pages/ResultsPage';
import FormPage from '../src/components/pages/FormPage';
import ToDo from './components/pages/ToDo';
import LoadingScreen from './components/pages/LoadingScreen';




function App() {
    const [response, setResponse] = React.useState(null);

    console.log("Made it to APP!");
    return (
        <>
            <Router>
                {/*<Navbar />*/}
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/results-page' element={<ResultsPage response={response} setResponse={setResponse} />} exact />
                    <Route path='/map/:location' element={<ToDo />} />
                    <Route path='/form-page' element={<FormPage response={response} setResponse={setResponse} />} exact />
                    <Route path='/loading-screen' element={<LoadingScreen />} exact />
                </Routes>
            </Router>

        </>
    );
}

export default App;
