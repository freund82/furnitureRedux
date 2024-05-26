import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/fetchProducts';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);


    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {(products.products.length === 0) ? <p>Товаров нет...</p> : products.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
    );
  }

export default ProductList;