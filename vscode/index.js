// let data = fetch('./data.json').then(response => response.json()).then(json => {
//     let priceElement = document.getElementById('card_price');
//     priceElement.innerHTML = data.price
// }).catch(err => console.log(err));

// console.log(data.price);


// Ajax
// console.log(data);
// let xmlrequest = new XMLHttpRequest();
// xmlrequest.open("GET",'./data.json');
// xmlrequest.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//             let response = JSON.parse(xmlrequest.responseText)
//     for (let i=0; i<response.length; i++) {
//         // document.getElementById('card_price').innerHTML = response[i].price;
//         let new_price = document.getElementById('card_price').innerHTML;
//         new_price.innerHTML = response[i].price
//         console.log(new_price);
//     } 
//     }
// }
// xmlrequest.send()

// let data_1 = fetch('./data.json')
//         .then(response => response.json())
//         .then(data => {
//             for (let i = 0; i < data.length; i++) {
//                 // console.log(data[i].brand);
//                 let arraynew = data[i].title
//                 let arraynew2 = arraynew.split(',')
//                 console.log(typeof(arraynew2));
//                 console.log(arraynew2);
//                 for (let i = 0; i < arraynew2.length; i++) {
//                 let prodsdiv = document.querySelector(".crdjs");
//                 prodsdiv.innerText +=  arraynew2   
//                 }
//             }
// });
// let data_2 = fetch('./data.json')
//         .then(response => response.json())
//         .then(data => {
//             for (let i = 0; i < data.length; i++) {
//                 // console.log(data[i].brand);
//                 let arraynew = [data[i].price]
//                 console.log(typeof(arraynew));
//                 console.log(arraynew);
//                 for (let i = 0; i < arraynew.length; i++) {
//                     let prodsdiv = document.querySelector(".crdjs2");
//                     prodsdiv.innerText +=  arraynew   
//                 }
//             }
// });
// let data_3 = fetch('./data.json')
//         .then(response => response.json())
//         .then(data => {
//             for (let i = 0; i < data.length; i++) {
//                 // console.log(data[i].brand);
//                 let arraynew = data[i].brand
//                 let arraynew2 = arraynew.split(',')
//                 console.log(typeof(arraynew2));
//                 console.log(arraynew2);
//                 for (let i = 0; i < arraynew2.length; i++) {
//                 let prodsdiv = document.querySelector(".crdjs3");
//                 prodsdiv.innerText +=  arraynew2   
//                 }
//             }
// });

