import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { RouteChildrenProps } from 'react-router';

const Index = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>Abount</h2>
}

const Topic = (props: RouteChildrenProps<{ id: string }>) => {
  const id = props.match ? props.match.params.id : "-- no specified --";
  return <h3>Requested Param: {id}</h3>
}

const Topics = (props: RouteChildrenProps) => {
  const match = props.match!;

  console.log("router children props", props);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:id`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </div>
  )
}

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
