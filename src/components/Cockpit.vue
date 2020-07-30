<template>
  <DataGrid></DataGrid>
</template>


<script>
import DataGrid from './DataGrid.vue';

export default {
  name: "Cockpit",
  components: {
    'DataGrid': DataGrid
  }
};

</script>