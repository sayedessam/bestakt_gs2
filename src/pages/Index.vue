<template>
  <Layout>
  
    <!-- Header - CTA -->
    <br><br>
    <v-content>
    <v-parallax
    
    :src="require('~/assets/img/man-office.jpg')"
    height="700"
  >
    <v-row
      align="center"
      justify="center"
      style="background-color: rgba(0,0,0,.4);"
    >
      <v-col class="text-center" cols="12">
        <h1 class="mb-5" >
      بست تاكت أفضل موقع إستعانة بمصادر خارجية فى المنطقة العربية    
        </h1>
        <g-image alt="Example image" src="~/assets/img/cycles.png" style= "width:50%; margin-top: -7%;" />
        <h2 class="mb-9 subheading">
      الإحترافية - السرعة - الدقة - أسعار في المتناول     
          
          </h2>
           <v-btn color="teal lighten-3 black--text" width="250px" 
           style="font-size: 20px; font-weight: 800;"
           large
           rounded
           elevation="3"
           height="60"
            >
            <v-icon left>mdi-head-snowflake-outline</v-icon>
            إستشارة مجانية
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
      
        <v-btn color="teal lighten-3 black--text" width="250px" 
           style="font-size: 20px; font-weight: 800;"
           large
           rounded
           elevation="3"
           height="60"
            >
            <v-icon left>mdi-account-plus-outline</v-icon>
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
            
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  style="font-size: 26px; font-weight: bold;"
                  class="purple--text"
                  v-text="n.title"
                ></v-card-title>

                <v-card-subtitle style="font-weight: bold;" v-text="n.description">
                
                </v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="150"
                tile
              >
              <v-icon color="teal" style="font-size: 100px;">{{ n.icon }} </v-icon>
              </v-avatar>
            </div>
            <v-card-action>

                  <v-btn color="purple white--text">إقرأ المزيد</v-btn>
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
  
  
  <g-image alt="Example image" src="~/assets/img/Picture14.svg" height="100" width="200" />
</v-container>
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
import Ads from '~/components/Ads'
export default {
  data() {
    return {
      services: [
        {title: 'مؤشرات الآداء', description: 'نحن ملتزمون بسرية معلومات عملائنا', icon: 'mdi-chart-bar'},
        {title: 'الإجراءات والسياسات', description: 'نحن ملتزمون بسرية معلومات عملائنا', icon: 'mdi-cogs'},
        {title: 'المالية', description: 'نحن ملتزمون بسرية معلومات عملائنا', icon: 'mdi-notebook-multiple'},
        {title: 'شئون العاملين', description: 'نحن ملتزمون بسرية معلومات عملائنا', icon: 'mdi-human-handsup'},
        {title: 'التقارير الإدارية', description: 'نحن ملتزمون بسرية معلومات عملائنا', icon: 'mdi-file-document-outline'},
        {title: 'سرية المعلومات', description: 'نحن ملتزمون بسرية معلومات عملائنا', icon: 'mdi-shield-lock-outline'},
      ]
    }
  },
  components: {
    Ads
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
