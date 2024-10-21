import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './fixed/Header';
import Loading from './fixed/Loading';

// We are going to store the cart content in Local Storage for the sake of simplicity and because of the size of cart data
// The best way to this on large scale project would be store the content in DB and store Cart ID in cookie(if the user authenticated as this app is requesting)

function Products() {
  const [data, setData] = useState(null);
  const [dataFetchedCount, setDataFetchedCount] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { loading, error, success, products } = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);

    await axios.get('https://dummyjson.com/products')
      .then((res) => {
        setDataFetchedCount(res.data.products.length);
        setData(res.data);
        localStorage.setItem('cart-content', JSON.stringify(res.data.products.slice(0, 5)));
      })
      .catch(err => console.log(err.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <>
        {/* {error && alert(error)}
        <h1>{products}</h1> */}
        {loading ? <Loading/> : (
          <>
            <Header />

            <div className="container">
              <div className="products__main-title">
                <h2>Svi proizvodi</h2>
                <p>{dataFetchedCount} proizvoda</p>
              </div>
              <div className="products__container">
                {data && data.products.map((el) => (
                  <div key={el.sku} className="products__container-item">
                    <div className="card-container">
                      <img style={{ width: "284px", height: "284px" }} src={el.thumbnail} alt={el.title} />
                      <div className="cart__button-overlay" >
                        <div className="cart__button-container">
                          <span className="cart__button-minus">-</span>
                          <span className="cart__button-quantity">1</span>
                          <span className="cart__button-plus">+</span>
                        </div>
                        <button className="cart__button-add">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46968 1.52385L7.41254 3.80956L4.90166 6.54867L4.22861 5.93171L6.73806 3.19413L8.79102 0.913055L9.46968 1.52385Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5303 1.52385L13.5874 3.80956L16.0983 6.54867L16.7714 5.93171L14.2619 3.19413L12.2089 0.913055L11.5303 1.52385Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.78366L2.73913 19.4793H18.2609L21 5.78366H0ZM1.11373 6.6967L3.48765 18.5663H17.5124L19.8863 6.6967H1.11373Z" fill="white"/>
                            </svg>
                        </button>
                      </div>
                    </div>
                    <h2>{el.title}</h2>
                    <div style={{display: "flex", gap: ".25rem"}}>
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
    );
  }
  
  export default Products;
  