<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

  let options = {
    chart: {
      height: '400px',
      maxWidth: '100%',
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
        color: '#FF2D00'
      },
      {
        name: "positive",
        data: [400, 818, 1256, 1826, 2356, 3456, 0, 0, 0, 0, 0, 0],
        color: '#FAF11A'
      },
      {
        name: "neutral",
        data: [12, 213, 456, 636, 1023, 3453, 0, 0, 0, 0, 0, 0],
        color: '#E2E2DA'
      }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
      labels: {
        show: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
</script>

<Card>
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Amount of Tweets</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users over Time</p>
    </div>
    <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      
      
    </div>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        
        
      </A>
    </div>
  </div>
</Card>


