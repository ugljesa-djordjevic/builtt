import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.login);

  const userToken = localStorage.getItem('userToken');

  const handleSubmit = () => {
    if (email === userInfo.email && password === userInfo.password) {
      localStorage.setItem('userToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o')
      navigate('/products');
    } else {
      alert("Incorrect email or password");
    }
  }
  
  useEffect(() => {
    if (userToken) {
      navigate('/products');
    }
  }, [navigate, userToken]);

    return (
      <div className="container login__wrapper">
        <div className="login__form">
          <h1>Prijavi se na svoj nalog</h1>     
          <label className="login__form__input-wrap" htmlFor="inpname">
            <input type="text" id="inpname" placeholder=" " name="your-name" required autoComplete="on" data-max-length="40" data-patern="[A-Za-z]" onChange={ (e) => setEmail(e.target.value) } />
            <span className={email ? 'input-text-hover' : ''}>E-mail adresa</span>
          </label>
          <label className="login__form__input-wrap" htmlFor="inpname">
            <input type="password" id="inpname" placeholder=" " name="your-name" required autoComplete="on" data-max-length="40" data-patern="[A-Za-z]" onChange={ (e) => setPassword(e.target.value) }/>
            <span className={password ? 'input-text-hover' : ''}>Upišite šifru</span>
          </label>
          {/* onClick={() => dispatch(login({firstName: "John", lastName: "Snow"}))} */}
          <button type="submit" className="login__form__contact-button" onClick={handleSubmit} >
            <span>Prijavi se na nalog</span>
          </button>
        </div>       
      </div>
  );
}

export default Login;
