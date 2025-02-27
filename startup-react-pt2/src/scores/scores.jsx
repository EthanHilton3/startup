import React from 'react';
import './scores.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.click}</td>
          <td>{score.firstdate}</td>
          <td>{score.latestdate}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='5'>Be the first to score</td>
      </tr>
    );
  }

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
        <tbody id='scores' className="table-light">{scoreRows}</tbody>
      </table>
    </main>
  );
}