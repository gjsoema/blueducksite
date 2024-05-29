/*const leaderboardSection = document.querySelector('.leaderboard__tab');
const mainSection = document.querySelector('.main__tab')
const profileSection = document.querySelector('.profile__tab');
const referalsSection = document.querySelector('.referals__tab');

document.querySelector('.btn__sub').addEventListener('click', (e) => {
    e.preventDefault()
})

document.querySelector('.tab__ref').addEventListener('click', () => {
    mainSection.style.display = 'none'
    leaderboardSection.style.display = 'none'
    profileSection.style.display = 'none'
    referalsSection.style.display = 'block'
})

document.querySelector('.tab__main').addEventListener('click', () => {
    mainSection.style.display = 'block'
    leaderboardSection.style.display = 'none'
    profileSection.style.display = 'none'
    referalsSection.style.display = 'none'
})

document.querySelector('.tab__leader').addEventListener('click', () => {
    mainSection.style.display = 'none'
    leaderboardSection.style.display = 'block'
    profileSection.style.display = 'none'
    referalsSection.style.display = 'none'

    fetch(`http://77.221.154.46/leaderboard`)
        .then((response) => {
            return response.json();
        }).then((result) => {
            let ar = result
            let i = 0
            for (const [key, value] of Object.entries(ar)) {
                lul.innerHTML += `<li>
                                <div class="place">#${i+1}</div>
                                <div class="points">${ar[key][0]}</div>
                                <div class="marker"></div>
                                <div class="points">${ar[key][1]} points</div>
                            </li>`
                i += 1
            }
        })
})

document.querySelectorAll('.logo').forEach(tab => {
    tab.addEventListener('click', () => {
        mainSection.style.display = 'none'
        leaderboardSection.style.display = 'none'
        profileSection.style.display = 'block'
        referalsSection.style.display = 'none'
    })
})

document.querySelector('.copy__btn').addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector('.link__tme').innerText).then(function () {
        alert('Text copied to clipboard');
    }).catch(function (error) {
        console.error('Error:', error);
    });
});*/

function submitSmth() {
    var url = "http://77.221.154.46/api2?data=" + encodeURIComponent(JSON.stringify({"name": "set_profile", "uid": tg.initDataUnsafe.user.id, "xname": xname_input.value, "tonWallet" : tonWallet_input.value}));

    fetch(url, {method: 'GET'})
}

function submitRefcode() {
    event.preventDefault()
    let enter_refcode = document.getElementById("enter_refcode");
    let overlay = document.getElementById("overlay");
    fetch(`http://77.221.154.46/api4?uid=${enter_refcode.value}`)
        .then((response) => {
            return response.json();
        }).then((result) => {
            if (result["newbie"] != 1) {
                overlay.style.display = 'none';
                //bd[uid]["newbie"] = 0
                fetch(`http://77.221.154.46/api3?uid=${uid}`)
                    .then((response) => {
                        return response.json();
                    }).then((result) => {
                        bd = result;
                    })
            }
        })
    /*if (bd[enter_refcode.value]["newbie"] != 1) {
        overlay.style.display = 'none';
        //bd[uid]["newbie"] = 0
        fetch(`http://77.221.154.46/api3?uid=${uid}`)
            .then((response) => {
                return response.json();
            }).then((result) => {
                bd = result;
            })
    }*/
}

function popUpTg() {
    document.querySelector('.pop').style = "pointer-events: all;";
    document.querySelector('.pop').innerHTML = `
    <div class="pop__container">
    <button class="pop__close">
    &#x2717
    </button>
        <div class="pop__title orange">Join our TG</div>
        <div class="pop__main">
            <div class="pop__description">
                <div class="des__title darkest__blue">
                    Join our TG and get the latest news about $BLU
                </div>
                <a class="des__link orange" href="https://twitter.com/BluDuckTon" target="_blank">Join TG</a>
            </div>
        </div>
        <div class="pop__get">
            <div class="get__title darkest__blue">
                Get 10,000 points for joining TG
            </div>
            <div class="get__description">
                 Press <span class="get__text orange">"Join TG"</span> and join our TG channel <br>
                then press <span class="get__text orange">"Check Joining TG"</span> button
            </div>
            <div class="get__box">
                <button class="get__btn orange">Check Joining TG</button>
                <span class="pre">X</span>
            </div>
        </div>
    </div>`
    document.querySelectorAll('.tab').forEach(a => a.classList.add('blur'))
    document.querySelector('.pop__close').addEventListener('click', () => {
        document.querySelector('.pop').innerHTML = "";
        document.querySelector('.pop').style = "pointer-events: none;";
        document.querySelectorAll('.tab').forEach(a => a.classList.contains('blur') ? a.classList.remove('blur') : a.classList.remove('blur'))
    })

    document.querySelector('.get__btn').addEventListener('click', () => {
        const pre = document.querySelector('.pre')
        pre.innerText = '';
        pre.classList.add('loader');
        setTimeout(function () {
            pre.classList.remove("loader")
            pre.innerHTML = "&#10004";
            fetch(`http://77.221.154.46/api5?uid=${uid}&taskid=${2}`)
                .then((response) => {
                    return response.json();
                }).then((result) => {
                    fetch(`http://77.221.154.46/api?uid=${uid}`)
                        .then((response) => {
                            return response.json();
                        }).then((result) => {
                            bd = result;

                            if (bd["newbie"] != 1) {
                                overlay.style.display = 'none';
                            }

                            let usercard = document.getElementById("points__header");

                            usercard.innerText = `Points: ${bd["points"]}`;
                        })
                })
        }, 7000)
    })
}

