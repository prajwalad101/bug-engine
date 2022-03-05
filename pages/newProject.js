import { useState } from "react";
import SubmitProject from "../components/UI/Project/SubmitProject";

function NewProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-[900px] mx-5 lg:mt-5 flex flex-col gap-5">
      <div>
        <h3 className="text-2xl text-gray-800 font-sourcesans">
          Create new project
        </h3>
      </div>
      {/* Project Title */}
      <div className="mt-1">
        <h3 className="text-gray-500">TITLE</h3>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border-b-2 w-full text-xl rounded-sm pr-2 py-1 border-gray-200 focus:outline-none focus:border-gray-500 "
        />
      </div>
      {/* Project Description */}
      <div className="mt-1">
        <h3 className="text-gray-500">DESCRIPTION</h3>
        <textarea
          name="description"
          cols="200"
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="max-w-full mt-4 border-2 p-[5px] rounded-sm"
        ></textarea>
      </div>
      <div>
        <SubmitProject name={title} description={description} />
      </div>
    </div>
  );
}

export default NewProject;
