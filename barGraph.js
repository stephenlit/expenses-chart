const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 82.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

//get todays date
const today = new Date();

//get the three letter day from the date, and make it lowercase.
const currentDay = today.toLocaleString("en-US", { weekday: "short" }).toLowerCase();

//get the graph div from the page.
const graph = document.querySelector(".graph");

//get the totals div from the page.
const totals = document.querySelector(".totals");

//use reduce to find the totals of all the amounts in the array of objects.
let totalResults = data.reduce((acc, curr) => acc + curr.amount,0);

//Add the total amount to the totals div.
totals.innerHTML = `$${totalResults}`;

//Layout for the bars that will be added to the graph div
//<div class="bar">
//<div class="percent"></div>
// <div class="label">mon</div>
//</div>;


//Loop through all the objects in the array and construct the bar layout for the graph.
data.map((day) => {
  let barDiv = document.createElement("div");
  barDiv.classList.add("bar");
  let percentDiv = document.createElement("div");
  
  percentDiv.classList.add("percent");
  percentDiv.setAttribute("style", "height:" + day.amount + "%");
  
  if (day.day === currentDay) {
    percentDiv.setAttribute("style", "background:var(--cyan)");
  }
  let labelDiv = document.createElement("div");
  labelDiv.classList.add("label");
  labelDiv.innerText = day.day;
  barDiv.appendChild(percentDiv);
  barDiv.appendChild(labelDiv);

  graph.appendChild(barDiv);
});
