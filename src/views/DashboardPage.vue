<template>
  <div>
    <HeaderComponent />
    <Modal
      :show-modal="showModal"
      :modal-type="modalType"
      :modal-product-id="modalProductId"
      @close-modal="showModal = false"
    ></Modal>

    <div class="dashboard-container">
      <div class="dashboard-content">
        <h1>Inicio</h1>
        <section class="section-container">
          <div class="card">
            <div class="card-header">
              {{ productCurrentinView }}
              <div class="card-header-content">
                <select
                  v-model="selectedProduct"
                  @change="this.getProductDetail(selectedProduct)"
                >
                  <option selected value="" disabled>Please select one</option>
                  <option
                    v-for="(product, index) in avaliableProducts"
                    :key="index"
                    :value="product.id"
                  >
                    {{ product.nome }}
                  </option>
                </select>
                <div>&#9660;</div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-body-content">
                <img src="src/assets/imgs/heineken.png" alt="Heineken" />
                <div class="card-content-container">
                  <h3>{{ productCurrentinView.produto_nome }}</h3>
                  <div class="card-content-detail">
                    <p>Valor:</p>
                    <b>R$ {{ productCurrentinView.produto_preco }}</b>
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
                <p>Lift</p>
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
            <div
              class="payment-method"
              @click="
                openModalWithRequestType(
                  productCurrentinView.produto_id,
                  'DEBITO'
                )
              "
            >
              <h4>DÉBITO</h4>
              <p>{{ productCurrentinView.débito }}</p>
              <h5>vendas</h5>
            </div>

            <div
              class="payment-method"
              @click="
                openModalWithRequestType(
                  productCurrentinView.produto_id,
                  'boleto'
                )
              "
            >
              <h4>BOLETO</h4>
              <p>{{ productCurrentinView.boleto }}</p>
              <h5>vendas</h5>
            </div>

            <div
              class="payment-method"
              @click="
                openModalWithRequestType(productCurrentinView.produto_id, 'PIX')
              "
            >
              <h4>PIX</h4>
              <p>{{ productCurrentinView.boleto }}</p>
              <h5>vendas</h5>
            </div>

            <div
              class="payment-method"
              @click="
                openModalWithRequestType(
                  productCurrentinView.produto_id,
                  'PARCELADO'
                )
              "
            >
              <h4>PARCELADO</h4>
              <p>{{ productCurrentinView.credito }}</p>
              <h5>vendas</h5>
            </div>
          </div>
        </section>
        <section class="sales-history-section">
          <h3><b>Historico de vendas</b></h3>
          <Chart></Chart>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import Chart from '../components/Chart.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'DashboardPage',
  components: {
    HeaderComponent,
    Chart,
    Modal
  },
  data() {
    return {
      selectedProduct: '',
      productCurrentinView: {},

      avaliableProducts: [],

      showModal: false,
      modalType: '',
      modalProductId: null
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/produtos`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      this.avaliableProducts = data
    },

    openModalWithRequestType(productId, type) {
      this.modalProductId = productId
      this.modalType = type
      this.showModal = true
    },

    async getProductDetail(ProductId) {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/produtos/info?id=${ProductId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      console.log(data[0])
      this.productCurrentinView = data[0]
    }
  }
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

.sales-history-section {
  margin-top: 4.93rem;

  h3 {
    margin-bottom: 1.87rem;
  }
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

.dashboard-container {
  padding-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-content {
  max-width: 90rem;
  width: 100%;

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
        display: flex;
        justify-content: space-between;
        align-items: center;

        select {
          position: relative;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: transparent;
          border: none;
          outline: none;
          color: white;
          padding: 10px;
          width: 100%;
          cursor: pointer;
          border-bottom: 2px solid #666666;
          transition: 0.3s;
        }
        /* Estilize a borda inferior ao passar o mouse */
        select:hover {
          border-bottom: 2px solid #ffaa05; /* Altere a cor ao passar o mouse */
        }

        select option {
          background-color: #333; /* Cor de fundo escura para as opções */
          color: white; /* Cor do texto das opções */
        }

        /* Estilize as opções (menu suspenso) ao passar o mouse sobre elas */
        select option:hover {
          background-color: #555; /* Cor de fundo mais escura ao passar o mouse nas opções */
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

        font-size: 0.8rem;
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
