import { listProducts } from "@/modules/catalog/product-service";

export async function syncProductsToSylius() {
  const products = await listProducts();

  return products.map((product) => ({
    code: product.id,
    name: product.name,
    enabled: product.status === "published"
  }));
}
