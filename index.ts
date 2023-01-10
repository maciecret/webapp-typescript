export const testFunction = () => {
    console.log("First hello from Typescript - update5")
}
testFunction()
/////////////////////////////////////format of print/////////////////////////////////
export class Format {
    constructor(
      readonly city: string, 
      private country: string, 
      public population: number,
    ){}
  
    format() {
      return `City: ${this.city} | Country: ${this.country} | Population: ${this.population}`;
    }
  }
/////////////////////////////////////PRINTING OF LIST/////////////////////////////////
  export class ListTemplate {
    constructor(private container: HTMLUListElement){}
  
    render(item: Format, pos: 'start' | 'end'){
      const li = document.createElement('li');
    
      const p = document.createElement('p');
      p.innerText = item.format();
      li.append(p);
  
      if(pos === 'start'){
        this.container.prepend(li);
      } else {
        this.container.append(li);
      }
    }
  }
/////////////////////////////////////FOR INPUT USER/////////////////////////////////

const form = document.querySelector('.new-item-form');
console.log(form.children);

// assigning variable to user input

const city = document.querySelector('#city');
const country = document.querySelector('#country');
const population = document.querySelector('#pop');

// list template 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
const forms = document.forms;
const myList = document.querySelector('#updated-list ul');
///////////////////////////////////////////////////////////
var database=[
  {myItem: new Format('Manila','Philippines', 1.3)}

]
let database2 = [
   {city: 'Manila', country: 'Philippines', population: 1.3}

];
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = {
      city: city.value,
      country: country.value,
      population: population.value
    }
    database2.push(data)

    console.warn('added', {database2})
    console.log(database2)

    
    let doc; 
    doc = new Format(city.value, country.value, population.value)
    list.render(doc, 'end');
    var new_data = doc.format()

    if(localStorage.getItem('data')== null){
      localStorage.setItem('data', '[]')
    }

    var old_data = JSON.parse(localStorage.getItem('data')!);
    old_data.push(new_data)

    localStorage.setItem('data', JSON.stringify(old_data))
    
    


})

////////////////////////////////TO VIEW DATA////////////////////////////////////////
/*

!! TO FIX !! 
    I want to replace the previous database printed on the website with 
    new database when a user added data



*/ 
function ViewData(){
  if(localStorage.getItem('data') != null ) {

    var value = localStorage.getItem('data');
    const myArray = value?.split(",");
    let list2 = document.getElementById('savelist')
    

    myArray?.forEach((item)=>{
      let l = document.createElement("li")
      
      l.innerText = item.replace(/[&\/\\#,+()$~%.'"*?<>{}]/g,"")
      list2!.appendChild(l) 


    })
    

    
   
  }
}

//////////////////////////////FIX THE SEARCH BAR//////////////////////////////////////////////
const searchBar = forms['search-data'].querySelector('input')
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase()
  const datum = myList.getElementsByTagName('li')
  Array.from(datum).forEach(data) => {
    const city_country = data.firstElementChild.textContent
    if(city_country.replace(/[&\/\\#,+()$~%.'"*?<>{}]/g,"").toLowerCase().indexOf(e.target.value) != -1){
      data.style.display ='block'
    } else {
      data.style.display = 'none'

    }
  }
  
})





/////create current list of country, add to database array////

// let myList = document.getElementById("UnList");
// var fragList = document.createDocumentFragment()
// database2.forEach(function(item){
//   var lis = document.createElement('li');
//   lis.innerText = String(item)
//   fragList.appendChild(lis);
// })
// myList?.appendChild(fragList)






