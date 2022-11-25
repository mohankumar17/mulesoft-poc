import axios from "axios";

let propertyKnowledge =
  "http://properties-knowledge-sys-api-sumanth.us-e2.cloudhub.io/api/knowledge";
let cmsUrl = "http://cms-system-api.us-e2.cloudhub.io/api";
let projectBuilderUrl =
  "http://project-builder-process-api.us-e2.cloudhub.io/api";

export const getSystems = async () => {
  const response = await axios.get(`${propertyKnowledge}`);
  return response.data;
};

export const getAuthTypes = async (system) => {
  const response = await axios.get(`${propertyKnowledge}?system=${system}`);
  return response.data;
};

export const getCreds = async (system, authType) => {
  const response = await axios.get(
    `${propertyKnowledge}?system=${system}&authType=${authType}`
  );
  return response.data;
};

export const getCMSSystems = async () => {
  const response = await axios.get(`${cmsUrl}/retrieve`);
  return response.data;
};

export const postCMSSystem = async (payload) => {
  const res = axios.post(`${cmsUrl}/cms?env=prod`, payload);
  return res;
};

export const getProject = (systems, appName) => {
  axios
    .get(
      `${projectBuilderUrl}/projectBuilder?appName=${appName}&system=${systems}`,
      {
        responseType: "blob",
      }
    )
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
