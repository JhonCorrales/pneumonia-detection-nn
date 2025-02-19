import { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:5173/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Resultado:", data);
    } catch (error) {
      console.error("Error al subir imagen:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Imagen</button>
    </div>
  );
};

export default Upload;
