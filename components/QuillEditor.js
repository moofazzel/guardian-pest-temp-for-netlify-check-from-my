import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ field }) => {
  // Quill toolbar options
  const toolbarOptions = [
    // Add other toolbar options as needed
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link"],
    [{ list: "ordered" }, { list: "bullet" }],

    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

    [{ align: [] }],

    [{ direction: "rtl" }], // text direction

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme

    ["clean"], // remove formatting button
  ];

  if (!ReactQuill || !field) {
    return <div>Loading...</div>;
  }
  return <ReactQuill {...field} modules={{ toolbar: toolbarOptions }} />;
};

export default QuillEditor;