let data_1 = fetch('./data.json')
        .then(response => response.json())
        .then(data => {

            // catch HTML elements to display the JSON data
            let priceElement = document.getElementById('card_price');
            priceElement.textContent = "$ " + data[0].price;

            let nameElement = document.getElementById('card-title');
            nameElement.textContent = data[0].title;

            let brandElement = document.getElementById('card-brand');
            brandElement.textContent = "BN. : " + data[0].brand;

            let brandElement2 = document.getElementById('card-brand2');
            brandElement2.textContent = "BN. : " + data[1].brand;

            let priceElement2 = document.getElementById('card_price2');
            priceElement2.textContent = "$ " + data[1].price;

            let nameElement2 = document.getElementById('card-title2');
            nameElement2.textContent = data[1].title;

            let brandElement3 = document.getElementById('card-brand3');
            brandElement3.textContent = "BN. : " + data[2].brand;

            let priceElement3 = document.getElementById('card_price3');
            priceElement3.textContent = "$ " + data[2].price;

            let nameElement3 = document.getElementById('card-title3');
            nameElement3.textContent = data[2].title;

            let brandElement4 = document.getElementById('card-brand4');
            brandElement4.textContent = "BN. : " + data[3].brand;

            let priceElement4 = document.getElementById('card_price4');
            priceElement4.textContent = "$ " + data[3].price;

            let nameElement4 = document.getElementById('card-title4');
            nameElement4.textContent = data[3].title;

            let brandElement5 = document.getElementById('card-brand5');
            brandElement5.textContent = "BN. : " + data[4].brand;

            let priceElement5 = document.getElementById('card_price5');
            priceElement5.textContent = "$ " + data[4].price;

            let nameElement5 = document.getElementById('card-title5');
            nameElement5.textContent = data[4].title;

            let brandElement6 = document.getElementById('card-brand6');
            brandElement6.textContent = "BN. : " + data[5].brand;

            let priceElement6 = document.getElementById('card_price6');
            priceElement6.textContent = "$ " + data[5].price;

            let nameElement6 = document.getElementById('card-title6');
            nameElement6.textContent = data[5].title;

            let priceElement7 = document.getElementById('card_price7');
            priceElement7.textContent = "$ " + data[6].price;

            let nameElement7 = document.getElementById('card-title7');
            nameElement7.textContent = data[6].title;

            let brandElement7 = document.getElementById('card-brand7');
            brandElement7.textContent = "BN. : " + data[6].brand;

            let priceElement8 = document.getElementById('card_price8');
            priceElement8.textContent = "$ " + data[7].price;

            let nameElement8 = document.getElementById('card-title8');
            nameElement8.textContent = data[7].title;

            let brandElement8 = document.getElementById('card-brand8');
            brandElement8.textContent = "BN. : " + data[7].brand;

            let priceElement9 = document.getElementById('card_price9');
            priceElement9.textContent = "$ " + data[8].price;

            let nameElement9 = document.getElementById('card-title9');
            nameElement9.textContent = data[8].title;

            let brandElement9 = document.getElementById('card-brand9');
            brandElement9.textContent = "BN. : " + data[8].brand;

            let priceElement10 = document.getElementById('card_price10');
            priceElement10.textContent = "$ " + data[9].price;

            let nameElement10 = document.getElementById('card-title10');
            nameElement10.textContent = data[9].title;

            let brandElement10 = document.getElementById('card-brand10');
            brandElement10.textContent = "BN. : " + data[9].brand;

        })
.catch(error => console.error("Error fetching JSON data:", error))

document.getElementById("men_prds").addEventListener("click",hidex);
function hidex(){
    document.getElementById("sweater_display").style.display = "flex";
    document.getElementById("brwpur_display").style.display = "none";
    document.getElementById("yelshrt_display").style.display = "none";
    document.getElementById("slvpur_display").style.display = "none";
    document.getElementById("grnshs_display").style.display = "flex";
    document.getElementById("blcspc_display").style.display = "flex";
    document.getElementById("begswt_display").style.display = "none";
    document.getElementById("beghbag_display").style.display = "none";
    document.getElementById("begjck_display").style.display = "flex";
    document.getElementById("slvshrt_display").style.display = "flex";
    return true;
}
document.getElementById("acc_prds").addEventListener("click",hidey);
function hidey(){
    document.getElementById("sweater_display").style.display = "none";
    document.getElementById("brwpur_display").style.display = "flex";
    document.getElementById("yelshrt_display").style.display = "none";
    document.getElementById("slvpur_display").style.display = "flex";
    document.getElementById("grnshs_display").style.display = "none";
    document.getElementById("blcspc_display").style.display = "flex";
    document.getElementById("begswt_display").style.display = "none";
    document.getElementById("beghbag_display").style.display = "flex";
    document.getElementById("begjck_display").style.display = "none";
    document.getElementById("slvshrt_display").style.display = "none";
    return true;
}
document.getElementById("wmn_prds").addEventListener("click",hidez);
function hidez(){
    document.getElementById("sweater_display").style.display = "none";
    document.getElementById("brwpur_display").style.display = "flex";
    document.getElementById("yelshrt_display").style.display = "flex";
    document.getElementById("slvpur_display").style.display = "flex";
    document.getElementById("grnshs_display").style.display = "flex";
    document.getElementById("blcspc_display").style.display = "flex";
    document.getElementById("begswt_display").style.display = "flex";
    document.getElementById("beghbag_display").style.display = "flex";
    document.getElementById("begjck_display").style.display = "none";
    document.getElementById("slvshrt_display").style.display = "none";
    return true;
}
document.getElementById("all_prds").addEventListener("click",hidea);
function hidea(){
    document.getElementById("sweater_display").style.display = "flex";
    document.getElementById("brwpur_display").style.display = "flex";
    document.getElementById("yelshrt_display").style.display = "flex";
    document.getElementById("slvpur_display").style.display = "flex";
    document.getElementById("grnshs_display").style.display = "flex";
    document.getElementById("blcspc_display").style.display = "flex";
    document.getElementById("begswt_display").style.display = "flex";
    document.getElementById("beghbag_display").style.display = "flex";
    document.getElementById("begjck_display").style.display = "flex";
    document.getElementById("slvshrt_display").style.display = "flex";
    return true;
}

