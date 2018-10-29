import React from 'react';

class SomeRandomComponent extends React.Component {

  state = {
    favoriteAnimal: 'cat'
  }

  handleClick = () => {
    switch(this.state.favoriteAnimal) {
      case 'cat':
        this.setState({ favoriteAnimal: 'dog'});
        break;
      case 'dog':
        this.setState({ favoriteAnimal: 'cat'});
        break;
    }
  }

  render() {
    return(
      <div className="random-component">
        <h1>My favorite animal is a {this.state.favoriteAnimal}!</h1>
        <br/>
        <button onClick={this.handleClick}>Nope, I changed my mind.</button>
      </div>
    )
  }
};

export default SomeRandomComponent;
