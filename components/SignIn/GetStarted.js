import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";

export default function GetStarted({ providers }) {
  const router = useRouter();

  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg mx-3 vsm:mx-auto">
      <h5 className="mb-3 text-[22px] font-semibold text-gray-700">
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
                    {provider.name === "GitHub" && <AiFillGithub size={25} />}
                    {provider.name === "Google" && <FcGoogle size={25} />}
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
        <p className="text-gray-600 mb-3">or</p>

        <button
          type="button"
          className="flex gap-3 items-center bg-shadow font-medium rounded-sm text-md px-5 py-2.5 mr-2 mb-2 hover:bg-gray-50 transition-colors"
          onClick={() =>
            signIn("credentials", {
              demo: true,
              callbackUrl: router.query.callbackUrl,
            })
          }
        >
          <BsFillPersonFill
            size={25}
            className="hidden vsm:inline text-blue-500"
          />
          <span className="hidden vsm:inline text-gray-800 "></span>
          Continue as a Guest
        </button>
      </div>
    </div>
  );
}
