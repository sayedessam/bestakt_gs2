<template>
<Layout>
    <br><br>
    <!-- <logo style="fill: teal; width: 50;" /> -->
    <v-container>
    <v-row>
      <v-icon color="teal" size="40">mdi-speedometer</v-icon>
    <h2 class="primary--text">{{ title }} </h2>
    </v-row>
    <h1>
      مؤشر نمو الأرباح - مؤشر مهم لقياس صحة الشركة المالية
    </h1>
    <Ads />
    <BarChart :chartData="chartdata" :options="opts" />
    <p>
      إتجاهات الإيرادات عن عام 2019م
    </p>
    <g-image src="~/assets/img/Chart1.png" width="560%"></g-image>
    </v-container>
 </Layout>
</template>

<script>

import Logo from '~/components/Logo.vue'
import Ads from '~/components/Ads'
import BarChart from '~/components/BarChart.js'

  export default  {
    components: {
      BarChart,
      Logo,
      Ads
    },
    data () {
      return {
        title: 'مؤشرات قياس الآداء',
        right: null,
        chartdata: {
          labels: ['يناير','فبراير','مارس'],
          datasets: [
            {
              label: 'الأرباح',
              backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.7)',
                'teal'
              ],
               borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
               ],
              borderWidth: 1,
              data: [120,89,456]
            }
          ]
        },
        opts: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    }
  }
</script>