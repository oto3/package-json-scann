<template>
  <v-app>
    <v-container>
      <HeaderApp />
      <FileUpload
        @upload-file="handleFileUpload"
        @submit-file="handleSubmitFile"
        @use-mock-data="handleUseMockData"
      />
      <v-divider />
      <div v-if="hasVulnerabilities">
        <Vulnerabilities
          v-for="(vulns, index) in vulnerabilities"
          :key="vulns.id"
          :index="index"
          :vulns="vulns"
        />
      </div>
      <NoVulnerabilities v-if="!hasVulnerabilities" />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import axios from "axios";
import HeaderApp from "./HeaderApp.vue";
import FileUpload from "./FileUpload.vue";
import Vulnerabilities from "./Vulnerabilities.vue";
import NoVulnerabilities from "./NoVulnerabilities.vue";
import vulnerabilitiesMocked from "./Sample200Response.json";

export default {
  components: {
    HeaderApp,
    FileUpload,
    Vulnerabilities,
    NoVulnerabilities,
  },
  data() {
    return {
      file: "",
      dependenciesList: [],
      vulnerabilities: [],
      hasVulnerabilities: null,
    };
  },

  methods: {
    handleSubmitFile() {
      const path = "https://api.osv.dev/v1/querybatch";
      const params = { queries: this.dependenciesList };
      axios
        //https://google.github.io/osv.dev/post-v1-querybatch/
        .post(path, params, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        //https://google.github.io/osv.dev/post-v1-querybatch/#sample-200-response
        .then((response) => this.handleVulnerabilities(response.data))
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleVulnerabilities(vulnerabilities) {
      this.vulnerabilities = vulnerabilities.results;
      this.hasVulnerabilities = !vulnerabilities.results.every(
        (obj) => Object.keys(obj).length === 0
      );
      console.log(this.vulnerabilities, this.hasVulnerabilities);
    },
    handleUseMockData() {
      this.vulnerabilities = vulnerabilitiesMocked.results[0].vulns;
      this.hasVulnerabilities = true;
    },
    handleFileUpload(file) {
      this.file = file;
      const reader = new FileReader();
      if (this.file.name.includes(".json")) {
        reader.onload = (res) => {
          this.createParamsProperty(res.target.result);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        reader.onload = (res) => {
          console.log(res.target.result);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
    },
    createParamsProperty(file) {
      const { dependencies, devDependencies } = file && JSON.parse(file);
      for (const [key, value] of Object.entries({
        ...dependencies,
        ...devDependencies,
      })) {
        this.dependenciesList.push({
          version: value,
          package: {
            name: key,
          },
        });
      }
    },
  },
};
</script>
