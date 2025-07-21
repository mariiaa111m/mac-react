import React from 'react';

const PopularMeals = () => (
   <section class="section popular-meals">
    <h3 class="section-title">Popular Meals</h3>
    <div class="grid">
      <div class="card">
        <img src="https://img.freepik.com/free-photo/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns_141793-4883.jpg?semt=ais_hybrid&w=740" alt="Big Mac"/>
        <h4>Big Mac</h4>
        <p>$5.99</p>
      </div>
      <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwxM7oWiELfKwea6aROva78RdLR6DIVdVmA&s" alt="Crispy Chicken"/>
        <h4>Crispy Chicken</h4>
        <p>$6.49</p>
      </div>
      <div class="card">
        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/mcdonalds-french-fries.jpg?quality=82&strip=1" alt="Fries"/>
        <h4>French Fries</h4>
        <p>$2.99</p>
      </div>
    </div>
  </section>
);

export default PopularMeals;