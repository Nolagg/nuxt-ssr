<template>
<ul>
  <li v-for="fact in facts" :key="fact.customerTokenFile">
    {{ fact.dashboardHistoryObject.tag }}:{{ fact.dashboardHistoryObject.analyticName }}:{{ fact.dashboardHistoryObject.chartData }} </li>
</ul>
</template>

<script>
import fetch from 'isomorphic-fetch';

export default {
  async asyncData () {
    const response = await fetch ('https://dataanalyser-26354.firebaseio.com/DashboardRefresh.json');
    const facts = await response.json();
    return { facts };
  }
}
</script>

<style>
</style>
