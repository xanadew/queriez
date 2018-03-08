import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={
      slide:true
    }
  }
  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <div className='logo'>Start Bootstrap</div>
          <div onClick={() => this.setState({ slide: !this.state.slide })}
            className='menu'>MENU</div>
        </nav>
        <div className='header-bg'>
          <div className='wtos'>Welcome To Our Studio!</div>
          <div className='ntmy'>IT'S NICE TO MEET YOU</div>
        </div>
        <div className={this.state.slide ? 'slide dropdown' : 'dropdown'}>
          <div className='services'>SERVICES</div>
          <div className='portfolio'>PORTFOLIO</div>
          <div className='about'>ABOUT</div>
          <div className='team'>TEAM</div>
          <div className='contact'>CONTACT</div>
        </div>

        <div className='svc'>
          <h1 className='serv'>SERVICES</h1>
          <h3 className='lorem1'>Lorem ipsum dskoahjgufoighijv</h3>
          <div className='shopping-cart'></div>
          <h2 className='ecom'>E-Commerce</h2>
          <h3 className='ecom-lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</h3>
          <div className='shopping-cart'></div>
          <h2 className='ecom'>Responsive Design</h2>
          <h3 className='ecom-lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</h3>
          <div className='shopping-cart'></div>
          <h2 className='ecom'>Web Security</h2>
          <h3 className='ecom-lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</h3>
        </div>

        <div className='port'>
        <h1 className='serv'>PORTFOLIO</h1>
        <h3 className='lorem1'>Lorem ipsum bjsidfhiuhgdjfsfd</h3>
        <div className='shirts'></div>
        
        
        </div>
      </div>
    );
  }
}

export default App;
