<template>
  <listing
    subtitle="Some info which you need to process"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'createdAt', title: 'Created At' },
      { id: 'updatedAt', title: 'Updated At' }
    ]"
    :data-func="() => $strapi.find('courses')"
    no-data-icon="mdi-account-plus-outline"
  />
</template>
