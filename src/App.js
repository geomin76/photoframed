import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Result } from './Result';
import { Start } from './Start';


const App = () => {

  const [file, setFile] = useState(null);
  const [artwork, setArtwork] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start file={file} setFile={setFile} setArtwork={setArtwork} setYear={setYear} setName={setName}/>
        </Route>
        <Route exact path="/art">
          <Result file={file} artwork={artwork} year={year} name={name}/>
        </Route>
        <Route component={Start}/>
      </Switch>
    </Router>
  )
}

export default App;
