<template>
  <transition v-if="showModal" style="z-index: 999" name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" style="overflow: auto">
        <header class="modal-header">
          <h1>{{ modalType }}</h1>
          <button type="button" class="btn-close" @click="closeModal()">
            x
          </button>
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
              <template v-for="(sale, index) in sales" :key="index">
                <tr class="teste" style="border-bottom: 2px solid #5b5b5b">
                  <td @click="toggleAccordion(item)">
                    {{ sale.nome_cliente }}
                  </td>
                  <td @click="toggleAccordion(item)">{{ sale.data_venda }}</td>
                  <td @click="toggleAccordion(item)">
                    {{ sale.produtos_comprados_junto.length }}
                  </td>
                </tr>
                <tr v-if="sale.produtos_comprados_junto">
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
                          ) in sale.produtos_comprados_junto"
                          :key="index"
                        >
                          <tr class="teste">
                            <td>{{ associatedProduct.produto_comprado }}</td>
                            <td>{{ associatedProduct.categoria_comprada }}</td>
                            <td>{{ associatedProduct.preco_comprado }}</td>
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

        <!-- <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
          <button type="button" class="btn-green" @click="closeModal()">
            Close Modal
          </button>
        </footer> -->
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    showModal: Boolean,
    modalType: String,
    modalProductId: Number
  },
  data() {
    return {
      sales: [],

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
  watch: {
    showModal(newVal) {
      if (newVal) {
        this.getSales(this.modalProductId, this.modalType)
      }
    }
  },
  methods: {
    toggleAccordion(product) {
      product.showAssociatedProducts = !product.showAssociatedProducts
    },

    closeModal() {
      this.$emit('close-modal')
      console.log('Fechou!')
    },

    async getSales(producId, paymentMethod) {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/produtos/info/vendas?id=${producId}&type=${paymentMethod}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      this.sales = data
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #494949;
  width: 80vw;
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

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

/* Ocultar a barra de rolagem por padrão */
::-webkit-scrollbar {
  width: 0;
}

/* Quando o usuário rolar, a barra de rolagem aparecerá */
::-webkit-scrollbar-thumb {
  background: #888; /* Cor da barra de rolagem */
  width: 12px; /* Largura da barra de rolagem quando visível */
}

/* Estilização da barra de rolagem para navegadores Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}
</style>
