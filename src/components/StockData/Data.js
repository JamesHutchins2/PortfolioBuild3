
import Chart from 'chart.js/auto'




export async function getTreasuries() {
    
    
    //declarations 
    const column_names = ["Date", "1 Mo", "2 Mo", "3 Mo", "6 Mo", "1 Yr", "2 Yr", "3 Yr", "5 Yr", "7 Yr", "10 Yr", "20 Yr", "30 Yr"]
    const APIkey = "3d6HM6gtxwchw3aErsst"
    const response = await fetch(`https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD.json?api_key=${APIkey}`);
    
    //request data from end point 
    const data = await response.json()
    //check that the request is returned
    console.log("request returned")
    //log the data
    console.log(data)
        //get the data from the 'data' key data from the json onbject
    //make an array from data.column_names
    
    console.log(column_names)
    //get the 0 to 99th array of data.data
    const info =  new Array(99)
    for(let i = 0; i < 99; i++){
        info[i] = data.dataset.data[i]
    }
    console.log(info)
    arrangeData()
async function arrangeData(){
    //take column names and info and arrange info into a table with column names as the headers
    //make a new array with the column names as the headers
    const table = new Array(99)
    for(let i = 0; i < 99; i++){
        table[i] = new Array(13)
    }
    for(let i = 0; i < 99; i++){
        for(let j = 0; j < 13; j++){
            table[i][j] = info[i][j]
        }
    }
    console.log(table)
}
//lets make an array of the date values 1mo, 2mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
const date = new Array(99)
for(let i = 98; i >= 0; i--){
    date[i] = info[i][0]
}
console.log(date)
//lets make an array of the 1mo values
const oneMo = new Array(99)
for(let i = 0; i < 99; i++){
    oneMo[i] = info[i][1]
}
console.log(oneMo)
//lets make an array of the 2mo values
const twoMo = new Array(99)
for(let i = 0; i < 99; i++){
    twoMo[i] = info[i][2]
}
console.log(twoMo)
//lets make an array of the 3mo values
const threeMo = new Array(99)
for(let i = 0; i < 99; i++){
    threeMo[i] = info[i][3]
}
console.log(threeMo)
//lets make an array of the 6mo values
const sixMo = new Array(99)
for(let i = 0; i < 99; i++){
    sixMo[i] = info[i][4]
}
console.log(sixMo)
//lets make an array of the 1yr values
const oneYr = new Array(99)
for(let i = 0; i < 99; i++){
    oneYr[i] = info[i][5]

}
console.log(oneYr)
//lets make an array of the 2yr values
const twoYr = new Array(99)
for(let i = 0; i < 99; i++){
    twoYr[i] = info[i][6]
}
console.log(twoYr)
//lets make an array of the 3yr values
const threeYr = new Array(99)
for(let i = 0; i < 99; i++){
    threeYr[i] = info[i][7]
}
console.log(threeYr)
//lets make an array of the 5yr values
const fiveYr = new Array(99)
for(let i = 0; i < 99; i++){
    fiveYr[i] = info[i][8]
}
console.log(fiveYr)
//lets make an array of the 7yr values
const sevenYr = new Array(99)

for(let i = 0; i < 99; i++){
    sevenYr[i] = info[i][9]
}
console.log(sevenYr)
//lets make an array of the 10yr values
const tenYr = new Array(99)
for(let i = 0; i < 99; i++){
    tenYr[i] = info[i][10]
}
console.log(tenYr)
//lets make an array of the 20yr values
const twentyYr = new Array(99)

for(let i = 0; i < 99; i++){
    twentyYr[i] = info[i][11]
}
console.log(twentyYr)
//lets make an array of the 30yr values
const thirtyYr = new Array(99)
for(let i = 0; i < 99; i++){
    thirtyYr[i] = info[i][12]
}
console.log(thirtyYr)
//lets make a chart

//create a set of plot objects
const datasets= [{
    label: "US 1 Month Treasury Yield",
    data: oneMo,
    borderColor: "#3e95cd",
    
},{
    label: "US 2 Month Treasury Yield",
    data: twoMo,
    borderColor: "#8e5ea2",

},{
    label: "US 3 Month Treasury Yield",
    data: threeMo,
    borderColor: "#3cba9f",

},{
    label: "US 6 Month Treasury Yield",
    data: sixMo,
    borderColor: "#e8c3b9",

},{
    label: "US 1 Year Treasury Yield",
    data: oneYr,
    borderColor: "#c45850",

},{
    label: "US 2 Year Treasury Yield",
    data: twoYr,
    borderColor: "#3e95cd",

},{
    label: "US 3 Year Treasury Yield",
    data: threeYr,
    borderColor: "#8e5ea2",

},{
    label: "US 5 Year Treasury Yield",
    data: fiveYr,
    borderColor: "#3cba9f",

},{
    label: "US 7 Year Treasury Yield",
    data: sevenYr,
    borderColor: "#e8c3b9",
    
},{
    label: "US 10 Year Treasury Yield",
    data: tenYr,
    borderColor: "#c45850",

},{
    label: "US 20 Year Treasury Yield",
    data: twentyYr,
    borderColor: "#3e95cd",

},{
    label: "US 30 Year Treasury Yield",
    data: thirtyYr,
    borderColor: "#8e5ea2",

}
]
const diplayObj = [];
for(let i = 0; i < datasets.length; i++){
    
        diplayObj.push(datasets[i])
        i = i+1

}

new Chart(document.getElementById("acquisitions"), {
    type: 'line',
    data: {
        labels: date,
        datasets: diplayObj
  }
}
);
}
