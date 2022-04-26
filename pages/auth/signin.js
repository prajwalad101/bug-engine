import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

export default function SignIn({ providers, csrfToken }) {
  const router = useRouter();
  return (
    <section className="curved bg-blue-600 text-center text-black font-worksans">
      <h1 className="text-white text-3xl font-bold pt-10 mb-3 font-leaguespartan">
        BugEngine
      </h1>
      <p className="mb-10 text-gray-200">
        The issue tracker you&apos;ve always dreamed about 👌
      </p>
      <div className="bg-blue-600">
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  mx-3 vsm:mx-auto">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-700">
            Get started
          </h5>

          <p className="mb-8 text-gray-500">
            Completely free. No credit card required
          </p>
          <div className="flex flex-col items-center">
            {Object.values(providers).map((provider) => {
              return (
                <div
                  key={provider.name}
                  className="flex flex-col items-center justify-center"
                >
                  {provider.name !== "Demo user" && (
                    <button
                      type="button"
                      className="flex gap-3 items-center bg-shadow font-medium rounded-sm text-md px-5 py-2.5 mr-2 mb-2 hover:bg-gray-50 transition-colors"
                      onClick={() =>
                        signIn(provider.id, {
                          callbackUrl: router.query.callbackUrl,
                        })
                      }
                    >
                      <span className="hidden vsm:inline text-gray-800">
                        {provider.name === "GitHub" && (
                          <AiFillGithub size={25} />
                        )}
                        {provider.name === "Google" && (
                          <AiFillGoogleCircle size={25} />
                        )}
                      </span>
                      Continue with {provider.name}
                    </button>
                  )}
                  {provider.name === "GitHub" && (
                    <p className="text-gray-600 mb-2">or</p>
                  )}
                </div>
              );
            })}
            <p className="text-gray-600 mb-5">or</p>

            <button
              type="button"
              className="flex gap-3 items-center bg-shadow font-medium rounded-sm text-md px-5 py-2.5 mr-2 mb-2 hover:bg-gray-50 transition-colors"
              onClick={() => signIn("credentials", { demo: true })}
            >
              <span className="hidden vsm:inline text-gray-800"></span>
              Log In as a Demo user
            </button>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 270"
        className=""
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,160C672,171,768,181,864,165.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
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
