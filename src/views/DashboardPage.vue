<template>
  <div>
    <HeaderComponent />
    <div>
      <div class="dashboard-content">
        <h1>Inicio</h1>
        <section class="section-container">
          <div class="card">
            <div class="card-header">
              <div class="card-header-content">
                <h3>Selecione um produto</h3>
              </div>
            </div>
            <div class="card-body">
              <div class="card-body-content">
                <img src="src/assets/imgs/heineken.png" alt="Heineken" />
                <div class="card-content-container">
                  <h3>Heiniken Lata - 350ml</h3>
                  <div class="card-content-detail">
                    <p>Valor:</p>
                    <b>R$ 23,25</b>
                  </div>
                  <div class="card-content-detail">
                    <p>Vendidos:</p>
                    <b>480</b>
                  </div>
                  <div class="card-content-detail">
                    <p>Principal método:</p>
                    <b>Boleto</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sales-card-container">
            <h3>Vendas Relacionadas</h3>
            <div class="sales-card">
              <div class="sales-card-header">
                <p>Item</p>
                <p>(qt.vendas)</p>
              </div>
              <div class="sales-card-datail">
                <p>Fralda</p>
                <div class="progress-container"></div>
                <p>50</p>
              </div>
              <div class="sales-card-datail">
                <p>Fralda</p>
                <div class="progress-container"></div>
                <p>50</p>
              </div>
              <div class="sales-card-datail">
                <p>Fralda</p>
                <div class="progress-container"></div>
                <p>50</p>
              </div>
              <div class="sales-card-datail">
                <p>Fralda</p>
                <div class="progress-container"></div>
                <p>50</p>
              </div>
            </div>
          </div>
        </section>
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

.section-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

        .card-content-container {
          width: 70%;
          padding: 2.37rem 2.62rem;

          h3 {
            text-align: center;
            font-size: 1.62rem;
          }

          .card-content-detail {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 1.56rem;
          }
        }
      }
    }
  }

  .sales-card-container {
    .sales-card {
      height: 24.5rem;
      width: 40rem;

      margin-top: 2.5rem;
      padding: 20px 46px;

      border: 1px solid #666666;
      border-radius: 20px;

      background-color: #494949;

      .sales-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 0.7rem;
      }

      .sales-card-datail {
        display: flex;
        justify-content: space-between;
        align-content: center;

        margin-top: 1.56rem;

        .progress-container {
          width: 80%;
          height: 0.5rem;
          border-radius: 0.25rem;

          background-color: #666666;

          &::after {
            border-radius: 0.25rem;
            content: '';
            display: block;
            width: 50%;
            height: 100%;
            background-color: #ffaa05;
          }
        }
      }
    }
  }
}
</style>
