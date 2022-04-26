export default function QuillTextEditor({ value, setValue, Quill }) {
  return (
    <Quill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Briefly describe what the issue is"
    />
  );
}
