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

// function openBuySong() {
//     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//     if (isMobile) {
//         location.href = "melonapp://webview?url=https://m2.melon.com/buy/contents/purchase.htm?paramsName=byContsId&contsId=37860725&byContsId=37860725&bySclasCode=FG1102&prodSclasCode=FG1102&byCodecTypeCode=AG0113&price=700&contsType=3C0001&tab=BUYSONG&menuId=31030101&paymtAmt=700&prodId=10089&retUrl=https%3A%2F%2Fwww.melon.com%2Fmymusic%2Fmain%2Fmymusicmain_list.htm%3FmemberKey%3D43244851&buyActUrl=https%3A%2F%2Fwww.melon.com%2Fcm%2Fdownload%2Fsong%2FuseProc.htm&viewType=&isNineteenContentExcept=N&pocId=AS20&memberKey=43244851";
//     } else {
//         $('#mobilePop .popup-box .text').text('아이폰 전용 기능입니다.');
//         $('#mobilePop').addClass('show');
//         $('body').css('overflow', 'hidden');
//     }
// }

function openBuySong(contsId, bySclasCode, prodSclasCode, price, tab, menuId) {
    const baseUrl = 'https://m2.melon.com/buy/contents/purchase.htm';
    let extraParams;

    // 조건에 따라 extraParams를 다르게 설정
    if (tab === 'BUYSONG') {
        extraParams = '&downType=&prodId=&retUrl=&buyActUrl=%2Fcommerce%2Fm%2Fchannel%2Fcontents%2Fmobileapp%2Fandroidchannel_downloadProc.htm&viewType=&isNineteenContentExcept=N&pocId=AS20&memberKey=1';
    } else {
        extraParams = '&prodId=&retUrl=&buyActUrl=%2Fcommerce%2Fm%2Fchannel%2Fcontents%2Fmobileapp%2Fandroidchannel_downloadProc.htm&viewType=&isNineteenContentExcept=N&pocId=AS20&memberKey=1';
    }

    const params = `?paramsName=contsId&contsId=${contsId}&byContsId=${contsId}&bySclasCode=${bySclasCode}&prodSclasCode=${prodSclasCode}&byCodecTypeCode=AG0113&price=${price}&contsType=3C0001&tab=${tab}&menuId=${menuId}&paymtAmt=${price}${extraParams}`;

    window.open(baseUrl + params);
}

function openPresent() {
    var isIOS = /iPhone|iPad/i.test(navigator.userAgent);
    if (isIOS) {
        window.open('https://www.melon.com/buy/gift/purchase.htm?sendMemberKey=43244851&sendMsgTitle=&sendMsgCont=.&pocId=AS40&giftProdGubun=1&totBillAmt=&totBillAmtPerRecv=&sendContsCnt=1&contsIds=38145736&prodSclasCodes=FG1102&prodIds=10089&prodamts=700&reptCnt=1&recvUsers=0%7C55023443&sendIp=8.8.8.8&downType=&sendDeviceId=001010022899&menuId=1000003C0001&repContName=0&pcplayerYn=&httpDomain=http%3A%2F%2Fm2.melon.com&httpsDomain=https%3A%2F%2Fm2.melon.com')
    }else {
        $('#mobilePop .popup-box .text').text('아이폰 전용 기능입니다.');
        $('#mobilePop').addClass('show');
        $('body').css('overflow', 'hidden');
    }
}

// function openBuySong(contsId, bySclasCode, prodSclasCode, price, tab, menuId, afterUrl) {
//     var isIOS = /iPhone|iPad/i.test(navigator.userAgent);
//     if (isIOS) {
//         window.open('https://m2.melon.com/buy/contents/purchase.htm?paramsName=contsId&contsId=38055116&byContsId=38055116&bySclasCode=FG1102&prodSclasCode=FG1102&byCodecTypeCode=AG0113&price=700&contsType=3C0001&tab=BUYSONG&menuId=1000000386&paymtAmt=700&prodId=&retUrl=&buyActUrl=%2Fcommerce%2Fm%2Fchannel%2Fcontents%2Fmobileapp%2Fandroidchannel_downloadProc.htm&viewType=&isNineteenContentExcept=N&pocId=AS20&memberKey=1')
//     } else {
//         $('#mobilePop .popup-box .text').text('아이폰 전용 기능입니다.');
//         $('#mobilePop').addClass('show');
//         $('body').css('overflow', 'hidden');
//     }
// }

// function openBuyFlac() {
//     var isIOS = /iPhone|iPad/i.test(navigator.userAgent);
//     if (isIOS) {
//         window.open('https://m2.melon.com/buy/contents/purchase.htm?paramsName=contsId&contsId=38055116&byContsId=38055116&bySclasCode=FG1106&prodSclasCode=FG1106&byCodecTypeCode=AG0113&price=1000&contsType=3C0001&tab=BUYFLACSONG&menuId=26020101&paymtAmt=1000&downType=&prodId=&retUrl=&buyActUrl=%2Fcommerce%2Fm%2Fchannel%2Fcontents%2Fmobileapp%2Fandroidchannel_downloadProc.htm&viewType=&isNineteenContentExcept=N&pocId=AS20&memberKey=1')
//     } else {
//         $('#mobilePop .popup-box .text').text('아이폰 전용 기능입니다.');
//         $('#mobilePop').addClass('show');
//         $('body').css('overflow', 'hidden');
//     }
// }


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
