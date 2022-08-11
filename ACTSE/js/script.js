function thaiquarter() {
  //Year
  function getYear(date) {
    date = date || new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);

    return [this_fy];
  }
  console.log(getYear());

  //Quarter
  function getQuarter(date) {
    date = date || new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;

    return [this_quarter];
  }
  console.log(getQuarter()); // Output Quarter

  //Month
  function getMonth(date) {
    date = date || new Date();
    let this_month = date.getMonth() + 1;
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;

    return [this_month];
  }
  console.log(getMonth()); // Output Month

  //Start & End date Q1
  function getStartAndEndDateQ1() {
    let q1_start;
    let q1_end;
    let date = new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);
    if ((this_quarter = 1)) {
      q1_start = `${this_fy - 1}-10-01`;
      q1_end = `${this_fy - 1}-01-01`;
    }

    return [q1_start, q1_end];
  }
  console.log(getStartAndEndDateQ1()); //Output Start & End date Q1

  //Start & End date Q2
  function getStartAndEndDateQ2() {
    let q2_start;
    let q2_end;
    let date = new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);
    if ((this_quarter = 2)) {
      q2_start = `${this_fy}-01-01`;
      q2_end = `${this_fy}-04-01`;
    }
    return [q2_start, q2_end];
  }
  console.log(getStartAndEndDateQ2()); //Output Start & End date Q2

  //Start & End date Q3
  function getStartAndEndDateQ3() {
    let q3_start;
    let q3_end;
    let date = new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);
    if ((this_quarter = 3)) {
      q3_start = `${this_fy}-04-01`;
      q3_end = `${this_fy}-07-01`;
    }
    return [q3_start, q3_end];
  }
  console.log(getStartAndEndDateQ3()); //Output Start & End date Q3

  //Start & End date Q4
  function getStartAndEndDateQ4() {
    let q4_start;
    let q4_end;
    let date = new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);
    if ((this_quarter = 4)) {
      q4_start = `${this_fy}-07-01`;
      q4_end = `${this_fy}-10-01`;
    }
    return [q4_start, q4_end];
  }
  console.log(getStartAndEndDateQ4()); //Output Start & End date Q4

  //First date current month
  function getFirstDateCurrentMonth() {
    let q1_start;
    let this_month_start;
    let date = new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);
    if ((this_quarter = 1)) {
      q1_start = `${this_fy - 1}-10-01`;
    } else if ((this_quarter = 2)) {
      q2_start = `${this_fy}-01-01`;
    } else if ((this_quarter = 3)) {
      q3_start = `${this_fy}-04-01`;
    } else if ((this_quarter = 4)) {
      q3_start = `${this_fy}-07-01`;
    }

    if (this_quarter == 1) {
      this_month_start = q1_start;
    } else if (this_quarter == 2) {
      this_month_start = q2_start;
    } else if (this_quarter == 3) {
      this_month_start = q3_start;
    } else if (this_quarter == 4) {
      this_month_start = q4_start;
    }
    return [this_month_start];
  }
  console.log(getFirstDateCurrentMonth()); // Output first date current month

  //First date next month
  function getFirstDateNextMonth() {
    let q1_start;
    let this_month_end;
    let date = new Date();
    let this_quarter = Math.floor(date.getMonth() / 3) + 2;
    this_quarter -= this_quarter > 4 ? 4 : 0;
    let this_fy = date.getFullYear() + (this_quarter == 1 ? 1 : 0);

    if (this_quarter == 1) {
      q1_start = `${this_fy - 1}-10-01`;
      this_month_end = q1_start;
    } else if (this_quarter == 2) {
      q2_start = `${this_fy}-01-01`;
      this_month_end = q2_start;
    } else if (this_quarter == 3) {
      q3_start = `${this_fy}-04-01`;
      this_month_end = q3_start;
    } else if (this_quarter == 4) {
      q4_start = `${this_fy}-07-01`;
      this_month_end = q4_start;
    }

    return [this_month_end];
  }
  console.log(getFirstDateNextMonth()); // Output first date next month
}

thaiquarter();
