<template>
  <base-form #default="{ invalid }" @submit="login">
    <base-card title-in="center">
      <template #title>
        <h1 class="secondary--text">Login</h1>
      </template>

      <base-text-field label="Email" type="email" v-model="loginData.email" rules="required|email" autofocus />
      <base-text-field label="Password" type="password" v-model="loginData.password" rules="required|min:8|max:36" />

      <template #actions>
        <base-btn block :disabled="invalid" type="submit">Login</base-btn>
      </template>
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
