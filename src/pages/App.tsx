import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getAllMarvelHeroes } from '../services/marvel';

const queryClient = new QueryClient();

function List() {
  const { isLoading, data } = useQuery('marvel', getAllMarvelHeroes);
  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log('data:', data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
}

export { App };
