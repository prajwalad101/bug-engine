import Image from "next/image";
import { useRouter } from "next/router";
import AccessDenied from "../../public/img/accessdenied.png";
import { BsFillPersonFill } from "react-icons/bs";

export default function Error() {
  const { error } = useRouter().query;
  const router = useRouter();

  if (error === "AccessDenied") {
    return (
      <div className="flex items-center flex-col">
        <div className="mx-auto text-center mt-10 font-inter">
          <h1 className="text-3xl font-bold ">Access Denied!</h1>
          <p className="mt-3 text-gray-500">
            You do not have access to this application.
          </p>
          <Image
            src={AccessDenied}
            alt="access-denied"
            width={350}
            height={350}
          />

          <p className="text-lg text-gray-800 mt-5">
            To demo the application, try signing in as a guest instead
          </p>
        </div>
        <button
          type="button"
          className="mt-10 w-[250px] bg-blue-600 text-white items-center rounded-md text-md py-2.5 hover:bg-blue-700 transition-colors"
          onClick={() => router.push("/")}
        >
          <span className="hidden vsm:inline font-medium"> Sign In</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="mx-auto text-center mt-10 font-inter">
        <h1 className="text-3xl font-bold ">Access Denied!</h1>
        <p className="mt-3 text-gray-500">
          You do not have access to this application.
        </p>
        <Image
          src={AccessDenied}
          alt="access-denied"
          width={350}
          height={350}
        />
      </div>
    );
  }
}

Error.auth = false;
