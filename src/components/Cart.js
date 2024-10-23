import Header from './fixed/Header';
import Loading from './fixed/Loading';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { decreaseCart, removeFromCart, addToCart, getTotals } from '../state/cart/cartSlice';

function Cart() {
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const userToken = localStorage.getItem('userToken');

  let cartContent = JSON.parse(localStorage.getItem('cartItems'));

  useEffect(() => {
    if (!userToken) {
      navigate('/');
    }
  }, [navigate, userToken]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  const handleDecreaseCartQuantity = (product) => {
    dispatch(decreaseCart(product));
  }

  const handleIncreaseCartQuantity = (product) => {
    dispatch(addToCart(product));
  }

    return (
      <>
        {loading ? <Loading/> : (
          <>
            <Header numOfProducts={ cart.cartItems.length } />
            {(cart.cartItems.length !== 0) ? (
              <div className="container">
                <div className="products__main-title">
                  <h2>Tvoja korpa</h2>
                </div>
                <div className="cart__container">
                  <div className="cart__container-products">
                    {cartContent?.map((el) => (
                      <div key={el.sku} className="cart__container-products-item">
                        <div className="cart__container-products-item-title-wrap" style={{ position: "relative", display: "flex", gap: "2.5rem" }}>
                          <img src={el.thumbnail} alt={el.title} style={{ width: "143px", height: "143px" }} />
                          <div style={{ width: "350px" }}>
                            <h2>{el.title}</h2>
                            <span>{el.weight} g</span>
                            <div className="cart__button-overlay" >
                              <div className="cart__button-container">
                                <span className="cart__button-minus" onClick={() => handleDecreaseCartQuantity(el)}>-</span>
                                <span className="cart__button-quantity">{ el.cartQuantity ? el.cartQuantity : 1 }</span>
                                <span className="cart__button-plus" onClick={() => handleIncreaseCartQuantity(el)}>+</span>
                              </div>
                              <button className="cart__button-remove" onClick={() => handleRemoveFromCart(el)}>
                                Ukloni
                              </button>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: ".25rem" }}>
                          <h3>{el.price * el.cartQuantity}</h3>
                          <span>RSD</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cart__container-summary">
                    <h2>Tvoja narudzbina</h2>
                    <div className="cart__container-summary-item">
                      <h3>Ukupno</h3>
                      <div style={{ display: "flex", gap: ".25rem" }}>
                        <p>{cart.cartTotalAmount}</p>
                        <span>RSD</span>
                      </div>
                    </div>

                    <div className="cart__container-summary-item">
                      <h3>Usteda</h3>
                      <div style={{ display: "flex", gap: ".25rem" }}>
                        <p>-1200</p>
                        <span>RSD</span>
                      </div>
                    </div>

                    <div className="cart__container-summary-item">
                      <h3>Isporuka Daily Express<sup>*</sup></h3>
                      <h4>Besplatna</h4>
                    </div>

                    <hr />
                  
                    <div className="cart__container-summary-item">
                      <h3>Ukupno za uplatu</h3>
                      <div style={{ display: "flex", gap: ".25rem" }}>
                        <p>{cart.cartTotalAmount}</p>
                        <span>RSD</span>
                      </div>
                    </div>
                  
                    <p className="cart__container-summary-item">Cena je sa ukljucenim PDV-om</p>

                    <button type="submit" className="cart__container-summary-item"> Prijavi se za brze placanje </button>
                  </div>
                </div>

              </div>
            ) : (
                <div className="container">
                  <div className="products__main-title">
                    <h2>Trenutno nemate dodatih proizvoda...</h2>
                    <div className='start-shopping'>
                      <Link to="/">
                        <span>Start Shopping</span>
                      </Link>
                    </div>
                  </div>
                </div>
            )}
          </>
        )}
      </>
    );
  }
  
  export default Cart;
  