function popUpRt() {
    document.querySelector('.pop').style = "pointer-events: all;";
    document.querySelector('.pop').innerHTML = `
    <div class="pop__container">
    <button class="pop__close">
    &#x2717
    </button>
        <div class="pop__title orange">Like,RT & Quote</div>
        <div class="pop__main">
            <div class="pop__description">
                <div class="des__title darkest__blue">
                    Yo gotta be the loyal follower so like, rt & quote tweet
                </div>
                <a class="des__link orange" href="https://twitter.com/BluDuckTon" target="_blank">Post</a>
            </div>
        </div>
        <div class="pop__get">
            <div class="get__title darkest__blue">
                Get 10,000 points for this task
            </div>
            <div class="get__description">
                Press <span class="get__text orange">"Post"</span> and interact with our post <br>
                then press <span class="get__text orange">"Check Interact"</span> button
            </div>
            <div class="get__box">
                <button class="get__btn orange">Check Interact</button>
                <span class="pre">X</span>
            </div>
        </div>
    </div>`
    document.querySelectorAll('.tab').forEach(a => a.classList.add('blur'))
    document.querySelector('.pop__close').addEventListener('click', () => {
        document.querySelector('.pop').innerHTML = "";
        document.querySelector('.pop').style = "pointer-events: none;";
        document.querySelectorAll('.tab').forEach(a => a.classList.contains('blur') ? a.classList.remove('blur') : a.classList.remove('blur'))
    })

    document.querySelector('.get__btn').addEventListener('click', () => {
        const pre = document.querySelector('.pre')
        pre.innerText = '';
        pre.classList.add('loader');
        setTimeout(function () {
            pre.classList.remove("loader")
            pre.innerHTML = "&#10004";
            fetch(`http://77.221.154.46/api5?uid=${uid}&taskid=${3}`)
                .then((response) => {
                    return response.json();
                }).then((result) => {
                    fetch(`http://77.221.154.46/api?uid=${uid}`)
                        .then((response) => {
                            return response.json();
                        }).then((result) => {
                            bd = result;

                            if (bd["newbie"] != 1) {
                                overlay.style.display = 'none';
                            }

                            let usercard = document.getElementById("points__header");

                            usercard.innerText = `Points: ${bd["points"]}`;
                        })
                })
        }, 7000)
    })
}

