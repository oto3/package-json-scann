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
import { checkVulnerabilities } from "@/api/checkVulnerabilities";
import vulnerabilitiesMocked from "./Sample200Response.json";

export default {
  components: {
    HeaderApp,
    FileUpload,
    Vulnerabilities,
  },
  data() {
    return {
      file: "",
      fileContent: {},
      vulnerabilities: {}
    };
  },

  methods: {
    handleSubmitFile() {
      this.vulnerabilities = checkVulnerabilities(this.fileContent);
      // Mock temporary
      this.vulnerabilities = {...vulnerabilitiesMocked.vulns[0]};
      console.log(this.vulnerabilities)
    },
    handleFileUpload(file) {
      this.file = file;
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
};
</script>
