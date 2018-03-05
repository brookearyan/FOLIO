import React from 'react';

export class InfoMyBudg extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log('open')

  }

  render() {
    return (
      <div className="budg-accordian">
        <h2 onClick={this.handleClick}>MyBudg</h2>
      </div>
    );
  }
}

export default InfoMyBudg;
