import React from "react";
import '../src/index.css'
import Card from "./components/Card";
import image1 from './Assets/img/image1.jpg';
import image2 from './Assets/img/image2.jpg';
import image3 from './Assets/img/image3.jpg';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (

    <div className="App">
    <div >
      <Header />
    <div className='container d-flex justify-content-center h-100   align-items-center '>
    <div className='row'>
    <div className="col-md-4">
      <Card title='Montañas' description='Relajante' imagen={image1}/>
    </div>
    <div className="col-md-4">
      <Card title='Formas' description='Geometria' imagen={image2}/>
    </div>
    <div className="col-md-4">
      <Card title='Pintura' description='Abstracto' imagen={image3}/>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    </div>
  );
}

export default App;
