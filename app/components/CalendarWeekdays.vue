<template>
  <FlexboxLayout height="50" class="calendar-weekdays">
    <Label 
      v-for="(weekday, index) in weekdays"
      :key="index"
      :text="weekday"
      class="calendar-panel__mounth" 
      width="44" 
      height="44"
    />
  </FlexboxLayout>
</template>

<script>
export default {
  props: {
    weekdays: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
  .calendar-weekdays {
    justify-content: flex-start;
    background-color: #e2d7d7;
    margin-bottom: 40px;
    border-radius: 25px;

    Label {
      text-align: center;
      padding-top: 46px;
      margin-left: 10px;
      margin-bottom: 15px;
      border-radius: 50%;
      color: rgb(20, 118, 223);
    }
  }
</style>