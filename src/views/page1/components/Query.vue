<template>
    <el-form ref="form" :model="form" label-width="100px" size="mini">
    <el-form-item label="业务子类">
        <el-select v-model="form.children" placeholder="请选择业务子类" style="width:100%">
          <el-option label="子类1" value="1"></el-option>
          <el-option label="子类2" value="2"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="MBL NO">
        <el-input type="textarea" v-model="form.mbl"></el-input>
    </el-form-item>
    <el-form-item label="业务日期从">
      <el-col :span="24">
        <el-date-picker
          v-model="form.fromData"
          type="date"
          align="right"
          placeholder="选择日期"
          style="width: 100%;">
        </el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="业务日期到">
      <el-col :span="24">
         <el-date-picker
          v-model="form.toData"
          type="date"
          align="right"
          placeholder="选择日期"
          style="width: 100%;">
        </el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="外运业务号">
        <el-input type="textarea" v-model="form.outTransport"></el-input>
    </el-form-item>
    <el-form-item label="实装航次">
        <el-select v-model="form.region" placeholder="请选择实装航次" style="width:100%">
          <el-option label="航次一" value="shanghai"></el-option>
          <el-option label="航次二" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="换单代理">
        <el-select v-model="form.proxy" placeholder="请选择换单代理" style="width:100%">
          <el-option label="代理1" value="shanghai"></el-option>
          <el-option label="代理2" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="结算对象">
        <el-select v-model="form.settlement" placeholder="请选择结算对象" style="width:100%">
          <el-option label="结算1" value="shanghai"></el-option>
          <el-option label="结算2" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="口岸代理">
        <el-select v-model="form.settlement" placeholder="请选择口岸代理" style="width:100%">
          <el-option label="口岸1" value="shanghai"></el-option>
          <el-option label="口岸2" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="换单日期从">
      <el-col :span="24">
        <el-date-picker
          v-model="form.changeOrderFromData"
          type="date"
          align="right"
          placeholder="选择日期"
          style="width: 100%;">
        </el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="换单日期到">
      <el-col :span="24">
         <el-date-picker
          v-model="form.changeOrderToData"
          type="date"
          align="right"
          placeholder="选择日期"
          style="width: 100%;">
        </el-date-picker>
      </el-col>
    </el-form-item>
    <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="index"
      label="序号"
      sortable
      width="80">
    </el-table-column>
    <el-table-column
      prop="orderIndex"
      label="订单号"
      sortable
      width="80">
    </el-table-column>
    <el-table-column
      prop="mbl"
      label="mbl"
      sortable
      width="80">
    </el-table-column>
  </el-table>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">条件配置</el-button>
        <el-button type="primary" @click="onSubmit">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
  export default {
    name:'Query',
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          fromData: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>