import {useContext} from 'react';
import { ModeContext } from './context/ModeContext';

function Title({ text }) {
  let mode = useContext(ModeContext);

  return (
    <h2
      className={`heading ${
        mode.isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
