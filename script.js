var hideNav=document.querySelector("#hideNav");

var category=document.querySelector("#category").addEventListener("click",hideFunc);
function hideFunc(){
// hideNav.style.top="-10px"
if(hideNav.style.display==="none"){
hideNav.style.display="block"
} 
else {
    hideNav.style.display="none"
}


}

var newArrivals=JSON.parse(localStorage.getItem("newArrivals"))
// console.log(newArrivals)

var fastMovingProduct=JSON.parse(localStorage.getItem("fastMovingProduct"))

var mobileAccess=JSON.parse(localStorage.getItem("mobileAccess"))

var toy=JSON.parse(localStorage.getItem("toy"))


var waterBottles=JSON.parse(localStorage.getItem("waterBottles"))

var homeImprovement=JSON.parse(localStorage.getItem("homeImprovement"))

var bluetoothEarphone=JSON.parse(localStorage.getItem("bluetoothEarphone"))

var sportingBluetooth=JSON.parse(localStorage.getItem("sportingBluetooth"))

     newArrivals.map(function(elem,index){
         var productDiv=document.createElement("div");
         productDiv.setAttribute("id","arrivalProDiv")


         var image= document.createElement("img");
         image.setAttribute("src",elem.image);

        var nameRating=document.createElement("div");
        nameRating.setAttribute("id","name-rating")
        
        

         var name=document.createElement("p");
         name.innerText=elem.name;

        var ratingIcon=document.createElement("div");
        ratingIcon.setAttribute("id","rating-icon")

         var rating=document.createElement("p");
         rating.innerText=elem.rating;

         var ratingStar=document.createElement("span")
         ratingStar.setAttribute("class","fa fa-star");

         ratingIcon.append(rating,ratingStar)
         
         nameRating.append(name,ratingIcon)

         var hr=document.createElement("hr")
         hr.style.backgroundColor="#ECEFF1"
         hr.style.margin="0 1px 9px 1px"
         hr.style.height="1px";
        //  hr.style.padding="0 1px"


        var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

         var para=document.createElement("p");
         para.setAttribute("class","pricePara")
         para.innerText=elem.para;
         
         productDiv.append(image,nameRating,hr,priceBox,para);
         document.getElementById("arrivaldata").append(productDiv)

     })
     

     fastMovingProduct.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("movingPro").append(productDiv)

    })
    

    mobileAccess.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("mobileAccess").append(productDiv)

    })


    

    toy.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("toyContain").append(productDiv)

    })

    waterBottles.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("bottles").append(productDiv)

    })

    homeImprovement.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("improveC").append(productDiv)

    })

    bluetoothEarphone.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("deviceB").append(productDiv)

    })



    sportingBluetooth.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("sportsBlue").append(productDiv)

    })


    var wirelessChargers=JSON.parse(localStorage.getItem("wirelessChargers"))


    wirelessChargers.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("wirelessC").append(productDiv)

    })


    var wirelessSpeakers=JSON.parse(localStorage.getItem("wirelessSpeakers"))
    console.log(wirelessSpeakers)


    wirelessSpeakers.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("wirelessSpeak").append(productDiv)

    })


    var smartWatches=JSON.parse(localStorage.getItem("smartWatches"))


    smartWatches.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("smartW").append(productDiv)

    })


    var mensWatches=JSON.parse(localStorage.getItem("mensWatches"))

    // console.log(mensWatches)


    mensWatches.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"

       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("mensW").append(productDiv)

    })


    var electronics=JSON.parse(localStorage.getItem("electronics"))

    electronics.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"

       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        
        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
        productDiv.append(image,nameRating,hr,priceBox,para);
 
        document.getElementById("electricDev").append(productDiv)

    })

    console.log(electronics.index)




    var giftUp=JSON.parse(localStorage.getItem("giftUp"))

    giftUp.map(function(elem){

        var innerGift=document.createElement("div");


        var image=document.createElement("img");
        image.setAttribute("src",elem.img)

        innerGift.append(image)

        document.querySelector(".gift1").append(innerGift)


    })

     
    var giftDown=JSON.parse(localStorage.getItem("giftDown"))

    giftDown.map(function(elem){

        var innerGift=document.createElement("div");


        var image=document.createElement("img");
        image.setAttribute("src",elem.img)

        innerGift.append(image)

        document.querySelector(".gift2").append(innerGift)

    })


    var asSeenOn=JSON.parse(localStorage.getItem("asSeenOn"))

    asSeenOn.map(function(elem){

        var div=document.createElement("div")

        var img=document.createElement("img")
        img.setAttribute("src",elem.img)

        var h4=document.createElement("h4");
        h4.innerText=elem.h4 ;

        var a= document.createElement("p")
        a.innerText=elem.a ;

        div.append(img,h4,a)
        document.getElementById("asSeenOn").append(div)
    })