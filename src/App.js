//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const [sortedData, setSortedData] = useState(tableData);

  const sortByDate = () => {
    const sorted = [...tableData].sort((a, b) => {
      if (a.date === b.date) {
        // sort by number of views if the dates are same
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setSortedData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...tableData].sort((a, b) => {
      if (a.views === b.views) {
        // sort by date if views are equal
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setSortedData(sorted);
  };

  return (
    <div className="App">
      <div className="mainDiv">
        <h1>Date and Views Table</h1>
        <div className="tableDiv">
          <div className="buttonDiv">
            <button className="sortByDate" onClick={sortByDate}>
              Sort by Date
            </button>

            <button className="sortByViews" onClick={sortByViews}>
              Sort by Views
            </button>
          </div>
          <div className="tableDiv">
            <table className="dataTable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Views</th>
                  <th>Article</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                      {item.date}
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                      {item.views}
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                      {item.article}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
