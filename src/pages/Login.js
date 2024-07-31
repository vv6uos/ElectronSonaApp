import React from "react";
// import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-center">
      <div>
        <input placeholder="ID" className="mr-10" />
        <input type="password" placeholder="PASSWORD" className="mr-10" />
        <button>Login</button>
      </div>
    </div>
  );
}
