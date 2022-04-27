import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  // router.push(`/project/${project._id}`);
  router.push("/dashboard");
  return <div></div>;
}
