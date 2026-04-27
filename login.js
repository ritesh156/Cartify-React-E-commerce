import { useState } from "react";
import { login } from "./api";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");

  const handleLogin = async () => {
    const data = await login(username);
    setToken(data.token);
  };

  return (
    <div>
      <input onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
