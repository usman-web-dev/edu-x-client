<template>
  <save
    :title="title"
    :subtitle="subtitle"
    :add-func="() => $api.user.create(user)"
    :update-func="id => $api.user.update(id, user)"
    @close="$router.push({ name: 'users-role' })"
    :edit-data-func="id => $api.user.findOne(id)"
    @edit-data="user = { ...user, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="user.username" />
    <base-text-field label="Email" rules="required|email" v-model="user.email" />
    <base-switch label="Blocked" v-model="user.blocked" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
