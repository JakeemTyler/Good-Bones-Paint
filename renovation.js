function addPaint(totalCost, callback) {
    let cost = prompt("Enter the cost of the paint: ");
    cost = parseFloat(cost);
        if (cost > 100)
        cost *= 1.1;
    let paintArea = document.querySelector(".totalPaint");
    paintArea.innerHTML = `Your Paint $ :${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

// FURNITURE COST
function addFurniture(totalCost, callback) {
    let cost = prompt("Enter the cost of the furniture ");
    cost = parseFloat(cost);
        if (cost < 500) 
        cost *= .9;
    let furnitureArea = document.querySelector(".totalFurniture");
    furnitureArea.innerHTML = `Your Furniture $ :${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

// FLOOR COVERINGS
function addFloorCoverings(totalCost, callback) {
    let cost = prompt("Enter the cost of the floor coverings: ");
    cost = parseFloat(cost);
        if (cost < 500)
        cost *= .85;
    let floorArea = document.querySelector(".totalFloorCoverings");
    floorArea.innerHTML = `Your Floor Coverings $ :${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}

// TOTAL COST
const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Your Total $ :${cost.toFixed(2)}`;
}
let totalCost = 0;

// DISPLAYING PROMPTS AND TEXT
totalCost = addPaint(totalCost, updateTotals);
totalCost = addFurniture(totalCost, updateTotals);
totalCost = addFloorCoverings(totalCost, updateTotals);
