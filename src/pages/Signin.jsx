import { useState } from "react";
import { Outlet } from "react-router";
function Signin() {
  const [formData, setFormData] = useState({
    account: {},
    profile: {},
    preference: {},
  });
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Signin;
