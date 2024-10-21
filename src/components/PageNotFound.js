import { Link } from 'react-router-dom';
import '../pageNotFound.css';
const PageNotFound = () => {
  return (
    <div className="room-wrapper">
      <div className="room">
      <div className="cuboid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
      <div className="oops">
        <h2>UPS!</h2>
        <p>Ne možemo naći stranicu koju tražiš :(</p>
      </div>
      <div className="center-line">
        <div className="hole">
          <div className="ladder-shadow"></div>
          <div className="ladder"></div>
        </div>
        <div className="four">4</div>
        <div className="four">4</div>
        <div className="btn">
          <Link to="/products">BACK TO HOME</Link>
        </div>
      </div>
      </div>
    </div>
    )
  };
  
  export default PageNotFound;