
const findItem = categories.querySelectorAll(".item");
const quantityItem = findItem.length;
console.log("Number of categories:", quantityItem);

findItem.forEach(element => {
    const itemTitle = element.querySelector("h2").textContent;
    const quantityElem = element.querySelectorAll("li").length;
    console.log(`Category: ${itemTitle} \n Elements: ${quantityElem}`);
});


// З використанням властивостей і методів DOM-елементів, 
// напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в 
// ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories 
// знайде й виведе в консоль текст заголовка елемента 
//(тегу <h2>) і кількість
// елементів у категорії (усіх <li>, вкладених у нього).