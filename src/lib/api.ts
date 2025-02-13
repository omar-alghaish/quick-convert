export const convertFile = async (file: File, targetFormat: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("targetFormat", targetFormat);

  const response = await fetch("http://localhost:5000/api/v1/files/convert", {
    method: "POST",
    body: formData,
    headers: {
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2FkMzQ2YjMzYjhkNTZlYzFmNzExODgiLCJpYXQiOjE3Mzk0MDQzOTUsImV4cCI6MTc0MTk5NjM5NX0.q9bwwdlhdKOJhUevjjmxsdTnKkOnNh4iwLTxbME2oH0",
      "x-api-key":
        "80c50c32352c9e7f8b30fd8426d12ff343574b7ab31decd3208f761cae177d5b",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Conversion failed");
  }

  return response.json();
};

export const downloadFile = async (filename: string) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/files/download/${filename}`,
    {
      headers: {
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2FkMzQ2YjMzYjhkNTZlYzFmNzExODgiLCJpYXQiOjE3Mzk0MDQzOTUsImV4cCI6MTc0MTk5NjM5NX0.q9bwwdlhdKOJhUevjjmxsdTnKkOnNh4iwLTxbME2oH0",
        "x-api-key":
          "80c50c32352c9e7f8b30fd8426d12ff343574b7ab31decd3208f761cae177d5b",
      },
    }
  );
  console.log(response);
  if (!response.ok) throw new Error("Download failed");
  return response.blob();
};

// https://admin-dashboard-mern-0tfn.onrender.com
// http://localhost:5000
