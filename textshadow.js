 window.onload = function(){
 const hero= document.querySelector('.hero');
        const text= hero.querySelector('h1');
        const walk= 15;

        function shadow(e)
        {
            const width= hero.offsetWidth;
            const height= hero.offsetHeight;
            let x=e.offsetX;
            let y=e.offsetY;

        if(this !== e.target)
        {
            x= x + e.target.offsetLeft;
            y= y + e.target.offsetTop;
        }

        const xwalk= Math.round((x/ width*walk) - (walk/2));
        const ywalk= Math.round((y/ height*walk) - (walk/2));

        text.style.textShadow=`${xwalk}px ${ywalk}px 0 #d2bba0`;
        console.log(e);

        }

        hero.addEventListener('mousemove', shadow);
    }