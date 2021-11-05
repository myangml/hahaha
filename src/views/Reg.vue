<template>
  <div class="reg">
    <h1>This is an about page</h1>
    <HelloWorld :msg="msg" />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Reg",
  data() {
    return {
      msg: "我是about传来的值",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
