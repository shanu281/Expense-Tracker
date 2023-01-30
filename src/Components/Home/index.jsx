import "./style.css";
import Search from "../Search";
import Header from "../Header";
import Footer from "../Footer";

function Home() {
  return (
    <>
     
      <div className="home-container">
        <Search />
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    
    </>
  );
}
export default Home;
