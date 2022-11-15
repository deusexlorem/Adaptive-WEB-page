
window.addEventListener("DOMContentLoaded", function() {
    window.dispatchEvent(new Event('resize'));
});

let mBike = [];

window.onresize = function() {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(viewport_width < 720){
        
        document.querySelector('.tabs').innerHTML =  '<div class="accordion"><div class="accordion-item"><div class = "accordion-item-trigger">Горный велосипед<img src="images/arrow.svg" alt="arw"></div><div class = "accordion-item-content"><div class="info"><img id = "mBike" src="images/mBikes.svg" alt="">  <h1>Велосипед STELS Navigator 510 HD 26 2022</h1><p>Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.</p><p>Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.</p> </div><hr><div class="list"><h3>Характеристики</h3><ol id = "mBike-ol"><li>Двойной обод</li><li>Алюминиевый сплав</li><li>Колеса диаметром 26 дюймов</li><li>Покрышки 26х1,95</li></ol></div><div class="add"><h3>Добавить характеристику</h3><form action="" method="get"><input type="text" name = "Mbike-add" class = "mBike-field" id = "field"  placeholder="Алюминиевый сплав"><input type="button" value="Добавить" id = "btn" class = "mBike-btn"></form><div id = "mBike-valid" class="valid"></div></div></div>   </div> <div class="accordion-item"><div class="accordion-item"><div class = "accordion-item-trigger">Женский велосипед<img src="images/arrow.svg" alt="arw"></div><div class = "accordion-item-content"><div class="info">   <img id = "mBike" src="images/wBikes.svg" alt=""><h1>Велосипед SCHWINN Traveler women 2022</h1><p>Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.</p><p>На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.</p></div><hr><div class="list"><h3>Характеристики</h3><ol id="wBike-ol"><li>Стальная рама</li><li>Жесткая вилка</li><li>Колеса диаметром 24 дюймов</li><li>7 скоростей</li></ol></div><div class="add"><h3>Добавить характеристику</h3><form action="" method="get"><input type="text" name = "Wbike-add" class = "wBike-field" id = "field"  placeholder="Алюминиевый сплав"><input type="button" value="Добавить" id = "btn" class = "wBike-btn"></form><div id = "wBike-valid" class="valid"></div></div></div></div>'
        
        document.querySelectorAll('.accordion-item-trigger').forEach((item) =>
            item.addEventListener('click', () =>{
                const parent = item.parentNode;

                if(parent.classList.contains('accordion-item-active')){
                    parent.classList.remove('accordion-item-active')
                } else {
                    document.querySelectorAll('.accordion-item').forEach((child) =>
                        child.classList.remove('accordion-item-active')
                    )

                    parent.classList.toggle('accordion-item-active')
                }
            }) 
        )
        
        document.querySelector('.accordion-item-trigger').click();

        document.querySelector('.wBike-btn').addEventListener('click', () => {
            let input = document.querySelector('input[name = "Wbike-add"]');
            let value = input.value;
            let regexp = /<[^<>]+>/g;
            let valid = document.getElementById('wBike-valid');
            
            function active(){ 
                valid.classList.add('valid-active')
                valid.classList.remove('valid');
            }
            function deactive(){ 
                valid.classList.add('valid')
                valid.classList.remove('valid-active');
            }
            if(!input.value){
                active();

                valid.innerHTML = '<p class = "red" >Поле необходимо заполнить</p>'
            } else if (value.match(regexp)){
                active();

                valid.innerHTML = '<p class = "red" >Поле содержит запрещенные символы</p>'
            } else {
                active();

                valid.innerHTML = '<button class = "ok" id = "wBikeOk" >Окей</button><button class = "no" id = "wBikeNo" >Отмена</button>'
                
                document.querySelector('#wBikeOk').addEventListener('click', () => {
                    
                    document.getElementById('wBike-ol').insertAdjacentHTML('beforeend', `<li>${input.value.trim()}</li>`)

                    input.value = '';

                    deactive()
                })

                document.querySelector('#wBikeNo').addEventListener('click', () => {
                    input.value = '';

                    deactive()   
                })
            }
        })
        
        document.querySelector('.mBike-btn').addEventListener('click', () => {
            let input = document.querySelector('input[name = "Mbike-add"]');
            let value = input.value;
            let regexp = /<[^<>]+>/g;
            let valid = document.getElementById('mBike-valid');
            
            function active(){ 
                valid.classList.add('valid-active')
                valid.classList.remove('valid');
            }
            function deactive(){ 
                valid.classList.add('valid')
                valid.classList.remove('valid-active');
            }
            if(!value){
                active();

                valid.innerHTML = '<p class = "red" >Поле необходимо заполнить</p>'
            } else if (value.match(regexp)){
                active();

                valid.innerHTML = '<p class = "red" >Поле содержит запрещенные символы</p>'
            } else {
                active();

                valid.innerHTML = '<button class = "ok" id = "mBikeOk" >Окей</button><button class = "no" id = "mBikeNo" >Отмена</button>'
                
                document.querySelector('#mBikeOk').addEventListener('click', () => {
                    
                    document.getElementById('mBike-ol').insertAdjacentHTML('beforeend', `<li>${input.value.trim()}</li>`)

                    input.value = '';

                    deactive()
                })

                document.querySelector('#mBikeNo').addEventListener('click', () => {
                    input.value = '';

                    deactive()

                    
                })
            }

            
        })
        
    } else {
        
        document.querySelector('.tabs').innerHTML =  '<div class="tabs-triggers"><a href="#tab-1" class="tabs-triggers-item">Горный велосипед</a><a href="#tab-2" class="tabs-triggers-item">Женский велосипед</a></div><div class="tabs-content"><div id = "tab-1" class="tabs-content-item"><div class="info"><img id = "mBike" src="images/mBike.svg" alt="">  <h1>Велосипед STELS Navigator 510 HD 26 2022</h1><p>Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.</p><p>Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.</p> </div><hr><div class="list"><h3>Характеристики</h3><ol id="mBike-ol"><li>Двойной обод</li><li>Алюминиевый сплав</li><li>Колеса диаметром 26 дюймов</li><li>Покрышки 26х1,95</li></ol></div><div class="add"><h3>Добавить характеристику</h3><form action="" method="get"><input type="text" name = "Mbike-add" class = "mBike-field" id = "field"  placeholder="Алюминиевый сплав"><input type="button" value="Добавить" id = "btn" class = "mBike-btn"></form><div class="valid" id = "mBike-valid"> </div></div></div><div id = "tab-2" class="tabs-content-item"><div class="info"><img id = "mBike" src="images/wBike.svg" alt=""> <h1>Велосипед SCHWINN Traveler women 2022</h1><p>Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.</p><p>На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.</p></div><hr> <div class="list"><h3>Характеристики</h3><ol id="wBike-ol"><li>Стальная рама</li><li>Жесткая вилка</li><li>Колеса диаметром 24 дюймов</li><li>7 скоростей</li></ol></div><div class="add"><h3>Добавить характеристику</h3><form action="" method="get"><input type="text" name = "Wbike-add"  class = "mBike-field" id = "field"  placeholder="Алюминиевый сплав"><input type="button" value="Добавить" id = "btn" class = "wBike-btn"></form><div class="valid" id = "wBike-valid"> > </div></div></div></div>'
        
        
        document.querySelectorAll('.tabs-triggers-item').forEach((item) =>
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#', '');

                document.querySelectorAll('.tabs-triggers-item').forEach((child) => 
                    child.classList.remove('tabs-triggers-item--active')   
                );

                document.querySelectorAll('.tabs-content-item').forEach((child) => 
                    child.classList.remove('tabs-content-item--active')   
                );

                
                item.classList.add('tabs-triggers-item--active');

                document.getElementById(id).classList.add('tabs-content-item--active');
        
            })
        );
        

        document.querySelector('.tabs-triggers-item').click();

        document.querySelector('.wBike-btn').addEventListener('click', () => {
            let input = document.querySelector('input[name = "Wbike-add"]');
            let value = input.value;
            let regexp = /<[^<>]+>/g;
            let valid = document.getElementById('wBike-valid');
            
            function active(){ 
                valid.classList.add('valid-active')
                valid.classList.remove('valid');
            }
            function deactive(){ 
                valid.classList.add('valid')
                valid.classList.remove('valid-active');
            }
            if(!input.value){
                active();

                valid.innerHTML = '<p class = "red" >Поле необходимо заполнить</p>'
            } else if (value.match(regexp)){
                active();

                valid.innerHTML = '<p class = "red" >Поле содержит запрещенные символы</p>'
            } else {
                active();

                valid.innerHTML = '<button class = "ok" id = "wBikeOk" >Окей</button><button class = "no" id = "wBikeNo" >Отмена</button>'
                
                document.querySelector('#wBikeOk').addEventListener('click', () => {
                    
                    document.getElementById('wBike-ol').insertAdjacentHTML('beforeend', `<li>${input.value.trim()}</li>`)

                    input.value = '';

                    deactive()
                })

                document.querySelector('#wBikeNo').addEventListener('click', () => {
                    input.value = '';

                    deactive()   
                })
            }
        })
        
        document.querySelector('.mBike-btn').addEventListener('click', () => {
            let input = document.querySelector('input[name = "Mbike-add"]');
            let value = input.value;
            let regexp = /<[^<>]+>/g;
            let valid = document.getElementById('mBike-valid');
            
            function active(){ 
                valid.classList.add('valid-active')
                valid.classList.remove('valid');
            }
            function deactive(){ 
                valid.classList.add('valid')
                valid.classList.remove('valid-active');
            }
            if(!value){
                active();

                valid.innerHTML = '<p class = "red" >Поле необходимо заполнить</p>'
            } else if (value.match(regexp)){
                active();

                valid.innerHTML = '<p class = "red" >Поле содержит запрещенные символы</p>'
            } else {
                active();

                valid.innerHTML = '<button class = "ok" id = "mBikeOk" >Окей</button><button class = "no" id = "mBikeNo" >Отмена</button>'
                
                document.querySelector('#mBikeOk').addEventListener('click', () => {
                    
                    document.getElementById('mBike-ol').insertAdjacentHTML('beforeend', `<li>${input.value.trim()}</li>`)

                    input.value = '';

                    deactive()
                })

                document.querySelector('#mBikeNo').addEventListener('click', () => {
                    input.value = '';

                    deactive()

                    
                })
            }

            
        })
    }
}

 