<template>
  <header class="header-container">
    <div class="header-content">
      <nav>
        <router-link
          v-bind:style="activePage === 'Dashboard' ? 'color: #ffaa05;' : ''"
          to="/"
          ><i class="bi bi-arrows-angle-contract"></i> Regras de
          associação</router-link
        >
        <router-link
          v-bind:style="activePage === 'Customers' ? 'color: #ffaa05;' : ''"
          to="customers"
          ><i class="bi bi-people-fill"></i> Segmentação por
          cliente</router-link
        >
      </nav>
      <div>
        <p>{{ welcomeMessage() }}</p>
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
  },
  methods: {
    welcomeMessage() {
      const now = new Date()
      const hour = now.getHours()

      if (hour >= 5 && hour < 12) {
        return 'Bom dia, bem vindo novamente!'
      } else if (hour >= 12 && hour < 18) {
        return 'Boa tarde, bem vindo novamente!'
      } else {
        return 'Boa noite, bem vindo novamente!'
      }
    }
  },
  computed: {
    activePage() {
      const path = this.$route.path
      if (path === '/') {
        return 'Dashboard'
      } else if (path === '/customers') {
        return 'Customers'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #1a1f25;
  width: 100%;
  top: 0;
  background: #222222;
  z-index: 9999;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
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
