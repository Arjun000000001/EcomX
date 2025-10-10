import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions"; // ✅ import product loader
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(asyncLoadProducts()); // ✅ products load on app start
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Mainroutes />
    </>
  );
};

export default App;
