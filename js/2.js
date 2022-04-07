//business cacluations

//gross profits = sales revenue - cost of sales 

let grossProfit = 0;
let salesRevenue = 10;
let costOfSales = 3;

grossProfit = salesRevenue - costOfSales;
console.log(grossProfit);

// Net profit = gross profit − other operating expenses and interest

let otherOperatingExpensesAndIntrests = 10;

netProfit = grossProfit - otherOperatingExpensesAndIntrests;
console.log(netProfit);

// Gross Profit Margin = (gross profit ÷ sales revenue) × 100

let grossProfitMargin = (grossProfit / salesRevenue)*100;
console.log(grossProfitMargin);

// Net profit margin = 	(Net profit ÷ Sales Revenue) × 100

let netProfitMargin = (netProfit / salesRevenue)*100;
console.log(netProfitMargin)

// Average Rate of Return = (average anual profit(total profit/ number of years)/cost of investment)*100

let averageAnualProfit = 1000;
let totalProfit = 100;
let numberOfYears = 2;
let costOfInvestment = 10;

let averageRateOfReturn = (averageAnualProfit*(totalProfit/ numberOfYears)/costOfInvestment)*100;
console.log(averageRateOfReturn);

//
