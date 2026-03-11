import { NextResponse } from "next/server";
import { listProducts } from "@/modules/catalog/product-service";

export async function GET() {
  const products = await listProducts();

  return NextResponse.json({
    items: products,
    meta: {
      total: products.length
    }
  });
}
