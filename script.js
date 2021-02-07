fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayFood(data.categories))

const displayFood =foods =>{
    const ul =document.getElementById('foods');
for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    const li =document.createElement('li');
    li.innerText =food;
    ul.appendChild(li);
    
}
}