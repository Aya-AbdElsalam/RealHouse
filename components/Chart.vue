<template>
  <div class="card flex justify-center size-[160px]">
    <Chart
      type="doughnut"
      :data="chartData"
      :options="chartOptions"
      class="w-full md:w-[30rem]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});
const props = defineProps({
  labelsChart: {
    type: Object && undefined,
    required: true,
  },
  precentage: {
    type: Object,
    required: true,
  },
});
const { labelsChart, precentage } = props;
const chartData = ref();
const chartOptions = ref(null);
const pRef = ref();
const labelsChartRef = ref();
import Chart from "primevue/chart";
watch(
  props,
  (newValue, oldValue) => {
    pRef.value = newValue?.precentage;
    labelsChartRef.value = newValue?.labelsChart;
  },
  { immediate: true, deep: true }
);
const setChartData = () => {
  return {
    labels: labelsChartRef,
    datasets: [
      {
        data: pRef,
        backgroundColor: [
          "rgba(249, 115, 22, 0.2)",
          "rgba(6, 182, 212, 0.2)",
          "rgba(139, 92, 246 0.2)",
        ],
        borderColor: [
          "rgb(249, 115, 22)",
          "rgb(6, 182, 212)",
          "rgb(139, 92, 246)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");

  return {
    plugins: {
      legend: {
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
};
</script>
