<template>
  <listing
    :title="title"
    :subtitle="subtitle"
    :headers="[
      { id: 'username', title: 'Name' },
      { id: 'email', title: 'Email' },
      { id: 'blocked', title: 'Blocked' },
      { id: 'createdAt', title: 'Created At', type: 'date' }
    ]"
    :data-func="() => $api.user.find(apiParams)"
    :delete-func="id => $api.user.delete(id)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
    :actions="actions"
    :override-actions="overrideActions"
    :save-params="$route.params"
    @send-email-confirmation="sendEmailConfirmation"
  >
    <template #item_blocked="{ item: { blocked }, defaultStyle }">
      <span :class="defaultStyle">{{ blocked ? 'Yes' : 'No' }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
