import { lazy,Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Admin from "../pages/Admin";
//import Customer from "../pages/Customer";
//import Engineer from "../pages/Engineer";
import NotFound from "../pages/NotFound";
import Unauth from "../pages/Unauthorized";
import RequireAuth from "../components/RequireAuth";

import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/coreui/dist/js/coreui.min.js";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";


const LoginLoad = lazy(() => import("../pages/Login"));
const AdminLoad = lazy(()=>import("../pages/Admin"));
const EngineerLoad = lazy(()=>import("../pages/Engineer"));
const CustomerLoad = lazy(()=>import("../pages/Customer"));

const ROLES = {
  CUSTOMER: "CUSTOMER",
  ADMIN: "ADMIN",
  ENGINEER: "ENGINEER",
};
const Approutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Please wait</div>}>
            <LoginLoad />
          </Suspense>} />
          {/* Protected routes by require auth starts */}
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/admin" element={<Suspense fallback={<div>Please wait</div>}>
              <AdminLoad />
            </Suspense>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ENGINEER]} />}>
            <Route path="/engineer" element={<Suspense fallback={<div>Please wait</div>}>
              <EngineerLoad />
            </Suspense>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.CUSTOMER]} />}>
            <Route path="/customer" element={<Suspense fallback={<div>Please wait</div>}>
              <CustomerLoad />
            </Suspense>} />
          </Route>
          {/* Protected routes by require auth end */}

          <Route path="/*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Approutes;
