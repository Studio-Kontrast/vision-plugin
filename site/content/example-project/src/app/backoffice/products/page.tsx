import { listProducts } from "@/modules/catalog/product-service";

export default async function ProductsPage() {
  const products = await listProducts();

  return (
    <main>
      <h1>Products</h1>
      <p>The plugin reviews this page as UI code. The business rules stay in src/modules.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} · {product.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
