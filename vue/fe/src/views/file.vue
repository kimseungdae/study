<template>
  <div class="fileWrap">
    <div v-for="item in list" class="list-item">
      <div class="tit">{{item.path}}</div>
      <div class="fileName">
        <ul>
          <li v-for="key in item.file">
            {{key}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fileWrap{width:800px;margin:0 auto}
  .list-item{border:solid 1px #e5e5e5;width:100%;}
  .fileWrap .tit{background:#f5f5f5;font-weight:bold;padding:10px;font-size:12px;text-align:left}
  .fileWrap ul{margin:0;padding:10px}
  .fileWrap li{display:flex;justify-content: flex-start;padding-bottom:10px}
</style>

<script>

  import axios from 'axios'
  export default {
    name: 'file',
    data () {
      return {
        list: null
      }
    },
    mounted () {
      axios.get('http://10.145.162.78:3000/api/file')
              .then((r) => {
                this.list = r.data.list;
                console.log(this.list)
              })
              .catch((e) => {
                console.error(e.message)
              })
    },
    methods: {

    }
  }

</script>


