import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getAllMarvelHeroes } from '../services/marvel';
import { Marvel } from '../types/marvel';

const queryClient = new QueryClient();

function List() {
  const { isLoading, data: response } = useQuery('marvel', getAllMarvelHeroes);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!response) return null;
  const { data } = response;
  const { results } = data as { results: Marvel[] };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
      {results.map((marvel) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={marvel.id}>
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container py-8">
        <List />
      </div>
    </QueryClientProvider>
  );
}

export { App };
