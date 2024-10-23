import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Header from './fixed/Header';
import Loading from './fixed/Loading';
import { addToCart } from '../state/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

// We are going to store the cart content in Local Storage for the sake of simplicity and because of the size of cart data
// The best way to this on large scale project would be store the content in DB and store Cart ID in cookie(if the user authenticated as this app is requesting)
// It would be great to add also notification system that will be updated in the cartSlice redux component whenever user adds/removes product

function Products() {
  const [numOfProducts, setNumOfProducts] = useState(0);
  const { loading, error, success, count, items } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = localStorage.getItem('userToken');

  useEffect(() => {
    let cartContent = JSON.parse(localStorage.getItem("cartItems"));
    if (cartContent) setNumOfProducts(cartContent.length);
    if (!userToken) {
      navigate('/');
    }
  }, [navigate, userToken]);

  const handleAddToCart = (product) => {
    let cartContent = JSON.parse(localStorage.getItem("cartItems"));

    dispatch(addToCart(product));

    const filteredProduct = items.products.filter((el) => el.sku === product.sku);
    if (cartContent) {
      if (filteredProduct) cartContent.push(filteredProduct.pop());
    } else {
      cartContent = filteredProduct;
    }
    setNumOfProducts(cartContent.length)
  }

  return (
    <>
      {error ? (<h1>There has been an error in fetching data...</h1>) : (
        <>
          {loading ? <Loading /> : (
            <>
              <Header numOfProducts={numOfProducts} />

              <div className="container">
                <div className="products__main-title">
                  <h2>Svi proizvodi</h2>
                  <p>{count} proizvoda</p>
                </div>
                <div className="products__container">
                  {items && items.products.map((el) => (
                    <div key={el.sku} className="products__container-item">
                      <div className="card-container">
                        <img style={{ width: "284px", height: "284px" }} src={el.thumbnail} alt={el.title} />
                        <div className="cart__button-overlay" >
                          <div className="cart__button-container">
                            <span className="cart__button-minus">-</span>
                            <span className="cart__button-quantity">1</span>
                            <span className="cart__button-plus">+</span>
                          </div>
                          <button className="cart__button-add" onClick={() => handleAddToCart(el)}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46968 1.52385L7.41254 3.80956L4.90166 6.54867L4.22861 5.93171L6.73806 3.19413L8.79102 0.913055L9.46968 1.52385Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5303 1.52385L13.5874 3.80956L16.0983 6.54867L16.7714 5.93171L14.2619 3.19413L12.2089 0.913055L11.5303 1.52385Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.78366L2.73913 19.4793H18.2609L21 5.78366H0ZM1.11373 6.6967L3.48765 18.5663H17.5124L19.8863 6.6967H1.11373Z" fill="white" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <h2>{el.title}</h2>
                      <div style={{ display: "flex", gap: ".25rem" }}>
                        <h3>{el.price}</h3>
                        <span>RSD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
  export default Products;