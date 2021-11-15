<template>
  <div class="wrapper" :class="!activeClass ? 'bgWarning' : ''">
    <div class="wrapper-signin">
      <div class="blueBg">
        <div class="box signin">
          <h2 class="box__title">Already Have an Account ?</h2>
          <button class="signinBtn" @click="signIn">Sign In</button>
        </div>
        <div class="box signup">
          <h2 class="box__title">Don't Have an Account ?</h2>
          <button class="signupBtn" @click="signUp">Sign up</button>
        </div>
      </div>

      <!-- formBox start -->
      <div class="formBox" :class="[!activeClass ? 'active' : 'isActive']">
        <!-- sign in card start -->
        <div
          class="formBox__form siginForm"
          :class="[!activeClass ? 'signInleft' : '']"
        >
          <form @submit.prevent="signin">
            <h3>Sign In</h3>
            <input
              required
              type="text"
              v-model="user.login"
              placeholder="Login"
            />
            <input
              required
              type="password"
              v-model="user.password"
              placeholder="Password"
            />
            <button type="button" @click="signin">Login</button>
            <a href="#" class="forgot">Forgot Password</a>
          </form>
        </div>
        <!-- sign in card end  -->

        <!-- sign up card start -->
        <div
          class="formBox__form signupForm"
          :class="[!activeClass ? 'signUpleft' : '']"
        >
          <form @submit.prevent="signup">
            <h3>Sign Up</h3>
            <input
              v-model="userRegister.username"
              required
              type="text"
              placeholder="User Name"
            />
            <input
              v-model="userRegister.login"
              required
              type="text"
              placeholder="Login"
            />
            <input
              v-model="userRegister.password"
              required
              type="password"
              placeholder="Password"
            />
            <input
              v-model="userRegister.confirmPassword"
              required
              type="password"
              placeholder="Confirm Password"
            />
            <button type="button" @click="signup">Register</button>
          </form>
        </div>
        <!-- sign up card end -->
      </div>
      <!-- formBox end -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      login: "",
      password: "",
    },
    userRegister: {
      login: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
    activeClass: Boolean,
    left: -100,
  }),
  methods: {
    signin() {
      if (this.user.login && this.user.password)
        this.$store.dispatch("signin", this.user);
      else {
        alert("Please full password and login fields!!!");
      }
    },
    signup() {
      if (
        !this.userRegister.password ||
        !this.userRegister.username ||
        !this.userRegister.login ||
        !this.userRegister.confirmPassword
      ) {
        alert("Empty one of the fields !!!");
      } else {
        if (this.userRegister.password === this.userRegister.confirmPassword) {
          this.$store.dispatch("signup", {
            username: this.userRegister.username,
            password: this.userRegister.password,
            login: this.userRegister.login,
          });
        } else {
          alert("Password is not same with confirm Password");
        }
      }
    },
    signUp() {
      this.activeClass = false;
    },

    signIn() {
      this.activeClass = true;
    },
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
}

.wrapper {
  background-color: #03a9f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  min-height: 100vh;
  &.bgWarning {
    background-color: #f43648;
    min-height: 100vh;
  }

  &-signin {
    position: relative;
    width: 800px;
    height: 500px;
    margin: 20px;
    // background-color: firebrick;
  }

  .blueBg {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #fff, $alpha: 0.2);
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);

    .box {
      position: relative;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &__title {
        color: #fff;
        font-style: 1.2em;
        font-weight: 500;
        margin-bottom: 10px;
      }
      button {
        cursor: pointer;
        padding: 10px 20px;
        color: #333;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        border: none;
        &:active {
          transform: scale(0.98);
        }
      }
    }
  }

  .formBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
    transition: 1s;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    overflow: hidden;

    &.active {
      left: 50%;
    }
    &.isActive {
      left: 0;
    }

    .siginForm {
      transition-delay: 0.25s;
      &.signInleft {
        left: -100%;
        transition-delay: 0s;
      }
    }

    .signupForm {
      left: 100%;
      transition-delay: 0s;
      &.signUpleft {
        left: 0;
        transition-delay: 0.25s;
      }
    }

    &__form {
      position: absolute;
      left: 0;
      width: 100%;
      padding: 50px;
      transition: 0.5s;

      form {
        width: 100%;
        display: flex;
        flex-direction: column;

        h3 {
          font-size: 1.5em;
          color: #333;
          font-weight: 500;
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          margin-bottom: 20px;
          padding: 10px;
          outline: none;
          font-size: 16px;
          border: 1px solid #797979;
          &:focus {
            box-shadow: 0 0 8px 1px #333;
          }
        }
        button {
          cursor: pointer;
          max-width: 100px;
          color: #fff;
          background-color: #03a9f4;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
        }
        .forgot {
          color: #333;
          text-decoration-line: underline;
          text-decoration-style: solid;
        }
      }
    }
  }
}
</style>
