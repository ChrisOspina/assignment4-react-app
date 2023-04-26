import Header  from "./Header";
import Footer from "./footer";
import Main from "./Main";
import NewsNav from "./NewsNav";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      <div className="main-nav-container">
        <div className="main-container">
        <Main/>
        </div>
        <div className="nav-container">
          <NewsNav/>
        </div>
      </div>
      </div>
        <Footer/>
      </div>
  );
}

export default App;
