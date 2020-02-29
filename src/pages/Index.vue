<template>
  <Layout>
  
    <!-- Header - CTA -->
    <br><br>
    <v-content>
    <v-parallax
    
    :src="require('~/assets/img/man-office.jpg')"
    height="600"
  >
    <v-row
      align="center"
      justify="center"
      style="background-color: rgba(0,0,0,.4);"
      
    >
      <v-col class="text-center" cols="12">
        <h1 class="" style="position: relative; z-index: 99;">
      بست تاكت أفضل موقع إستعانة بمصادر خارجية فى المنطقة العربية    
        </h1>
        <!-- <g-image alt="Example image" src="~/assets/img/cycles.png" style= "width:70%; max-width: 700px; margin-top: -15%; position: relative; z-index: 1;" /> -->
        <br><br><br>
        <h2 class="mt-12 pb-6 subheading">
      الإحترافية - السرعة - الدقة - أسعار في المتناول     
          
          </h2>
           <v-btn color="accent purple--text" width="280px" 
            to="/login"
            large
            rounded
            elevation="3"
            height="60"
            class="mt-10"
            >
            <v-icon left large class="ml-4"
              
            
            >mdi-head-snowflake-outline</v-icon>
            <span  style="font-size: 24px; font-weight: bolder;">
                إستشارة مجانية
            </span>
            
          </v-btn>  
    <!-- style="font-size: 12px; font-weight: bold;" -->
       
      </v-col>
    </v-row>
  </v-parallax>
</v-content>


<!-- Key benefits -->
  <v-row>
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
        >

        <v-card
        class="ma-6 pa-4"
          
            flat
            height="300"
            width="300"
        >
        <v-card-text>
        <v-icon class="teal--text"
          style="font-size:80px;"
          >mdi-account-tie</v-icon>
          
        </v-card-text>
        <v-card-title 
        class="purple--text text-center"
          style="font-size: 24px; font-weight: bolder;"
        >
          الإحترافية
        </v-card-title>
        <v-card-text style="font-size: 16px; font-weight: bold;">
          إدارة متكاملة تحت إشراف خبراء فى منطقة الخليج العربى وشمال إفريقيا لأكثر من 30 عاماً وهم فى خدمتك فى أى وقت
        </v-card-text>
         </v-card>

        <v-card
        class="ma-6 pa-4"
            flat
            height="300"
            width="300"
        >
        <v-card-text >
        <v-icon class="teal--text"
          style="font-size:80px;"
        >mdi-speedometer</v-icon>
        </v-card-text>
        <v-card-title 
          class="purple--text"
          style="font-size: 24px; font-weight: bolder;">
          السرعة والدقة
        </v-card-title>
        <v-card-text style="font-size: 16px; font-weight: bold;">
          نحن نقوم بتقديم خدماتنا بدقة وبسرعة عن طريق أنظمة وبرامج حديثة وأخصائيين مدربين لتوفر وقتك للتركيز على نمو أعمالك
        </v-card-text>
         </v-card>

        <v-card
        class="ma-6 pa-4"
            
            flat
            height="300"
            width="300"
        >
        <v-card-text>
        <v-icon class="teal--text"
          style="font-size:80px;"
          >mdi-cash-multiple</v-icon>
        </v-card-text>
        <v-card-title 
        class="purple--text"
          style="font-size: 24px; font-weight: bolder;"
        >
          أسعار فى المتناول
        </v-card-title>
        <v-card-text style="font-size: 16px; font-weight: bold;">
          توفير أكثر من 30% من مصروفات إدارة المشتريات وشئون الموظفين والمالية ومراقبة المخزون وطلب الخدمات حسب حجم العمل.
        </v-card-text>
         </v-card>
        </v-row>
      </v-col>
    </v-row>

 <!-- Discount CTA  -->
    <v-content>
    <v-parallax
      :src="require('~/assets/img/man-office.jpg')"
      height="200"
    >
    <v-row
      align="center"
      justify="center"
      style="background-color: rgba(0,0,0,.4);"
    >
      <v-col class="text-center" cols="12">
        <h1 class="mb-5" >
          خصم 30% لمدة محدودة
        </h1>
      
        <v-btn color="accent purple--text" width="250px" 
           style="font-size: 24px; font-weight: bold;"
           large
           rounded
           elevation="3"
           height="60"
           to="/login"
            >
            <v-icon left class="ml-4"
              
            >mdi-account-plus-outline</v-icon>
            إشترك الآن
          </v-btn> 
      </v-col>
    </v-row>
  </v-parallax>
</v-content>




