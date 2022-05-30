const credits = 23580;
const pricePerDroid = 3000;

let input = prompt("Сколько дронов Вы хотите купить?");
    
    if (input === null) {
        alert("Отменено пользователем!");
    } 

    else { 
        let enter = parseInt(input);
        let totalPrice;      
        totalPrice = enter * pricePerDroid;
        if (totalPrice > credits) {
            alert("Недостаточно средств на счету!");
        }
        else {
            let runOutMoney = credits - totalPrice;
             alert(`Вы купили ${enter} дроидов, на счету осталось ${runOutMoney} кредитов.`);
             
            }
    }
    
    

  