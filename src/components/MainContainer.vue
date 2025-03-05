<template>
  <v-app>
    <v-container>
      <HeaderApp />
      <FileUpload
        @upload-file="handleFileUpload"
        @submit-file="handleSubmitFile"
      />
      <v-divider />
      <Vulnerabilities :vulnerabilities="vulnerabilities" />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import HeaderApp from "./HeaderApp.vue";
import FileUpload from "./FileUpload.vue";
import Vulnerabilities from "./Vulnerabilities.vue";
import { checkVulnerabilitiesQuery } from "@/api/checkVulnerabilities";

export default {
  components: {
    HeaderApp,
    FileUpload,
    Vulnerabilities,
  },
  data() {
    return {
      file: "",
      dependenciesList: [],
      vulnerabilities: {},
    };
  },

  methods: {
    handleSubmitFile() {
      this.vulnerabilities = checkVulnerabilitiesQuery(this.dependenciesList);
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
        this.content = "check the console for file output";
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
