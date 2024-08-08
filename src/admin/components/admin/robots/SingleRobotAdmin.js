import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SingleRobotAdmin = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState({});
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const fetchRobot = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://chimetrading.com/api/chime/singleRobot?slug=${id}`
      );
      setRobot(data?.data);
      setName(data?.data?.title || "");
      setDescription(data?.data?.description || "");
      setPrice(data?.data?.usd || "");
    } catch (error) {
      console.error("Error fetching the robot data", error);
    } finally {
      setLoading(false);
    }
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `https://chimetrading.com/api/chime/updateRobot`,
        {
          title: name || robot.name,
          description: description || robot.description,
          usd: price || robot.usd,
          slug: id,
        }
      );

      if (data.code === 200) {
        toast("robot updated successfully");
        setSuccess(true);
        navigate("/admin/robots");
      }
    } catch (error) {
      console.error("Error updating the robot data", error);
    }
  };

  useEffect(() => {
    fetchRobot();
  }, [fetchRobot]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Update Robot</h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                  placeholder={robot.name}
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                  placeholder={robot.usd}
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                  placeholder={robot.description}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>
            </form>
            {success && (
              <p className="text-green-500 mt-4">Robot updated successfully!</p>
            )}
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            {robot.image && (
              <img
                src={robot.image}
                alt={robot.name}
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRobotAdmin;
