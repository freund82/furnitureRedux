import products from '../../products.json';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'; // Add this line

export const data = products;

export const fetchProductsBegin = () => {
  return {
    type: FETCH_PRODUCTS_BEGIN,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
export const fetchProducts = () => {
    return async (dispatch) => {
      try {
        dispatch(fetchProductsBegin());
  
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
  
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        dispatch(fetchProductsFailure(error));
      }
    };
  };