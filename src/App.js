import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicsList = () => (
  <div>
    <h1>TOPTICS LIST PAGE</h1>
  </div>
);

const TopicDetails = (props) => (
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetails} />
      </Switch>
    </div>
  );
}

export default App;
