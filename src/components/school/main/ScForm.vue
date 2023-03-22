<template>
  <div>
    <!--搜索框-->
    <Space direction="vertical" size="small" type="flex" style="margin-top: 3px;width: 300px">
      <Input on-search="{{onSearch}}" autofocus search enter-button placeholder="Enter something..." />
    </Space>
  </div>
  <div style="margin-top: -32px">
    <Space wrap style="margin-left: 450px;">
      <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">新增</span>
        <span v-else>Loading...</span>
      </Button>
      <Button type="primary" :loading="loading2" style="margin-left: 30px" @click="toLoading2">
        <span v-if="!loading2">更新</span>
        <span v-else>Loading...</span>
      </Button>
      <Button type="primary" :loading="loading3" style="margin-left: 30px" @click="toLoading3">
        <span v-if="!loading3">删除</span>
        <span v-else>Loading...</span>
      </Button>
    </Space>
  </div>
  <span>
     <Table highlight-row border :columns="decideMain" :data="data" style="margin-top: 1%"></Table>
      <Page :total="100" show-total style="margin-top: 2%;margin-right:10%;float: right"/>
  </span>

</template>

<script>

import store from "../../../store/index.js";


export default {
  name: "ScForm",
  computed:{
    myContextType(){
      return store.getters["school/getMyContextType"]
    },
    decideMain(){
      if(this.myContextType === 'myStudent'){
        return this.studentCol
      }else if(this.myContextType === 'myCompany'){
        return this.companyCol
      }
    }
  },
  methods: {
    toLoading () {
      this.loading = true;
    },
    toLoading2 () {
      this.loading2 = true;
    },
    toLoading3 () {
      this.loading3 = true;
    },
  },
  data(){
    return {
      loading: false,
      loading2: false,
      loading3: false,
      onSearch:'',
      studentCol:[
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Telephone',
          key: 'telephone'
        },
        {
          title: 'School',
          key: 'school'
        },
        {
          title: 'Company',
          key: 'company'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'State',
          key: 'state'
        },
        {
          title: 'Information',
          key: 'information'
        }
      ],
      companyCol:[
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: 'Age2',
          key: 'age'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Telephone',
          key: 'telephone'
        },
        {
          title: 'School',
          key: 'school'
        },
        {
          title: 'Company',
          key: 'company'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'State',
          key: 'state'
        },
        {
          title: 'Information',
          key: 'information'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>