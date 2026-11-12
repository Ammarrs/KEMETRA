import { useEffect } from "react";

function CreateAccount() {
  useEffect(() => {
    window.location.replace("/signup/");
  }, []);

  return null;
}

export default CreateAccount;
