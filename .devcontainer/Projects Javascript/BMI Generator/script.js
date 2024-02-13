
const form = document.querySelector('form')

//This use case gives empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    //because default me backend me jata hai
    e.preventDefault();
    // parseInt se string convert to integer

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter The Valid Height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter The Valid Weight ${weight}`;
    }
    else{
        // toFixed(2) - point baad 2 Zero
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
    const ratingVal = parseInt(result.textContent);
    const rating = document.querySelector('#rating');

    if(ratingVal < 18.6){
        rating.innerHTML = `<h1>Under Weight</h1>`
    }
    else if(ratingVal <= 24.9  ){
        rating.innerHTML = `<h1>Normal Weight</h1>`
    }
    else{
        rating.innerHTML = `<h1>Overweight</h1>`
    }
});



