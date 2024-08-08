import React, { useState, useEffect } from "react";
import CreateRobForm from "./CreateRobForm";
import { adminBase, adminCustomFetch } from "../../../../components/utils/http";
import { useSelector } from "react-redux";
import SuccessModal from "../modal/SuccessModal";
import { useNavigate } from "react-router-dom";

const CreateRob = () => {
  const { admin_user } = useSelector((state) => state.adminUsersState);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1000);
  const [usd, setUsd] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [zipFile, setZipFile] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (admin_user && admin_user.name) {
      setAuthor(admin_user.name);
    }
  }, [admin_user]);

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!price) newErrors.price = "Price(NGN) is required";
    if (!usd) newErrors.price = "Price(USD) is required";
    if (!description) newErrors.description = "Description is required";
    if (!category) newErrors.category = "Category is required";
    if (!zipFile) newErrors.zipFile = "ZIP file is required";
    if (!type) newErrors.type = "Type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const formData = new FormData();

      if (image) {
        const imageUploadResult = await uploadFile(image, title);
        if (imageUploadResult) {
          formData.append("image_name", imageUploadResult.fileName);
        }
      }

      if (zipFile) {
        const zipFileName = await handleFileUpload(zipFile, "robots");

        if (zipFileName) {
          formData.append("zip_file_name", zipFileName.fileName);
        }
      }

      formData.append("title", title);
      formData.append("price", price);
      formData.append("usd", usd);
      formData.append("description", description);
      formData.append("author", author);
      formData.append("category", category);
      formData.append("type", type);

      try {
        const response = await adminCustomFetch.post(
          `${category}/create`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 201) {
          setShowSuccessModal(true);
          setTitle("");
          setPrice("");
          setDescription("");
          setCategory("");
          setZipFile(null);
          setImage(null);
          setType("");
          setUsd("");
          navigate("/admin/robots");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-cyan-100 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Robot</h1>
        <CreateRobForm
          title={title}
          setTitle={setTitle}
          price={price}
          setPrice={setPrice}
          usd={usd}
          setUsd={setUsd}
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          zipFile={zipFile}
          setZipFile={setZipFile}
          image={image}
          setImage={setImage}
          type={type}
          setType={setType}
          errors={errors}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Uploading in Progress</h2>
            <p className="mb-4">
              Please do not leave the page while uploading robots. This process
              may take a few minutes.
            </p>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-900"></div>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <SuccessModal
          message="Robot created successfully!"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default CreateRob;