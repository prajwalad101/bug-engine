import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { AiFillGithub } from "react-icons/ai";

export default function SignIn({ providers }) {
  const router = useRouter();
  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div
            key={provider.name}
            className="flex items-center justify-center h-[100vh]"
          >
            <button
              type="button"
              className="flex gap-3 font-raleway  items-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
              onClick={() =>
                signIn(provider.id, { callbackUrl: router.query.callbackUrl })
              }
            >
              <AiFillGithub size={25} />
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

SignIn.auth = false;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
