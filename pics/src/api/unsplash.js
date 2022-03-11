import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uJYaqxmrABMljz5F2tmbPc_QgQ-lg4nWqiAyrq_MRtU",
  },
});
