<template>
    <div class="infoContain">
       <div class="buttonList">
            <el-button type="primary" @click="onSubmit">条件配置</el-button>
            <el-button type="primary" @click="onSubmit">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">条件配置</el-button>
            <el-button type="primary" @click="onSubmit">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">条件配置</el-button>
            <el-button type="primary" @click="onSubmit">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">条件配置</el-button>
            <el-button type="primary" @click="onSubmit">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="primary" @click="onSubmit">条件配置</el-button>
            <el-button type="primary" @click="onSubmit">重置</el-button>
            <el-button type="primary" @click="onSubmit">查询</el-button>
       </div>
       <el-tabs type="border-card">
            <el-tab-pane label="基础信息">
                <BaseInfo />
            </el-tab-pane>
            <el-tab-pane label="拓展信息">
                <ExtendInfo />
            </el-tab-pane>
            <el-tab-pane label="运输信息">
                <TransportInfo />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import BaseInfo from './BaseInfo'
import ExtendInfo from './ExtendInfo'
import TransportInfo from './TransportInfo'
export default {
    name:'infoContain',
    components: {
        BaseInfo,
        ExtendInfo,
        TransportInfo
    },
    data(){
        return {}
    }
}
</script>
<style>
    .infoContain {
        margin-left:15px;
    }
    .el-button--small, .el-button--small.is-round {
        margin: 5px;
    }
    .el-tabs--border-card {
        box-shadow: 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0)
    }
</style>