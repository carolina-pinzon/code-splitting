import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header/Header.jsx';
import Main from 'components/Main/Main.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const HomeView = Loadable({
  loader: () => import('views/HomeView.jsx'),
  loading: Loading
});

const CounterView = Loadable({
  loader: () => import('views/CounterView.jsx'),
  loading: Loading
});

const AnimationView = Loadable({
  loader: () => import('views/AnimationView.jsx'),
  loading: Loading
});

function AppView() {
  return (
    <div>
      <Header />
      <Main>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/counter" component={CounterView} />
        <Route exact path="/animation" component={AnimationView} />
      </Main>
      <Footer />
    </div>
  );
}

export default AppView;