function popUpTwitter() {
    document.querySelector('.pop').style = "pointer-events: all;";
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
        document.querySelector('.pop').innerHTML = "";
        document.querySelector('.pop').style = "pointer-events: none;";
        document.querySelectorAll('.tab').forEach(a => a.classList.contains('blur') ? a.classList.remove('blur') : a.classList.remove('blur'))
    })

    document.querySelector('.get__btn').addEventListener('click', () => {
        const pre = document.querySelector('.pre')
        pre.innerText = '';
        pre.classList.add('loader');
        setTimeout(function () {
            pre.classList.remove("loader")
            pre.innerHTML = "&#10004";
            fetch(`http://77.221.154.46/api5?uid=${uid}&taskid=${1}`)
                .then((response) => {
                    return response.json();
                }).then((result) => {
                    fetch(`http://77.221.154.46/api?uid=${uid}`)
                        .then((response) => {
                            return response.json();
                        }).then((result) => {
                            bd = result;

                            if (bd["newbie"] != 1) {
                                overlay.style.display = 'none';
                            }

                            let usercard = document.getElementById("points__header");

                            usercard.innerText = `Points: ${bd["points"]}`;
                        })
                })
        }, 7000)
    })
}

    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
    if (tg.initDataUnsafe.user == undefined) {
        window.location.replace("http://77.221.154.46/redirect");
    }

   tg.expand(); //расширяем на все окно

   let btnED = document.getElementById("btn__sub"); //получаем кнопку активировать/деактивировать
   let xname_input = document.getElementById("get_x_name");
   let tonWallet_input = document.getElementById("get_ton_wallet");



   //alert(window.Telegram.WebApp.initDataUnsafe.user.id)
   var uid = tg.initDataUnsafe.user.id
   var bd = 0

   var input = document.getElementById("enter_refcode");
    input.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById("submit_refcode").click(); 
        }
    });

   /*fetch(`http://77.221.154.46/api?uid=${uid}`)
        .then((response) => {
            return response.json();
        }).then((result) => {
            bd[uid] = result;
        })*/
   fetch(`http://77.221.154.46/api?uid=${uid}`)
        .then((response) => {
            return response.json();
        }).then((result) => {
            bd = result;

            if (bd["newbie"] != 1) {
                overlay.style.display = 'none';
            }

            let usercard = document.getElementById("points__header"); //получаем блок usercard 

            usercard.innerText = `Points: ${bd["points"]}`; //показываем user_id

            let inv = document.getElementById("invited_data"); //получаем блок usercard 
            inv.innerText = `Already invited: ${bd["invitations"]}`;

            let refl = document.getElementById("ref_link"); //получаем блок usercard 
            refl.innerText = `https://t.me/Notfnotcoin_bot?start=${uid}`;
            //console.log(bd)


            let lul = document.getElementById("leaderboard_ul");
            /*let ar = []


            for (const [key, value] of Object.entries(bd)) {
                ar.push(value["points"])
            }

            ar = ar.sort().reverse()*/
            fetch(`http://77.221.154.46/leaderboard`)
                .then((response) => {
                    return response.json();
                }).then((result) => {
                    lul.innerHTML = ""
                    let ar = result
                    let i = 0
                    for (const [key, value] of Object.entries(ar)) {
                        lul.innerHTML += `<li>
                                        <div class="place">#${i+1}</div>
                                        <div class="points">${ar[key][0]}</div>
                                        <div class="marker"></div>
                                        <div class="points">${ar[key][1]} points</div>
                                    </li>`
                        i += 1
                    }
                })

            const leaderboardSection = document.querySelector('.leaderboard__tab');
            const mainSection = document.querySelector('.main__tab')
            const profileSection = document.querySelector('.profile__tab');
            const referalsSection = document.querySelector('.referals__tab');

            document.querySelector('.btn__sub').addEventListener('click', (e) => {
                e.preventDefault()
            })

            document.querySelector('.tab__ref').addEventListener('click', () => {
                mainSection.style.display = 'none'
                leaderboardSection.style.display = 'none'
                profileSection.style.display = 'none'
                referalsSection.style.display = 'block'
            })

            document.querySelector('.tab__main').addEventListener('click', () => {
                mainSection.style.display = 'block'
                leaderboardSection.style.display = 'none'
                profileSection.style.display = 'none'
                referalsSection.style.display = 'none'
            })

            document.querySelector('.tab__leader').addEventListener('click', () => {
                mainSection.style.display = 'none'
                leaderboardSection.style.display = 'block'
                profileSection.style.display = 'none'
                referalsSection.style.display = 'none'

                fetch(`http://77.221.154.46/leaderboard`)
                    .then((response) => {
                        return response.json();
                    }).then((result) => {
                        lul.innerHTML = ""
                        let ar = result
                        let i = 0
                        for (const [key, value] of Object.entries(ar)) {
                            lul.innerHTML += `<li>
                                            <div class="place">#${i+1}</div>
                                            <div class="points">${ar[key][0]}</div>
                                            <div class="marker"></div>
                                            <div class="points">${ar[key][1]} points</div>
                                        </li>`
                            i += 1
                        }
                    })
            })

            document.querySelectorAll('.logo').forEach(tab => {
                tab.addEventListener('click', () => {
                    mainSection.style.display = 'none'
                    leaderboardSection.style.display = 'none'
                    profileSection.style.display = 'block'
                    referalsSection.style.display = 'none'
                })
            })

            document.querySelector('.copy__btn').addEventListener("click", function () {
                navigator.clipboard.writeText(document.querySelector('.link__tme').innerText).then(function () {
                    alert('Text copied to clipboard');
                }).catch(function (error) {
                    console.error('Error:', error);
                });
            });  
        })
