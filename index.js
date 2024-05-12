function read(){
    
    document.getElementById("para1").style.display ="block";
}

function night(){
     if(document.getElementById("image").src=="https://i.makeagif.com/media/6-01-2016/JK-4eX.gif"){
        document.getElementById("Temperature").innerHTML = "25F"; 
        
        document.getElementById("image").src="https://cdn.pixabay.com/animation/2022/10/10/02/39/02-39-55-927_512.gif";
    
        document.getElementById("time").src="https://i.pngimg.me/thumb/f/350/freesvgorg95743.jpg";
    document.body.style.backgroundImage= "url('https://thumbs.dreamstime.com/b/city-night-lights-view-point-top-mountain-suthep-chiang-mai-thailand-103792532.jpg')"; 
}
if(document.getElementById("image").src=="https://clipart-library.com/images/6ip5qzeMT.gif"){
    document.getElementById("image").src="https://cdn.pixabay.com/animation/2022/10/10/02/39/02-39-55-927_512.gif";
    document.getElementById("Temperature").innerHTML = "25F";
    document.body.style.backgroundImage= "url('https://thumbs.dreamstime.com/b/city-night-lights-view-point-top-mountain-suthep-chiang-mai-thailand-103792532.jpg')"; 
    document.getElementById("time").src="https://i.pngimg.me/thumb/f/350/freesvgorg95743.jpg";
}
}

function morning(){
    if(document.getElementById("image").src=="https://cdn.pixabay.com/animation/2022/10/10/02/39/02-39-55-927_512.gif"){
    document.getElementById("image").src="https://i.makeagif.com/media/6-01-2016/JK-4eX.gif";
    document.getElementById("Temperature").innerHTML = "29F";
    document.getElementById("time").src="https://i.pngimg.me/thumb/f/350/freesvgorg95738.jpg";
    document.body.style.backgroundImage="url('https://i0.wp.com/www.worldwanderista.com/wp-content/uploads/2015/02/sunrise-Cuba-scaled.jpg?fit=1920%2C2560&ssl=1')";
    }
    if(document.getElementById("image").src=="https://clipart-library.com/images/6ip5qzeMT.gif"){
    document.getElementById("image").src="https://i.makeagif.com/media/6-01-2016/JK-4eX.gif";
    document.getElementById("Temperature").innerHTML = "29F";
    document.getElementById("time").src="https://i.pngimg.me/thumb/f/350/freesvgorg95738.jpg";
    document.body.style.backgroundImage="url('https://i0.wp.com/www.worldwanderista.com/wp-content/uploads/2015/02/sunrise-Cuba-scaled.jpg?fit=1920%2C2560&ssl=1')";
}
}
function afternoon(){
    if(document.getElementById("image").src=="https://cdn.pixabay.com/animation/2022/10/10/02/39/02-39-55-927_512.gif"){
    document.getElementById("image").src="https://clipart-library.com/images/6ip5qzeMT.gif";
    document.getElementById("Temperature").innerHTML = "35F";
    document.getElementById("time").src="https://iconspng.com/_next/image?url=https%3A%2F%2Ficonspng.com%2Fimages%2F12-oclock%2F12-oclock.jpg&w=640&q=75";
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1577257107590-fc448601f16a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZ0ZXJub29uJTIwc3VufGVufDB8fDB8fHww')";
    }
    if(document.getElementById("image").src=="https://i.makeagif.com/media/6-01-2016/JK-4eX.gif"){
        document.getElementById("Temperature").innerHTML = "35F"; 
        document.getElementById("time").src="https://iconspng.com/_next/image?url=https%3A%2F%2Ficonspng.com%2Fimages%2F12-oclock%2F12-oclock.jpg&w=640&q=75";
        document.getElementById("image").src="https://clipart-library.com/images/6ip5qzeMT.gif";
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1577257107590-fc448601f16a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZ0ZXJub29uJTIwc3VufGVufDB8fDB8fHww')";
}
}