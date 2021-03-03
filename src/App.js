import "./styles.css";

import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./shared/Header";
import HomePage from "./pages/home";
import MerchantListPage from "./pages/merchant-list";
import LoginPage from "./pages/login/LoginPage";

import ProtectedRoute from '../src/shared/components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <ProtectedRoute path="/merchant-list" Component={MerchantListPage}/>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
