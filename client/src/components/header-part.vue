<template>
  <div class="container">
    <div class="row col-sm-12">
      <!-- <script src="https://use.fontawesome.com/008cd32a02.js"></script> -->
      <div class="col-sm-7 float-right">
        <b-button id="login-btn">ورود / عضویت</b-button>
        <b-button id="reg-btn" v-html="regIcon">
        </b-button>
      </div>
      <div id="search-bar" class="col-sm-5">
        <input type="text" id="text-field" placeholder="جستجوی فیلم، سریال، بازیگر، کارگردان و ..."
               v-model="searchText" v-on:keyup.enter="search(searchText)"/>
        <span @click="search(searchText)" v-html="searchIcon" class="search-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header-part',
  data () {
    return {
      regIcon: '<i class="fa fa-id-card" aria-hidden="true"></i>',
      searchIcon: '<i class="fa fa-search" aria-hidden="true"></i>',
      searchText: ''
    }
  },
  methods: {
    search (text) {
      this.$router.push('/search-result/' + text)
      this.$router.forward()
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('~/assets/fonts/IRANSansWeb.ttf')
  }

  * {
    font-family: IRANSansWeb;
    direction: rtl;
  }

  .row {
    margin-top: 20px;
  }

  .float-right {
    display: flex;
    float: right;
  }

  #login-btn {
    color: #3b79ff;
    border: 1px solid #3b79ff;
    background-color: white;
    border-radius: 6px;
    display: inline-block;
    padding: 11px 8px;
  }

  #login-btn:hover {
    background-color: #3b79ff;
    color: white;
    transition: 0.5s;
  }

  #reg-btn {
    display: flex;
    align-items: center;
    color: white;
    background-color: #3b79ff;
    border: 1px solid #3b79ff;
    font-size: 20px;
    border-radius: 50%;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: 10px;
  }

  #reg-btn:hover {
    color: #3b79ff;
    background-color: white;
    transition: 0.5s;
  }

  #search-bar {
    display: flex;
    margin-right: auto;
    border-radius: 13px;
    border: white;
    background: #d9d9d9;
    outline: none;
    float: left;
  }

  #text-field {
    width: 75%;
    border-radius: 13px;
    border: white;
    background: #d9d9d9;
    outline: none;
    float: left;
    padding: 13px 8px;
  }

  .search-icon {
    color: gray;
    float: left;
    font-size: 30px;
    padding: 8px 8px;
    margin-right: auto;
  }

</style>
