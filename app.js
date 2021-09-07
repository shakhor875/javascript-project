

function secondMemory(){
    const secondCost = 100;
    document.getElementById("memory-cost").innerText =secondCost;
    totalCalculation();
}

function firstMemory(){
    const firstCost = 00;
    document.getElementById("memory-cost").innerText = firstCost;
    totalCalculation();
}

function firstStorage(){
    const firstStorageCost = 00;
    document.getElementById("storage-cost").innerText = firstStorageCost;
    totalCalculation();
}

function secondStorage(){
    const secondStorageCost = 100;
    document.getElementById("storage-cost").innerText = secondStorageCost;
    totalCalculation();
}

function thirdStorage(){
    const thirdStorageCost = 180;
    document.getElementById("storage-cost").innerText = thirdStorageCost;
    totalCalculation();
}


function firstDelivery(){
    const firstDeliveryCost = 00;
    document.getElementById("delivery-cost").innerText = firstDeliveryCost;
    totalCalculation();
}

function secondDelivery(){
    const secondDeliveryCost = 20;
    document.getElementById("delivery-cost").innerText = secondDeliveryCost;
    totalCalculation();
}




function totalCalculation (){
   const bestPriceText = document.getElementById("best-price").innerText; 
   const bestPrice = parseInt(bestPriceText);
   
   const memoryCostText = document.getElementById("memory-cost").innerText;
   const memoryCost = parseInt(memoryCostText);
   
   const storageCostText = document.getElementById("storage-cost").innerText;
   const storageCost = parseInt(storageCostText);

   const deliveryCostText = document.getElementById("delivery-cost").innerText;
   const deliveryCost = parseInt(deliveryCostText);
  
   const totalCost = bestPrice + memoryCost + storageCost + deliveryCost ;


   document.getElementById("discount-btn").addEventListener("click" , function(){
    console.log("click")
    const discountInput = document.getElementById("discount-input").value;
    console.log(discountInput);
    if(discountInput == "stevekaku"){
        totalDiscount = totalCost * .25;
        document.getElementById("discount-price").innerText= totalDiscount;
    }

});
}


    




