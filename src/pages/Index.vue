<template>
  <Layout>
   <g-image alt="Outsourcing مصادر خارجية" src="~/assets/img/outsourcing.jpg" fit="inside" height="120"  />
   
    <h1>
      بست تاكت أفضل موقع إستعانة بمصادر خارجية فى المنطقة العربية لدعم الأعمال التجارية
    </h1>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
    
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

   <h2 class="teal--text">
     الإحترافية - السرعة - الدقة - أسعار في المتناول
   </h2>

    <Ads />
   <p>
ترشيد الإنفاق - مؤشرات قياس الأداء - الاستعانة بمصادر خارجية لتوفير أكثر من ثلث التكلفة والوقت والتركيز على نمو أعمالك
 
  </p>
  <g-image alt="Example image" src="~/assets/img/staff.jpg" height="200" style="max-width:100%" />
<hr><br>
<h2>
  إدارة متكاملة تحت إشراف خبراء لتوفير وقتك للتركيز على نمو أعمالك
</h2>
<g-image alt="Example image" src="~/assets/img/cycles.png" style= "width:80%" />  
  <div v-for="i in $static.posts.edges" :key="i.node.id" style="font-size: 25px;">
    <v-btn :to="i.node.path" color="primary">
      {{ i.node.title }}
    </v-btn>
    

  </div>
  
  

  <g-image alt="Example image" src="~/assets/img/Picture1.svg" height="100" width="100" />

  <g-image alt="Example image" src="~/assets/img/Picture3.svg" height="100" width="200" />

  <g-image alt="Example image" src="~/assets/img/Picture4.svg" height="100" width="200" />

  <g-image alt="Example image" src="~/assets/img/Picture6.svg" height="100" width="200" />

  <g-image alt="Example image" src="~/assets/img/Picture7.svg" height="100" width="200" />

  <g-image alt="Example image" src="~/assets/img/Picture8.svg" height="100" width="200" />

  <g-image alt="Example image" src="~/assets/img/Picture9.svg" height="100" width="200" />

  <g-image alt="Example image" src="~/assets/img/Picture14.svg" height="100" width="200" />

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
