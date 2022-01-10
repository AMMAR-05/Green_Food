// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const foodUrl =
//   //   "https://api.spoonacular.com/food/products/search?apiKey=412019e4caf7487faae1fdcff8bc9165&food/products";

//   "https://api.spoonacular.com/search?apiKey=412019e4caf7487faae1fdcff8bc9165/food/products/22347";
// function Vegge() {
//   const [fetchData, setFetchData] = useState(null);

//   useEffect(() => {
//     axios.get(foodUrl).then((response) => {
//       setFetchData(response.data.products);
//     });
//   }, []);

//   console.log(fetchData);
//   if (!fetchData) return null;

//   return <div></div>;
// }

// export default Vegge;
