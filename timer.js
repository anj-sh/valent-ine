const startDate = new Date("2020-09-21T00:00:00");

    function updateTimer() {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) { seconds += 60; minutes--; }
      if (minutes < 0) { minutes += 60; hours--; }
      if (hours < 0) { hours += 24; days--; }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) { months += 12; years--; }

      document.getElementById("years").textContent = String(years).padStart(2, "0");
      document.getElementById("months").textContent = String(months).padStart(2, "0");
      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);

// const startDate = new Date("2020-09-21T18:00:00"); // заміни на вашу дату

//     function updateCounter() {
//       const now = new Date();
//       const diff = now - startDate;

//       const seconds = Math.floor(diff / 1000) % 60;
//       const minutes = Math.floor(diff / 1000 / 60) % 60;
//       const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//       const days = Math.floor(diff / 1000 / 60 / 60 / 24);

//       document.getElementById("timeTogether").textContent =
//         `${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
//     }

//     updateCounter(); // початковий виклик
//     setInterval(updateCounter, 1000); // оновлення щосекунди

    // const startDate2 = new Date("2020-09-21T00:00:00"); // заміни на вашу дату

    // function updateCounter() {
    //   const now2 = new Date();

    //   let years = now2.getFullYear() - startDate2.getFullYear();
    //   let months = now2.getMonth() - startDate2.getMonth();
    //   let days = now2.getDate() - startDate2.getDate();
    //   let hours = now2.getHours() - startDate2.getHours();
    //   let minutes = now2.getMinutes() - startDate2.getMinutes();
    //   let seconds = now2.getSeconds() - startDate2.getSeconds();

    //   // Підрахунок, якщо якісь значення стали від'ємними
    //   if (seconds < 0) {
    //     seconds += 60;
    //     minutes--;
    //   }
    //   if (minutes < 0) {
    //     minutes += 60;
    //     hours--;
    //   }
    //   if (hours < 0) {
    //     hours += 24;
    //     days--;
    //   }
    //   if (days < 0) {
    //     const prevMonth = new Date(now2.getFullYear(), now2.getMonth(), 0);
    //     days += prevMonth.getDate();
    //     months--;
    //   }
    //   if (months < 0) {
    //     months += 12;
    //     years--;
    //   }

    //   document.getElementById("timeTogether").textContent =
    //     `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    // }

    // updateCounter();
    // setInterval(updateCounter, 1000);