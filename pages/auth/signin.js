import { getProviders, signIn } from "next-auth/react";
import GetStarted from "../../components/SignIn/GetStarted";

export default function SignIn({ providers }) {
  return (
    <section className="signin-container relative w-full h-[100vh] overflow-hidden flex justify-center">
      <div className="relative z-[1] max-w-[1000px] text-center overflow-hidden max-h-[600px]">
        <h1 className="text-3xl sm:text-4xl font-bold pt-10 mb-3 font-leaguespartan text-white">
          BugEngine
        </h1>
        <p className="mb-10 text-gray-200 text-lg">
          The issue tracker you&apos;ve always dreamed about 👌
        </p>
        <GetStarted providers={providers} />
      </div>
    </section>
  );
}

SignIn.auth = false;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
