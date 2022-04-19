<template>
  <v-pagination
    class="base-pagination"
    :length="pagination.totalPages"
    :value="pagination.currentPage"
    @input="updatePage"
  />
</template>

<script lang="ts" src="./index.ts" />
