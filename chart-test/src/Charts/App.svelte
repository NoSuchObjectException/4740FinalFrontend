<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronRightOutline, ChevronDownOutline, AlignCenterOutline } from 'flowbite-svelte-icons';
  
  let options = {
    chart: {
      height: 500,
      width: 1200, // Add this line to set the width of the chart
      maxWidth: 900,
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.35,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2']
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 12,
        right: 0,
        top: 0
      }
    },
    series: [
      {
        name: 'negative',
        data: [100, 632, 934, 2032, 3453, 4320, 0, 0, 0, 0, 0, 0],
        color: 'red', // Change the color to white
      },
      {
        name: "positive",
        data: [400, 818, 1256, 1826, 2356, 3456, 0, 0, 0, 0, 0, 0],
        color: 'Green'
     },
     {
       name: "neutral",
       data: [12, 213, 456, 636, 1023, 3453, 0, 0, 0, 0, 0, 0],
       color: 'gray'
     }
   ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      show: true,
      style: {
        colors: '#ffffff', // This will change the text color to white
      },
    },
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true,
      style: {
        colors: "#ffffff",
      },
    },
  },
   yaxis: {
    labels: {
      show: true,
      style: {
        colors: '#ffffff', // This will change the text color to white
      },
    },
   }
  };
  </script>
  
  
  <!-- <Card class="wide-card" style="width:max-content; background-color:transparent; border-color:None; align:left;"> -->
   <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2" style="color: white; text-align: right;">Amount of Tweets</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users over Time</p>
     </div>
     <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
     </div>
   </div>
   <Chart {options} />
   <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
     <div class="flex justify-between items-center pt-5"></div>
   </div>
  <!-- </Card> -->