function solve(input) {
    let productName = input.shift()
    let townName = input.shift()
    let quantity = Number(input.shift());

    if (townName == "Sofia") {
        if (productName == "coffee") {
            console.log(quantity * 0.50);
        } else if (productName == "water") {
            console.log(quantity * 0.80);
        } else if (productName == "beer") {
            console.log(quantity * 1.20);
        } else if (productName == "sweets") {
            console.log(quantity * 1.45);
        } else if (productName == "peanuts") {
            console.log(quantity * 1.60);
        }
    } else if (townName == "Plovdiv") {
        if (productName == "coffee") {
            console.log(quantity * 0.40);
        } else if (productName == "water") {
            console.log(quantity * 0.70);
        } else if (productName == "beer") {
            console.log(quantity * 1.15);
        } else if (productName == "sweets") {
            console.log(quantity * 1.30);
        } else if (productName == "peanuts") {
            console.log(quantity * 1.50);
        }
    } else if (townName == "Varna") {
        if (productName == "coffee") {
            console.log(quantity * 0.45);
        } else if (productName == "water") {
            console.log(quantity * 0.70);
        } else if (productName == "beer") {
            console.log(quantity * 1.10);
        } else if (productName == "sweets") {
            console.log(quantity * 1.35);
        } else if (productName == "peanuts") {
            console.log(quantity * 1.55);
        }
    }
}

solve(['sweets', 'Sofia', 2.23]);