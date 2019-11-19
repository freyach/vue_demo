  <template>
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <Query ref='query'/>
            </div>
        </el-col>
        <el-col :span="18">
            <div class="grid-content bg-purple-light">
              <InfoContain />
            </div>
        </el-col>
    </el-row>
  </template>

  <script>
    import Query from './components/Query'
    import InfoContain from './components/InfoContain'
    export default {
      name:'page1',
      components: {
        Query,
        InfoContain
      },
      data() {
        return {
         
        }
      }
    }
  </script>