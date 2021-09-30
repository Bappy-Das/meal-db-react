// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import './App.css';
import Content from './component/Content/Content';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Meals from './component/Meals/Meals';
import About from './component/About/About';
import Courses from './component/Courses/Courses';
import Error from './component/Error/Error';
import Meal from './component/Meal/Meal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Content></Content>
          </Route>
          <Route exact path="/">
            <Content></Content>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/meal/:mealID">
            <Meal></Meal>
          </Route>
          <Route path="/">
            <Error></Error>
          </Route>
          <Route path="/terms">
            <Content></Content>
          </Route>
          <Route path="/privacy">
            <Content></Content>
          </Route>
          <Route path="/conditions">
            <Content></Content>
          </Route>
        </Switch>

      </BrowserRouter>
      <Footer></Footer>
      {/* <Content></Content> */}

    </div>
  );
}

export default App;
