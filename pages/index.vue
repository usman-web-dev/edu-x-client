<template>
  <base-card title-in="center">
    <template #title>
      <h1 class="secondary--text">Login</h1>
    </template>

    <base-text-field label="Email" type="email" v-model="loginData.email" />
    <base-text-field label="Password" type="password" v-model="loginData.password" />

    <template #actions>
      <base-btn block @click="login">Login</base-btn>
    </template>
  </base-card>
</template>

<script lang="ts" src="./index.ts" />
