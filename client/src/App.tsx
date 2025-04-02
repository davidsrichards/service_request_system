import { Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/authentication/SignIn";
import SignUp from "./components/pages/authentication/SignUp";
import Presentation from "./components/pages/presentation/Presentation";
import Home from "./components/pages/presentation/home/Home";
import Services from "./components/pages/presentation/Services/Services";
import RequestTable from "./components/pages/presentation/request/RequestTable";
import Category from "./components/pages/presentation/category/Services";
import Dashboard from "./components/pages/presentation/dashboard/Dashboard";
import { Toaster } from "sonner";
import RouterSecurity from "./RouterSecurity";
import Users from "./components/pages/presentation/users/Users";
import RequestContextProvider from "./context/request.context/RequestContextProvider";

function App() {
  return (
    <div className="flex mx-auto">
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/app"
          element={
            <RouterSecurity>
              <RequestContextProvider>
                <Presentation />
              </RequestContextProvider>
            </RouterSecurity>
          }
        >
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="request" element={<RequestTable />} />
          <Route path="category" element={<Category />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