let addition = document.getElementById("addbtn_1") 
let addsec = document.getElementById("prd_no")

addition.addEventListener('click',()=>{
    addsec.innerText++;
},{once : true})

let addition2 = document.getElementById("addbtn_2") 
let addsec2 = document.getElementById("prd_no")

addition2.addEventListener('click',()=>{
    addsec2.innerText++;
},{once : true})

let addition3 = document.getElementById("addbtn_3") 
let addsec3 = document.getElementById("prd_no")

addition3.addEventListener('click',()=>{
    addsec3.innerText++;
},{once : true})

let addition4 = document.getElementById("addbtn_4") 
let addsec4 = document.getElementById("prd_no")

addition4.addEventListener('click',()=>{
    addsec4.innerText++;
},{once : true})

let addition5 = document.getElementById("addbtn_5") 
let addsec5 = document.getElementById("prd_no")

addition5.addEventListener('click',()=>{
    addsec5.innerText++;
},{once : true})

let addition6 = document.getElementById("addbtn_6") 
let addsec6 = document.getElementById("prd_no")

addition6.addEventListener('click',()=>{
    addsec6.innerText++;
},{once : true})

let addition7 = document.getElementById("addbtn_7") 
let addsec7 = document.getElementById("prd_no")

addition7.addEventListener('click',()=>{
    addsec7.innerText++;
},{once : true})

let addition8 = document.getElementById("addbtn_8") 
let addsec8 = document.getElementById("prd_no")

addition8.addEventListener('click',()=>{
    addsec8.innerText++;
},{once : true})

let addition9 = document.getElementById("addbtn_9") 
let addsec9 = document.getElementById("prd_no")

addition9.addEventListener('click',()=>{
    addsec9.innerText++;
},{once : true})

let addition10 = document.getElementById("addbtn_10") 
let addsec10 = document.getElementById("prd_no")

addition10.addEventListener('click',()=>{
    addsec10.innerText++;
},{once : true})

// let pro1 = document.getElementById("addbtn_2");
// let myvariable = [];

// function show(id) {
//     if (id === 1) {
//         myvariable = data[0];
//     } else {
        
//     }
    
// }

// pro1.addEventListener('click', function() {
//     changeVariableOnClick(data[0]);
//   });

// let dsbtn2 = document.getElementById('dsbtn2')
//     dsbtn2.addEventListener('click', function show2 (ev) {

//         // let prd_title = document.getElementById('prd_title');
//         // let prd_price = document.getElementById('prd_price');
//         // let prd_brand = document.getElementById('prd_brand');
//         // let prd_ctg = document.getElementById('prd_ctg');

//         // prd_title.textContent = data[0].category

//     }, true)
//     console.log(data[0].category);

