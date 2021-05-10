"use strict";

function getData(data) {

    let HTML = '';
    let sectionBody = document.querySelector('.section');
    
    
    if (Array.isArray(data)) {
         //!===============
        for (let i = 0; i < data.length; i++) {
            
            HTML += getList(data[i]);
        }

        return sectionBody.innerHTML = HTML;
        // return console.log(HTML);

        //!================
    } else {
        return console.log('Tai ne masyvas!');
    }
    

}

function getList(list) {
    
    // console.log(list.autorius.vardas);
    let HTML = ` <div class="card">
    <div class="card__head">
      <img src="./img/avatar/user.png" alt="avatar">
    <div class="user">
        <div class="name">${list.autorius.vardas} ${list.autorius.pavarde}</div>
        <div class="time">${list.laikas}</div>
    </div>
    <div class="more">
       <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </div>
   </div>
   <div class="card__main">
       <p>${list.pranesimas.tekstas}</p>
       <div class="card__like">
           <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true">Like</i></a>
           <a href="#"><i class="fa fa-comment" aria-hidden="true"></i>Comment</a>
           <a href="#"><i class="fa fa-share" aria-hidden="true"></i>Share</a>
       </div>
   </div>
   <div class="card__footer">
       <img src="./img/avatar/user.png" alt="avatar">
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
</div>`;
    
    return HTML;
}

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
//!!!      Funkcijos atskiriems card part'ams ===========

// function cardHeader(list) {
//     let head = `<div class="card">
//     <div class="card__head">
//     <img src="./img/avatar/user.png" alt="avatar">
//        <div class="user">
//          <div class="name">${list.autorius.vardas} ${list.autorius.pavarde}</div>
//           <div class="time">${list.laikas}</div>
//        </div>
//   <div class="more">
//      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
//   </div>
//   </div>`
    
//     return head;
// }

// function cardMain(list) {
//     let main = `<div class="card__main">
//         <p>${list.pranesimas.tekstas}</p>
//     <div class="card__like">
//         <a href="#"><i class="fa fa-thumbs-up" aria-hidden="true">Like</i></a>
//         <a href="#"><i class="fa fa-comment" aria-hidden="true"></i>Comment</a>
//         <a href="#"><i class="fa fa-share" aria-hidden="true"></i>Share</a>
//     </div>
// </div>`
    
//     return main;
// }

// function cardFooter(list) {
//     let footer = `<div class="card__footer">
//     <img src="./img/avatar/user.png" alt="avatar">
//     <form method="GET" class="comment">
//         <input type="comment" placeholder="Comments" class="input__comment">
//     </form>
//     <div class="card__icons">
//         <a href="#"><i class="fa fa-smile-o" aria-hidden="true"></i></a>
//         <a href="#"><i class="fa fa-camera" aria-hidden="true"></i></a>
//         <a href="#"><i class="fa fa-picture-o" aria-hidden="true"></i></a>
//         <a href="#"><i class="fa fa-user-circle" aria-hidden="true"></i></a>
//     </div>
// </div>
// </div>`
    
//     return footer;
// }

//!!!      Funkcijos atskiriems card part'ams ==================

//!============ ! =============! \\
getData(feed);






//! ====== section functions put together


// ` <section class="section">
//                     ${cardHeader(list)}
//                     ${cardMain(list)}
//                     ${cardFooter(list)}
//                     </section>`