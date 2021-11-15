<template>
  <div class="recentOrders allRecent container">
    <!-- Oreder details list start -->
    <div class="table-wrapper">
      <div class="caption">
        <h2 class="caption__title">Recent Orders</h2>
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
  </div>
</template>

<script>
export default {
  name: 'RecentOrders'
}
</script>

<style lang="scss">
.allRecent{
  display: block;
}
</style>
