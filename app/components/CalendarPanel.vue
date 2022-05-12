<template>
  <StackLayout>
    <Label
        class="calendar-panel__year"
        :text="yearName"
        width="120"
        height="30"
      />
      <Button 
          @tap="nextYear"
          text=">>" 
          class="calendar-panel__next" 
          width="30" 
          height="30" 
      />
    <FlexboxLayout height="50" width="240" class="calendar-panel">
      <Button
        @tap="prevMonth"
        text="<"
        class="calendar-panel__prev"
        width="30"
        height="30"
      />
      <Label
        class="calendar-panel__mounth"
        :text="monthName"
        width="120"
        height="30"
      />
      <Button 
        @tap="nextMont"
        text=">" 
        class="calendar-panel__next" 
        width="30" 
        height="30" 
      />
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
export default {
  props: {
    monthName: {
      type: String,
    },
    nowYear: {
      type: Number
    }
  },
  computed: {
    yearName() {
      return `${this.nowYear}г.`
    }
  },
  methods: {
    prevMonth() {
      this.$emit('prevMonth');
    },
    nextMont() {
      this.$emit('nextMont')
    },
    nextYear() {
      this.$emit('nextYear')
    } 
  }
};
</script>

<style lang="scss">
.calendar-panel {
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.calendar-panel__prev,
.calendar-panel__next {
  border-radius: 50%;
  font-weight: 600;
}
.calendar-panel__year {
  text-align: left;
  font-size: 25px;
  margin-bottom: 20px;
}

.calendar-panel__mounth {
  padding-top: 18px;
  text-align: center;
  font-weight: 600;
}
.calendar-panel__now {
  padding-top: 18px;
  text-align: left;
  font-weight: 600;
  color: rgb(222, 3, 3);
}
</style>
