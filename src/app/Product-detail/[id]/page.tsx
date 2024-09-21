import { DetailCard } from "@/components/Product-Detail-Card/Detail-Card";
import { getProductById } from "@/service/query/get-all";

const ProductDetail = async ({ params }: any) => {
  const { id } = params;
  const product = await getProductById(id);

  return (
    <div className="">
      {product.map((prod) => (
        <>
          <DetailCard key={prod.id} {...prod} />
        </>
      ))}
    </div>
  );
};

export default ProductDetail;