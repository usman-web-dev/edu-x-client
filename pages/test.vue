<template>
  <base-table
    :headers="[
      { id: 'myid', title: 'Hahah' },
      { id: 'myid1', title: 'Hahah 1' },
      { id: 'myid2', title: 'Hahah 2' }
    ]"
    :data="[
      { myid: 'buhahah', myid1: 'buhahahha111', myid2: 'mwhahaha2' },
      { myid: 'buhahah', myid1: 'buhahahha111', myid2: 'mwhahaha2' },
      { myid: 'buhahah', myid1: 'buhahahha111', myid2: 'mwhahaha2' }
    ]"
  />
</template>
