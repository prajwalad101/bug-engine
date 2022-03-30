import { useSession } from "next-auth/react";

export default function Auth({ children }) {
  console.log("Auth component rendered");
  const { data: session, status } = useSession({
    required: true,
  });
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  return <div>Loading session...</div>;
}
