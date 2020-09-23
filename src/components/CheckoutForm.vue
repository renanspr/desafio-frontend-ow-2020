<template>
  <div id="form" class="container">
    <form action="">
      <div id="form-line1" class="row mb-4">
        <div class="col-md-6">
          <label for="form-name">Nome*</label
          ><input
            v-model="name"
            id="form-name"
            name="name"
            type="text"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="cep">CEP*</label>
          <strong v-show="notFound">CEP não encontrado! </strong>
          <input
            v-on:keyup="searchCEP()"
            v-model="cep"
            v-mask="'#####-###'"
            id="cep"
            name="cep"
            type="text"
            maxlength="9"
            required
          />
        </div>
      </div>

      <div id="form-line2" class="row mb-4">
        <div class="col-md-6">
          <label for="email">E-mail*</label
          ><input
            v-model="email"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="street">Endereço*</label>
          <input
            v-model="adress.logradouro"
            id="street"
            name="street"
            type="text"
            required
          />
        </div>
        <div class="col-md-2">
          <label for="number">Número*</label>
          <input
            v-model="number"
            id="number"
            name="number"
            type="number"
            required
          />
        </div>
      </div>

      <div id="form-line3" class="row mb-4">
        <div class="col-md-6">
          <label for="cpf">CPF*</label
          ><input
            v-model="cpf"
            v-mask="'###.###.###-##'"
            id="cpf"
            name="cpf"
            type="text"
            maxlength="14"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="complement">Complemento*</label
          ><input id="complement" name="complement" type="text" />
        </div>
        <div class="col-md-3">
          <label for="neighborhood">Bairro*</label>
          <input
            v-model="adress.bairro"
            id="neighborhood"
            name="neighborhood"
            type="text"
            required
          />
        </div>
      </div>

      <div id="form-line4" class="row mb-4">
        <div class="col-md-3">
          <label for="bday">Data de Nascimento*</label
          ><input
            v-model="bday"
            v-mask="'##/##/####'"
            id="bday"
            name="bday"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="phone">Telefone*</label
          ><input
            v-model="phone"
            v-mask="'(##) # ####-####'"
            id="phone"
            name="phone"
            type="text"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="city">Cidade*</label>
          <input
            v-model="adress.localidade"
            id="city"
            name="city"
            type="text"
            required
          />
        </div>
        <div class="col-md-2">
          <label for="state">Estado*</label
          ><input
            v-model="adress.uf"
            id="state"
            name="state"
            type="text"
            required
          />
        </div>
      </div>

      <!-- BUTTON -->
      <div id="form-button" class="row mt-5">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-2"></div>
        <div id="complete-purchase-form" class="col-4">
          <!-- MODAL BUTTON -->
          <label class="complete-purchase-form" for="input-modal"
            ><p class="text-center">Concluir compra</p></label
          >
          <input class="checker" type="checkbox" id="input-modal" hidden />
          <div class="modal">
            <div class="modal-body">
              <label for="input-modal">X</label>
              <div>
                <img src="../assets/resourcesmin/icons/check-mark.png" alt="" />
                <p>Seu cadastro foi solicitado com sucesso!</p>
                <div>
                  <img
                    src="../assets/resourcesmin/icons/left-arrow.svg"
                    alt=""
                  />
                  <a href="/">VOLTAR PARA HOME</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VueMask from "v-mask";
import axios from "axios";

Vue.use(VueMask, axios);

export default {
  name: "CheckoutForm",

  data() {
    return {
      name: "",
      cep: "",
      email: "",
      number: "",
      cpf: "",
      bday: "",
      phone: "",
      adress: {},
    };
  },

  methods: {
    searchCEP: function() {
      if (this.cep.length == 9) {
        axios
          .get(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then((response) => {
            this.adress = response.data;
            console.log(this.adress);
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/sass/index.scss";
</style>
