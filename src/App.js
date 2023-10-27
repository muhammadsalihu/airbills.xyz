import { ChakraProvider } from '@chakra-ui/react'

import logo from './airbills-logo.png';
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
            href="https://linktr.ee/airbills"
            target="_blank"
            rel="noopener noreferrer"
          >
            Building capacity for collective action
          </a>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
