let country = prompt("Enter country");

if (country!==null) {
    country = country.toLowerCase();
}

let price;

switch (country) {
    case "китай":
        price = 100;
        break;
    case "чили":
        price = 250;
        break;
    case "австралия":
        price = 170;
        break;
    case "индия":
        price = 80;
        break;
    case "ямайка":
        price = 120;
        break;
    default:
        price = null;
}

if (price !== null) {
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
} else {
    alert("В вашей стране доставка не доступна");
}
