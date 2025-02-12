export const convertFile = async (file: File, targetFormat: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("targetFormat", targetFormat);

  const response = await fetch("http://localhost:5000/api/v1/files/convert", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Conversion failed");
  }

  return response.json();
};

export const downloadFile = async (filename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/files/download/${filename}`
  );
  if (!response.ok) throw new Error("Download failed");
  return response.blob();
};

// https://admin-dashboard-mern-0tfn.onrender.com
// http://localhost:5000
