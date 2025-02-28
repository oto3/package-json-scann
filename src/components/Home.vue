<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input
          id="file"
          ref="file"
          type="file"
          @:change="handleFileUpload()"
        >
      </label>
      <button @:click="submitFile()">
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default defineComponent({
  data() {
    return {
      file: "",
      fileContent: "",
      vulnerabilities: ""

    };
  },
  methods: {
    submitFile() {
      console.log("File content: ", this.content);
      axios
        //https://google.github.io/osv.dev/post-v1-query/
        .post(
          "http://localhost:3000/api/v1/query",
          {
            commit: "",
            version: "1.0.0",
            package: {
              name: "package-json-scann",
              ecosystem: "",
              purl: "",
            },
            pageToken: "",
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        //https://ossf.github.io/osv-schema/
        .then(response => (this.vulnerabilities = response.data))
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".json")) {
        reader.onload = (res) => {
          this.fileContent = res.target.result;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        this.content = "check the console for file output";
        reader.onload = (res) => {
          console.log(res.target.result);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    },
  },
});
</script>
