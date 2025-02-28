import axios from "axios";

const path = "http://localhost:3000/api/v1/query";

export const checkVulnerabilities = (
  file: object,
  callback: (vs: []) => unknown
) => {
  axios
    //https://google.github.io/osv.dev/post-v1-query/
    .post(path, file, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    //https://ossf.github.io/osv-schema/
    .then((response) => callback(response.data))
    .catch(function () {
      console.log("FAILURE!!");
    });
};
