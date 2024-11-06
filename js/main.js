// Menu button -left
const leftMenuButton = document.getElementById('left-menu-button');
leftMenuButton.addEventListener('click', ()=>{
    const leftMenu = document.getElementById('aside-left');
    leftMenu.classList.toggle('side-menu-show');
    const leftMenuBtn = document.getElementById('left-menu-button');
    leftMenuBtn.classList.toggle('left-menu-button-pos');
    leftMenuBtn.classList.toggle('left-menu-button-pos::before');
});

// Menu button -right
const rightMenuButton = document.getElementById('right-menu-button');
rightMenuButton.addEventListener('click', ()=>{
    const rightMenu = document.getElementById('aside-right');
    rightMenu.classList.toggle('side-menu-show');
    const rightMenuBtn = document.getElementById('right-menu-button');
    rightMenuBtn.classList.toggle('right-menu-button-pos');
    rightMenuBtn.classList.toggle('right-menu-button-pos::before');

});
