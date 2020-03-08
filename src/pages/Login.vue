<template>
<Layout>
    <br><br><br><br>
   
    <v-container>
    <v-row>
      <v-icon color="teal" size="40">mdi-account-box</v-icon>
    <h2 class="primary--text">{{ title }} </h2>
     
         
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
       <v-text-field
            :label="nameTitle"
            :rules="[rules.required]"
            v-model="name"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="3">
       <v-text-field
            :label="companyTitle"
            :rules="[rules.required]"
            v-model="company"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="3">
       <v-text-field
            :label="emailTitle"
            v-model="email"
            :rules="[rules.required, rules.email]"
            outlined
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          outlined
          name="input-7-1"
          label="إستفسارك"
          v-model="text"
          :rules="[rules.required]"
          hint="كيفية توفير النقدية بإستمرار؟"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row justilfy="center">
      <div class="my-2 mx-4">
        
        <v-btn 
          :disabled="isSending"
          depressed large color="secondary primary--text"
          @click="sendMessage"
        >
          <span v-if="isSending">
            <v-icon class="purple--text">mdi-selection-ellipse mdi-spin</v-icon>
          </span>
          <span v-else>
          سجل
          </span>
        </v-btn>
      </div>
      <div class="my-2">
        <v-btn 
          :disabled="isSending"
          depressed large color="error" to="/">إلغاء</v-btn>
      </div>
    </v-row>
   
    </v-container>
 </Layout>
</template>

<script>


  export default {
    data () {
      return {
        isSending: false,
        title: 'تسجيل إستشارة ',
        name: '',
        nameTitle: 'الإسم بالكامل',
        email: '',
        emailTitle: 'البريد الإلكترونى',
        companyTitle: 'إسم الشركة',
        text: '',
        company: '',
        rules: {
          required: value => !!value || 'مطلوب',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'خطأ'
          }
        }
      }
    },
    methods: {
      sendMessage() {
        this.isSending = true
        const cloudFunc = 'https://us-central1-bestakt-v1-0.cloudfunctions.net/bestakt_contact_email'
        const req = {
          to: 'client@bestakt.com',
          subject: 'Consultancy request',
          text: `
          from: ${this.name} \n
          company: ${this.company} \n
          email: ${this.email} \n
          message: ${this.text}
          `
        }
        fetch(cloudFunc, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(req) // body data type must match "Content-Type" header
        })
        .then( res => res.json() )
        .then (data => {
          alert( 'تم إرسال إستفسارك بنجاح وسيتم التواصل معكم خلال 24 ساعة' )
          this.$router.push( '/' )
          
          } )
      }
    },
    components: {
    
    }
  }
</script>