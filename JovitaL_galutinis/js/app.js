document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("fruitButton").addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Paspaustas ieškoti mygtukas")
        const allFruit = document.getElementById("fruitButton");        
    
        fetch('https://www.fruityvice.com/api/fruit/all')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const fruitContainer = document.querySelector('.fruit-container');
            const row = document.createElement('div');
            row.classList.add('row');
            data.forEach(fruit => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('col-sm-4');                    
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${fruit.name}</h5>                      
                        <div class="details d-flex" id="fruitDetails">
                            <div class="calories">
                                <p>kcal<br>${fruit.nutritions.calories}</p>                                
                            </div>                                                 
                            <div class="fat">
                                <p>fat<br>${fruit.nutritions.fat}</p>                                
                            </div>                                                       
                            <div class="sugar">
                                <p>sugar<br>${fruit.nutritions.sugar}</p>                                
                            </div>                                                        
                            <div class="carbohydrates">
                                <p>carbohydr<br>${fruit.nutritions.carbohydrates}</br></p>                                
                            </div>                            
                            <div class="protein">
                                <p>protein<br>${fruit.nutritions.protein}</p>                               
                            </div>                            
                        </div>                                                                  
                    </div>
                    `;
                row.appendChild(card);
            })
            fruitContainer.appendChild(row)         
        })    
    })
    
    
    const fruitInput = document.querySelector('.form input[name="fruit"]');
    const fruitContainer = document.querySelector('.fruit-container');

    fruitInput.addEventListener('input', function () {
        const searchFruit = fruitInput.name.trim();

        if (searchFruit !== ''){
            fruitContainer.innerHTML = '';

            fetch(`https://www.fruityvice.com/api/fruit/${searchFruit}`)
            .then(response => data=response.json())
            .then(data => {
                console.log(data)
                const row = document.createElement('div');
                row.classList.add('row');
                data.result.forEach(fruit => {
                    const card = document.createElement('div');
                    card.classList.add('card col-sm-4');                    
                    card.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${fruit.name}</h5>                      
                            <div class="details d-flex" id="fruitDetails">
                                <div class="calories">
                                    <p>kcal<br>${fruit.nutritions.calories}</p>                                
                                </div>                                                 
                                <div class="fat">
                                    <p>fat<br>${fruit.nutritions.fat}</p>                                
                                </div>                                                       
                                <div class="sugar">
                                    <p>sugar<br>${fruit.nutritions.sugar}</p>                                
                                </div>                                                        
                                <div class="carbohydrates">
                                    <p>carbohydr<br>${fruit.nutritions.carbohydrates}</br></p>                                
                                </div>                            
                                <div class="protein">
                                    <p>protein<br>${fruit.nutritions.protein}</p>                               
                                </div>                            
                            </div>                                                                  
                        </div>
                    `;
                    row.appendChild(card);
                })
                fruitContainer.appendChild(row)
            })

        } else {
            fruitContainer.innerHTML = "No Results found.";
        }
    })
})





