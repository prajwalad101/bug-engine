import { signIn } from "next-auth/react";

function Test() {
  return (
    <button className="px-5 py-2 bg-blue-300" onClick={() => signIn()}>
      Sign in{" "}
    </button>
  );
}

export default Test;
