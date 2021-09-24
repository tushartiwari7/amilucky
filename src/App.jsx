import './App.css';
import { Grid, Row, Column } from 'carbon-components-react';
import InputForm from './Components/InputForm';
import ImageContainer from './Components/ImageContainer';
import {BrowserRouter as Router} from 'react-router-dom';
import Alert from './Components/Alert';
function App() {
  return (
  <>
    <Grid className="App">
      <Row className="App-header">
        <Column className="title">
          Is My <code className="subtitle" >Birthday</code> Lucky?
        </Column>
      </Row>
      <Row className="notice">
        <Column className="notice-text">
          <Alert />
        </Column>
      </Row>
      <Row className="App-Intro">
        <Router>
          <Column className="form">
            <InputForm/>
          </Column> 
          <Column>
            <ImageContainer/>
          </Column>
        </Router>
      </Row>
    </Grid>
    
  </>
  );
}

export default App;