function storeprd(id) {
    localStorage.setItem("id", 1);
    localStorage.setItem("price", 593)
    localStorage.setItem("title", "Black Sweater")
    localStorage.setItem("description", "A sweater that its color is black")
    localStorage.setItem("brand", "Cottonel")
    localStorage.setItem("category", "Sweaters")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp")
    
}
function storeprd2(id) {
    localStorage.setItem("id", 2);
    localStorage.setItem("price", 693)
    localStorage.setItem("title", "Brown purse")
    localStorage.setItem("description", "A Handbag that its color is Brown")
    localStorage.setItem("brand", "H&M")
    localStorage.setItem("category", "Handbags")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_2.png.webp")

}
function storeprd3(id) {
    localStorage.setItem("id", 3);
    localStorage.setItem("price", 233)
    localStorage.setItem("title", "Yellow Shirt")
    localStorage.setItem("description", "A Shirt that its color is Yellow with long sleeves")
    localStorage.setItem("brand", "Cottonel")
    localStorage.setItem("category", "Shirts")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_3.png.webp")
}
function storeprd4(id) {
    localStorage.setItem("id", 4);
    localStorage.setItem("price", 1003)
    localStorage.setItem("title", "Silver purse")
    localStorage.setItem("description", "A Handbag that its color is gray")
    localStorage.setItem("brand", "Armani")
    localStorage.setItem("category", "Handbags")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_4.png.webp")
}
function storeprd5(id) {
    localStorage.setItem("id", 5);
    localStorage.setItem("price", 273)
    localStorage.setItem("title", "Green Shoes")
    localStorage.setItem("description", "Green Shoes")
    localStorage.setItem("brand", "Arc Shoes")
    localStorage.setItem("category", "Shoes")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_5.png.webp")
}
function storeprd6(id) {
    localStorage.setItem("id", 6);
    localStorage.setItem("price", 2083)
    localStorage.setItem("title", "Black specs.")
    localStorage.setItem("description", "Black Sunglasses")
    localStorage.setItem("brand", "Hugo Boss")
    localStorage.setItem("category", "Sunglasses")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_6.png.webp")
}
function storeprd7(id) {
    localStorage.setItem("id", 7);
    localStorage.setItem("price", 593)
    localStorage.setItem("title", "Beige Sweater")
    localStorage.setItem("description", "A sweater that its color is Beige")
    localStorage.setItem("brand", "Cottonel")
    localStorage.setItem("category", "Sweaters")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_7.png.webp")
}
function storeprd8(id) {
    localStorage.setItem("id", 8);
    localStorage.setItem("price", 553)
    localStorage.setItem("title", "Beige Handbag")
    localStorage.setItem("description", "A Handbag that its color is Beige")
    localStorage.setItem("brand", "Cali")
    localStorage.setItem("category", "Handbag")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_8.png.webp")
}
function storeprd9(id) {
    localStorage.setItem("id", 9);
    localStorage.setItem("price", 2503)
    localStorage.setItem("title", "Beige Jacket")
    localStorage.setItem("description", "A Jacket that its color is Beige")
    localStorage.setItem("brand", "Men's Club")
    localStorage.setItem("category", "Jackets")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_9.png.webp")
}
function storeprd10(id) {
    localStorage.setItem("id", 10);
    localStorage.setItem("price", 150)
    localStorage.setItem("title", "T-Shirt")
    localStorage.setItem("description", "A T-Shirt that its color is Silver")
    localStorage.setItem("brand", "Cottonel")
    localStorage.setItem("category", "Shirts")
    localStorage.setItem("image", "https://preview.colorlib.com/theme/coloshop/images/product_10.png.webp")
}





const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
var btnvar2 = document.getElementById('btnh2');

       function Toggle2(){
                if (btnvar2.style.color =="red") {
                    btnvar2.style.color = "grey"
                }
                else{
                    btnvar2.style.color = "red"
                }
}


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// current date
//gettime time value by mill second 1000 millsecond = 1 sec
//date ال عايز اوصلة 
//  day  date /1000millsec/60 minu/60 hours/ 24 days
let countDate = new Date("Apr 29 , 2024 20:59:59").getTime();

let counter = setInterval(() => {
    //current date
    let dateNow = new Date().getTime();
    let dateDiff = countDate - dateNow;
    15.2365484
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(dateDiff % (1000 * 60) / 1000);
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours < 10 ?` 0${hours} `: hours;
    document.querySelector(".mins").innerHTML = mins < 10 ? `0${mins}` : mins;
    document.querySelector(".sec").innerHTML = sec < 10 ? `0${sec}` : sec;
}, 1000)
