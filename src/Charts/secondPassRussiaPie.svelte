<script>
    import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover } from 'flowbite-svelte';
    import { InfoCircleSolid, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid, TrashBinSolid, DotsHorizontalOutline } from 'flowbite-svelte-icons';
  
    const options = {
      series: [4.8, 1.2, 3.7 , 67.1, 17.3],
    //   colors: ['orange', 'yellow', 'brown','red', 'gray'],
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
      labels: ['Happy', 'Hopeful', 'Sad', 'Angry', 'Neutral'],
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
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1" style="color: white;">Russia</h5>
          <!-- <InfoCircleSolid id="pie1" class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" /> -->
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