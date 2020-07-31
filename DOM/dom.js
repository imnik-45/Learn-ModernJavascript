const para=document.querySelector('div.error');

console.log(para);

const paras=document.querySelectorAll('p');
console.log(paras);
console.log(paras[2]);
console.log("\n Node List for each concept... we can use forEach in case of NodeList.....");
paras.forEach((para)=>{
    console.log(para)
});

console.log("\n-- Getting element by ID");

const title=document.getElementById('page-title');
console.log(title);

console.log("\n-- Getting element by class");

const errors=document.getElementsByClassName('error');
console.log(errors);

console.log("cannot use for each in case of HtmlCollections..");

console.log("\n-- Getting element by TagName");
const parag=document.getElementsByTagName('p');
console.log(parag);


console.log("\n-- Getting InnerText");
const newPara=document.querySelectorAll('p');

newPara.forEach(para => {
    console.log(para.innerText);
    para.innerText+='new text';
});


console.log("\n-- Getting InnerHtml --");

const content=document.querySelector(".content");
console.log(content.innerHTML);
content.innerHTML = "<h2>this is new content</h2>";

console.log(content.innerHTML);

//---------------------------------------------------------------------

console.log("\n------------------------------------\n");

const arr =['a','b','c','d'];

arr.forEach(ar => {
    content.innerHTML += `<p>${ar}</p>`
});

//-------------------------------------
console.log("\n--Get n Set Attributes--\n");

const link=document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.javascript.com/');
link.innerText = 'javascript';

const mssg =document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:purple')



const ref=document.querySelector('h4');

console.log(ref.style)

ref.style.color = 'crimson';
ref.style.fontSize= '50px';

ref.style.margin='25px';

console.log(ref.classList);

ref.classList.add('know');

