// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'بست تاكت',
  icon: {
    favicon: './src/assets/img/logo.png'
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './src/content/docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        refs: {
          tags: 'Tag'
        },
        plugins: ['remark-grid-tables']
        
     
      }
    },
      {
        use: '@gridsome/vue-remark',
        options: {
          typeName: 'Tag', // Required
          baseDir: './src/tags', // Where .md files are located
          pathPrefix: '/tags', // Add route prefix. Optional
          template: './src/templates/Tag.vue', // Optional
         
          plugins: ['remark-grid-tables']
          
        }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        'gridsome-remark-katex'
      ]
    }
  }

}
