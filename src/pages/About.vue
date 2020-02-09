<template>
  <Layout>
    <v-card color="accent about">
      <v-container>
        
         <v-card-title>
           <h1 class= "primary--text">
            عنا
            </h1>
         </v-card-title>
         <v-card-text>
          <p>
                نحن نساعد الشركات التجارية فى المنطقة العربية على النمو وتوفير المصروفات التشغيلية والوقت المطلوب للتركيز على النمو فى الأغراض الأساسية للأعمال.

          خبراء بست تاكت والمؤسسين مجموعة من المدراء التنفيذيين كانوا يعملون بشركات متعددة الجنسيات وشركات كبرى بمنطقة الخليج العربي وشمال إفريقيا
          نحن فى خدمة الشركات التجارية للاستعانة بمصادر خارجية في مجالات مختلفة منها:



              </p>
              <ul v-for="(n,i) in items" :key="i" class="services">
                <li>{{ n }} </li>
              </ul>
              <br>
              <hr>
              <br>
               <h2 class="text-center primary--text">
     الإحترافية - السرعة - الدقة - أسعار في المتناول
   </h2>
            
         </v-card-text>
     
    
      </v-container>
    </v-card>
   
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  data() {
    return {
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
        'الإجراءات والسياسات'
      ]
    }
  }
}
</script>

<style>
  .about {
    margin-top: 60px;
  }

  .services {
    margin-right: 60px;
  }
</style>