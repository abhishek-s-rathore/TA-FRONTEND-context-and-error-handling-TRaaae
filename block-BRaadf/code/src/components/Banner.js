import React from "react";
import {ModeContext} from './context/ModeContext';

class Banner extends React.Component {
  static contextType = ModeContext;
  render() {
    console.log( this.context);
    return (
      <div
        className={
          this.context.isDarkMode
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    );
  }
}

export default Banner;
