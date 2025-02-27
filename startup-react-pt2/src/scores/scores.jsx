import React from 'react';
import './scores.css';

export function Scores() {
  return (
    <main className="container-fluid text-center">
      <table className="table table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Clicks</th>
            <th>Date of First Click</th>
            <th>Date of Last Click</th>
          </tr>
        </thead>
        <tbody className="table-light">
          <tr>
            <td>1</td>
            <td>도윤 이</td>
            <td>9999999999999</td>
            <td>January 20, 2025</td>
            <td>January 28, 2025</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Annie James</td>
            <td>560651</td>
            <td>January 24, 2025</td>
            <td>January 28, 2025</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gunter Spears</td>
            <td>7</td>
            <td>January 24, 2025</td>
            <td>January 26, 2025</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}