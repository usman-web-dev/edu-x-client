<template>
  <client-only>
    <v-simple-table class="shadow rounded-lg base-table">
      <thead>
        <tr>
          <th
            v-for="(header, idx) in tableHeaders"
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

      <tbody v-if="data.length && !loading">
        <tr v-for="(item, idx) in data" :key="idx">
          <td
            v-for="(header, i) in tableHeaders"
            :key="header.id"
            class="px-5 py-4"
            :class="{
              'left-radius': idx === data.length - 1 && !i,
              'right-radius': idx === data.length - 1 && i === tableHeaders.length - 1,
              'rounded-0': idx !== data.length - 1
            }"
          >
            <div>
              <slot
                :name="`item_${header.id.replace('$', '')}`"
                v-if="$scopedSlots[`item_${header.id.replace('$', '')}`]"
                :item="item"
                :default-style="defaultItemStyle"
              />
              <span :class="defaultItemStyle" v-else v-html="getData(header, item)" />
            </div>
          </td>
        </tr>
      </tbody>

      <tfoot v-if="!data.length || loading">
        <tr>
          <td v-if="loading" :colspan="tableHeaders.length">
            <v-skeleton-loader
              type="list-item"
              v-for="n in 3"
              :key="n"
              :max-width="`${n === 1 ? 100 : n === 2 ? 50 : 75}%`"
            />
          </td>
          <td v-else-if="!data.length" :colspan="tableHeaders.length" class="py-4 text-center">
            <span :class="defaultHeaderStyle" v-if="!$scopedSlots['no-data']">No data</span>
            <slot name="no-data" v-bind="{ defaultItemStyle, defaultHeaderStyle }" />
          </td>
        </tr>
      </tfoot>
    </v-simple-table>
  </client-only>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
.base-table {
  tfoot {
    td {
      border: none !important;
    }
  }
  .left-radius {
    border-radius: 0 !important;
    border-bottom-left-radius: 8px !important;
  }
  .right-radius {
    border-radius: 0 !important;
    border-bottom-right-radius: 8px !important;
  }
}
</style>
