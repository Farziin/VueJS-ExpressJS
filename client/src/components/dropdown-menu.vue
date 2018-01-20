<template>
  <b-navbar toggleable="md" variant="light" class="margin">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto container">
        <b-nav-item-dropdown class="dropdown-btn" text="آخرین‌ها" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="فیلم" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="سریال" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="انیمیشن" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="مستند" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="مجموعه‌ها" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="انیمه" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="دوبله" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="زیک‌زاک" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="باکس‌آفیس" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="آنونس" variant="gray"></b-nav-item-dropdown>
        <b-nav-item-dropdown class="dropdown-btn" text="بهترین‌ها" variant="gray"></b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {
  name: 'dropdown-menu'
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

  .dropdown-btn {
    margin-right: 15px;
  }

  .margin {
    margin-top: 20px;
  }
</style>
