<template>
  <div>
    <div class="container">
      <a href="#" class="link">درخواست فیلم</a> | <a href="#" class="link">اشتراک ویژه</a> |
      <a href="#" class="link">باکس آفیس</a> | <a href="#" class="link">نرم‌افزار‌های موردنیاز</a> |
      <a href="#" class="link">پرسش‌های متداول</a> | <a href="#" class="link">درباره ما</a> |
      <a href="#" class="link">تماس با ما</a>
    </div>
    <div class="container col-sm-12 bottom-footer">
      <div class="col-sm-5 right-col">
        <div class="footer-banner">
          محتوای این سایت مطابق با فرهنگ خانواده‌های ایرانی می‌باشد.
        </div>
        <div class="social-networks">
                    <span class="social-networks-title">
                        ایران فیلم در شبکه‌های اجتماعی
                    </span>
          <div class="row">
            <b-button class="social-networks-button" v-html="googlePlusIcon"></b-button>
            <b-button class="social-networks-button" v-html="instagramIcon"></b-button>
            <b-button class="social-networks-button" v-html="telegramIcon"></b-button>
            <b-button class="social-networks-button" v-html="twitterIcon"></b-button>
          </div>
        </div>
      </div>
      <div class="col-sm-7 description">
        مجموعه‌ی دیتابیس فیلم امیرکبیر، با هدف ایجاد یک تجربه‌ی مشترک آموزشی و تفریحی برای دانشجویان دانشگاه صنعتی
        امیرکبیر ایجاد شده و هیچ‌گونه استفاده تجاری ندارد. در صورتی‌که از این سایت و امکانات آن لذت می‌برید، آن را
        به دوستان خود هم معرفی کنید
      </div>
    </div>

    <hr class="footer-line"/>
    <div class="copyright">
      &copy; تمامی حقوق این وب‌سایت متعلق به دیتابیس فیلم امیرکبیر می‌باشد.
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-part',
  data () {
    return {
      googlePlusIcon: '<i class="fa fa-google" aria-hidden="true"></i>',
      instagramIcon: '<i class="fa fa-instagram" aria-hidden="true"></i>',
      telegramIcon: '<i class="fa fa-telegram" aria-hidden="true"></i>',
      twitterIcon: '<i class="fa fa-twitter" aria-hidden="true"></i>'
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('~/assets/fonts/IRANSansWeb(FaNum)_0.ttf')
  }

  * {
    font-family: IRANSansWeb;
    direction: rtl;
  }

  .row {
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  }

  .bottom-footer {
    margin-top: 30px;
  }

  .link {
    color: black;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
    text-decoration: none;
  }

  .link:hover {
    color: #3b79ff;
  }

  .description {
    display: flex;
    align-items: center;
    text-align: right;
    font-size: 18px;
  }

  .footer-banner {
    border: 2px solid #575757;
    color: #575757;
    border-radius: 6px;
    display: flex;
    text-align: center;
    font-size: 18px;
    width: 300px;
    padding: 15px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .footer-banner:hover {
    transition: 0.5s;
    background-color: #3b79ff;
    color: white;
    border: 2px solid #3b79ff;
  }

  .social-networks-title {
    text-align: right;
    font-size: 25px;
    color: #a6a9b2;
  }

  .social-networks-button {
    border-radius: 50%;
    border: 2px solid black;
    color: black;
    background-color: transparent;
    padding: 15px;
    margin: 10px;
    display: flex;
    justify-content: center;
    font-size: 25px;
  }

  .social-networks-button:hover {
    background-color: black;
    color: white;
    border: 2px solid black;
  }

  .right-col {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .footer-line {
    background-color: #3b79ff;
    height: 1px;
    border: none;
    margin: 10px 15px;
  }

  .copyright {
    font-size: 15px;
    color: #3b79ff;
    text-align: center;
    margin-bottom: 15px;
  }
</style>
