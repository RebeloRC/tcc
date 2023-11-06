<template>
  <header class="header-container">
    <div class="header-content">
      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/about">Clientes</router-link>
      </nav>
      <div>
        <p>Olá, Rodrigo Rebelo</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #1a1f25;
  width: 100%;
  top: 0;
  background: #222222;
  z-index: 9999;
}

.header-content {
  max-width: 90rem;
  width: 100%;
  height: 5rem;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 600;
      margin-right: 2rem;
      transition: all 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
