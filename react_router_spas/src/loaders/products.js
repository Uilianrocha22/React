import products from "../database.json";

export default function loadProduct({ params }) {
  //  posso importar os parametros ou passar direto na comparação

  //  const { productId } = params;

  const product = products.find((p) => p.id === +params.productId);

  if (!product) {
    throw new Response("404 Not found,", { status: 404 });
  }

  return product;
}
