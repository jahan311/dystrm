window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});


$(document).ready(function () {
    // 탭 메뉴 클릭 시 해당 탭 박스 표시
    $('.tab-menu li').click(function () {
        var index = $(this).index();
        $('.tab-menu li').removeClass('active');
        $(this).addClass('active');
        $('.tab-box').removeClass('show');
        $('.tab-box').eq(index).addClass('show');
        // 해당 탭의 guide-tab의 첫 번째 li에 active 클래스 추가
        $('.tab-box').eq(index).find('.guide-tab li:first').addClass('active');
        // 해당 탭의 첫 번째 guide-box에 show 클래스 추가
        $('.tab-box').eq(index).find('.guide-box:first').addClass('show');
    });

    // 초기에 첫 번째 탭과 첫 번째 guide-tab에 active 클래스 추가
    $('.tab-menu li:first').addClass('active');
    $('.guide-tab li:first').addClass('active');

    // 첫 번째 tab-box와 첫 번째 guide-box에 show 클래스 추가
    $('.tab-box:first').addClass('show');
    $('.tab-box:first .guide-box:first').addClass('show');

    // guide-tab의 li 클릭 시 해당 index에 맞는 guide-box 표시
    $('.guide-tab li').click(function () {
        var index = $(this).index();
        $('.guide-tab li').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.tab-box').find('.guide-box').removeClass('show');
        $(this).closest('.tab-box').find('.guide-box').eq(index).addClass('show');
    });


    // menu-btn 클릭 시 메뉴 토글
    $(document).on('click', '.menu-btn', function () {
        $('.mo-nav').toggleClass('show');
        $('body').toggleClass('overflow-hidden');
    });

    // 모바일 네비게이션 링크 클릭 시 네비게이션 닫기
    $(document).on('click', '.mo-nav a', function () {
        $('.mo-nav').removeClass('show');
        $('body').removeClass('overflow-hidden');
    });

    // 창 크기 변화 시 처리
    function checkWindowWidth() {
        if ($(window).width() >= 481) {
            $('.mo-nav, .black-overlay').removeClass('show');
            $('body').css('overflow', 'auto');
        }
    }

    checkWindowWidth();

    $(window).resize(function () {
        checkWindowWidth();
    });
});

function openCash() {
    var mobile = /iPhone|iPad/i.test(navigator.userAgent);
    if (mobile) {
        window.open('https://m2.melon.com/buy/meloncash/charge.htm')
    } else {
        window.open('https://www.melon.com/buy/meloncash/charge.htm')
    }
}


function openOneClick() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        $('#oneClickPopMo').addClass('show');
        $('body').css('overflow', 'hidden');
    } else {
        $('#oneClickPopPC').addClass('show');
        $('body').css('overflow', 'hidden');
    }
}

function closePop() {
    $('#mobilePop').removeClass('show');
    $('#oneClickPopPC').removeClass('show');
    $('#oneClickPopMo').removeClass('show');
    $('body').css('overflow', 'auto');
}

// 스밍 원클릭

/* melon */
function oneMelonPc1() {
    window.open('https://han.gl/YJF5u');
}

function oneMelonPc2() {
    window.open('https://han.gl/kfc4B');
}

function oneMelonPc3() {
    window.open('https://han.gl/m3gXI');
}

function oneMelonPc4() {
    window.open('https://han.gl/IOSOi');
}

function oneMelonAnd1() {
    window.open('https://han.gl/BmN7j');
}

function oneMelonAnd2() {
    window.open('https://han.gl/gt02z');
}

function oneMelonAnd3() {
    window.open('https://han.gl/yqngX');
}

function oneMelonAnd4() {
    window.open('https://han.gl/SYuFf');
}

function oneMelonIos() {
    window.open('https://han.gl/ffs8S');
}

function oneMelonIpad() {
    window.open('https://han.gl/VImDi');
}

/* genie */
function oneGeniePc() {
    window.open('https://han.gl/xd5ED');
}

function oneGenieAnd() {
    window.open('https://han.gl/oXhqx');
}

function oneGenieIos() {
    window.open('https://han.gl/DLU7j');
}

/* bugs */
function onekBugsPc() {
    window.open('https://han.gl/RvBO3');
}

function oneBugsMo() {
    window.open('https://han.gl/Ibe09');
}


/* vibe */
function oneVibeMo1() {
    window.open('https://han.gl/TmUe0');
}

function oneVibeMo2() {
    window.open('https://han.gl/W7ZbG');
}

function oneVibeMo3() {
    window.open('https://han.gl/B3XVr');
}

function oneVibeMo4() {
    window.open('https://han.gl/MiSnd');
}

function oneFlo() {
    window.open('https://han.gl/YmR0u');
}


function openBuySong() {
    var isIOS = /iPhone|iPad/i.test(navigator.userAgent);
    if (isIOS) {
        var deviceid = encodeURIComponent('SCSI\\DISK&VEN_NVME&PROD_SEAGATE_BARRACUD\\5&B7C175F&0&000000@#@43244851\\DISK&VEN_Windows 10 Pro\\1d3b945413054c20ae11691ad4ed11b1');
        location.href = `https://m2.melon.com/buy/contents/purchase.htm?paramsName=contsId&contsId=38123332&byContsId=38123332&bySclasCode=FG1102&prodSclasCode=FG1102&byCodecTypeCode=AG0113&price=700&contsType=3C0001&tab=BUYSONG&menuId=1000000386&paymtAmt=700&prodId=&retUrl=&buyActUrl=%2Fcommerce%2Fm%2Fchannel%2Fcontents%2Fmobileapp%2Fandroidchannel_downloadProc.htm&viewType=&isNineteenContentExcept=N&pocId=AS40&memberKey=1&deviceid=${deviceid}`;
        
    } else {
        $('#mobilePop .popup-box .text').text('아이폰 전용 기능입니다.');
        $('#mobilePop').addClass('show');
        $('body').css('overflow', 'hidden');
    }
}