import Image from "next/image";
import NoData from "../../../public/img/no-data.png";

function NoIssues() {
  return (
    <div className="w-full mt-10 lg:mt-20 mx-auto text-center">
      <Image src={NoData} alt="no-data" width={380} height={330} />
      <h1 scope="row" className="px-6 py-4 text-xl font-medium sm:pl-20">
        No issues found
      </h1>
    </div>
  );
}

export default NoIssues;
