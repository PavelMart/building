import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { getData, setLoading } from "./store/data/data.slice";

function App() {
  const { loading, isFormOpen } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading("pending");
    dispatch(getData());
    setTimeout(() => setLoading("idle"), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeMenu = (e) => {
    if (!e.target.closest(".header")) document.querySelector(".navbar-collapse").classList.remove("show");
  };

  return (
    <ErrorBoundary>
      <div className="App" onClick={closeMenu} style={{ fontFamily: "FilsonPro" }}>
        {loading === "pending" ? (
          <div className="loading" id="loading" />
        ) : (
          <>
            <Header />
            <Main />
            <Footer />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
