// import { useEffect, useState } from "react";
// import useStore from "../../hooks/useStore";
// // import { productsArray } from "../services/mock";

// function Test() {
// 	const { Product, Category } = useStore();
// 	const [load, setLoad] = useState(false);

// 	useEffect(() => {
// 		async function testing() {
// 			// const allProducts = await Product.readAll()
// 			// const categories = Array.from(new Set(allProducts.map(item => item.category)));
// 			// console.log({categories})

// 			// const allCategories = await Category.readAll();
// 			// console.log({allCategories})
// 			// categories.forEach((cat) => {
// 			// 	Category.create({name: cat, key: cat.charAt(0).toUpperCase() + cat.slice(1)})
// 			// 		.then((res) => console.log("exito: ", res))
// 			// 		.catch((err) => console.log("FALLO: ", err))
// 			// })

// 			// const allWithFilters = await Product.readAll([["price", ">=", 300]])
// 			// const oneProduct = await Product.readAll([["code", "==", "AA10"]])
// 			// console.log({response, product})

// 			// productsArray.forEach(prod => {
// 			// 	Product.create(prod)
// 			// 		.then((res) => console.log("exito: ", res))
// 			// 		.catch((err) => console.log("FALLO: ", err))
// 			// });
// 		}
// 		if (load) testing();
// 	}, [load]);
export default function Test() {
  return (
    <div>Test</div>
  )
}