<template>
  <v-pagination class="base-pagination" :length="pagination.pageCount" :value="pagination.page" @input="updatePage" />
</template>

<script lang="ts" src="./index.ts" />
