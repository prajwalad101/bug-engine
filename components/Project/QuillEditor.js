import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuillTextEditor({ value, setValue }) {
  return (
    <div className="h-full">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Briefly describe what the issue is"
      />
    </div>
  );
}
