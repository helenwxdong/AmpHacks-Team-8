import React from 'react';
<<<<<<< HEAD
import Logo from '../img/kandor.png';
import Topics from './Topics.js';

const Landing = () => {
  return (
    <div>
      <div className='Navbar'>
        <img src={Logo} alt='' />
      </div>
      <div className='container'>
        <h1 style={{ paddingTop: '50px' }}>
          <span style={{ color: '#496076' }}>Kandor. </span>Fostering a
          community for you.
        </h1>
        <Topics />
      </div>
    </div>
  );
};

export default Landing;
=======
import Button from 'react-bootstrap/Button';

export default class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHealth : false,
            isPolitics : false,
            isArt : false,
            isBooks : false,
            isFitness : false,
            isCareer : false,
            isChildren : false,
        }
    }
    render() {
      return (
        <div>
            <h1>Kandor. Fostering a community for you.</h1>
            <h1>What would you like to chat about today?</h1>
            <Button variant="primary" block>
                Block level button
            </Button>
        </div>
      );
    }
  }
>>>>>>> 1998e77a7c721b86bed40e4f303c15217aa606e7
