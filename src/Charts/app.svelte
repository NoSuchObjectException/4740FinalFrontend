<script>
  import {
    Chart,
    Card,
    A,
    Button,
    Dropdown,
    DropdownItem,
    Tooltip,

    DarkMode

  } from "flowbite-svelte";
  import {
    ChevronRightOutline,
    ChevronDownOutline,
    AlignCenterOutline,
    LightbulbSolid,
  } from "flowbite-svelte-icons";

  let options = {
    chart: {
      height: 500,
      width: 1200, // Add this line to set the width of the chart
      maxWidth: 900,
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
      type: "dark",
      x: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.35,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 12,
        right: 0,
        top: 0,
      },
    },
    series: [
      {
        name: "2018",
        data: [
          21499, 27226, 22187, 16725, 21807, 23927, 17171, 22677, 20678, 27596,
          22881, 15746,
        ],
        color: "red", // Change the color to white
      },
      {
        name: "2019",
        data: [
          30867, 23393, 16891, 26371, 27251, 21338, 32704, 25957, 27955, 20930,
          28216, 25075,
        ],
        color: "Green",
      },
      {
        name: "2020",
        data: [
          43543, 27013, 39805, 39163, 40936, 34733, 43270, 30865, 37571, 42735,
          39162, 41838,
        ],
        color: "white",
      },
      {
        name: "2021",
        data: [
          49862, 42870, 37301, 45252, 35230, 41629, 46280, 55422, 54059, 61779,
          60043, 71084,
        ],
        color: "blue",
      },
      {
        name: "2022",
        data: [
          14850, 31992, 86971, 23892, 19900, 14360, 17367, 29684, 23790, 59592,
          41398, 42448,
        ],
        color: "purple",
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: true,
        style: {
          colors: "#ffffff", // This will change the text color to white
        },
      },
      axisBorder: {
        show: true,
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
          colors: "#ffffff", // This will change the text color to white
        },
      },
    },
  };
</script>

<!-- <Card class="wide-card" style="width:max-content; background-color:transparent; border-color:None; align:left;"> -->
<div class="flex justify-between">
  <div>
    <h5
      class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2"
      style="color: white; text-align: center;">
      Amount of Tweets
    </h5>
    <!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users over Time</p> -->
  </div>
  <div
    class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"
  ></div>
</div>
<Chart {options}/>
<div
  class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
>
  <div class="flex justify-between items-center pt-5"></div>
</div>
<!-- </Card> -->
