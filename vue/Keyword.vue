<template>
  <div class="Keyword">
    <div class="gp_front">
      <div class="wd_en">{{rewordEn}}</div>
      <div class="wd_kr">{{rewordKr}}</div>
      <button @click="toggleAdmin" class="flBtn">관리</button>
    </div>
    <div class="admin" v-show="showAdmin">
      <form>
        <input type="text" placeholder="영어" v-model="wordEn">
        <input type="text" placeholder="한글" v-model="wordKr">
        <button @click="postReq">입력</button>
      </form>
      <button @click="getReq">저장값 확인</button>
      <div class="dataTable">
        <div class="topLine">
          <span class="tit">영문</span>
          <span class="tit">한글</span>
        </div>
        <div  v-for="k in words" :key="k._id">
          <div>
            <input type="text" v-model="k.en">
            <input type="text" v-model="k.kr">
            <!--<button @click="updateFn(k._id)">수정</button>
            <button @click="updateFn(k._id)">삭제</button>-->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'keyword',
  data () {
    return {
      words: [],
      getMd: '',
      postMd: '',
      putMd: '',
      delMd: '',
      wordEn: '',
      wordKr: '',
      rewordEn: '',
      rewordKr: '',
      countTxt: 0,
      playTmp: '',
      showAdmin: false
    }
  },
  mounted () {
    axios.get('http://10.145.162.78:3000/api/keyword')
      .then((r) => {
        this.words = r.data.keyword
        this.playTmp = setInterval(this.printKeyword, 3000)
        this.countTxt = 0
        this.rewordEn = this.words[this.countTxt].en
        this.rewordKr = this.words[this.countTxt].kr
      })
      .catch((e) => {
        //console.error(e.message)
      })
  },
  methods: {
    getReq () {
      axios.get('http://10.145.162.78:3000/api/keyword')
        .then((r) => {
          this.words = r.data.keyword
        })
        .catch((e) => {
          //console.error(e.message)
        })
    },
    postReq () {
      axios.post('http://10.145.162.78:3000/api/keyword', {
        en: this.wordEn, kr: this.wordKr
      })
        .then((r) => {
          this.words = JSON.stringify(r.data)
        })
        .catch((e) => {
         // console.error(e.message)
        })
    },
    printKeyword () {
      if (this.countTxt < this.words.length - 1) {
        this.countTxt = this.countTxt + 1
      } else {
        this.countTxt = 0
      }

      this.rewordEn = this.words[this.countTxt].en
      this.rewordKr = this.words[this.countTxt].kr
    },
    toggleAdmin () {
      //console.log(this.showAdmin)
      if (this.showAdmin) {
        this.showAdmin = false
      } else {
        this.showAdmin = true
      }
    },
    updateFn (id) {
      //console.log(id)
    }
  }
}

</script>
<style scoped>
.Keyword{position:relative}
.gp_front{border:solid 3px #FF5E5B;width:500px;border-radius: 10px;padding:20px 0;background:rgba(255,255,255,.8);position:relative;}
.wd_en{font-size: 52px;font-family: 'Roboto', sans-serif;color: #FF5E5B;margin-bottom: 0;text-align:center}
.wd_kr{text-align:center;font-size:22px;font-family: "Abel", sans-serif;font-weight:400;color: #3c3c3c;padding-top:15px;}
.flBtn{position:absolute;top:15px;right:15px;border:solid 1px red;color:red;background:#fff;border-radius: 3px}
</style>
