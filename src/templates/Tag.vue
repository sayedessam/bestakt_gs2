<<template>
  <div>
    <h1
      :style="`background-color: ${$page.tag.color}; text-align: center; width: 90%; margin: 3px auto; border-radius: 5px; color: white; padding: 0 5px;`"
    >{{ $page.tag.category }}</h1>
    
    
    <v-container>
      <div
      v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.id">  
        <g-link 
          :to="edge.node.path"
          >
          {{ edge.node.title }}
        </g-link>
      </div>
    </v-container>
  </div>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    id
    color
    category
    belongsTo {
      edges {
        node {
          ... on Documentation {
            title
        		content
            exceprt
            id
            path
            
          }
        }
      }
    }
  }
}

</page-query>

<style scoped>
  div {
    direction: rtl;
    width: 90%;
    margin: 0 auto;
  }
</style>