<template>
  <div class="recentCustomers">
    <table>
      <h2 class="title">Recent Customers</h2>
      <tr>
        <td style="width: 60px">
          <a href="#">
            <div class="avatarBox">
              <img src="../assets/amelia.jpg" alt="Amelia" />
            </div>
          </a>
        </td>
        <td>
          <h4>Amelia <br /><span>Italy</span></h4>
        </td>
      </tr>
      <tr>
        <td style="width: 60px">
          <a href="#">
            <div class="avatarBox">
              <img src="../assets/ann.jpg" alt="Ann" />
            </div>
          </a>
        </td>
        <td>
          <h4>Sveta <br /><span>Russian</span></h4>
        </td>
      </tr>
      <tr>
        <td style="width: 60px">
          <a href="#">
            <div class="avatarBox">
              <img src="../assets/david.jpg" alt="David" />
            </div>
          </a>
        </td>
        <td>
          <h4>David <br /><span>USA</span></h4>
        </td>
      </tr>
      <tr>
        <td style="width: 60px">
          <a href="#">
            <div class="avatarBox">
              <img src="../assets/gress.jpg" alt="Gress" />
            </div>
          </a>
        </td>
        <td>
          <h4>Gress <br /><span>Scotland</span></h4>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Customers",
};
</script>

<style lang="scss">
.recentCustomers {
  position: relative;
  display: grid;
  // min-height: 500px;
  padding: 20px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);

  .title {
    font-weight: 500;
    color: var(--blue);
    margin-bottom: 15px;
  }

  table {
    border-collapse: collapse;
    .avatarBox {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    tr {
      padding: 5px 12px;
      display: block;
      &:hover {
        background-color: rgb(117, 179, 230);
        color: var(--white);
        td {
          h4 {
            span {
              color: var(--white);
            }
          }
        }
      }

      td {
        h4 {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.2em;
          span {
            font-size: 14px;
            color: var(--black2);
          }
        }
      }
    }
  }
}
</style>
