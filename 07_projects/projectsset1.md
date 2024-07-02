# Projects Related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-zlucjk?file=index.html)

# Solution Code

## Project 1

``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  button.addEventListener('click',function (e) {
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```javascript
const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please enter a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please enter a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if(bmi<18.6){
      results.innerHTML=`<span>Under Weight : ${bmi}</span>`;
      }else if(bmi>18.6 && bmi<24.9){
          results.textContent=`Normal Weight : ${bmi}`;
      }else{
          results.textContent=`Over Weight : ${bmi}`
      }
  }
})

```