<template>
  <v-simple-table class="shadow rounded-lg">
    <thead>
      <tr>
        <th
          v-for="(header, idx) in headers"
          :key="idx"
          class="px-5 py-3"
          :style="header.width ? `width: ${header.width}` : undefined"
        >
          <div class="d-flex align-center">
            <slot
              :name="`header_${header.id.replace('$', '')}`"
              v-if="$scopedSlots[`header_${header.id.replace('$', '')}`]"
              :item="header"
              :default-style="defaultHeaderStyle"
            />
            <span :class="defaultHeaderStyle" v-else>
              {{ header.id.includes('$') ? '' : header.title }}
            </span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in data" :key="idx">
        <td
          v-for="({ id }, i) in headers"
          :key="i"
          class="px-5 py-4"
          :class="{
            'left-radius': idx === data.length - 1 && !i,
            'right-radius': idx === data.length - 1 && i === headers.length - 1,
            'rounded-0': idx !== data.length - 1
          }"
        >
          <div>
            <slot
              :name="`item_${id.replace('$', '')}`"
              v-if="$scopedSlots[`item_${id.replace('$', '')}`]"
              :item="item"
              :default-style="defaultItemStyle"
            />
            <span :class="defaultItemStyle" v-else v-html="item[id]" />
          </div>
        </td>
      </tr>
      <tr v-if="!data.length">
        <td :colspan="headers.length" class="text-h5 grey--text py-3 text-center font-weight-light">Nothing found</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
.left-radius {
  border-radius: 0 !important;
  border-bottom-left-radius: 8px !important;
}
.right-radius {
  border-radius: 0 !important;
  border-bottom-right-radius: 8px !important;
}
</style>
