export function popUp() {
    document.querySelector('.pop').innerHTML = `
    <div class="pop__container">
    <button class="pop__close">
    &#x2717
    </button>
        <div class="pop__title orange">Follow our X</div>
        <div class="pop__main">
            <div class="pop__logo">
                <img class="pop__img" src="./imgs/logo.jpg" alt="logo">
                <span class="darkest__blue">7k Followers</span>
            </div>
            <div class="pop__description">
                <div class="des__title darkest__blue">
                    Hi, I'm a bird, what about you?
                </div>
                <span class="des__span">Come on, i'am little smoky and i'am having fun, come with me.</span>
                <a class="des__link orange" href="https://twitter.com/BluDuckTon" target="_blank">Follow X</a>
            </div>
        </div>
        <div class="pop__get">
            <div class="get__title darkest__blue">
                Get 10,000 points for following X
            </div>
            <div class="get__description">
                Press <span class="get__text orange">"Follow X"</span> button and follow our X <br>
                then press <span class="get__text orange">"Check following X"</span> button
            </div>
            <div class="get__box">
                <button class="get__btn orange">Check Following X</button>
                <span class="pre">X</span>
            </div>
        </div>
    </div>`
    document.querySelectorAll('.tab').forEach(a => a.classList.add('blur'))
    document.querySelector('.pop__close').addEventListener('click', () => {
        document.querySelector('.pop').remove();
        document.querySelectorAll('.tab').forEach(a => a.classList.contains('blur') ? a.classList.remove('blur') : a.classList.remove('blur'))
    })
    
    document.querySelector('.get__btn').addEventListener('click', () => {
        const pre = document.querySelector('.pre')
        pre.innerText = '';
        pre.classList.add('loader');
        setTimeout(function () {
            pre.classList.remove("loader")
            pre.innerHTML = "&#10004";
        }, 7000)
    })
}