import { useState } from 'react';
import { getProductByCategoryId } from '../../api/productMethods';
import { getImgByProductId } from '../../api/imagesMethods';
import { getAllProducts } from '../../api/productMethods';
import Product from '../../models/product'

export default function useProduct() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProductsByCategoryId() {
    setIsLoading(true);
    try {
      const categoryId = JSON.parse(sessionStorage.getItem('category')).id;
      const response = await getProductByCategoryId(categoryId);
      const products = response.map(item => new Product(
        item.id_producto,
        item.nombre,
        item.descripcion,
        item.precio,
        item.existencias,
        item.categoria_id,
        item.image
      ));
      // for (const product of response) {
      //   const responseImg = await getImgByProductId(product.id);
      //   product.image = responseImg.url;
      // }
      setProduct(products);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProducts() { 
    setIsLoading(true);
    try {
      const response = await getAllProducts();
      const products = response.map(item => new Product(
        item.id_producto,
        item.nombre,
        item.descripcion,
        item.precio,
        item.existencias,
        item.categoria_id,
        item.image
      ));
      
      setIsLoading(false);
      return products;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    product,
    isLoading,
    getProductsByCategoryId,
    getProducts
  };
}