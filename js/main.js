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
    
    console.log(list.autorius.vardas);
    let HTML = `                   <div class="card">
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

function createHeader() {

}

function createMain() {

}

function createFooter() {

}



//!============ ! =============! \\
getData(feed);

{/* <div class="card">
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
                 <div class="card__main">${list.pranesimas.tekstas}</div>
                 <div class="card__footer"></div>
                 </div> */}