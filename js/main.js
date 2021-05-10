"use strict";

function getData(data) {

    let HTML = '';
    let sectionBody = document.querySelector('.section');
    
    
    if (Array.isArray(data)) {
         //!===============
        // for (let i = 0; i < data.length; i++) {
            
        //     HTML += getList(data[i]);
        // }
        for (let index of data) {
            HTML += getList(index);
        }

        return sectionBody.innerHTML = HTML;
        // return console.log(HTML);

        //!================
    } else {
        return console.log('Tai ne masyvas!');
    }
    

}

function getList(list) {
    
    // console.log(list.autorius);
    let HTML = ` ${cardHeader(list.autorius, list.laikas)}
                 ${cardMain(list.pranesimas)}
                 ${cardFooter(list.autorius)}`;
    
    return HTML;
}

//!!!      Funkcijos atskiriems card part'ams ===========

function cardHeader(who, time) {

    // console.log(who.time);

    let HTML = `<div class="card">
                  <div class="card__head">
                    ${getAvatar(who)} 
                     <div class="user">
                      <div class="name">${who.vardas} ${who.pavarde}</div>
                      <div class="time">${time}</div>
                 </div>
                <div class="more">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
            </div>`
    
    return HTML;
}

function cardMain(text) {
    let HTML = `<div class="card__main">
        ${getText(text)}
    <div class="card__like">
        <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true">Like</i></a>
        <a href="#"><i class="fa fa-comment" aria-hidden="true"></i>Comment</a>
        <a href="#"><i class="fa fa-share" aria-hidden="true"></i>Share</a>
    </div>
</div>`
    
    return HTML;
}

function cardFooter(who) {
  
    let HTML = `<div class="card__footer">
                 ${getAvatar(who)} 
               <form method="GET" class="comment">
                   <input type="comment" placeholder="Comments" class="input__comment">
               </form>
    <div class="card__icons">
        <a href="#"><i class="fa fa-smile-o" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-camera" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-picture-o" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-user-circle" aria-hidden="true"></i></a>
    </div>
  </div>
</div>`
    
    return HTML;
}

function getText(message) {
    
    let messageText = message.tekstas;
    let kiek = 10;
    let textArr = messageText.split(' ');
    let normal = textArr.length;
    let cutted = '';

    // ...................... ? pilnos eilutes dydi ir kirptos eilutes dydi
    if (normal.length < kiek) {

        cutted = normal.length;
        console.log(cutted);
    }

    
    let HTML = `<p>${message.tekstas}</p>`;
    
    return HTML;
}
//!!!      Funkcijos atskiriems card part'ams ===========

function getAvatar(img) {

    if (img.avataras === '') {
        img.avataras = 'user.png'
    } 

    let HTML = ` <img src="./img/avatar/${img.avataras}" alt="avatar">`;

    return HTML;
}

















//!!!      Funkcija laikui skaiciuot


// function timeElapsed(list) {
//     // console.log(list);
//     let year = Math.floor(list.laikas / 3600 / 24 / 365);
//     let day = Math.floor(list.laikas / 3600 / 24);
//     let hour = Math.floor(list.laikas / 3600);
//     let min = Math.floor(list.laikas / 60);
    
//     if (year>0) {
//          time = `${year} y.`;
//        } else if (day>0){
//             time = `${day} d.`;
//         }
//         else if (hour>0){
//             time = `${hour} h.`;
//         }
//         else if (min>0){
//             time = `${min} min.`;
//         }
//         else {
//              time = `${list.laikas} s.`;
//         }
    
//     return time;
// }


//!============ ! =============! \\

getData(feed);


