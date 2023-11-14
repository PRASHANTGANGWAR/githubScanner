import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import './App.css';
import RepositoryDetail from './components/details';
import aplClient from './client'
import IsCellEditableGrid from './components/list';

function App() {
  return (
    <ApolloProvider client={aplClient}>
      <Router>
        <div className="App">
         
          <Routes>
            <Route path="/repository/:owner/:name" element={<RepositoryDetail />} />
            <Route path='/'element={<IsCellEditableGrid/>}/>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
