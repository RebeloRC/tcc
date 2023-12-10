<template>
  <div>
    <HeaderComponent />

    <div class="customers-page-container">
      <div class="customers-page-content">
        <h1 class="title">Segmentação por clientes</h1>
        <div class="filter-section">
          <div class="filter-container">
            <h3>Selecione o perfil:</h3>
            <div class="divider"></div>
            <select v-model="categoryFilter" placeholder="Pesquisar Perfil">
              <option value="" selected disabled>
                <i>Selecione uma categoria</i>
              </option>
              <option value="Informatica">Informatica</option>
              <option value="Calcados">Calcados</option>
              <option value="Livros">Livros</option>
              <option value="Decoracao">Decoração</option>
            </select>
          </div>
          <div class="buttons-container">
            <button
              class="btn-search"
              @click="filterCustomersByCategory(categoryFilter)"
            >
              <i class="bi bi-search"></i>
            </button>
            <button class="btn-delete" @click="clearFilter()">
              <i class="bi bi-x"></i>
            </button>
          </div>
        </div>

        <div class="modal">
          <header class="modal-header">
            <h1>Clientes</h1>
          </header>

          <template v-if="loadingData">
            <DefaultSpinnerVue />
          </template>
          <template v-else>
            <section class="modal-body">
              <table class="custom-table">
                <thead>
                  <tr style="font-size: 1.5rem">
                    <th>Cliente</th>
                    <th>Perfil do cliente</th>
                    <th>Idade</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(customer, index) in customers" :key="index">
                    <tr
                      class="table-body"
                      style="border-bottom: 2px solid #5b5b5b"
                    >
                      <td @click="toggleAccordion(customer)">
                        {{ customer.cliente_nome }}
                      </td>
                      <td @click="toggleAccordion(customer)">
                        {{ customer.cliente_cluster }}
                      </td>
                      <td @click="toggleAccordion(customer)">
                        {{ customer.cliente_idade }}
                      </td>
                    </tr>
                    <tr v-if="customer.open">
                      <td :colspan="3" style="background-color: #3c3c3c">
                        <h3 style="text-align: left">Histórico de compras</h3>
                        <table style="width: 100%">
                          <thead>
                            <tr>
                              <th>Produto</th>
                              <th>Preço</th>
                              <th>Data</th>
                            </tr>
                          </thead>
                          <tbody>
                            <template
                              v-for="(
                                associatedProduct, index
                              ) in customer.compras"
                              :key="index"
                            >
                              <tr class="table-body">
                                <td>{{ associatedProduct.produto_nome }}</td>
                                <td>R${{ associatedProduct.produto_preco }}</td>
                                <td>
                                  {{
                                    formatarDataVenda(
                                      associatedProduct.data_compra
                                    )
                                  }}
                                </td>
                              </tr>
                            </template>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </section>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateDefaultFormatWithoutTime } from '../utils/dateUtils'

import HeaderComponent from '../components/HeaderComponent.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DefaultSpinnerVue from '../components/spinners/DefaultSpinner.vue'

export default {
  name: 'CustomersPage',
  components: {
    HeaderComponent,
    DefaultSpinnerVue
  },
  data() {
    return {
      loadingData: true,
      customers: [],

      categoryFilter: ''
    }
  },
  mounted() {
    this.getAllCustomers()
  },
  methods: {
    formatarDataVenda(dataString) {
      return dateDefaultFormatWithoutTime(dataString)
    },

    clearFilter() {
      this.categoryFilter = ''
      this.getAllCustomers()
    },

    async filterCustomersByCategory(category) {
      try {
        this.loadingData = true

        const response = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/clientes/segmentacao?segmento=${category}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const data = await response.json()
        this.customers = data
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingData = false
      }
    },

    toggleAccordion(product) {
      product.open = !product.open
    },

    async getAllCustomers() {
      try {
        this.loadingData = true

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/clientes/segmentacao`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        const data = await response.json()
        this.customers = data
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingData = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons-container {
  .btn-search {
    width: 3rem;
    height: 3rem;

    margin-left: 0.5rem;

    border-radius: 10px;

    background-color: #ffaa05;

    text-align: center;

    i {
      font-size: 1rem;
    }
  }

  .btn-delete {
    width: 3rem;
    height: 3rem;

    margin-left: 0.3rem;

    border-radius: 10px;

    background-color: #ff0000;

    text-align: center;

    i {
      font-size: 1rem;
    }
  }
}

.filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50%;
  height: 4rem;

  padding: 0 2rem;

  background-color: #494949;
  border-radius: 15px;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .divider {
    background-color: #666666;

    width: 1px;
    height: 40px;
  }

  select {
    color: #fff;

    background-color: #494949;

    width: 20rem;
    height: 3rem;

    border-radius: 10px;
    border: none;

    padding: 0 1rem;

    font-size: 1.2rem;
    font-weight: 600;
  }
}

.customers-page-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.customers-page-content {
  max-width: 90rem;
  width: 100%;

  margin-top: 5rem;
  padding: 0 2rem;

  .title {
    width: 300px;
    font-size: 3rem;
  }

  .filter-section {
    display: flex;
    align-items: center;

    margin-top: 2rem;
  }
}

.modal {
  background: #494949;
  margin-top: 2rem;
  height: 80vh;
  padding: 3rem 4rem;
  border-radius: 15px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.modal-header {
  position: relative;
  margin-bottom: 1.5rem;
  justify-content: space-between;

  h1 {
    color: #939393;
  }
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;

  .custom-table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;

    th {
      border-bottom: 3px solid #6c6c6c;
      color: #fff;
      padding: 10px;
      font-weight: bold;
    }

    th,
    td {
      font-size: 1.2rem;
      text-align: center;
      padding: 10px;
    }

    tbody .table-body {
      transition: 0.3s;
    }

    tbody .table-body:hover {
      background-color: #5b5b5b;
    }
  }
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
