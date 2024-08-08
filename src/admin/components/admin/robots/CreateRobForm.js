import React from "react";
import { useSelector } from "react-redux";

const CreateRobForm = ({
  title,
  setTitle,
  usd,
  setUsd,
  description,
  setDescription,
  category,
  setCategory,
  zipFile,
  setZipFile,
  image,
  setImage,
  type,
  setType,
  errors,
  handleSubmit,
  isLoading,
}) => {
  const admin_user = useSelector((state) => state.adminUsersState?.admin_user);

  return (
    <form id="create-robot-form" className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Robot Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        />
        {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
      </div>
      {/* <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price (NGN)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        />
        {errors.price && <p className="text-red-500 text-xs">{errors.price}</p>}
      </div> */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price (USD)
        </label>
        <input
          type="number"
          id="usd"
          name="usd"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        />
        {errors.usd && <p className="text-red-500 text-xs">{errors.usd}</p>}
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={admin_user.name}
          readOnly
          className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        >
          <option value="">Select a category</option>
          <option value="robots">robot</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-xs">{errors.category}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="zipFile"
          className="block text-sm font-medium text-gray-700"
        >
          Robot ZIP File
        </label>
        <input
          type="file"
          id="zipFile"
          name="zipFile"
          accept=".zip"
          onChange={(e) => setZipFile(e.target.files)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        />
        {errors.zipFile && (
          <p className="text-red-500 text-xs">{errors.zipFile}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Robot Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        />
        {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
      </div>
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type
        </label>
        <select
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
        >
          <option value="">Select a type</option>
          <option value="forex-robot">Forex Robot</option>
          <option value="commodities-robot">Commodities Robot</option>
          <option value="crypto-robot">Crypto Robot</option>
        </select>
        {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.712-3.712a8.001 8.001 0 000 11.314l3.712-3.712a3.996 3.996 0 010-3.89zm10 0a3.996 3.996 0 010-3.89l3.712 3.712a8.001 8.001 0 000-11.314l-3.712 3.712a3.996 3.996 0 010 3.89z"
              ></path>
            </svg>
          ) : (
            "Create Robot"
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateRobForm;
