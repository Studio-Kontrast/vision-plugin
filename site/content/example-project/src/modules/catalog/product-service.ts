type Product = {
  id: string;
  name: string;
  status: "draft" | "published";
};

const products: Product[] = [
  { id: "sku_1", name: "Canvas Tote", status: "published" },
  { id: "sku_2", name: "Merino Blanket", status: "draft" }
];

export async function listProducts(): Promise<Product[]> {
  return products;
}

export async function publishProduct(productId: string): Promise<Product | null> {
  const product = products.find((item) => item.id === productId);
  if (!product) return null;
  product.status = "published";
  return product;
}
