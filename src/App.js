import { ChakraProvider } from '@chakra-ui/react'

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Airbills Digital Solutions
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Python
          </a>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
