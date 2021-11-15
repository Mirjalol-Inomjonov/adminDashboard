<template>
  <div class="status container">
    <!-- cards start -->
    <div class="cardBox">
      <div class="card">
        <div>
          <div class="card__number">{{ dailyViews }}</div>
          <div class="card__name">Daily views</div>
        </div>
        <div class="card__iconBox">
          <i class="fa fa-eye"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card__number">{{ sales }}</div>
          <div class="card__name">Sales</div>
        </div>
        <div class="card__iconBox">
          <i class="fa fa-shopping-cart"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card__number">{{ comments }}</div>
          <div class="card__name">Comments</div>
        </div>
        <div class="card__iconBox">
          <i class="fa fa-commenting-o"></i>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card__number">{{ earning }}</div>
          <div class="card__name">Earning</div>
        </div>
        <div class="card__iconBox">
          <i class="fa fa-money"></i>
        </div>
      </div>
    </div>
    <!-- cards end -->

    <!-- charts start -->
    <div class="charts-wrapper">
      <apexchart
        class="chart"
        type="pie"
        :options="chartOptionsPie"
        :series="seriesPie"
      ></apexchart>

      <apexchart
        class="chart"
        type="bar"
        :options="chartOptionsBar"
        :series="seriesBar"
      ></apexchart>
    </div>
    <!-- charts end -->
  </div>
</template>

<script>
export default {
  name: "Staus",

  data() {
    return {
      // data of pie chart
      seriesPie: [44, 35, 38],
      chartOptionsPie: {
        chart: {
          type: "pie",
        },
        labels: ["Facebook", "YouTube", "Amazon"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      
      // data of bar chart
      seriesBar: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chartOptionsBar: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.status{
  margin-top: 60px;
}
// apexcharts-inner apexcharts-graphical
.charts-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
  position: relative;

  .chart {
    width: 100%;
    height: 450px;
    border-radius: 20px;
    padding: 12px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  }
  // apexcharts-graphical
  .apexcharts-inner {
    width: 100%;
  }
  .apexcharts-toolbar {
    display: none;
  }
}

.cardBox {
  position: relative;
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  .card {
    width: 100%;
    position: relative;
    background-color: var(--white);
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s linear;

    &__number {
      position: relative;
      font-weight: 500;
      font-size: 2em;
      color: var(--blue);
    }

    &__name {
      color: var(--black2);
      font-size: 1em;
      margin-top: 5px;
    }

    &__iconBox {
      font-size: 2.5em;
      color: var(--black2);
    }

    &:hover {
      background-color: rgb(112, 173, 223);
      box-shadow: 0 10px 20px 8px rgba(0, 0, 0, 0.09);

      .card__number,
      .card__name,
      .card__iconBox {
        color: var(--white);
      }
    }
  }
}
</style>
