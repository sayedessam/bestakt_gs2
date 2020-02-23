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
              <span
              v-for="(n,i) in icons" :key="i"
              class="mx-1"
              >
                <v-icon color="purple">
                  {{ n }}
                </v-icon>
              </span>
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
        'مؤشرات قياس أداء الشركة أو المشروع',
        'الموازنات التقديرية',
        'المشتريات',
        'مراقبة المخزون',
        'إصدار فواتير العملاء',
        'المحاسبة بنظام المعايير الدولية وإمساك الدفاتر',
        'إدارة النقد والحسابات البنكية',
        'إصدار القوائم المالية',
        'التقارير الإدارية',
        'تقييم المخاطر وكيفية مواجهتها',
        ' المرتبات وسجلات العاملين',
        'الإجراءات والسياسات'
      ],
      icons:
      [
        'mdi-briefcase-account',
        'mdi-bugle',
        'mdi-chart-bar',
        'mdi-city-variant-outline',
        'mdi-chart-bell-curve',
        'mdi-chart-line',
        'mdi-cart-plus',
        'mdi-calendar-account',
        'mdi-bookshelf',
        'mdi-chart-bar',
        'mdi-truck-fast',
        'mdi-truck-outline',
        'mdi-tablet-ipad',
        'mdi-head-cog-outline',
        'mdi-glasses',
        'mdi-gauge',
        'mdi-doctor',
        'mdi-cancel',
        'mdi-do-not-disturb',
        'mdi-baby-face'
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