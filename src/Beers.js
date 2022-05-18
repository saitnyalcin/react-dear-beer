import React, { useEffect, useState } from "react";

const Beers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => setData(data))
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="beer-header">Welcome to the Dear Beers</div>
      <div className="beer-container">
        {data
          .sort((prev, current) => current.abv - prev.abv)
          .map((beer, index) => (
            <div key={index}>
              <div>
                <div className="beer-title">{beer.name}</div>
                <img
                  src={beer.image_url}
                  alt="beer_image"
                  width="100"
                  height="200"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Beers;
