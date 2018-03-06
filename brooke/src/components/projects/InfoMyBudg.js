import React from 'react';

export class InfoMyBudg extends React.Component {


  render() {
    return (
      <div className="accordian">
        <a href="https://www.youtube.com/watch?v=KI5Ajrzfn7E">
          <h2 className="info-title">
            my_budg
            <a href="https://github.com/brookearyan/my_budg_origin">
              <img className="proj-git-img" src="http://image.flaticon.com/icons/svg/23/23957.svg"/>
            </a>
          </h2>
        </a>
        <p className="info-stack">
          RUBY ON RAILS | JQUERY | CUSTOM CSS
        </p>
        <p className="info-desc"><br />
         a web application offering personal accounting services, through a beautiful user experience
        </p><br />
      </div>
    );
  }
}

export default InfoMyBudg;
// constructor(props) {
//   super(props)
//
//   this.state = { isOpen: false }
//
//   this.handleClick = this.handleClick.bind(this);
// }
//
// handleClick(event) {
//   event.preventDefault();
//   console.log('open')
//
// }
