<template>
  <div class="back">
    <el-container id="container">
      <el-header>
        <el-row>
          <el-col :span="22">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"
                ><a href="https://www.ele.me" target="_blank"
                  >订单管理</a
                ></el-menu-item
              >
            </el-menu></el-col
          >
          <el-col :span="2">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="2">
                <template slot="title">张三三</template>
                <el-menu-item index="2-1">修改资料</el-menu-item>
                <el-menu-item index="2-2">个人中心</el-menu-item>
                <el-menu-item index="2-3">退出</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>班级管理</span>
              </template>
                <el-menu-item index="allClazz">所有项目部</el-menu-item>
                <el-menu-item index="healthMange">卫生排行</el-menu-item>
                <el-menu-item index="allStudent">所有学员</el-menu-item>
            </el-submenu>

              <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          
       
          </el-menu>
        </el-aside>
        <el-container>
          <el-main> <router-view></router-view>     </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>
.back {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}

/* scoped 私有化样式 */
.el-header,
.el-footer {
  background-color: #545c64;
  /* background-color: #b3c0d1; */
 
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #d3dce6; */
   background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
   
}

 

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>



<script>
export default {
  name: "Back",
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>


