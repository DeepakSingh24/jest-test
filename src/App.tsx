import React from 'react'
import './App.css'
// import { Application } from "./components/application/application";
// import { Skills } from "./components/Skills/Skills";
import Counter from './components/counter/Counter'
import AppProviders from './components/providers/AppProviders'
import MuiMode from './components/mui/MuiMode'
import UseCounterTwo from './components/counterTwo/UseCounterTwo'
import { Users } from './components/users/Users'

function App() {
  // const skills = ["HTML", "CSS", "JAVASCRIPT"];
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        {/* <Application />
      <Skills skills={skills} /> */}
        {/* <Counter /> */}
        <UseCounterTwo />
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
