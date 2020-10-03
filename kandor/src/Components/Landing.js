import React from 'react';

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
        </div>
      );
    }
  }