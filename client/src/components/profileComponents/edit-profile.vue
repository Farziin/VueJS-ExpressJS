<template>
  <div class="root">
    <div class="edit-phone" v-if="show">
      <b-form>
        <b-card>
          <b-form-group bg-variant="light" breakpoint="lg" label="شماره همراه"
                        label-size="lg" label-class="font-weight-bold pt-0" class="title">
          </b-form-group>
          <b-form-input id="phone-number" class="inputs" v-model="phoneNumber" required placeholder="شماره همراه خود را وارد کنید">
          </b-form-input>
          <b-button type="submit" variant="success" class="submit-phone-btn">ذخیره شماره تماس</b-button>
        </b-card>
      </b-form>
    </div>
    <div class="edit-profile-div">
      <b-form>
        <b-card class="edit-profile-card">
          <b-form-group bg-variant="light" breakpoint="lg" label="ویرایش اطلاعات کاربری"
                        label-size="lg" label-class="font-weight-bold pt-0" class="title">
          </b-form-group>
          <b-form-group id="name-label" label="نام" label-for="name-input" class="labels">
            <b-form-input id="name-input" type="text" v-model="form.name" class="inputs" required></b-form-input>
          </b-form-group>

          <b-form-group id="family-label" label="نام‌خانوادگی" label-for="family-input" class="labels">
            <b-form-input id="family-input" type="text" v-model="form.family" class="inputs" required></b-form-input>
          </b-form-group>

          <b-form-group id="alias-name-label" label="نام مستعار" label-for="alias-name-input" class="labels">
            <b-form-input id="alias-name-input" type="text" v-model="form.aliasName" class="inputs" required></b-form-input>
          </b-form-group>

          <b-form-group id="email-label" label="ایمیل (نام کاربری)" label-for="email-input" class="labels">
            <b-form-input id="email-input" type="email" v-model="form.email" class="inputs" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success" class="update-profile-btn">به روز رسانی</b-button>
        </b-card>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-profile',
  data () {
    return {
      show: true,
      phoneNumber: '',
      form: {
        name: '',
        family: '',
        aliasName: '',
        email: ''
      }
    }
  }
}
</script>

<style scoped>

  .submit-phone-btn {
    margin-top: 20px;
    float: right;
    width: 15%;
  }

  .title {
    float: right;
    color: #8d8d8d;
  }

  #phone-number {
    clear: right;
    width: 40%;
  }

  .edit-profile-div {
    margin-top: 70px;
  }

  .labels {
    clear: both;
    text-align: right;
    margin: 45px 0;

  }
  .inputs {
    width: 40%;
    background-color: #f8f8f8;
  }

  .update-profile-btn {
    float: right;
    width: 15%;
  }
</style>
