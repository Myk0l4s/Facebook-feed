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
                      ${getTime(time)}
                 </div>
                <div class="more">
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
            </div>`
    
    return HTML;
}

function cardMain(text) {

    // console.log(text);


    let HTML = `<div class="card__main">
        ${getText(text)}
        ${getGallery(text.paveiksliukai)}
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
               <textarea placeholder="Comment..."></textarea>
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

//!!!      Funkcijos atskiriems card part'ams ^^^^^^^^^^^^^^^^^^^^^


//! TEKSTO PAKEITIMAS I SHOW MORE FUNKCIJA ===================
function getText(message) {
    
    let messageText = message.tekstas;
    let kiek = 10;
    let HTML;
    
    
    let normal;
    let cutted;
    let textArr = messageText.split(' ');

        // Cutted TEXT first
    if (textArr.length > kiek) {
        cutted = textArr.slice();
        cutted.length = kiek;
        print = cutted.join(' ');
        HTML = `<p>${print}</p><span>[...Show more]</span>`;
        }  else {
            // Normal TEXT
           print = textArr.join(' ');
           HTML = `<p>${print}<span></span></p>`;
           
       }
          return HTML;
}

//! TEKSTO PAKEITIMAS I SHOW MORE FUNKCIJA ===================


function renderText() {
    let cards = document.querySelectorAll('.card');
    let showButton = document.querySelectorAll('.card__main span');
    let cardMain = document.querySelectorAll('.card__main p')

    // console.log(showButton);


    for (let i = 0; i < showButton.length; i++) {

        let feedText = feed[i].pranesimas.tekstas;

        showButton[i].addEventListener('click', (e) => {
            
            cardMain[i].innerHTML = feedText;
            
        });
    }

    // for (let i = 0; i < cards.length; i++) {
    //     cards[i].addEventListener('click', (e) => {
    //         console.log('index:' + i);
    //         console.log(e.path[2].children[1].innerText);
    //         console.log(feed[i].pranesimas.tekstas);
    //         console.log('--------');
    //     });
    // }
}

//! TEKSTO PAKEITIMAS I SHOW MORE FUNKCIJA ===================

function getAvatar(img) {

    if (img.avataras === '') {
        img.avataras = 'user.png'
    } 

    let HTML = ` <img src="./img/avatar/${img.avataras}" alt="avatar">`;

    return HTML;
}


function getGallery(img) {

    
    

    let HTML = '';
    let pictures = '';
    let kiek = 4;


    if (img.length > 0) {
       
        for (let i = 0; i < img.length; i++) {
            pictures += `<img src="./img/${img[i]}" alt="photo">`;
            if (img.length > kiek) {
             
                HTML = `<div class="gallery">
                <div class="gallery__wrap length--${i + 1}">
                           ${pictures}
                    </div>
                    <div class="count">+${img.length}</div>
                </div>`;
                img.length = kiek;
            } else {

            HTML = `<div class="gallery">
            <div class="gallery__wrap length--${i + 1}">
                       ${pictures}
                </div>
            </div>`;
           }
        }

      }
    
          return HTML;
  
   
}

function getTime(list) {
   
    // console.log(list);

    let HTML = '';


   
        let time;
        let y = Math.floor(list / 3600 / 24 / 365);
        let d = Math.floor(list / 3600 / 24);
        let h = Math.floor(list / 3600);
        let min = Math.floor(list / 60);
    
        if (y>0) {
            time = `${y} y.`;
        } else if (d>0) {
            time = `${d} d.`;
        } else if (h>0) {
            time = `${h} h.`;
        } else if (min > 0) {
            time = `${min} min.`;
        } else {
            time=`${list} s.`
    }
    

    HTML = `<div class="time">${time}</div>`;
        
    return HTML;
   
}







//--------------- !!!!!!!!!!!!!!!!!!!
getData(feed);
renderText();


