<template>
  <div class="recentOrders container">
    <!-- Oreder details list start -->
    <div class="table-wrapper">
      <div class="caption">
        <h2 class="caption__title">Recent Orders</h2>
        <router-link class="caption__btn" to="about">View All</router-link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th class="table__header">Name</th>
            <th class="table__header">Price</th>
            <th class="table__header">Payment</th>
            <th class="table__header">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="table__item">Jon Doe</td>
            <td class="table__item">$1200</td>
            <td class="table__item">Paid</td>
            <td class="table__item">
              <span class="table__item-status table__item-status_success">
                Delivered
              </span>
            </td>
          </tr>
          <tr>
            <td class="table__item">Jon Doe</td>
            <td class="table__item">$1200</td>
            <td class="table__item">Due</td>
            <td class="table__item">
              <span class="table__item-status table__item-status_warning">
                Pending
              </span>
            </td>
          </tr>
          <tr>
            <td class="table__item">Jon Doe</td>
            <td class="table__item">$1200</td>
            <td class="table__item">Paid</td>
            <td class="table__item">
              <span class="table__item-status table__item-status_danger">
                Return
              </span>
            </td>
          </tr>
          <tr>
            <td class="table__item">Jon Doe</td>
            <td class="table__item">$1200</td>
            <td class="table__item">Due</td>
            <td class="table__item">
              <span class="table__item-status table__item-status_info">
                In Progress
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Oreder details list end -->

    <!-- New Cosutmers -->
    <Customers />
  </div>
</template>

<script>
import Customers from "./Customers.vue";
export default {
  name: "Table",
  components: { Customers },
};
</script>

<style lang="scss">
.recentOrders {
  position: relative;
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;

  .table-wrapper {
    position: relative;
    width: 100%;
    padding: 20px;
    background-color: var(--white);
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    margin-bottom: 40px;
    border-radius: 20px;

    .caption {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      &__title {
        font-weight: 500;
        color: var(--blue);
      }

      &__btn {
        position: relative;
        padding: 5px 10px;
        text-decoration: none;
        background-color: var(--blue);
        color: var(--white);
        border-radius: 6px;
      }
    }

    .table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;

      tr {
        color: var(--black1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 5px 0;

        &:last-child {
          border-bottom: none;
        }
      }

      // hover efect start
      tbody {
        tr {
          transition: background-color 0.15s linear;
          transition: transform 0.25s linear;
          &:hover {
            background-color: rgb(117, 179, 230);
            color: var(--white);
            transform: translateY(5px);
          }
        }
      }
      // hover efect end

      &__header {
        font-weight: 600;
        text-align: left;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
        &:last-child,
        &:nth-child(2) {
          text-align: end;
        }
        &:nth-child(3) {
          text-align: center;
        }
      }

      &__item {
        padding: 10px;
        &:last-child,
        &:nth-child(2) {
          text-align: end;
        }
        &:nth-child(3) {
          text-align: center;
        }
      }

      &__item-status {
        padding: 2px 4px;
        font-size: 14px;
        font-weight: 500;
        color: var(--white);
        border-radius: 4px;

        &_success {
          background-color: #8de028;
        }

        &_warning {
          background-color: #f9caf3;
        }

        &_danger {
          background-color: #f00;
        }
        &_info {
          background-color: #1795ce;
        }
      }
    }
  }
}
</style>
