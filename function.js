
const amount = 20;

    document.getElementById("call-btn").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance >= amount) {
        availableBalance = availableBalance - amount;
        document.getElementById("available-coin").innerText = availableBalance;

        alert("📞 Calling National Emergency Service 999...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">National Emergency Number</h1>
                <p class="text-[#5c5c5c]">999</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });

    // history clear 
    
    document.getElementById("clear-btn").addEventListener("click", function () {
    const historyContainer = document.getElementById("call-history");
    historyContainer.innerHTML = "";
    });


    // 2 no 

    const amount2 = 20;

    document.getElementById("call-btn2").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance2 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance2 >= amount2) {
        availableBalance2 = availableBalance2 - amount2;
        document.getElementById("available-coin").innerText = availableBalance2;

        alert("📞 Calling Police Helpline Service 999...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Police Helpline Number</h1>
                <p class="text-[#5c5c5c]">999</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });


    // 3 no

    const amount3 = 20;

    document.getElementById("call-btn3").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance3 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance3 >= amount3) {
        availableBalance3 = availableBalance3 - amount3;
        document.getElementById("available-coin").innerText = availableBalance3;

        alert("📞 Calling Fire Service 999...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Fire Service Number</h1>
                <p class="text-[#5c5c5c]">999</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });




    // 4 no

    const amount4 = 20;

    document.getElementById("call-btn4").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance4 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance4 >= amount4) {
        availableBalance4 = availableBalance4 - amount4;
        document.getElementById("available-coin").innerText = availableBalance4;

        alert("📞 Calling Ambulance Service 1994-999999...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Ambulance Service</h1>
                <p class="text-[#5c5c5c]">1994-999999</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });




    // 5 no

    const amount5 = 20;

    document.getElementById("call-btn5").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance5 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance5 >= amount5) {
        availableBalance5 = availableBalance5 - amount5;
        document.getElementById("available-coin").innerText = availableBalance5;

        alert("📞 Calling Women & Child Helpline Service 109...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Women & Child Helpline</h1>
                <p class="text-[#5c5c5c]">109</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });



    // 6 no

    const amount6 = 20;

    document.getElementById("call-btn6").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance6 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance6 >= amount6) {
        availableBalance6 = availableBalance6 - amount6;
        document.getElementById("available-coin").innerText = availableBalance6;

        alert("📞 Calling Anti-Corruption Service 106...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Anti-Corruption Helpline</h1>
                <p class="text-[#5c5c5c]">106</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });



    // 7 no

    const amount7 = 20;

    document.getElementById("call-btn7").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance7 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance7 >= amount7) {
        availableBalance7 = availableBalance7 - amount7;
        document.getElementById("available-coin").innerText = availableBalance7;

        alert("📞 Calling Electricity Outage Service 16216...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Electricity Helpline</h1>
                <p class="text-[#5c5c5c]">16216</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });



    // 8 no

    const amount8 = 20;

    document.getElementById("call-btn8").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance8 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance8 >= amount8) {
        availableBalance8 = availableBalance8 - amount8;
        document.getElementById("available-coin").innerText = availableBalance8;

        alert("📞 Calling Brac Service 16445...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Brac Helpline</h1>
                <p class="text-[#5c5c5c]">16445</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });



    // 9 no

    const amount9 = 20;

    document.getElementById("call-btn9").addEventListener("click", function (e) {
      e.preventDefault();

      let availableBalance9 = parseInt(document.getElementById("available-coin").innerText);

      if (availableBalance9 >= amount9) {
        availableBalance9 = availableBalance9 - amount9;
        document.getElementById("available-coin").innerText = availableBalance9;

        alert("📞 Calling Bangladesh Railway Service 163...");

        const historyContainer = document.getElementById("call-history");

        const now = new Date();
        const time = now.toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        historyItem.innerHTML = `
          <div class="rounded-[12px] mt-[20px] bg-[#eae7e7] p-[10px] flex justify-between items-center">
            <div>
                <h1 class="font-bold">Brac Helpline</h1>
                <p class="text-[#5c5c5c]">163</p>
            </div>
            <p>${time}</p>
          </div>
          
        `;


        historyContainer.appendChild(historyItem);
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      }
      
    });


    


  // love add


  document.addEventListener("DOMContentLoaded", () => {

    const heartCounter = document.getElementById("available-heart");
    let count = parseInt(heartCounter.textContent) || 0;

    const loveBtns = document.querySelectorAll("#love-click");

    loveBtns.forEach((btn) => {
      btn.style.cursor = "pointer"; 
      btn.addEventListener("click", () => {
        count++;
        heartCounter.textContent = count;
      });
    });
  });



  

// copy add



  let copyCount = 0;

 
  const availableCopyBtn = document.getElementById("available-copy");


  document.querySelectorAll('#click-copy-btn').forEach(btn => {
    btn.addEventListener("click", function () {
      
      const card = this.closest("div.border-2");
      const numEl = card.querySelector('#copy-number');
      const number = numEl ? numEl.textContent.trim() : "";

      if (number) {
        
        copyCount++;
        availableCopyBtn.textContent = copyCount + " Copy";

        if (navigator.clipboard && navigator.clipboard.writeText) {
         navigator.clipboard.writeText(number).catch(() => {});
       }

        
        alert("নাম্বার কপি হয়েছে : " + number);
      }
    });
  });


