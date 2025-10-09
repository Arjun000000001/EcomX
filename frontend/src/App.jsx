import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { getCurrentUser } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser()); // App load hote hi current user Redux store me set
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
