import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Bag from "./Bag";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchItems from "./FetchItems";
import Loader from "./Loader";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus= useSelector(store=>store.fetchStatus)

  return (
    <>
      <Router>
        <Header />
        <FetchItems/>
       
        {fetchStatus.currentlyFetching &&    <div style={{margin:"10rem 0"}}>
          <Loader/></div>}
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
