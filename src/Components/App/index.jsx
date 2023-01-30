import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import AddExpense from "../Add-expense";

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <Routes>
        <Route element={<Home />} path="/home" />,
          <Route element={<Home />} path="/" />,

          <Route element={<AddExpense />} path="/addexpense" />
        </Routes>

        
        <Footer />
      </div>
    </>
  );
}
export default App;
