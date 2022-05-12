<template>
  <Page>
    <StackLayout class="calendar-wrapper">
      <calendar-panel 
        @nextMont="nextMont"
        @prevMonth="prevMonth" 
        :monthName="monthName" 
        :nowYear="nowYear"
        @nextYear="nextYear"
      />
      <calendar-weekdays :weekdays="weekdays" />
      <calendar-days 
        :days="days"
        :currentDay="currentDay" 
        :nowMonth="nowMonth"
        :nowYear="nowYear"
      />
    </StackLayout>
  </Page>
</template>

<script>

  import CalendarPanel from "@/components/CalendarPanel.vue";
  import CalendarWeekdays from "@/components/CalendarWeekdays.vue"
  import CalendarDays from "@/components/CalendarDays.vue";

  export default {
    components: {
      CalendarPanel,
      CalendarWeekdays,
      CalendarDays
    },
    data: () => ({
      nowDate: new Date(),
      currentDate: new Date(),

      monthes: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],

      nowMonth: new Date().getMonth(),
      nowYear: new Date().getFullYear(),
      days: [],
    }),
    created() {
      this.calcDays()
    },
    computed: {
      monthName() {
        return this.monthes[this.nowMonth]
      },
      currentDay() {
        return {
          day: this.currentDate.getDate(),
          month: this.currentDate.getMonth(),
          year: this.currentDate.getFullYear()
        }
      },
      monthDays() {
        return new Date(this.nowYear, this.nowMonth + 1, 0).getDate()
      }
    },
    methods: {
      calcDays() {
        this.days = []

        for (let i = 1; i <= this.monthDays; i++) {
          this.days.push(i)
        }

        let beforeDaysInCurrentMont = new Date(this.nowYear, this.nowMonth, 0).getDay()
        let beforeMontDays = new Date(this.nowYear, this.nowMonth, 0).getDate()

        for (let i = beforeDaysInCurrentMont; i >= 1; i--) {
          this.days.unshift(beforeMontDays)
          beforeMontDays--
        }
        
      },
        //обновляем месяц на предыдуший
      prevMonth() {
        if (this.nowMonth === 0) this.nowYear--

        this.currentDate.setMonth(this.currentDate.getMonth() -1)
        this.nowMonth = this.currentDate.getMonth()

        this.calcDays()
      },
        //обновляем месяц на следующий
      nextMont() {
        if (this.nowMonth === 11) this.nowYear++

        this.currentDate.setMonth(this.currentDate.getMonth() + 1)
        this.nowMonth = this.currentDate.getMonth()

        this.calcDays()
      },
      nextYear() {
        this.nowYear++
        this.calcDays()
      },    
    },
  };
</script>

<style lang="scss">
  .calendar-wrapper {
    width: 90%;
    height: 80%;
    box-shadow: 0px 6px 37px rgba(156, 85, 124, 0.1);
    border-radius: 15px;
    margin-top: 50px;
    padding: 15px;
  }
</style>
