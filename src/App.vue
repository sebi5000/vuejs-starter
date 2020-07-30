<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/cockpit">
          <font-awesome-icon icon="coffee" />
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
      </div>
        <a class="navbar-item" href="/cockpit">Cockpit</a>
        <a class="navbar-item" href="/configurator">Configurator</a>
        <a class="navbar-item" href="/admincenter">Admin Center</a>
    </nav>
    <body>
      <router-view></router-view>
    </body>
  </div>
</template>

<script>

export default {
  name: "App",
};

</script>

<style scoped>
  body {
    padding-top: 65px;
  }
</style>