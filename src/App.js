import Header from "./components/Header/Header";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={Trending()} exact/>
          <Route path="/movies" element={Movies()}/>
          <Route path='/series' element={Series()}/>
          <Route path='/search' element={Search()}/>
        </Routes>
      </Container>
      </div>

      <SimpleBottomNavigation/>
    </BrowserRouter>
    
  );
}

export default App;
