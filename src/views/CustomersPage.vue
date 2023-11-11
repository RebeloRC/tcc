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
            <select placeholder="Pesquisar Perfil">
              <option value="1">Cliente 1</option>
              <option value="2">Cliente 2</option>
              <option value="3">Cliente 3</option>
            </select>
          </div>
          <div class="buttons-container">
            <button class="btn-search"><i class="bi bi-search"></i></button>
            <button class="btn-delete"><i class="bi bi-x"></i></button>
          </div>
        </div>

        <div class="modal">
          <header class="modal-header">
            <h1>Teste</h1>
          </header>

          <section class="modal-body">
            <table class="custom-table">
              <thead>
                <tr style="font-size: 1.5rem">
                  <th>Cliente</th>
                  <th>Data de Compra</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in tableData" :key="index">
                  <tr class="teste" style="border-bottom: 2px solid #5b5b5b">
                    <td @click="toggleAccordion(item)">{{ item.cliente }}</td>
                    <td @click="toggleAccordion(item)">
                      {{ item.dataCompra }}
                    </td>
                    <td @click="toggleAccordion(item)">
                      {{ item.quantidade }}
                    </td>
                  </tr>
                  <tr v-if="item.showAssociatedProducts">
                    <td :colspan="3" style="background-color: #3c3c3c">
                      <h3 style="text-align: left">Produtos Associados</h3>
                      <table style="width: 100%">
                        <thead>
                          <tr>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Quantidade</th>
                          </tr>
                        </thead>
                        <tbody>
                          <template
                            v-for="(
                              associatedProduct, index
                            ) in item.associatedProducts"
                            :key="index"
                          >
                            <tr class="teste">
                              <td>{{ associatedProduct.nome }}</td>
                              <td>{{ associatedProduct.categoria }}</td>
                              <td>{{ associatedProduct.quantidade }}</td>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'CustomersPage',
  components: {
    HeaderComponent
  },
  data() {
    return {
      tableData: [
        {
          cliente: 'Cliente 1',
          dataCompra: '10/01/2023',
          quantidade: 5,
          showAssociatedProducts: false,
          associatedProducts: [
            { nome: 'Produto A', categoria: 'Categoria X', quantidade: 2 },
            { nome: 'Produto B', categoria: 'Categoria Y', quantidade: 3 }
          ]
        },
        {
          cliente: 'Cliente 2',
          dataCompra: '10/01/2023',
          quantidade: 5,
          showAssociatedProducts: false,
          associatedProducts: [
            { nome: 'Produto C', categoria: 'Categoria X', quantidade: 2 },
            { nome: 'Produto D', categoria: 'Categoria Y', quantidade: 3 }
          ]
        }
      ]
    }
  },
  methods: {
    toggleAccordion(product) {
      product.showAssociatedProducts = !product.showAssociatedProducts
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

    tbody .teste {
      transition: 0.3s;
    }

    tbody .teste:hover {
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
