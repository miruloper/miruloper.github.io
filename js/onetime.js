 window.addEventListener('load', function() {
        if( !localStorage.getItem('disp_popup') ) {
            localStorage.setItem('disp_popup', 'on');
            var popup = document.getElementsByClassName('bg_onetime_popup');
            popup[0].classList.add('js_active');
            popup[0].onclick = function() {
                popup[0].classList.remove('js_active');
            }
        }
    }, false);
