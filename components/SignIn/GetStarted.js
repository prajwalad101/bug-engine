import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";

export default function GetStarted({ providers }) {
  const router = useRouter();

  return (
    <section>
      <div className="flex flex-col items-center gap-7">
        {Object.values(providers).map((provider) => {
          return (
            provider.name !== "Demo user" && (
              <div
                key={provider.name}
                className="flex flex-col items-center justify-center w-full"
              >
                <button
                  className="w-full flex justify-center items-center gap-3 border-2 rounded-[5px] text-md px-5 py-3 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: router.query.callbackUrl,
                    })
                  }
                >
                  {provider.name === "GitHub" && <AiFillGithub size={25} />}
                  {provider.name === "Google" && <FcGoogle size={25} />}
                  Continue with {provider.name}
                </button>
              </div>
            )
          );
        })}
      </div>

      <div className="w-full text-center">
        <p className="my-4 text-gray-500 font-medium">or</p>
        <button
          className="w-full flex justify-center items-center gap-3 border-2 border-blue-500 rounded-[5px] text-md px-5 py-3  bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
          onClick={() =>
            signIn("credentials", {
              demo: true,
              callbackUrl: router.query.callbackUrl,
            })
          }
        >
          <BsFillPersonFill size={25} />
          Continue as a Guest
        </button>
      </div>
    </section>
  );
}
