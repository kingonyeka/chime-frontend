import React, { useEffect, useState } from "react";
import CreateCourseForm from "./CreateCourseForm";
import { adminBase, adminCustomFetch } from "../../../../components/utils/http";
import { useSelector } from "react-redux";
import SuccessModal from "../modal/SuccessModal";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const admin_user = useSelector((state) => state.adminUsersState?.admin_user);
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(100000);
  const [usd, setUsd] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("courses");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [videos, setVideos] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [liveSessions, setLiveSessions] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (admin_user && admin_user.name) {
      setAuthor(admin_user.name);
    }
  }, [admin_user]);

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    setIsLoading(true);

    if (image) {
      let imageUploadResult;
      imageUploadResult = await uploadFile(image, title);
      formData.append("image_name", imageUploadResult.fileName);
    }

   

    if (videos && videos.length > 0) {
      await handleFileUpload(videos, "course");
    }

    if (quizzes && quizzes.length > 0) {
      await handleFileUpload(quizzes, "quiz");
    }

    if (liveSessions && liveSessions.length > 0) {
      await handleFileUpload(liveSessions, "live_session");
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
        setVideos([]);
        setLiveSessions([]);
        setQuizzes([]);
        setImage(null);
        setType("");
        setUsd("");

        navigate("/admin/courses");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyan-900 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-cyan-800">
          Create Course
        </h1>
        <CreateCourseForm
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
          type={type}
          setType={setType}
          image={image}
          setImage={setImage}
          videos={videos}
          setVideos={setVideos}
          quizzes={quizzes}
          setQuizzes={setQuizzes}
          liveSessions={liveSessions}
          setLiveSessions={setLiveSessions}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Uploading in Progress</h2>
            <p className="mb-4">
              Please do not leave the page while uploading courses. This process
              may take a few minutes.
            </p>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-900"></div>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <SuccessModal
          message="Course created successfully!"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default CreateCourse;
