document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const image = "./assets/independence-day-background.jpg";
  setTimeout(() => {
    countdownElement.textContent = "10" + " " + "🖐️🖐️";
    setTimeout(() => {
      countdownElement.textContent = "9" + " " + "🕘";
      setTimeout(() => {
        countdownElement.textContent = "8" + " " + "🖐️👌";
        setTimeout(() => {
          countdownElement.textContent = "7" + " " + "🖐️✌️";
          setTimeout(() => {
            countdownElement.textContent = "6" + " " + "🖐️☝️";
            setTimeout(() => {
              countdownElement.textContent = "5" + " " + "🖐️";
              setTimeout(() => {
                countdownElement.textContent = "4" + " " + "😜";
                setTimeout(() => {
                  countdownElement.textContent = "3" + " " + "👌";
                  setTimeout(() => {
                    countdownElement.textContent = "2" + " " + "✌️";
                    setTimeout(() => {
                      countdownElement.textContent = "1" + " " + "☝️";
                      setTimeout(() => {
                          countdownElement.textContent = "❤️Happy Independence Day!...🎉😜";
                          document.body.style.backgroundImage = `url('${image}')`;
                          document.body.style.backgroundRepeat = "no-repeat";
                          document.body.style.backgroundSize = "cover";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
