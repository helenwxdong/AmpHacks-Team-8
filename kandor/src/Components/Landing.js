import React from 'react';
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