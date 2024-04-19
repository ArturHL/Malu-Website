import { useState } from 'react';
import { getProductByCategoryId } from '../../api/productMethods';
import { getImgByProductId } from '../../api/imagesMethods';

export default function useProduct() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProductsByCategoryId() {
    try {
      const categoryId = JSON.parse(sessionStorage.getItem('category')).id;
      const response = await getProductByCategoryId(categoryId);
      for (const product of response) {
        const responseImg = await getImgByProductId(product.id);
        product.image = responseImg.url;
      }
      setProduct(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    product,
    isLoading,
    getProductsByCategoryId,
  };
}