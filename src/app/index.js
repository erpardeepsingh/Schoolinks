import React, { useState, useEffect } from "react";

export default function Index() {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let movie = [
    
  ];

  useEffect(() => {
    setTitle("");
  }, []);

  function callApi() {
    setLoading(true);
    setError(false);
    setResult({});
    fetch(`http://www.omdbapi.com/?apikey=922db138&t="${title}"`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.Error) setError(true);
        else{
           setResult(res);
           movie.push({
             movie: title,
             result: res
           });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="sticky-top-desktop">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button
          onClick={() => {
            if (title.length > 0 && !loading){
              
               callApi();
            }
            else if (title.length === 0)
            alert("Title Cannot be empty");
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      {error ? (
        <span>Movie Not Found</span>
      ) : result.Title ? (
        <div style={{
          margin: '50px'
        }}>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Title: {result.Title} </div>
          <div>Year Released: {new Date(result.Released).getFullYear()}</div>
          <div>Plot: {result.Plot}</div>
          <ul>
            Generes:
            {result.Genre &&
              result.Genre.split(",").map((ele) => <li>{ele}</li>)}
          </ul>
        </div>
      ) : (
        <div>
          {title.length > 0 && loading
            ? "Loading"
            : "Please enter the title and click Search"}
        </div>
      )}
    </div>
  );
}
