import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const router = useRouter();
  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              onClick={() =>
                signIn(provider.id, { callbackUrl: router.query.callbackUrl })
              }
            >
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
