import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const chimeBaseURL = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const cartFetch = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/cart",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

cartFetch.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export const authFetch = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/auth/",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

// password reset
export const pswrFetch = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/password",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

// users
export const userFetch = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/user",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

userFetch.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

userFetch.interceptors.response.use(
  (response) => {
    // console.log("Response:", response);
    const resCode = response?.data?.code;
    const resMsg = response?.data?.message;

    if (resCode === 401 && resMsg === "Unauthorized") {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    if (resCode === 401 && resMsg === "token has expired") {
      toast.warn("Your session has expired.");

      Swal.fire({
        title: "Session Expired",
        text: "Your session has expired. Please log in again.",
        icon: "warning",
        confirmButtonText: "Login",
      }).then(() => {
        localStorage.removeItem("user");
        window.location.href = "/login";
      });
    }

    if (resCode === 401 && resMsg === "User not found") {
      localStorage.removeItem("user");
      window.location.href = "/";
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// admin
export const adminAuthFetch = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/admin/auth/",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

// fetch admin users
export const adminCustomFetch = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/admin",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

adminCustomFetch.interceptors.request.use((config) => {
  const adminUser = JSON.parse(localStorage.getItem("adminUser"));
  if (adminUser && adminUser.token) {
    config.headers.Authorization = `Bearer ${adminUser.token}`;
  }
  return config;
});

adminCustomFetch.interceptors.response.use(
  (response) => {
    const resCode = response?.data?.code;

    if (resCode === 401 && response?.data.message === "empty fields") {
      Swal.fire({
        title: "ooooops",
        text: "failed to upload course or robot you are trying to upload may already exist, check thoroughly before uploading again.",
        icon: "error",
      });
    } else if (
      resCode === 401 &&
      response?.data.message ===
        "item(course or robot you are trying to upload) already exists"
    ) {
      Swal.fire({
        title: "Error",
        text: "Robot or courses already exists.",
        icon: "error",
      });
    } else if (resCode === 401) {
      toast.warn("Your session has expired.");

      Swal.fire({
        title: "Session Expired",
        text: "Your session has expired. Please log in again.",
        icon: "warning",
        confirmButtonText: "Login",
      }).then(() => {
        localStorage.removeItem("adminUser");
        window.location.href = "/admin/login";
      });
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adminBase = axios.create({
  baseURL: "https://www.chimetrading.com/api/chime/",
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
  headers: {
    "Content-Type": "application/json",
  },
});

adminBase.interceptors.request.use((config) => {
  const adminUser = JSON.parse(localStorage.getItem("adminUser"));
  if (adminUser && adminUser.token) {
    config.headers.Authorization = `Bearer ${adminUser.token}`;
  }
  return config;
});

adminBase.interceptors.response.use(
  (response) => {
    const resCode = response?.data?.code;
    const resMessage = response?.data?.message;

    if (resCode === 401 && resMessage === "empty fields") {
      Swal.fire({
        title: "ooooops",
        text: "failed to upload course or robot you are trying to upload may already exist, check thoroughly before uploading again.",
        icon: "error",
      });
    } else if (
      resCode === 401 &&
      resMessage ===
        "item(course or robot you are trying to upload) already exists"
    ) {
      Swal.fire({
        title: "Error",
        text: "Robot or courses already exists.",
        icon: "error",
      });
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
