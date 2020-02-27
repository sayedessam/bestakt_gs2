<template>
<v-app>
  
  <v-toolbar style="position: fixed; width: 100%; z-index: 900;" color="accent" height="50" max-height="50">
    <v-toolbar-title >
       <v-btn icon @click="goHome">
        <Logo  style="width: 50; height: 50; margin-top: 2px;"/>
       </v-btn>
    </v-toolbar-title>
    
    <v-toolbar-title style="margin: 0 10px;">
      <strong>{{ $static.metadata.siteName }}</strong>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/login" color="white" class="mx-2"
      rounded 
      outlined
      width="100"
      style="font-size: 20px; font-weight: bolder; background-color: red;">
         <v-icon left>mdi-sale</v-icon>خصم
      </v-btn>
      
      <v-btn icon @click="drawer = !drawer">
         <v-icon color="primary" >mdi-menu</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <transition name="fade">
    <LogoComplete />
  </transition>
  
  
  <!-- side menu -->
     <v-navigation-drawer 
    fixed
    temporary
    color="#9b27af"
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title" style="display: flex; align-items: center;">
            <span style="color: #9b27af; padding: 0 20px; font-size: 20px; font-weight: 600; ">
              بست تاكت
            </span>
            
            <logo style="fill: #9b27af; width: 60px;" />
          </v-list-item-title>
          <v-list-item-subtitle style="text-align: center;  color: #fff; font-weight: 600;">
            القائمة
          </v-list-item-subtitle>
        </v-list-item-content>
       
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          link
          :to= "item.route"
        >
         <v-list-item-icon>
            <v-icon style="color: #fff; ">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: #fff; text-align: right; padding-right: 2px; font-weight: 600; ">{{ item.name }}</v-list-item-title>  
          </v-list-item-content>
          
          

        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    
      <slot/>
   

  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/components/Logo.vue'
import LogoComplete from '~/components/LogoComplete.vue'
export default {
  data() {
    return {
      isLogged: false,
      drawer: false,
      barItems: [
        { name: 'تسجيل', icon: 'mdi-account-box', route:'/login'},
        { name: 'مؤشرات', icon: 'mdi-speedometer', route:'/kpis'},
        { name: 'القائمة', icon: 'mdi-menu', route:'/kpis'},

      ]
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  computed: {
    menu() {
      if(this.isLogged) {
        return [
       
          { name: 'خروج', icon: 'mdi-logout', route:'/logout'},
          { name: 'حسابك', icon: 'mdi-account-box-multiple', route:'/account'},
          { name: 'الخدمات', icon: 'mdi-briefcase-upload', route:'/services'},
          { name: 'مؤشرات', icon: 'mdi-speedometer', route:'/kpis'},
          { name: 'خصم', icon: 'mdi-ticket-percent', route:'/discount'},
          { name: 'موضوعات', icon: 'mdi-file-document-box-check', route:'/blog'},
          { name: 'إتصل بنا', icon: 'mdi-email', route:'/contact'},
          { name: 'عنا', icon: 'mdi-alpha-a-box', route:'/about'},

        ] 
      } else
        return [
       
          { name: 'تسجيل', icon: 'mdi-account-box', route:'/login'},
          { name: 'الخدمات', icon: 'mdi-briefcase-upload', route:'/services'},
          { name: 'مؤشرات', icon: 'mdi-speedometer', route:'/kpis'},
          { name: 'خصم', icon: 'mdi-ticket-percent', route:'/discount'},
          { name: 'موضوعات', icon: 'mdi-file-document-box-check', route:'/'},
          { name: 'إتصل بنا', icon: 'mdi-email', route:'/contact'},
          { name: 'عنا', icon: 'mdi-alpha-a-box', route:'/about'},

        ]
    }
  },
  components: {
    Logo,
    LogoComplete
  }
}
</script>

<style>
  * {
    
    font-family: 'Tajawal', sans-serif;
  }

.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
