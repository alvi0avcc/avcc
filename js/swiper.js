// Swiper function for include into site
function SwiperImgLoading( parentElementId = '', imgPath = '', quantity = 0, hover = true ) {

    let result ={
      parentElementId : parentElementId,
      imgPath: imgPath,
      quantity: quantity,
      message : '',
    };
  
    if (parentElementId == '') {
      result.message += `parentElementId (${parentElementId}) - incorrect. `;
    };
    if (imgPath == '') {
      result.message += `imgPath (${imgPath}) - incorrect. `;
    }
    if ( typeof quantity != 'number'|| quantity <= 0 ){
      result.message += `quantity (${quantity}) - incorrect. `;
    }
  
    if (result.message != '') return result;
  
    const parentElement = document.getElementById(parentElementId);
    for (i=0; i<quantity; i++){
        const slider = document.createElement('div');
        slider.classList.add('swiper-slide');
        slider.setAttribute("lazy", "true"); //ленивая загрузка
        const pic = document.createElement('picture');

        const src = document.createElement('source');
        src.media = "(min-width: 768px)";
        src.srcset = imgPath+'big/'+i+'.png';
        const img = document.createElement('img');
        img.src = imgPath+'small/'+i+'.png';

        img.alt = `Slide ${i}`;
        img.loading = 'lazy'; //ленивая загрузка
        if ( hover ) {
            img.classList.add('img-hover');

            img.addEventListener('click', ()=>{
            const bigImg = pic.cloneNode(true);
            const cover =  document.createElement('div');
            const main = document.getElementById('main-total');
            const container = document.createElement('div');
            // cover.style.position = 'absolute';
            // cover.style.top = '0';
            // cover.style.bottom = '0';
            // cover.style.left = '0';
            // cover.style.right = '0';
            // cover.style.backgroundColor = '#fff';
            // cover.style.zIndex = 10;
            // cover.style.opacity = '0.8';
            cover.classList.add('big-image-cover');

            // container.style.position = 'absolute';
            // container.style.zIndex = 11;
            // container.style.backgroundColor = 'transparent';
            // container.style.top = '0';
            // container.style.bottom = '0';
            // container.style.left = '0';
            // container.style.right = '0';
            // container.style.display = 'flex';
            // container.style.alignItems = 'center';
            container.classList.add('big-image-container');

            // bigImg.style.backgroundColor = '#fff';
            // bigImg.style.border = '2px solid blue';
            // bigImg.style.borderRadius = '10px'
            // bigImg.style.margin = '5px';
            // bigImg.style.padding = '10px';
            bigImg.classList.add('big-image');

            main.appendChild(cover);
            main.appendChild(container);
            container.appendChild(bigImg);

            // удалить себя по клику
            bigImg.addEventListener('click', ()=>{
                bigImg.remove();
                container.remove();
                cover.remove();
            })
            });

        }

        pic.appendChild(src);
        pic.appendChild(img);
        slider.appendChild(pic);
        parentElement.appendChild(slider);
    }
    return result;
  }
  
  let message = ''; //message for result of loading images (if needed)
  
  // loading images for elevators swiper
  message = SwiperImgLoading( 'swiper-elevator', 'img/elevators/', 13);
  // console.log( 'elevator swiper - ', message );
  
  // loading images for draft-survey swiper
  message = SwiperImgLoading( 'swiper-draft', 'img/draft/', 1, false);
  // console.log( 'draft-survey swiper - ', message );
  
  // loading images for Bunker Survey swiper
  message = SwiperImgLoading( 'swiper-bunker', 'img/bunker/', 1, false);
  // console.log( 'draft-survey swiper - ', message );
  
  
  // Swiper
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      slidesPerView: 1,
      loop: true,
      spaceBetween: 5,
      centeredSlides: true,
  
      //adoptation qtn slides for width of screen
      breakpoints: {
        // when window width is >= 1500px
        1500: {
          slidesPerView: 4,
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 2,
        },
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
