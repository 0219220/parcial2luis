import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ArtProjectCard from './components/art-project-card/ArtProjectCard';
import PhotoProjectCard from './components/photo-project-card/PhotoProjectCard';
import SideBar from './components/side-banner/SideBar';

import d1 from "./assets/d1.png";
import d2 from "./assets/d2.jpg";
import d3 from "./assets/d3.jpg";
import d4 from "./assets/d4.JPG";
import d5 from "./assets/d5.jpg";
import d6 from "./assets/d6.JPG";
import d7 from "./assets/d7.jpg";
import d8 from "./assets/d8.JPG";
import d9 from "./assets/d9.jpg";
import d10 from "./assets/d10.PNG";
import d11 from "./assets/d11.JPG";

import f1 from "./assets/photos/f1.jpg"
import f2 from "./assets/photos/f2.jpg"
import f3 from "./assets/photos/f3.jpg"
import f4 from "./assets/photos/f4.jpg"
import f5 from "./assets/photos/f5.jpg"
import f6 from "./assets/photos/f6.jpg"
import f7 from "./assets/photos/f7.jpg"
import f8 from "./assets/photos/f8.jpg"
import f9 from "./assets/photos/f9.jpg"
import f10 from "./assets/photos/f10.jpg"
import f11 from "./assets/photos/f11.jpg"
import f12 from "./assets/photos/f12.jpg"
import f13 from "./assets/photos/f13.jpg"
import f14 from "./assets/photos/f14.jpg"
import f15 from "./assets/photos/f15.jpg"
import f16 from "./assets/photos/f16.jpg"
import f17 from "./assets/photos/f17.jpg"
import f18 from "./assets/photos/f18.jpg"
import f19 from "./assets/photos/f19.jpg"
import f20 from "./assets/photos/f20.jpg"
import f21 from "./assets/photos/f21.jpg"
import f22 from "./assets/photos/f22.jpg"
import f23 from "./assets/photos/f23.jpg"
import f24 from "./assets/photos/f24.jpg"
import f25 from "./assets/photos/f25.jpg"

import jke from "./assets/jokereyes.jpg";
import phe from "./assets/photoeyes.jpg";
import ywe from "./assets/youngeyes1.jpg";

function App() {

  const [artprojects, setArtProjects] = useState(
    [{name: "Born of Immense Sadness", img: d1, description:"Digital, 1020x1020p,", year:"2022"},
    {name: "Joker", img: d2, description:"Acrylic on Canvas 1.20m x 0.86m", year:"2020"},
    {name: "Woman Study", img: d3, description:"Digital, 1434x2007p", year:"2021"},
    {name: "Autoretrato", img: d8, description:"Digital, 1000x1000p", year:"2020"},
    {name: "Woman Study", img: d4, description:"Digital, 1000x1000p", year:"2020"},
    {name: "Where the Senses are Dislocated", img: d6, description:"Digital, 1080x1059p", year:"2021"},
    {name: "Digital Study", img: d7, description:"Digital, 1595x1080p", year:"2021"},
    {name: "No Title", img: d9, description:"Digital, 1024x1024p", year:"2022"},
    {name: "The Mandalorian", img: d5, description:"Digital, 1920x1080p", year:"2019"},
    {name: "Promising Young Woman, Digital", img: d10, description:"1280x1280p", year:"2021"},
    {name: "Woman Study, Digital", img: d11, description:"1040x1282p", year:"2020"}
  ]
  )

  const [photoprojects, setPhotoProjects] = useState(
    [{ img: f18, year:"2023"},
    { img: f20, year:"2023"},
    { img: f25, year:"2023"},
    { img: f4, year:"2023"},
    { img: f5, year:"2023"},
    { img: f6, year:"2023"},
    { img: f7, year:"2023"},
    { img: f8, year:"2023"},
    { img: f9, year:"2023"},
    { img: f10, year:"2023"},
    { img: f11, year:"2023"},
    { img: f12, year:"2023"},
    { img: f13, year:"2023"},
    { img: f14, year:"2023"},
    { img: f15, year:"2023"},
    { img: f16, year:"2023"},
    { img: f17, year:"2023"},
    { img: f1, year:"2023"},
    { img: f19, year:"2023"},
    { img: f2, year:"2023"},
    { img: f21, year:"2023"},
    { img: f22, year:"2023"},
    { img: f23, year:"2023"},
    { img: f24, year:"2023"},
    { img: f3, year:"2023"},
    

    ]
  )
  return (
    <div className="App">
    <SideBar/>
    <div class="topnav">
      <a className="portfolio" href="#portfolio">Portfolio</a>
      <a className="resume" href='#resume'>Resume</a>
    </div>
    <div className='banner'>
    <h1>Luis Villaseñor</h1>
    </div>
    <div className='banner-professions' >
      <h1 className='profession1'>ILLUSTRATOR</h1>
      <img className='banner-image' src={jke} alt='???'></img>
      <h1 className='profession2'>PRODUCER</h1>
      <img className='banner-image' src={phe} alt='???'></img>
      <h1 className='profession3'>PHOTOGRAPHER</h1>
      <img className='banner-image' src={ywe} alt='???'></img>
    </div>
    <h1>Hello, I am a content creator. I love portraiture and to capture intense moments.</h1>
    <div><h1 id='portfolio'>Illustrations</h1></div>

    <div className='artlist'>
    <ul>
          {
            artprojects.map((artproject, index) => (
              <ArtProjectCard key={index} data={artproject}/> 
            ))
          }
        </ul>

    </div>

    <div><h1>Photography</h1></div>
    <div className='artlist'>
    <ul>
          {
            photoprojects.map((photoproject, index) => (
              <PhotoProjectCard key={index} data={photoproject}/> 
            ))
          }
        </ul>

    </div>

    <div id='resume'><h1>Resume</h1></div>

    </div>
  );
}

export default App;