<!-- our staff -->
  <v-container>
    <v-row>
      <v-col cols=12>
        <v-row
          justify="center"
          align="center" 
        >
        <g-image alt="Outsourcing مصادر خارجية" src="~/assets/img/Outsourcing.png" fit="inside" height="120"  />
        <h3 class="purple--text">
          لدينا محترفون فى مجالات الصحة والتعليم وتجارة التجزئة والجملة والمقاولات والنقل والفنادق
        </h3>
        </v-row>
        <v-row
          justify="center"
          align="center" 
        >
        
          <g-image alt="Example image" src="~/assets/img/staff.jpg" height="200" style="max-width:100%" />        
        </v-row>
        <v-row
          justify="center"
          align="center" 
        >
        <v-icon class="purple--text mx-5"
          style="font-size:80px;"
          >mdi-account-clock</v-icon>

          <h1 class="teal--text">
            فى خدمتكم على مدار الساعة

          </h1>
        </v-row>

        <v-row
          justify="center"
          align="center" 
        >
        <g-image alt="Example image" src="~/assets/img/cycles.png" style= "width:90%; margin-top: -7%;" />          

        </v-row>

      </v-col>
    </v-row>
   
  

      
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
    
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

  


<hr><br>
<v-row>
  <v-col cols=12>
    <v-row
      justify="center"
      align="center"
    >
      <v-card
            v-for="(n,i) in services"
            :key="i"
            class="ma-3 pa-3"
            elevation="4"
            width="500"
            hover
            min-height="250"
            
          >
          <v-card-title
                  style="font-size: 26px; font-weight: bold;"
                  class="purple--text"
                  
                >
                <v-icon color="teal" style="font-size: 40px;" right>
                  {{ n.icon }} </v-icon>
                {{n.title}}
          </v-card-title>
          <v-card-text>
            {{n.description}}
          </v-card-text> 

            <v-card-action>

                  <v-btn color="purple white--text" to="/services">إقرأ المزيد</v-btn>
            </v-card-action>
        </v-card>

    </v-row>
  </v-col>
</v-row>



  <div v-for="i in $static.posts.edges" :key="i.node.id" style="font-size: 25px;">
    <v-btn :to="i.node.path" color="primary">
      {{ i.node.title }}
    </v-btn>
  </div>

  
  
<!--   
  <g-image alt="Example image" src="~/assets/img/Picture14.svg" height="100" width="200" /> -->
</v-container>
<Footer />
  </Layout>
</template>


<static-query>
query {
  posts: allDocumentation {
    edges {
      node {
        path
        title
        id
      }
    }
  }
}
</static-query>
<script>
import Footer from '~/components/Footer'
export default {
  data() {
    return {
      services: [
        {title: 'مؤشرات قياس الآداء', description: 'أحدث أساليب عرض وتحليل مؤشرات أداء الشركة بطريقة تفعالية تساعدك على إتخاذ قرارات سريعة والتركيز على إستغلال الفرص', icon: 'mdi-chart-bar'},
        {title: 'الإجراءات والسياسات', description: 'نقدم إجراءات وسياسات غير ورقية لإحكام الرقابة وفى نفس الوقت تسهل من سير العمل', icon: 'mdi-cogs'},
        {title: 'المالية', description: 'نطبق المعايير الدولية لإمساك الدفاتر والمحاسبة من خلال أحدث البرامج العالمية ومنا برنامج كويك بوكس أو لاين', icon: 'mdi-notebook-multiple'},
        {title: 'شئون العاملين', description: 'يتم حفظ ملفات وسجلات العملين على سحابة إلكترونية آمنة بتقنية شركة جوجل العالمية ومن ثم إصدار المرتبات الشهرية ومتطلبات التأمينات الإجتماعية تحويل الرواتب على البنوك بشكل آلى', icon: 'mdi-human-handsup'},
        {title: 'التقارير الإدارية', description: 'نقدم تقارير شهرية عن آداء الشركة يشرح الإيجابيات والسلبيات وكيفية تفاديها', icon: 'mdi-file-document-outline'},
        {title: 'سرية المعلومات', description: 'نحن ملتزمون بسرية معلومات عملائنا وجميع المنتسبين يتعهدوا بسياسة سرية المعلومات من سجلات ومراسلات وجميع المستندات تحفظ على سحابة إلكترونية آمنة', icon: 'mdi-shield-lock-outline'},
      ]
    }
  },
  components: {
    Footer
  },
  metaInfo: {
    title: 'مصادر خارجية'
  }
}
</script>

<style>
  #logo {
    width: 100px;
    height: 100px;
    fill: purple;
  }
</style>
