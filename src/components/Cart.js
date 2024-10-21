import Header from './fixed/Header';
import Loading from './fixed/Loading';
import { useState } from 'react';

const cart = JSON.parse(localStorage.getItem('cart-content'));

function Cart() {

  const [loading, setLoading] = useState(false);

    return (
      <>
        {loading ? <Loading/> : (
          <>
            <Header />

            <div className="container">
              <div className="products__main-title">
                <h2>Tvoja korpa</h2>
              </div>
              <div className="cart__container">
                <div className="cart__container-products">
                  {cart && cart.map((el) => (
                    <div key={el.sku} className="cart__container-products-item">
                      <div className="cart__container-products-item-title-wrap" style={{position: "relative", display: "flex", gap: "2.5rem"}}>
                        <img src={el.thumbnail} alt={el.title} style={{width: "143px", height: "143px"}} />
                        <div style={{width: "350px"}}>
                          <h2>{el.title}</h2>
                          <span>{el.weight} g</span>
                          <div className="cart__button-overlay" >
                            <div className="cart__button-container">
                              <span className="cart__button-minus">-</span>
                              <span className="cart__button-quantity">1</span>
                              <span className="cart__button-plus">+</span>
                            </div>
                            <button className="cart__button-remove">
                              Ukloni
                            </button>
                          </div>
                        </div>
                      </div>
                      <div style={{display: "flex", gap: ".25rem"}}>
                        <h3>{el.price}</h3>
                        <span>RSD</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart__container-summary">
                  <h2>Tvoja narudzbina</h2>
                  <div className="cart__container-summary-item">
                    <h3>Ukupno</h3>
                    <div style={{display: "flex", gap: ".25rem"}}>
                        <p>19.940</p>
                        <span>RSD</span>
                    </div>
                  </div>

                  <div className="cart__container-summary-item">
                    <h3>Usteda</h3>
                    <div style={{display: "flex", gap: ".25rem"}}>
                        <p>-1.200</p>
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
                    <div style={{display: "flex", gap: ".25rem"}}>
                        <p>19.940</p>
                        <span>RSD</span>
                    </div>
                  </div>
                  
                  <p className="cart__container-summary-item">Cena je sa ukljucenim PDV-om</p>

                  <button type="submit" className="cart__container-summary-item"> Prijavi se za brze placanje </button>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
  
  export default Cart;
  