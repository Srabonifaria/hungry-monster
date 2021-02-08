const searchMeals =async() =>{
const mealText =document.getElementById('search-field').value
const url =`https://www.themealdb.com/api/json/v1/1/categories.php${mealText}`
const res = await fetch(url)
 const data =await res.json();
displayMeals(data.categories);
}

const displayMeals = meals => {
    const mealsFood =document.getElementById('meals');
    mealsFood.innerHTML=''
    meals.forEach(meal =>{
        console.log(meal)
        const mealDiv =document.createElement('li');
        mealDiv.className ='mealFood-item'
        mealDiv.innerHTML=`
        <div class="col-md-9">
        <h3 class="meals-name">${meal.strCategory} </h3>
        <img src="${meal.strCategoryThumb}">
        </div>
        <div class="col-md-3 text-md-right text-center">
        <button onclick="getIngedients('${meal.strCategoryDescription}')" class="btn btn-success">Get Ingredients</button>
        </div>
        `;
        mealsFood.appendChild(mealDiv);
    })

}
     const getIngedients =async(strCategoryDescription) => {
         const url =`https://www.themealdb.com/api/json/v1/1/list.php?i=list${strCategoryDescription}`
        const res =await fetch(url)
        const data =res.json();
       displayMeal(data.meals)
    }

    const displayMeal =detail =>{
        const mealDiv =document.getElementById('mealDetails');
        mealDiv.innerText =detail;
    }
// const renderMealInfo =strIngredient=>{
//     console.log(strIngredient);
//     const mealDiv =document.getElementById('mealDetails');
//     mealDiv.innerHTML =`
//     <p>${meals.strIngredient}</p>
//     <p>${meals.strDescription}</p>
//     `
// }
