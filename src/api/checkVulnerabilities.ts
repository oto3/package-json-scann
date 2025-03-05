import axios from "axios";

const path = "https://api.osv.dev/v1/querybatch";
export const checkVulnerabilitiesQuery = (
  dependenciesList: object[],
  callback: (vs: []) => unknown
) => {
  const params = { queries: dependenciesList };
  axios
    //https://google.github.io/osv.dev/post-v1-querybatch/
    .post(path, params, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    //https://google.github.io/osv.dev/post-v1-querybatch/#sample-200-response
    .then((response) => callback(response.data))
    .catch(function () {
      console.log("FAILURE!!");
    });
};
