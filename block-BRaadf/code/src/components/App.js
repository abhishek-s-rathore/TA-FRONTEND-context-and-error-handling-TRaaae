import React from "react";
import SwitchButton from "./Button";
import { ModeContext } from "./context/ModeContext";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };

  render() {
    let { isDarkMode } = this.state;

    return (
      <ModeContext.Provider value={this.state}>
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <Header />
        <Main />
        <SwitchButton isDarkMode={isDarkMode} changeMode={this.changeMode} />
      </div>
      </ModeContext.Provider>
    );
  }
}

export default App;
