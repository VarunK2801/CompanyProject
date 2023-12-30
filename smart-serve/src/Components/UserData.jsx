import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function UserData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://s3.amazonaws.com/open-to-cors/assignment.json"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const productIds = Object.keys(data.products || []).sort(
    (a, b) => data.products[b].popularity - data.products[a].popularity
  );

  return (
    <div>
      <NavLink to={'/sortedData'} style={{textDecoration:"none",margin:'3rem',padding:"20px"}}>Sorted Data</NavLink>
      <NavLink to={'/'} style={{textDecoration:"none",margin:'3rem',padding:"20px"}}>Dashboard</NavLink>
      <h1>Data</h1>
      <ul>
        {productIds.map((productId) => {
          const product = data.products[productId];
          return (
            <li key={productId}>
              <p>Subcategory: {product.subcategory}</p>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <p>Popularity: {product.popularity}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserData;
