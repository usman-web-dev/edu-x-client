<template>
  <listing
    subtitle="All teachers here"
    :headers="[
      { id: 'username', title: 'Name' },
      { id: 'email', title: 'Email' },
      { id: 'blocked', title: 'Blocked' },
      { id: 'createdAt', title: 'Created At', type: 'date' }
    ]"
    :data-func="() => $api.user.find(apiParams)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  >
    <template #item_blocked="{ item: { blocked }, defaultStyle }">
      <span :class="defaultStyle">{{ blocked ? 'Yes' : 'No' }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
