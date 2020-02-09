<template>
<Layout>
    <br><br>
   
    <v-container>
    <v-row>
      <v-icon color="teal" size="40">mdi-account-box</v-icon>
    <h2 class="primary--text">{{ title }} </h2>
     
         
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
       <v-text-field
            :label="nameTitle"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="3">
       <v-text-field
            :label="emailTitle"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row justilfy="center">
      <div class="my-2 mx-4">
        <v-btn depressed large color="secondary primary--text">سجل</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed large color="error">إلغاء</v-btn>
      </div>
    </v-row>
   
    </v-container>
 </Layout>
</template>

<script>


  export default {
    data () {
      return {
        title: 'تسجيل الدخول',
        name: '',
        nameTitle: 'الإسم بالكامل',
        email: '',
        emailTitle: 'البريد الإلكترونى'
      
      }
    },
    components: {
    
    }
  }
</script>