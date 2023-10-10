<template>
  <div>
    <HeaderComponent />
    <div>
      <div class="dashboard-content">
        <h1>Inicio</h1>
        <div>
          <div class="card">
            <div class="card-header">
              <div class="card-header-content">
                <h3>Selecione um produto</h3>
              </div>
            </div>
            <div class="card-body">
              <div class="card-body-content">
                <p>Img</p>
                <div>
                  <h4>Heiniken Lata - 350ml</h4>
                  <div class="">
                    <p>Valor:</p>
                    <p>R$ 23,25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: 'DashboardPage',
  components: {
    HeaderComponent
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss">
.container {
  margin-top: 7.5rem;
}

.dashboard-content {
  max-width: 90rem;

  margin-top: 5rem;
  padding: 0 2rem;

  h1 {
    margin-bottom: 2.75rem;
  }

  .card {
    width: 37.5rem;
    height: 29.8rem;

    padding: 20px 46px;

    border: 1px solid #666666;
    border-radius: 20px;

    background-color: #494949;

    .card-header {
      .card-header-content {
        border-bottom: 1px solid #fff;

        h3 {
          margin: 20px 20px;
        }
      }
    }

    .card-body {
      .card-body-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
