<template>
  <Layout>
    
      <br><br>
      <h1>{{ $page.documentation.title }}</h1>
      <p class="intro">{{ $page.documentation.excerpt }}</p>
      
      <span 
        v-for="tag in $page.documentation.tags"
        :key="tag.id"
        :style="`background-color: ${tag.color}; margin: 3px; border-radius: 5px; color: white; padding: 0 5px;`"
      >
      <g-link :to="tag.path"
        style="color: white; text-decoration: none;">
         {{ tag.category }}
      </g-link>
       
      </span>
      <br><br>
      <VueRemarkContent>
        <template v-slot:ad>
          
          <Ads />
        </template>

      </VueRemarkContent>
      
  </Layout>
</template>

<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    excerpt
    tags {
      id
      color
      path
      category
    }
    
    
  }
}
</page-query>


<script>

import Ads from '~/components/Ads'
export default {
  components: {
    Ads,
  }
}
</script>
<style scoped>
  h1 {
    color: purple;
  }
</style>