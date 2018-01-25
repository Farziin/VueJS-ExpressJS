<template>
  <div class="root">
    <b-form @submit="onSubmit">
      <b-card class="edit-profile-card">
        <b-form-group bg-variant="light" breakpoint="lg" label="آپلود فیلم"
                      label-size="lg" label-class="font-weight-bold pt-0" class="title">
        </b-form-group>
        <b-form-group id="id-label" label="شناسه فیلم" label-for="id-input" class="labels">
          <b-form-input id="id-input" type="number" v-model="form._id" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="name-label" label="نام فیلم" label-for="name-input" class="labels">
          <b-form-input id="name-input" type="text" v-model="form.name" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="length-label" label="زمان فیلم" label-for="length-input" class="labels">
          <b-form-input id="length-input" type="text" v-model="form.length" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="year-label" label="سال انتشار" label-for="year-input" class="labels">
          <b-form-input id="year-input" type="text" v-model="form.year" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="countries-label" label="کشورهای تولیدکننده" label-for="countries-input" class="labels">
          <b-form-input id="countries-input" type="text" v-model="form.country" class="inputs"
                        required></b-form-input>
        </b-form-group>

        <b-form-group id="desc-label" label="توضیحات" label-for="desc-input" class="labels">
          <b-form-input id="desc-input" type="text" v-model="form.description" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="director-label" label="کارگردان" label-for="director-input" class="labels">
          <b-form-input id="director-input" type="text" v-model="form.director" class="inputs"
                        required></b-form-input>
        </b-form-group>

        <b-form-group id="writer-label" label="نویسندگان" label-for="writer-input" class="labels">
          <b-form-input id="writer-input" type="text" v-model="form.writer" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="stars-label" label="ستارگان" label-for="stars-input" class="labels">
          <b-form-input id="stars-input" type="text" v-model="form.stars" class="inputs" required></b-form-input>
        </b-form-group>

        <b-form-group id="category-label" label="دسته فیلم" label-for="category-input" class="labels">
          <b-form-input id="category-input" type="text" v-model="form.category" class="inputs"
                        required></b-form-input>
        </b-form-group>

        <b-form-group id="cover-label" label="کاور فیلم" label-for="cover-input" class="labels">
          <b-form-file id="cover-input" v-model="form.coverFile" :state="Boolean(form.coverFile)"
                       placeholder=" "></b-form-file>
        </b-form-group>

        <b-form-group id="movie-label" label="فیلم" label-for="movie-input" class="labels">
          <b-form-file id="movie-input" v-model="form.movie" :state="Boolean(form.movie)"
                       placeholder=" "></b-form-file>
        </b-form-group>

        <b-button type="submit" variant="success" class="update-profile-btn">آپلود</b-button>
      </b-card>
    </b-form>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'upload',
  data () {
    return {
      form: {
        _id: '',
        name: '',
        length: '',
        year: '',
        country: '',
        description: '',
        director: '',
        writer: '',
        stars: '',
        category: '',
        coverFile: '',
        movie: ''
      }
    }
  },
  methods: {
    onSubmit () {
      var self = this
      api().get('/movie/' + this.form._id + '/details')
        .then(function (response) {
          console.log(response)
          var formData = new FormData()
          formData.append('_id', self.form._id)
          formData.append('name', self.form.name)
          formData.append('length', self.form.length)
          formData.append('year', self.form.year)
          formData.append('country', self.form.country)
          formData.append('description', self.form.description)
          formData.append('director', self.form.director)
          formData.append('writer', self.form.writer)
          formData.append('stars', self.form.stars)
          formData.append('category', self.form.category)
          formData.append('coverFile', self.form.coverFile)
          formData.append('movie', self.form.movie)
          if (response.data === '') {
            console.log('YES')
            api().post('/submit', formData)
              .then(function (response) {
                console.log('MOVIE UPLOADED ', response)
              })
              .catch(function (error) {
                console.log('ERROR IN UPLOADING MOVIE OCCURRED ', error)
              })
          } else {
            console.log('ID EXIST')
          }
        })
        .catch(function (error) {
          console.log('ERROR IN UPLOADING MOVIE OCCURRED ', error)
        })
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: IRANSansWeb;
    src: url('../assets/fonts/IRANSansWeb(FaNum)_0.ttf')
  }

  * {
    font-family: IRANSansWeb;
    direction: rtl;
  }

  #cover-label, #movie-label {
    width: 40%;
  }

  .title {
    float: right;
    color: #8d8d8d;
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

  .edit-profile-card {
    margin: 30px;
  }
</style>
