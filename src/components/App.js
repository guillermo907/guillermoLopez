import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Video from './Video';
import DisplayBar from './DisplayBar';
import Footer from './Footer';
import style from '../stylesheets/css/style.css';

const App = () =>{

    return (
        <div className="ui fluid container">
            <Header />
            <Video />
            <DisplayBar />
            <Banner />
            <Footer /> 
        </div>
    );
}

export default App;