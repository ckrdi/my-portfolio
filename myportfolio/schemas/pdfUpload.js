export default {
  title: "Upload Resume",
  name: "pdfDocument",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "pdfFile",
      type: "file",
      title: "PDF File",
      options: {
        accept: ".pdf",
      },
    },
  ],
};
