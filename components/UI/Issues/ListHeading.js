function ListHeading() {
  return (
    <div className="hidden sm:flex items-center text-gray-500 bg-[#f3f3f3] rounded-sm mt-5 h-11 px-2 font-sourcesans  ">
      <p className="basis-14">ID</p>
      <p className="grow">ISSUE</p>
      <p className="hidden">DATE</p>
      <p className="hidden tablet:block basis-40">STATUS</p>
      <p>ASSIGNED TO</p>
    </div>
  );
}

export default ListHeading;
