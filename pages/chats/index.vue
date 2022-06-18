<template>
  <base-card :loading="$fetchState.pending">
    <v-row>
      <v-col cols="12" md="2">
        <v-list dense nav>
          <v-list-item
            @click="selectedChatRoom = chatRoom"
            v-for="chatRoom in chatRooms"
            :key="chatRoom.id"
            :value="selectedChatRoom && chatRoom.id === selectedChatRoom.id"
          >
            <v-list-item-title>{{ getTitle(chatRoom) }}</v-list-item-title>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="1">
        <v-divider vertical />
      </v-col>
      <v-col cols="12" md="9">
        <h3 v-if="selectedChatRoom">
          {{ getTitle(selectedChatRoom) }}
        </h3>
      </v-col>
    </v-row>
  </base-card>
</template>

<script lang="ts" src="./index.ts" />
