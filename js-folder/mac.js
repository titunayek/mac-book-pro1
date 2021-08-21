
/* Cost function */
function getValue(item, price) {
    const itemText = document.getElementById(item + '-price');
    let itemCost = itemText.innerText;
    itemText.innerText = price;  
    totalMany();
};
/* function Calculation */
function totalMany() {
    const memoryCost = document.getElementById('memory-price');
    const storageCost = document.getElementById('storage-price');
    const deliveryCost = document.getElementById('delivery-price');
    const totalText = document.getElementById('total-price');
    const bestCost = parseInt(document.getElementById('best-cost').innerText);
    const totalTextAmount = document.getElementById('total');
    let totalAmount = parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText) + parseInt(bestCost);

    totalText.innerText = totalAmount;
    totalTextAmount.innerText = totalAmount;

    return totalAmount;
};
/* Memory */
document.getElementById('memory-1').addEventListener('click', function() {
    getValue('memory', 0);
});
document.getElementById('memory-2').addEventListener('click', function() {
    getValue('memory', 180);
});

/* storage */
document.getElementById('storage-1').addEventListener('click', function() {
    getValue('storage', 0);
});
document.getElementById('storage-2').addEventListener('click', function() {
    getValue('storage', 100);
});
document.getElementById('storage-3').addEventListener('click', function() {
    getValue('storage', 180);
});
/* delivery */
document.getElementById('delivery-free').addEventListener('click', function() {
    getValue('delivery', 0);
});
document.getElementById('delivery-cost').addEventListener('click', function() {
    getValue('delivery', 20);
});
/* calculation code*/
document.getElementById('promo-code').addEventListener('click', function(){
    const priceMany = totalMany();
    const totalCostPrice = document.getElementById('total');
    const promoText = document.getElementById('input-text');

    if(promoText.value == 'stevekaku') {
        let promoMany = priceMany * 0.2;
        let price = priceMany - promoMany;

        console.log(promoMany, priceMany, price);

        totalCostPrice.innerText = price.toFixed(2);
        promoText.value = '';
    }
});
