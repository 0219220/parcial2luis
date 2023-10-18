import React, { Component } from 'react';
import './SideBar.css';
import { Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import luispp from '../../assets/luispp.jpg';

//import instagram from '../../Assets/instagram-logo.png';
//import linkedin from '../../Assets/linkedin-logo.png';
//import andresmtz from '../../Assets/andrespp.jpg';
//import github from '../../Assets/github.png';

export default class SideBar extends Component {

    constructor(props){
        super(props);
    
        const maxHeight = window.innerHeight - 50;
        const scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        this.state = {scrollToTop: scrollToTop, openMenu: false};
        this.onScroll = this.onScroll.bind(this);
      }
    
      onScroll()  {
    
        const maxHeight = window.innerHeight - 50;
    
        const scrollTotop = (Math.min(window.scrollY, maxHeight) / maxHeight);
    
        this.setState({scrollToTop: scrollTotop});
      }
    
      componentDidMount() {
          document.addEventListener('scroll', this.onScroll);
      };
    
      componentWillUnmount() {
          document.removeEventListener('scroll', this.onScroll);
      }

      handleOnClick = () => {
        this.setState({openMenu: !this.state.openMenu})
      }

    render() {

        const {scrollToTop} = this.state;

        return (
        <div className='side-bar' style={{backgroundColor: 'rgba(0, 0, 0, ' + scrollToTop+')'}}>
            <h1></h1>            
            
            <div className={'side-bar-btns' + (this.state.openMenu ? ' opened' : '')}>
                <IconButton className="close-icon" onClick={this.handleOnClick}>
                    <Close/>
                </IconButton>
                               
                <div className='container1' >
                    <div className='left'>
                        <div className='bio'>
                            <h1>Luis Villaseñor</h1>
                            <div><h2>I am a content producer based in Guadalajara, I am skilled in photo and video editting and like to work on projects as a producer. </h2></div>
                        </div>
                    </div>
                    <div className='center'>
                        <img src={luispp} className='iconDetails'></img>
                    </div>
                    
                    <div className='right'>
                        <div>
                            <h1>CONTACT</h1>
                            <h2>luisofarabia@gmail.com</h2>

                        </div>
                        <div>
                            <h1>SOCIALS</h1>

                            <a href="https://www.instagram.com/luisofarabia/" target='_blank'><img src='{instagram}' alt='instagram'/></a>
                            <a href="https://www.linkedin.com/in/luis-villase%C3%B1or-219194296/" target='_blank'><img src='/*{linkedin}*/' alt='linkedin'/></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='container2'>
                    <div className='left'>
                    <div className='right'>
                    </div>
                </div>
            </div>
            <Button variant="contained" size="large" className='menu-icon' onClick={this.handleOnClick}><b>About me</b></Button>
        </div>
        )
    }
}