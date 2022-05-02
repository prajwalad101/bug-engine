import { getProviders } from "next-auth/react";
import Head from "next/head";
import GetStarted from "../../components/SignIn/GetStarted";

export default function SignIn({ providers }) {
  return (
    <section className="px-5 font-inter signin-container relative w-full h-[100vh] overflow-hidden flex justify-center bg-blue-600 before:mb-[100px] vsm:before:mb-0">
      <Head>
        <title>Login | BugEngine</title>
        <link rel="shortcut icon" href="/hourglass.png" />
      </Head>
      <div className="relative z-[1] max-w-[400px] overflow-hidden max-h-[600px] ">
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight pt-10 mb-3 text-gray-900">
            Log in <span className="text-blue-500">.</span>
          </h1>
          <p className="mb-10 text-gray-500">
            Continue into the application by selecting any one of the providers
            below.
          </p>
        </div>
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
