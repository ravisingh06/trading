import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Stocks from "./components/Stocks";
import AllStock from "./components/AllStock";
import AllUsStock from "./components/AllUsStock"; 
import Nifty100 from "./components/Nifty100";
import Nifty200 from "./components/Nifty200";
import Nifty500 from "./components/Nifty500";
import NiftyNext50 from "./components/NiftyNext50"; 
import NiftySmcap50 from "./components/NiftySmcap50";
import NiftyMidcap50 from "./components/NiftyMidcap50";

import NiftyBank from "./components/NiftyBank";
import NiftyIT from "./components/NiftyIT";
import NiftyPhrama from "./components/NiftyPharma";
import NiftyAuto from "./components/NiftyAuto";
import NiftyMedia from "./components/NiftyMedia";
import NiftyFmgc from "./components/NiftyFmgc";
import NiftyFinance from "./components/NiftyFinance";
import NiftyInfra from "./components/NiftyInfra";

import StockExchange from "./components/StockExchange";
import StockDetails from "./components/StockDetails";
import Commodities from "./components/Commodities";
// import CommodityExchange from "./components/CommodityExchange";
import CommodityDetails from "./components/CommodityDetails";
// import ForexPairs from "./components/ForexPairs";
// import ForexExchange from "./components/ForexExchange";
import Forex from "./components/Forex";
import SnP100 from "./components/SnP100";
import Nasdaq100 from "./components/Nasdaq100";
import DawJones from "./components/DawJones";
import NYSE100 from "./components/NYSE100";
import Russ2k from "./components/Russ2k";
import IndBrokerList from "./components/IndBrokerList"; 
import UsBrokerList from "./components/UsBrokerList"; 



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/indbrokerlist" element={<IndBrokerList />} />
        <Route path="/usbrokerlist" element={<UsBrokerList />} />
        <Route path="/snp100" element={<SnP100 />} />
        <Route path="/nasdaq100" element={<Nasdaq100 />} />
        <Route path="/dawjones" element={<DawJones />} />
        <Route path="/nyse100" element={<NYSE100 />} />
        <Route path="/russ2k" element={<Russ2k />} />
        <Route path="/allstock" element={<AllStock />} />
        <Route path="/allusstock" element={<AllUsStock />} />
        <Route path="/nifty100" element={<Nifty100 />} />
        <Route path="/nifty200" element={<Nifty200 />} />
        <Route path="/nifty500" element={<Nifty500 />} />
        <Route path="/niftynext50" element={<NiftyNext50 />} />
        <Route path="/nifty200" element={<Nifty200 />} />
        <Route path="/niftysmallcap50" element={<NiftySmcap50 />} />
        <Route path="/niftymidcap50" element={<NiftyMidcap50 />} />
        <Route path="/niftybank" element={<NiftyBank />} />
        <Route path="/niftyit" element={<NiftyIT />} />
        <Route path="/niftyauto" element={<NiftyAuto />} />
        <Route path="/niftyfinance" element={<NiftyFinance />} />
        <Route path="/niftypharma" element={<NiftyPhrama />} />
        <Route path="/niftyinfra" element={<NiftyInfra />} />
        <Route path="/niftymedia" element={<NiftyMedia />} />
        <Route path="/niftyfmgc" element={<NiftyFmgc />} />
        <Route path="/stockexchanges" element={<StockExchange />} />
        <Route path="/stocks/:id" element={<StockDetails />} />
        <Route path="/commodities" element={<Commodities />} />
        {/* <Route path="/commodityexchange" element={<CommodityExchange />} /> */}
        <Route path="/commodity/:id" element={<CommodityDetails />} />
        {/* <Route path="/forexpairs" element={<ForexPairs />} /> */}
        {/* <Route path="/forexexchange" element={<ForexExchange />} /> */}
        <Route path="/forex/:id" element={<Forex />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
