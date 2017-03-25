var myApp = new Framework7({
    modalTitle: 'Hornbaekgolf',
    material: true,
    preloadPreviousPage: false,
    fastClicks: true,
    pushState: true,
});

const NO_INTERNET_ALERT = 'Please check your internet connection';

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
});

var rightView = myApp.addView('.view-right', {
});

/* ===== Nyheder ===== */
myApp.onPageInit('nyheder', function(page) {
    $("#ul-nyheder").empty();
    if (checkInternetConnection() == true) {
        myApp.showIndicator();
        $.getJSON("http://hornbaekgolf.dk/api/get_news.php", function(result) {
            $.each(result, function(i, field) {
                if (field.status == 'empty') {
                    $("#ul-nyheder").append('<li><center><p>No news</p><center></li>');
                } else {
                    $("#ul-nyheder").append('<li><a href="nyheder-detail.html?id='+ field.id +'" class="item-link item-content">' +
                                                '<div class="item-inner">' +
                                                  '<div class="item-title">'+ field.title +'</div>' +
                                                '</div></a></li>');
                }
            });
            myApp.hideIndicator();
        });
    } else {
        myApp.alert(NO_INTERNET_ALERT);
        $("#ul-nyheder").append('<li><center><p>No Internet Connection</p><center></li>');
    }
});

/* ===== Nyheder Detail ===== */
myApp.onPageInit('nyheder-detail', function(page) {
    $("#news-content").empty();
    if (checkInternetConnection() == true) {
        myApp.showIndicator();
        $.getJSON("http://hornbaekgolf.dk/api/get_news_detail.php?id="+page.query.id, function(result) {
            $.each(result, function(i, field) {
                if (field.status == 'empty') {
                    $("#news-content").append('<center><p>No content</p><center>');
                } else {
                    $("#news-content").append(field.html);
                }
            });
            myApp.hideIndicator();
        });
    } else {
        myApp.alert(NO_INTERNET_ALERT);
        $("#news-content").append('<center><p>No Internet Connection</p><center>');
    }
});


function onBackKeyDown() {
    try {
        if (mainView.activePage.name == 'index') {
            if ($$('.modal-overlay').hasClass('modal-overlay-visible')) {
                myApp.closeModal();
            } else if ($$('body').hasClass('with-panel-left-cover')) {
                myApp.closePanel('left');
            } else if ($$('body').hasClass('with-panel-right-cover')) { 
                myApp.closePanel('right');
            } else {
                myApp.confirm('Do you want to Exit?', 'Exit App', function() {
                    navigator.app.clearHistory();
                    navigator.app.exitApp();
                });
            }
        } else {
            if ($$('.popup.popup-login').length > 0) {
                return false;
            } else if ($$('.searchbar.searchbar-active').length > 0) {
                $$('.searchbar.searchbar-active')[0].f7Searchbar.disable();
            } else if ($$('.photo-browser').length > 0) {
                $$('.photo-browser .photo-browser-close-link, .photo-browser .close-popup').trigger('click');
            } else if ($$('.modal-overlay').hasClass('modal-overlay-visible')) {
                myApp.closeModal();
            } else if ($$('body').hasClass('with-panel-left-cover')) { 
                myApp.closePanel('left');
            } else if ($$('body').hasClass('with-panel-right-cover')) { 
                myApp.closePanel('right');
            } else if ($$('.popover, .actions-modal, .picker-modal').length > 0) {
                myApp.closeModal('.popover, .actions-modal, .picker-modal');
                var view = myApp.getCurrentView();
                view.router.back();  
            } else {
                myApp.closeModal();
                var view = myApp.getCurrentView();
                view.router.back();
            }
        }
    } catch (err) {
        myApp.alert('back error: ' + err.message);
    }
}

function checkInternetConnection() {
    try {
        var state = navigator.connection.type;
        if (state == 'none') {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        return true;
    }
}
