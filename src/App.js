import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import TopicsNav from './components/TopicsNav';
import Home from './components/Home';
import Topic from './components/Topic';

function App() {
  const topics = ['people', 'films', 'starships', 'vehicles', 'species', 'planets'];

  return (
    <BrowserRouter>
      <header>
        <Link to='/' id='page_heading'><h1>Star Wars Memory Game</h1></Link>
      </header>
      <TopicsNav topics={topics}/>
      <main>
        <Route exact path='/' component={Home}/>
        {/* creating 6 routes for the 6 topics */}
        {topics.map(topic => <Route exact path={`/${topic}`} component={Topic} key={topic}/>)}
        {/* Handle invalid URLs/routes by redirecting them to the home route */}
        <Route render={() => <Redirect to="/"/>}/>
      </main>
    </BrowserRouter>
  );
}

export default App;