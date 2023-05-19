import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: "Apples", price: 5 },
  { id: 2, title: "Oranges", price: 10 },
  { id: 3, title: "Bananas", price: 15 },
  { id: 4, title: "Mangos", price: 20 },
];
function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((p, idx) => (
          <li key={p.id}>
            {/* <Link to={`/root/products/${p.id}`}>{p.title}</Link> */}
            <Link to={p.id + ""}>{p.title}</Link>
          </li>
        ))}
        <li>
          <Link to="../">뒤로</Link>
        </li>
      </ul>
    </>
  );
}

export default ProductsPage;
