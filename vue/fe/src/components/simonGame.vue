<template>
  <div class="simonGame">
  <div>
    <div class="game">
      <div class="square" @click="clicked(1)" :class="{ on : clickerNum == 1}">1</div>
      <div class="square" @click="clicked(2)" :class="{ on : clickerNum == 2}">2</div>
      <div class="square" @click="clicked(3)" :class="{ on : clickerNum == 3}">3</div>
      <div class="square" @click="clicked(4)" :class="{ on : clickerNum == 4}">4</div>
    </div>
  </div>
  <div class="layerTip" v-show="startTip">
    사이먼 게임은<br>
    깜박이는 패턴을 보고 동일하게 맞추는 게임입니다.<br><br>
    맞출때마다 점수를 얻고 패턴이 점점 복잡해 집니다.<br>
    모두 화이팅 입니다.
    <button @click="endTip">알겠어요!</button>
  </div>
  <div v-show="!visibilityPlay">
    현재 스코어 : {{stepCount}}
  </div>
  <div class="bottom-bar">
    <div>이름을 입력하세요</div>
    <span v-show="!visibilityPlay">{{userName}}</span>
    <input type="text" placeholder="이름" v-model="userName" v-show="visibilityPlay">
    <button @click="gameStart" v-show="visibilityPlay">게임시작</button><br>
    버튼을 누르면 바로 시작합니다.
  </div>
  <div class="rewordTable">
    <ul>
      <li>
        <span class="name">이름</span>
        <span class="count">점수</span>
      </li>
      <li v-for="s in simonTable" :key="s._id">
        <span class="name">이름 : {{s.name}}</span>
        <span class="count">점수 : {{s.count}}</span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
      return {
        stepCount: 0,
        visibilityPlay: true,
        clickArr: [],
        clickerNum: 0,
        count: 0,
        userPlay: false,
        userCount: 0,
        userName: '',
        simonTable: [],
        startTip: true,
      }
    },
    mounted () {
      axios.get('http://10.145.162.78:3000/api/simon')
              .then((r) => {
                this.simonTable = r.data.simon
                this.simonTable.sort(function(a, b){
                  return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
                })
              })
              .catch((e) => {
                console.error(e.message)
              })
    },
    computed: {
    },
    watch: {
    },
    methods: {
      endTip() {
        this.startTip = false;
      },
      clicked(no) {
        if(this.userPlay && this.userCount > 0){
          this.clickAni(no);
          if(this.userCount > 0){
            if(this.clickArr[this.clickArr.length - this.userCount] == no){
              this.userCount --;
              if(this.userCount == 0){
                setTimeout(
                  function(){
                    this.play();
                  }.bind(this), 1000)

              }
            }else{
              alert('틀렸습니다!!! 최고기록 : '+this.stepCount);
              this.clickerNum = 0;
              this.visibilityPlay = true;
              this.postReq();

              this.stepCount = 0;
              this.userPlay = false;
              this.clickArr = [];
            }
          }
        }
      },
      clickAni(no) {
        this.clickerNum = no
        setTimeout(
                function(){
                  this.clickerNum = 0;
                }.bind(this), 100)
      },
      play() {
        this.add();
        this.count = this.clickArr.length;
        this.stepCount++;
        this.computer()
      },
      postReq () {
        axios.post('http://10.145.162.78:3000/api/simon', {
          name: this.userName, count: this.stepCount
        })
                .then((r) => {
                  console.log(r.data);
                  this.simonTable.push(r.data.msg)
                })
                .catch((e) => {
                  console.error(e.message)
                })
      },
      computer() {
        let that = this;
        if(that.count > 0 ){
          let tmpCount = that.clickArr.length - that.count;
          that.clickerNum = that.clickArr[tmpCount];
          setTimeout(function(){
            that.clickerNum = 0;
          }.bind(this), 800)
          setTimeout(function(){
            that.clickerNum = that.clickArr[tmpCount];
            that.count --;
            that.computer();
          }.bind(this), 1000)
        }else{
          that.clickerNum = 0;
          that.userPlay = true;
          that.userCount = that.clickArr.length;
        }

      },
      endAniFn() {
        this.clickerNum = 0;
      },
      gameStart() {
        if(this.userName == ''){
          alert('이름을 입력하세요');
        }else{
          this.visibilityPlay = false;
          this.play();
        }
      },
      add() {
        this.clickArr.push(Math.floor(Math.random() * 4) + 1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game{display:flex;width:400px;margin:0 auto;background:#eee;flex-wrap:wrap;box-sizing: border-box;border:solid 3px #000}
.game * {box-sizing: border-box}
.game .square{width:50%;height:100px;text-indent: -999rem;box-sizing: border-box;border:solid 3px #000;background:gray}
.game .square.on:nth-child(1){background:green}
.game .square.on:nth-child(2){background:red}
.game .square.on:nth-child(3){background:yellow}
.game .square.on:nth-child(4){background:blue}
/*.game .square.on{opacity: .5}*/
.rewordTable{width:100%;padding:20px 0}
.rewordTable ul{width:100%;max-width:400px;margin:0 auto;display:block;padding:0;border:solid 1px #eee;border-radius: 10px;}
.rewordTable ul li{list-style:none;display:flex;width:100%;justify-content: space-between;margin:0;padding:0 20px;box-sizing: border-box}
.rewordTable ul li:before{content:""}
.rewordTable ul li:nth-child(2){background:#FF5E5B;color:#fff}
.rewordTable ul li:nth-child(3){background: #ffb0ae;color:#fff}
.rewordTable ul li:nth-child(4){background: #ffc8cd;color:#fff}
.rewordTable ul li:nth-child(1):before{content:"등수"}
.rewordTable ul li:nth-child(2):before{content:"1등"}
.rewordTable ul li:nth-child(3):before{content:"2등"}
.rewordTable ul li:nth-child(4):before{content:"3등"}
.layerTip{position:absolute;top:50%;left:50%;transform: translateX(-50%) translateY(-50%);width:300px;height:300px;border-radius: 10px;background:#999;color:#fff;padding:20px;box-sizing: border-box;text-align: left}
.layerTip button{position:absolute;bottom:10px;left:50%;transform: translateX(-50%);width:100px;height:50px;background: #f05a43;color:#fff;border:0;border-radius: 10px;}
.bottom-bar{border:solid 1px #e1e1e1;width:100%;max-width:300px;margin:0 auto;padding:15px; border-radius: 10px;margin-top:15px;background:#f1f1f1}
</style>
