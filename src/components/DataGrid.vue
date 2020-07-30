<template>
  <div class="table-container">
    <tabel class="table is-striped is-hoverable is-fullwidth">
      <thead></thead>
      <tfoot></tfoot>
      <tbody>
        <tr>
          <th v-for="column in mockReport.columns" :key="column.name">{{ column.title }}</th>
        </tr>
        <tr v-for="row in mockReport.rows" :key="row.id">
          <td v-for="data in row.data" :key="data.columnName">
            {{data.value}}
          </td>
        </tr>
      </tbody>

    </tabel>
  </div>
</template>


<script>

import mockReport from '../mockdata/hrreporting';

export default {
  name: "DataGrid",
  data: function(){    
    return mockReport;
  }
};

</script>