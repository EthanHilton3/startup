import React from 'react';

export function Login() {
  return (
    <main className="flex text-center">
      <div>
        <h1>Welcome to Cougar Clicker</h1>
        <p>Become the clicker champion!</p>
        <form method="get" action="play.html">
          <div className="input-group mb-3">
            <input className="form-control" type="text" placeholder="cosmo_the_cougar@byu.edu" />
          </div>
          <div className="input-group mb-3">
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>
        </form>
      </div>
    </main>
  );
}