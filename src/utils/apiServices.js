import axios from "axios";

const baseUrl = "http://rgda-experience-api.us-e2.cloudhub.io/api";

export const getSystems = async () => {
  const response = await axios.get(`${baseUrl}/knowledge`);
  return response.data;
};

export const getAuthTypes = async (system) => {
  const response = await axios.get(`${baseUrl}/knowledge?system=${system}`);
  return response.data;
};

export const getCreds = async (system, authType) => {
  const response = await axios.get(
    `${baseUrl}/knowledge?system=${system}&authType=${authType}`
  );
  return response.data;
};

export const getCMSSystems = async () => {
  const response = await axios.get(`${baseUrl}/cmsretrieve`);
  return response.data;
};

export const postCMSSystem = async (payload) => {
  const res = await axios.post(`${baseUrl}/cms?env=prod`, payload);
  return res;
};

export const getProject = (systems, appName) => {
  axios
    .get(`${baseUrl}/projectBuilder?appName=${appName}&system=${systems}`, {
      responseType: "blob",
    })
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      let fileName = appName + ".zip";
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
    });
};
