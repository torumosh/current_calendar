<template>
  <FlexboxLayout height="300" class="calendar-days">
    <Label
      v-for="(day, index) in days"
      :key="index"
      :text="day"
      class="calendar-panel__mounth"
      :style="{
        'background-color': checkCurrentDay(day)
      }"
      width="44"
      height="44"
    />
  </FlexboxLayout>
</template>

<script scoped>
export default {
  props: {
    days: {
      type: Array,
    },
    currentDay: {
      type: Object
    },
    nowMonth: {
      type: Number
    },
    nowYear: {
      type: Number
    }
  },
  methods: {
    checkCurrentDay(day) {
      return day  === this.currentDay.day && this.nowMonth === this.currentDay.month && this.currentDay.year === this.nowYear
        ? '#2c75ff' 
        : '#e9edf5'
    }
  }
};
</script>

<style lang="scss">
.calendar-days {
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  Label {
    background-color: #929292;
    text-align: center;
    padding-top: 36px;
    margin-left: 10px;
    margin-bottom: 15px;
    border-radius: 50%;
  }
}
</style>
