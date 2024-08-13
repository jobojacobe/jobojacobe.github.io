import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountRegistration from "./components/account_registration.js";
import AccountSummary from "./components/account_summary.js";
import AccountLogin from "./components/login.js";
import AccountLogout from "./components/logout.js";
import Accounts from "./components/accounts.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register_account" element={<AccountRegistration />} />
        <Route path="/account_summary/" element={<AccountSummary />} />
        <Route path="/account_login" element={<AccountLogin />} />
        <Route path="/account_logout" element={<AccountLogout />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </div>
  )
}

export default App;