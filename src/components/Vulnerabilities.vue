<template>
  <v-container v-if="vulnerabilities.id">
    <v-card class="mx-auto">
      <v-list density="compact">
        <v-list-subheader>General Info</v-list-subheader>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              ID
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.id }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Modified
            </v-text>
          </template>
          <v-list-item-title>{{ vulnerabilities.modified }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
defineProps({
  vulnerabilities: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
  },
});
</script>
