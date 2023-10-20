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
        <section class="payment-methods-section">
          <h3>Métodos de pagamento</h3>
          <div class="payment-methods-container">
            <div class="payment-method">
              <h4>DÉBITO</h4>
              <p>93</p>
              <h5>vendas</h5>
            </div>

            <div class="payment-method">
              <h4>BOLETO</h4>
              <p>4</p>
              <h5>vendas</h5>
            </div>

            <div class="payment-method">
              <h4>PIX</h4>
              <p>240</p>
              <h5>vendas</h5>
            </div>

            <div class="payment-method">
              <h4>PARCELADO</h4>
              <p>143</p>
              <h5>vendas</h5>
            </div>
          </div>
        </section>
        <section>
          <h3>Historico de vendas</h3>
          <Chart></Chart>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import Chart from '../components/Chart.vue'

export default {
  name: 'DashboardPage',
  components: {
    HeaderComponent,
    Chart
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

.payment-methods-section {
  margin-top: 5rem;

  h3 {
    margin-bottom: 2.5rem;
    font: 700 1.5rem 'Roboto', sans-serif;
  }
  .payment-methods-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;

    .payment-method {
      width: 100%;
      max-width: 23.75rem;
      height: 12.56rem;

      padding: 1.5rem;

      border: 1px solid #666666;
      border-radius: 20px;

      background-color: #494949;

      h4 {
        text-align: right;
        font: 700 2rem 'Roboto', sans-serif;
        color: #939393;
      }

      p {
        font: 700 3.75rem 'Roboto', sans-serif;
        color: #939393;
      }

      h5 {
        font: 700 2rem 'Roboto', sans-serif;
        color: #939393;
      }
    }
  }
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
