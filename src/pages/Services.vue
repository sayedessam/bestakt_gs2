<template>
<Layout>
    <br><br>
   
    <v-container>
      <v-row>
        <v-icon color="teal" size="40">mdi-briefcase-upload</v-icon>
        <h1 class="primary--text">{{ title }} </h1>   
      </v-row>
      <br>
      <v-row>
        <h3 class="accent">
          <strong>
          الخطوة الأولى: وضع إجراءات وسياسات وصلاحيات واضحة لتنظيم العمل
          </strong>
        </h3>
        <p class="primary--text">
          50% خصم خاص حتى نهاية شهر مارس 2020 على الإجراءات والسياسات 1000 دولار أمريكى فقط بدلاً من 
        <strike>2000 دولار أمريكى</strike>
        </p>
      </v-row>
      <br>
      <h3 class="accent">
          <strong>
          الخطوة الثانيه: إختيار الخدمات التى تناسبك
          </strong>
        </h3>
      <ul v-for="(n,i) in items" :key="i" class="services">
        <li class="ma-1">
          <v-row align-sm="center" justify="space-between">

          
          <v-switch
            v-model="sw"
          ></v-switch>
          
           <span style="text-indent: 30px;">
          {{itemsList[0].price}} - </span>
          <strong class="primary--text">
            {{ n }}
          </strong>
          <v-btn small color="teal white--text" class="ml-2" to="/docs/serv001">
            إقرأ المزيد
          </v-btn >
          
           </v-row>
           <hr>
        </li>
      </ul>
      <br>
      
      <br>
      <h2 class="text-center primary--text" style="width: 80%; margin: 0 auto; line-height: 2.5; border: 1px solid purple; border-radius: 10px; background: #9effff;">
      الإحترافية - السرعة - الدقة - أسعار في المتناول
      </h2>
    </v-container>
 </Layout>
</template>

<script>


  export default {
    data () {
      return {
        title: 'الخدمات',
        itemsList: [
          { name:'المشتريات', price: '100 دولار أمريكى / شهر', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: '', price: '', text: ''},
          { name: 'الإجراءات والسياسات', price: '', text: ''},


        ],
         items: [
        'المشتريات',
        'مراقبة المخزون',
        'إصدار فواتير العملاء',
        'المحاسبة',
        'إدارة النقد والحسابات البنكية',
        'إصدار القوائم المالية',
        'التقارير الإدارية',
        'الموازنات التقديرية',
        'دراسات جدوى المشروعات',
        'المرتبات',
        'مؤشرات قياس الأداء',
        'القروض البنكية'
      ]
       
      
      }
    },
    components: {
    
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>