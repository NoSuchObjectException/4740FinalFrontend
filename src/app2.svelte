<script>
    import { Chart } from 'flowbite-svelte';
    const options = {
      series: [56.9, 42.3, 0.808],
      colors: ['#1C64F2', '#16BDCA', '#9061F9'],
      chart: {
        height: 620,
        width: '100%',
        type: 'pie'
      },
      stroke: {
        colors: ['white'],
        lineCap: ''
      },
      plotOptions: {
        pie: {
          labels: {
            show: true
          },
          size: '100%',
          dataLabels: {
            offset: -25
          }
        }
      },
      labels: ['Positive', 'Negative', 'Neutral'],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: 'Inter, sans-serif',
        }
      },
      legend: {
        position: 'bottom',
        fontFamily: 'Inter, sans-serif',
        colors: "#ffffff"
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + '%';
          }
        }
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + '%';
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      }
    };
  </script>
  
  <!-- <Card> -->
    <div class="flex justify-between items-start w-full">
      <div class="flex-col items-center">
        <div class="flex items-center mb-1">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1" style="color: white;">First Sentiment Pass</h5>
        </div>
      </div>
      <div class="flex justify-end items-center">
       
      </div>
    </div>
  
    <Chart {options} class="py-6" />
  
    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div class="flex justify-between items-center pt-5">
        
      </div>
    </div>
  <!-- </Card> -->