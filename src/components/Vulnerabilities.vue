<template>
  <v-container v-if="vulns.id">
    <v-card class="mx-auto">
      <v-list
        :items="vulnerabilities"
        density="compact"
      >
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              ID
            </v-text>
          </template>
          <v-list-item-title>{{ vulns.id }}</v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
          <template #prepend>
            <v-text :style="{ minWidth: '240px' }">
              Modified
            </v-text>
          </template>
          <v-list-item-title>{{ vulns.modified }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
defineProps({
  vulns: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
  },
});
</script>
