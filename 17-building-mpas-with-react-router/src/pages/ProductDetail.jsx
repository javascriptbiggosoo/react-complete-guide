import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  // http://localhost:3000/products/ㅇㅇ
  console.log(params); // {productId: 'ㅇㅇ'}

  return (
    <>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
      <p>
        {/* <Link to=".."> */}
        <Link to=".." relative="path">
          뒤로
        </Link>
      </p>
    </>
  );
}
