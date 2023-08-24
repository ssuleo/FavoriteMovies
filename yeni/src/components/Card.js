// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Products from "../components/Products";

// const HomePage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9a1ac1a3e5mshdd9fd08582f9d2ep1299bajsn3de5ffb2e306',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };
// //
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//   });

//   return (
//     <div>
//       <h1>Anasayfa</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <Products key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
