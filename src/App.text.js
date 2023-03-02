import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const rootElement = document.getElementById("root");//We call this a “root” DOM node because everything inside it will be managed by React DOM.
ReactDOM.render(<App />,rootElement);
import React from "react";
import ProfilePhoto from "./Profilephoto";
const App = () => (
 <>
   <ProfilePhoto />
 </>
);
export default App;
import React from "react";
import Fullname from "./Fullname";
const App = () => (
 <>
   <Fullname />
 </>
);
export default App;
import React from "react";
import Adress from "./adress";
const App = () => (
 <>
   <Adress />
 </>
);
export default App;