
let amount, fromCurrency,toCurrency, money=0;
    function convertC() {
        amount = document.getElementById("sotien").value;
        fromCurrency = document.getElementById("chon").value;
        toCurrency = document.getElementById("chon1").value;
        if (fromCurrency === "VND" && toCurrency === "USD")
            money = amount/23000;
        document.getElementById("result").innerHTML = "result: " + money;

        if (fromCurrency === "USD" && toCurrency === "VND")
            money = amount*23000;
        document.getElementById("result").innerHTML = "result: " + money;

        if (fromCurrency === "VND" && toCurrency === "VND")
            money=amount;
        document.getElementById("result").innerHTML = "result: " + money;

        if (fromCurrency === "USD" && toCurrency === "USD")
            money = amount;
        document.getElementById("result").innerHTML = "result: " + money;


    }


