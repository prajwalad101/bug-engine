function StatusToggle({ issueStatus, setIssueStatus }) {
  return (
    <div className="flex h-[37px] font-raleway">
      <div
        className={`${
          issueStatus === "Open" ? "border-[#3197f5]" : "border-[#D4D4D4]"
        } rounded-l-[4px] flex items-center border-2 px-2 py-1 -mx-[1.5px] uppercase hover:cursor-pointer transition-colors`}
        onClick={() => setIssueStatus("Open")}
      >
        <p
          className={`${
            issueStatus === "Open" ? "text-[#3197f5]" : "text-[#898989]"
          } text-[13.5px] lgphone:text-[14px] font-semibold  px-1`}
        >
          open
        </p>
      </div>
      <div
        className={`${
          issueStatus === "Completed" ? "border-[#3197f5]" : "border-[#D4D4D4]"
        } rounded-r-[4px] flex items-center border-l-[#3197f5] border-2 px-2 py-1 uppercase hover:cursor-pointer transition-colors`}
        onClick={() => setIssueStatus("Completed")}
      >
        <p
          className={`${
            issueStatus === "Completed" ? "text-[#3197f5]" : "text-[#898989]"
          } text-[13.5px] lgphone:text-[14px] font-semibold  px-1`}
        >
          completed
        </p>
      </div>
    </div>
  );
}

export default StatusToggle;
