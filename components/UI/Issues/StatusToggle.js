import { useState } from "react";

function StatusToggle() {
  const [issueStatus, setIssueStatus] = useState("open");

  return (
    <div className="flex h-[37px]">
      <div
        className={`${
          issueStatus === "open" ? "border-[#3197f5]" : "border-[#D4D4D4]"
        } rounded-l-[4px] flex items-center border-2 px-2 py-1 -mx-[1.5px] uppercase hover:cursor-pointer transition-colors`}
        onClick={() => setIssueStatus("open")}
      >
        <p
          className={`${
            issueStatus === "open" && "text-[#3197f5]"
          } text-[13.5px] font-semibold text-[#898989] px-1`}
        >
          open
        </p>
      </div>
      <div
        className={`${
          issueStatus === "completed" ? "border-[#3197f5]" : "border-[#D4D4D4]"
        } rounded-r-[4px] flex items-center border-l-[#3197f5] border-2 px-2 py-1 uppercase hover:cursor-pointer transition-colors`}
        onClick={() => setIssueStatus("completed")}
      >
        <p
          className={`${
            issueStatus === "completed" && "text-[#3197f5] "
          } text-[13.5px] font-semibold text-[#898989] px-1`}
        >
          completed
        </p>
      </div>
    </div>
  );
}

export default StatusToggle;
