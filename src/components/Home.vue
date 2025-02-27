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
import axios from 'axios'
export default {
  data() {
    return {
      file: "",
      content: "",
    };
  },
  methods: {
    submitFile() {
      console.log('File content: ', this.content)

      axios
        .post("http://localhost:3000/api/v1/query", {"version": "2.4.1", "package": {"name": "jinja2", "ecosystem": "PyPI"}}, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".json")) {
        reader.onload = (res) => {
          this.content = res.target.result;
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
