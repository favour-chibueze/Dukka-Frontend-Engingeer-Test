import EmployeesProfile from './components/Forms';
import Nav from './components/Header/Nav'
import ProfileList from './components/ProfileList';
import LoanRecord from './components/LoanRecord';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
              <Switch>
                  <Route exact path="/" component={EmployeesProfile } />
              </Switch>
              <Switch>
                <Route path="/profiles" component={ProfileList} />
              </Switch>
              <Switch>
                <Route path="/loan-record/:profileId" component={LoanRecord} />
              </Switch>
        </div>
    </Router>
  );
}

export default App;
