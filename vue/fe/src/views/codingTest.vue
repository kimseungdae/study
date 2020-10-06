<template>
<v-app id="inspire">
<div class="dashBoard__wrap">
  <v-row no-gutters>
    <v-card color="t_head">
      <span class="time">2020-03-14 12:00:00</span>
    </v-card>
  </v-row>
  <v-flex>
    <div v-for="item in machine">
      <v-col :key="item.idx">
        <v-card>
          <v-row>
            <v-toolbar>
              <span class="f_mname">{{item.mid}}</span>
              <v-spacer></v-spacer>
              <span class="f_p">{{item.process}}</span>
            </v-toolbar>
          </v-row>
          <div class="text-center">
            <span class="f_end">{{item.timer}}</span>
          </div>
        </v-card>
      </v-col>
    </div>
  </v-flex>
  <v-footer>
    <v-row>
      <v-progress-linear>
        <v-flex></v-flex>
        <span class="vt">{{ item.count}}</span>
        <v-spacer></v-spacer>
        <div class="vt">
          <span>{{ item.fTime }}</span>
        </div>
        <v-flex></v-flex>
      </v-progress-linear>
    </v-row>
  </v-footer>
</div>
</v-app>
</template>

<style scoped>
.time{
  font-size: 3vw;
  color: #f4fc03;
  text-align: center;
}
.f_mname{
  margin: 30px;
  font-size: 3vw;
}
.f_p {
  font-size: 3vh;
  margin: 20px;
}
.vt {
  font-size: 4vh;
  color: #ffffff;
}
.f_end {
  font-size: 9vw;
}
</style>


<script>
export default {
  name: 'App',

  data: () => ({

    tab: null,
    machine: [
      {
        mid : 'Puma280',
        idx : 1,
        process : 'CS98D25H49-01-2',
        timer : '가공완료',
        count : '100/100',
        fTime : '0 시간 6 분',

      },
      {
        mid : 'PumaV400',
        idx : 2,
        process : 'O0229',
        timer : '04:34',
        count : '4/100',
        fTime : '84 시간 40 분',

      },
      {
        mid : 'Lynx220C',
        idx : 3,
        process : 'D580007-02-F',
        timer : '01:33',
        count : '459/500',
        fTime : '2 시간 36 분',

      },
      {
        mid : 'Puma240',
        idx : 4,
        process : 'WGR150D35H24-02-1',
        timer : '00:10',
        count : '70/100',
        fTime : '1 시간 31 분',

      },
      {
        mid : 'Lynx220CL',
        idx : 5,
        process : 'CS98D25H49-02-02',
        timer : '02:34',
        count : '12/100',
        fTime : '5 시간 0 분',

      },
      {
        mid : 'Lynx220SY',
        idx : 6,
        process : 'JIG-CD',
        timer : 'READY',
        count : '110/200',
        fTime : '23 시간 48 분',

      },
    ]
  })
};
</script>

