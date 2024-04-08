import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const aobacodeInfo = {
    name: "aobacode",
    age: 24,
}

const AobaCodeContext = createContext(aobacodeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AobaCodeContext.Provider value={aobacodeInfo} >
          <React.StrictMode>
              <App />
          </React.StrictMode>,
    </AobaCodeContext.Provider>
)

export default AobaCodeContext;