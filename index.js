"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = exports.Format = exports.testFunction = void 0;
const testFunction = () => {
    console.log("First hello from Typescript - update5");
};
exports.testFunction = testFunction;
(0, exports.testFunction)();
/////////////////////////////////////format of print/////////////////////////////////
class Format {
    constructor(city, country, population) {
        this.city = city;
        this.country = country;
        this.population = population;
    }
    format() {
        return `City: ${this.city} | Country: ${this.country} | Population: ${this.population}`;
    }
}
exports.Format = Format;
/////////////////////////////////////PRINTING OF LIST/////////////////////////////////
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, pos) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
exports.ListTemplate = ListTemplate;
/////////////////////////////////////FOR INPUT USER/////////////////////////////////
const form = document.querySelector('.new-item-form');
console.log(form.children);
// assigning variable to user input
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const population = document.querySelector('#pop');
// list template 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
var database = [
    { myItem: new Format('Manila', 'Philippines', 1.3) }
];
let database2 = [
    { city: 'Manila', country: 'Philippines', population: 1.3 }
];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = {
        city: city.value,
        country: country.value,
        population: population.value
    };
    database2.push(data);
    console.warn('added', { database2 });
    console.log(database2);
    let doc;
    doc = new Format(city.value, country.value, population.value);
    list.render(doc, 'end');
    var new_data = doc.format();
    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    localStorage.setItem('data', JSON.stringify(old_data));
});
function ViewData() {
    if (localStorage.getItem('data') != null) {
        var value = localStorage.getItem('data');
        const myArray = value === null || value === void 0 ? void 0 : value.split(",");
        let list2 = document.getElementById('savelist');
        myArray === null || myArray === void 0 ? void 0 : myArray.forEach((item) => {
            let l = document.createElement("li");
            l.innerText = item.replace(/[&\/\\#,+()$~%.'"*?<>{}]/g, "");
            list2.appendChild(l);
        });
        // document.getElementById('savelist')!.innerHTML += myArray[0].replace(/[&\/\\#,+()$~%.'"*?<>{}]/g,"")  
        // document.getElementById('savelist')!.innerHTML +=  myArray[3].replace(/[&\/\\#,+()$~%.'"*?<>{}]/g,"")
        // while(i < myArray!.length){
        //   document.getElementById('savelist')!.innerHTML += String(myArray![i]) 
        //   i++
        // }
        //document.getElementById('UnList')?.innerHTML = JSON.parse(JSON.stringify(localStorage.getItem('data')))
    }
}
// function UpdateData(){
//   let myList = document.getElementById("UnList");
//   var fragList = document.createDocumentFragment()
//   var lis = document.createElement('li');
//   lis.innerText = String(new Format(String(database2[database2.length-1].city),String(database2[database2.length-1].country),Number(database2[database2.length-1].population)).format())
//   fragList.append(lis)
//   myList?.appendChild(fragList)
// }
function searchFilter() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("updated-list")[0];
    li = ul.getElementsByTagName('savelist');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
/////create current list of country, add to database array////
// let myList = document.getElementById("UnList");
// var fragList = document.createDocumentFragment()
// database2.forEach(function(item){
//   var lis = document.createElement('li');
//   lis.innerText = String(item)
//   fragList.appendChild(lis);
// })
// myList?.appendChild(fragList)
