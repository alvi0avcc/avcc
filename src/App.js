import React from 'react';
import './css/app.css';

function App() {
  const [menuItem, setMenuItem] = React.useState(0);
  return (
    <div className='App-screen'>
    <div className="App">
      <div className = 'header'>
        <div></div>
        <div className='logo'>
          <img src='logo.svg' className="img-logo" alt="A.V.Cargo Control" />
          <span>
            AVCC testing platform
          </span>
        </div>

        <a className='bmc-header'
          title='Buy Me a Coffee'
          href="https://www.buymeacoffee.com/alviuao" target="_blank" rel="noopener noreferrer">
          <img className='bmc-gif' src="https://media.giphy.com/media/TDQOtnWgsBx99cNoyH/giphy.gif" alt="Buy Me A Coffee"/>
        </a> 

      </div>

        <div className = 'main'>
          <div className='total-info'>
            Private project
          </div>
          
          <Menu menuItem={menuItem} callback={(data)=> setMenuItem( data ) } />

        </div>
        
        <div className = 'footer'>

          <div className='footer-info'>

            <a id='link'
              onClick={ () => { alert( 'MIT License. Copyright (c) 2023 Aleksandr Vavilov (alvi.ua@gmail.com)' ) }}
              >© 2023 AVCC</a>

            <a id='link' 
              href='https://www.facebook.com/profile.php?id=100002819184477'
              target='_blank' rel="noopener noreferrer">
              Facebook
            </a>

            <a id='link'
              href='https://www.linkedin.com/in/aleksandr-vavilov-avcc/'
              target='_blank' rel="noopener noreferrer">
              LinkedIn
            </a>

          </div>

        </div> 
    </div>
    </div>
  );
}

function Menu (props) {
  console.log('menuItem=',props.menuItem);
  if ( props.menuItem == 0 ) return ( <MenuMain callback={(data)=> props.callback( data ) }/> );
  if ( props.menuItem == 1 ) return ( <MenuElevator callback={(data)=> props.callback( data ) }/> );
  if ( props.menuItem == 2 ) return ( <MenuDraft callback={(data)=> props.callback( data ) }/> );
  if ( props.menuItem == 3 ) return ( <MenuCIMS callback={(data)=> props.callback( data ) }/> );
}

function MenuMain (props) {

  return (
    <div className='menu-main'>
            <ul className='menu-ul'>
              <li 
                className='menu-li'
                title='In development'
                onClick={ ()=> ( props.callback(1) )}
                >
                <img src='piles.png' alt='Silo' height={90}/>
                <span className='name'>Elevators</span>
                <div className='text-block'>
                  <span className='text'>This project is intended for calculating the volume of heaps of cargo. Primarily grains. The idea is based on keeping the required measurements to a minimum and maintaining acceptable accuracy.</span>
                </div>
              </li>
              <li
                className='menu-li'
                title='Planned in the future'
                onClick={ ()=> ( props.callback(2) )}
                >
                <span className='name'>Draft-survey</span>
                <div className='text-block'>
                  <span className='text'></span>
                </div>
              </li>
              <li 
                className='menu-li' 
                title='Planned in the future'
                onClick={ ()=> ( props.callback(3) )}
                >
                <span className='name'>CIMS</span>
                <div className='text-block'>
                  <span className='text'>Cargo Inspection Management System.</span>
                </div>
              </li>
            </ul>

      <div className='bmc-menu'>
      <a
        title='Buy Me a Coffee'
        href="https://www.buymeacoffee.com/alviuao" target="_blank" rel="noopener noreferrer">
        <img className='bmc-gif2' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc21jbHVoNjdvencydnp6amI2eGc3ZGVoZzBodmEyc3Y1ZXFnNzYxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hXMGQqJFlIQMOjpsKC/giphy.gif" alt="Buy Me A Coffee"/>
      </a>
      </div>
    </div>

  );
}

function MenuElevator (props) {
  return (
    <div className='menu-item'>
      <div className='item-header'>
      <button className='menu'
        onClick={ ()=>( props.callback(0) ) }
      >↩️</button>
      <a className='menu'
          href="https://avcc.sytes.net/elevators/"
          target="_blank"
          rel="noopener noreferrer"
        >
        ➡️ Go to project "AVCC-Elevators"
      </a>
      </div>
      <span className='name'>Elevators - Silos - Warehouses</span>
      <br/>
      <div>
        <img className='item' src='piles.png' alt='Silo'/>
      </div>
      <br/>
      <span className='text'>This project is intended for calculating the volume of heaps of cargo. Primarily grains. The idea is based on keeping the required measurements to a minimum and maintaining acceptable accuracy.</span>
      <br/><br/>
      <span className='text'>Examples of generated reports.</span>
      <div>
        <a>For single warehouse - </a>
        <a href="/doc/warehouse_report.pdf" target="_blank" rel="noopener noreferrer">report-1</a>
        <br/>
        <a>For many different warehouses - </a>
        <a href="/doc/warehouses_report.pdf" target="_blank" rel="noopener noreferrer">report-2</a>
      </div>
      <br/>
      <div className='item-footer'>
      <button className='menu'
        onClick={ ()=>( props.callback(0) ) }
      >↩️</button>
      <a className='menu'
          href="https://avcc.sytes.net/elevators/"
          target="_blank"
          rel="noopener noreferrer"
        >
        ➡️ Go to project "AVCC-Elevators"
      </a>
      </div>
    </div>
  )
}

function MenuDraft (props) {
  return (
    <div className='menu-item'>
      <button className='menu'
        onClick={ ()=>( props.callback(0) ) }
      >🔙</button>
      <br/>
      Draft
    </div>
  )
}

function MenuCIMS (props) {
  return (
    <div className='menu-item'>
      <button className='menu'
        onClick={ ()=>( props.callback(0) ) }
      >🔙</button>
      <br/>
      CIMS
    </div>
  )
}

export default App;
