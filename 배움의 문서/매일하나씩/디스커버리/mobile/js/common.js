//gnb
var iScrollPos = 0,
    gnbStop,
    layerScrollWeb;
var gnb = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '#gnb'
    },
    bindEvt: function() {
        var _this = this;

        _this.gnbScroll();
        $(window).scroll(function(e) {
            _this.gnbScroll(e);
        });

        $(window).resize(function(e) {
            _this.gnbScroll(e);
        });
    },
    gnbScroll: function(e) {
        var _this = this;

        var iCurScrollPos = $(window).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            if (iCurScrollPos > 60) {
                $('.d_fixed').addClass('fixed');
            }
        } else {
            $('.d_fixed').removeClass('fixed');
        };

        iScrollPos = iCurScrollPos;
    }
};

//allMenu
var allMenuScroll;
var allMenu = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_all_menu'
    },
    bindEvt: function() {
        var _this = this;

        $(this.eventObj.eventWrap).on('click','.d_all_menu_open', function(e) {
            e.preventDefault();
            _this.open(e);
        });
        $(this.eventObj.eventWrap).on('click','.d_all_menu_close', function(e) {
            e.preventDefault();
            _this.close(e);
        });

        $(this.eventObj.eventWrap).on('click','.d_depth_open', function(e) {
            e.preventDefault();

            setTimeout(function () {
                allMenuScroll.refresh();
            }, 0);

            _this.toggle(e);
        });

        $(this.eventObj.eventWrap).on('touchstart','.all-menu-wrap', function(e) {
            _this.dimClose(e);
        });
    },
    toggle: function(e) {
        if ($(e.currentTarget).parents('li').eq(0).hasClass('on')) {
            $(e.currentTarget).parents('li').eq(0).removeClass('on').find('li').removeClass('on');
        }else {
            allMenuScroll.scrollTo(0, 0);
            $(e.currentTarget).parents('li').eq(0).addClass('on').siblings().removeClass('on');
            var menuTop = $(e.currentTarget).offset().top - $(window).scrollTop() -90;
            allMenuScroll.scrollTo(0, -menuTop);
        }
    },
    open: function(e) {
        var _this = this;
        $('#container , .all-menu-info, .all-menu-wrap').bind('touchmove', function(e){ e.preventDefault() });
        $(_this.eventObj.eventWrap).find('.all-menu-wrap').addClass('on');
        setTimeout(function () {
            $(_this.eventObj.eventWrap).find('.all-menu-inner').addClass('on');
        }, 10);
        allMenuScroll = new IScroll('.all-menu-scroll', {
            click: true,
            mouseWheel: true
        });
    },
    close: function(e) {
        var _this = this;
        $(_this.eventObj.eventWrap).find('.all-menu-inner').removeClass('on');
        setTimeout(function () {
            $(_this.eventObj.eventWrap).find('.all-menu-wrap').removeClass('on');
            $(_this.eventObj.eventWrap).find('.all-menu-list01 li').removeClass('on');
            if (allMenuScroll != null) {
                allMenuScroll.destroy();
                allMenuScroll = null;
            }
            $('#container , .all-menu-info, .all-menu-wrap').unbind('touchmove');
        }, 1000);
    },
    dimClose: function(e) {
        var _this = this;
        if (!$(e.target).parents().is('.all-menu-inner')) {
            $(_this.eventObj.eventWrap).find('.all-menu-inner').removeClass('on');
            setTimeout(function () {
                $(_this.eventObj.eventWrap).find('.all-menu-wrap').removeClass('on');
                $(_this.eventObj.eventWrap).find('.all-menu-list01 li').removeClass('on');
                if (allMenuScroll != null) {
                    allMenuScroll.destroy();
                    allMenuScroll = null;
                }
                $('#container , .all-menu-info, .all-menu-wrap').unbind('touchmove');
            }, 1000);
        }
    }
};

//dropdown
var layerScroll;
var dropdown = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_dropdown'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click','.d_dropdown .d_dropdown_sel', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });

        $(document).on('click','.d_dropdown .d_dropdown_close', function(e) {
            e.preventDefault();
            _this.close(e);
        });
    },
    toggle: function(e) {
        $(this.eventObj.eventWrap).removeClass('on');
        $(e.target).parents(this.eventObj.eventWrap).addClass('on');
        $('#contents, .d_dropdown_cont').bind('touchmove', function(e){ e.preventDefault() });
    },
    close: function(e) {
        if (!$(e).parents().is('.d_dropdown_cont') && !$(e).hasClass('d_dropdown_cont')) {
            $(this.eventObj.eventWrap).removeClass('on');
            $('#contents , .d_dropdown_cont').unbind('touchmove');
        }
    }
};

//dropdown02
var dropdown02 = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_dropdown02'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventWrap).on('click','.d_dropdown02_sel', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });

        $(_this.eventObj.eventWrap).on('click','.d_dropdown02_close', function(e) {
            e.preventDefault();
            _this.close(e);
        });
    },
    toggle: function(e) {
        $(this.eventObj.eventWrap).removeClass('on');
        $(e.target).parents(this.eventObj.eventWrap).addClass('on');
    },
    close: function(e) {
        if (!$(e).parents().is(this.eventObj.eventWrap)) {
            $(this.eventObj.eventWrap).removeClass('on');
        }
    }
};

//quickMenu
var quickMenu = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_quick_menu'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click','.d_quick_menu .d_quick_menu_open', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });

        $(document).on('click','.d_quick_menu .d_quick_menu_close', function(e) {
            e.preventDefault();
            _this.close(e);
        });
    },
    toggle: function(e) {
        $(this.eventObj.eventWrap).removeClass('on');
        $(e.target).parents(this.eventObj.eventWrap).addClass('on');
        $('#contents, .d_quick_menu_cont').bind('touchmove', function(e){ e.preventDefault() });
    },
    close: function(e) {
        if (!$(e).parents().is('.d_quick_menu_cont') && !$(e).hasClass('d_quick_menu_cont')) {
            $(this.eventObj.eventWrap).removeClass('on');
            $('#contents , .d_quick_menu_cont').unbind('touchmove');
        }
    }
};

//tab
var tab = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_tab'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventWrap).on('click','a, span', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });
    },
    toggle: function(e) {
        $(e.target).parents('li').addClass('on').siblings().removeClass('on');
        if (layerScrollWeb != undefined) {
            setTimeout(function () {
                layerScrollWeb.refresh();
            }, 0);
        }
    }
};

//tab02
var tab02 = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_tab02'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventWrap).on('click','.d_tab02_select a', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });
    },
    toggle: function(e) {
        $(e.target).parents('li').addClass('on').siblings().removeClass('on');
        $(e.target).parents(this.eventObj.eventWrap).find('.d_tab02_cont').eq($(e.target).parents('li').index()).show().siblings('.d_tab02_cont').hide();
        if (layerScrollWeb != undefined) {
            setTimeout(function () {
                layerScrollWeb.refresh();
            }, 0);
        }
    }
};

//accordion
var accordion = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_accordion'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click','.d_accordion_select', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });
    },
    toggle: function(e) {
        if ($(e.target).parents('tr,li').hasClass('on')) {
            $(e.target).parents('tr,li').removeClass('on');
        }else {
            $(e.target).parents('tr,li').addClass('on').siblings().removeClass('on');
        }
    }
};

//select
var select = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_select'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click','.d_select_sel', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });
        $(document).on('click','.d_select ul li a', function(e) {
            e.preventDefault();
            _this.selected(e);
        });
    },
    toggle: function(e) {
        var itemLen = $(e.currentTarget).parents('.d_select').find('li').length,
            contHeight,
            contScrollTop;
        if ($(e.currentTarget).parents('.d_select').hasClass('on')) {
            $(e.currentTarget).parents('.d_select').toggleClass('on');
        }else {
            $(this.eventObj.eventWrap).removeClass('on select-style01-up select-style01-down');
            $(e.currentTarget).parents().each(function() {
                if ($(this).css('overflow-y') == 'scroll') {
                    contHeight = $(this).height() - (event.clientY - $(this).offset().top);
                    contScrollTop = $(this).scrollTop() + (event.clientY - $(this).offset().top);
                }else {
                    contHeight = window.innerHeight - event.clientY;
                    contScrollTop = $(window).scrollTop() + event.clientY;
                }
                 if (contHeight < $(e.currentTarget).height()*(itemLen + 1) && contScrollTop > $(e.currentTarget).height()*(itemLen + 1)) {
                    $(e.currentTarget).parents('.d_select').addClass('select-style01-up');

                }else {
                    $(e.currentTarget).parents('.d_select').addClass('select-style01-down');
                }
            });
            $(e.currentTarget).parents('.d_select').toggleClass('on');
        }
    },
    selected : function(e) {
        $(e.currentTarget).parents('.d_select').find('button > span').html($(e.currentTarget).html());
        $(e.currentTarget).parents('.d_select').removeClass('on select-style01-up select-style01-down');
    },
    close: function(e) {
        if (!$(e).parents().is(this.eventObj.eventWrap)) {
            $(this.eventObj.eventWrap).removeClass('on select-style01-up select-style01-down');
        }
    }
};

//layerpopup
var layerTarget;
var layerPopup = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventOpen: '.d_layer_open',
        eventOpen02: '.d_layer_open02',
        eventWebviewOpen: '.d_webview_open',
        eventClose: '.d_layer_close',
        eventWebviewClose: '.d_webview_close'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click',_this.eventObj.eventOpen, function(e) {
            e.preventDefault();
            layerTarget = $(this);
            _this.popupOpen(e);
        });
        $(document).on('click',_this.eventObj.eventOpen02, function(e) {
            e.preventDefault();
            layerTarget = $(this);
            _this.popupOpen02(e);
        });
        $(document).on('click',_this.eventObj.eventClose, function(e) {
            e.preventDefault();
            _this.popupClose(e);
        });
        $(document).on('click',_this.eventObj.eventWebviewOpen, function(e) {
            e.preventDefault();
            layerTarget = $(this);
            _this.webviewOpen(e);
        });
        $(document).on('click',_this.eventObj.eventWebviewClose, function(e) {
            e.preventDefault();
            _this.webviewClose(e);
        });
    },
    popupOpen: function(e) {
        $('.layer-popup').fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        var layerId = $(e.currentTarget).attr('href');

        $('.layer-popup').find('.d_layer_scroll').removeClass('on');

        quickMenu.close();

        if ($(layerId).css('display','flex').find('.layer-popup-search').length > 0) {
            $(layerId).css('display','flex').find('input').focus();
        }else {
            $(layerId).css('display','flex').find('.layer-popup-cont').focus();
        }

        if ($(layerId).find('.d_layer_scroll').length > 0) {
            if ($(layerId).find('.layer-popup-cont').outerHeight() > $(window).height() - 60) {
                $(layerId).find('.d_layer_scroll').css('max-height',$(layerId).find('.d_layer_scroll').height() - ($(layerId).find('.layer-popup-cont').outerHeight() - $(layerId).height()) - 60);
            }
            $(layerId).find('.d_layer_scroll').addClass('on');
            layerScroll = new IScroll($(layerId).find('.d_layer_scroll.on')[0], {
                click: true,
                mouseWheel: true
            });
            setTimeout(function () {
                layerScroll.refresh();
            }, 0);
        }
        if ($(layerId).find('video').length > 0) {
            var videoEl = $(layerId).find('video')[0];
            videoEl.pause();
            videoEl.currentTime = 0;
            videoEl.play();
        }
        $('#contents,.layer-popup-cont, .layer-popup-title').bind('touchmove', function(e){ e.preventDefault() });
        //$('#contents a,#contents input,#contents select').bind('click touchstart touchend touchsmove', function(e){ e.preventDefault() });
    },
    popupOpen02: function(e) {
        var layerId = $(e.currentTarget).attr('href');

        if ($(layerId).css('display','flex').find('.layer-popup-search').length > 0) {
            $(layerId).css('display','flex').find('input').focus();
        }else {
            $(layerId).css('display','flex').find('.layer-popup-cont').focus();
        }

        if ($(layerId).find('.d_layer_scroll').length > 0) {
            if ($(layerId).find('.layer-popup-cont').outerHeight() > $(window).height() - 60) {
                $(layerId).find('.d_layer_scroll').css('max-height',$(layerId).find('.d_layer_scroll').height() - ($(layerId).find('.layer-popup-cont').outerHeight() - $(layerId).height()) - 60);
            }
            $(layerId).find('.d_layer_scroll').addClass('on');
            layerScroll = new IScroll($(layerId).find('.d_layer_scroll.on')[0], {
                click: true,
                mouseWheel: true
            });
            setTimeout(function () {
                layerScroll.refresh();
            }, 0);
        }
        $('#contents,.layer-popup-cont, .layer-popup-title').bind('touchmove', function(e){ e.preventDefault() });
        //$('#contents a,#contents input,#contents select').bind('click touchstart touchend touchsmove', function(e){ e.preventDefault() });
    },
    popupOpenNow: function(e) {
        $('.layer-popup').fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        var layerId = e;

        $(layerId).css('display','flex').find('.layer-popup-cont').focus();
        if ($(layerId).find('.d_layer_scroll').length > 0) {
            if ($(layerId).find('.layer-popup-cont').outerHeight() > $(window).height() - 60) {
                $(layerId).find('.d_layer_scroll').css('max-height',$(layerId).find('.d_layer_scroll').height() - ($(layerId).find('.layer-popup-cont').outerHeight() - $(window).height()) - 60);
            }
            $(layerId).find('.d_layer_scroll').addClass('on');
            layerScroll = new IScroll($(layerId).find('.d_layer_scroll.on')[0], {
                click: true,
                mouseWheel: true
            });
        }
        $('#contents,.layer-popup-cont, .layer-popup-title').bind('touchmove', function(e){ e.preventDefault() });
        //$('#contents a,#contents input,#contents select').bind('click touchstart touchend touchsmove', function(e){ e.preventDefault() });
    },
    popupClose: function(e) {
        var layerId = $(e.target).parents('.layer-popup').attr('id');
        if (layerTarget != undefined) {
            layerTarget.focus();
        }
        $(e.target).parents('.layer-popup').fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        if ($(e.target).parents('.layer-popup').find('.d_layer_scroll').length > 0) {
            $(e.target).parents('.layer-popup').find('.d_layer_scroll').css('max-height','');
            $(e.target).parents('.layer-popup').find('.d_layer_scroll').removeClass('on');
        }
        if ($(layerId).find('video').length > 0) {
            var videoEl = $(layerId).find('video')[0];
            videoEl.currentTime = 0;
            videoEl.pause();
        }
        $('#contents,.layer-popup-cont, .layer-popup-title').unbind();
    },
    webviewOpen: function(e) {
        $('.webview-layer-wrap').fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        var layerId = $(e.currentTarget).attr('href');

        $('.webview-layer-wrap').find('.d_layer_scroll').removeClass('on');


        $(layerId).css('display','block');

        if ($(layerId).find('.d_layer_scroll').length > 0) {
            $(layerId).find('.d_layer_scroll').css('max-height',$(layerId).height() - 110);
            $(layerId).find('.d_layer_scroll').addClass('on');
            layerScrollWeb = new IScroll($(layerId).find('.d_layer_scroll.on')[0], {
                click: true,
                mouseWheel: true
            });
            setTimeout(function () {
                layerScrollWeb.refresh();
            }, 0);
            $(layerId).find('.d_layer_scroll').on('touchend touchmove', '.check-skin', function() {
                if ($(this).find('input[type = checkbox]').prop('checked')) {
                    $(this).find('input[type = checkbox]').prop('checked','');
                }else {
                    $(this).find('input[type = checkbox]').prop('checked','checked');
                }
            });
            $(layerId).find('.d_layer_scroll').on('touchend touchmove', '.rdo-skin', function() {
                $(this).find('input[type = radio]').prop('checked','checked');
            });
        }
        if ($(layerId).find('.d_layer_scroll_x').length > 0) {
            $(layerId).find('.d_layer_scroll_x .d_layer_scroll_x_w').css('width',$(layerId).find('.d_layer_scroll_x .d_layer_scroll_x_w table').width() + 20);
            $(layerId).find('.d_layer_scroll_x').css('max-width',$(layerId).width());
            $(layerId).find('.d_layer_scroll_x').addClass('on');
            layerScrollX = new IScroll($(layerId).find('.d_layer_scroll_x.on')[0], {
                click: true,
                scrollX: true,
                scrollY: false,
                mouseWheel: true
            });
            setTimeout(function () {
                layerScrollX.refresh();
            }, 0);
        }
        $('#contents,.webview-layer-title01, .webview-pop-wrap').bind('touchmove', function(e){ e.preventDefault() });
        //$('#contents a,#contents input,#contents select').bind('click touchstart touchend touchsmove', function(e){ e.preventDefault() });
    },
    webviewOpenNow: function(e) {
        $('.webview-layer-wrap').fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        var layerId = e;

        $('.webview-layer-wrap').find('.d_layer_scroll').removeClass('on');


        $(layerId).css('display','block');

        if ($(layerId).find('.d_layer_scroll').length > 0) {
            $(layerId).find('.d_layer_scroll').css('max-height',$(layerId).height() - 110);
            $(layerId).find('.d_layer_scroll').addClass('on');
            layerScrollWeb = new IScroll($(layerId).find('.d_layer_scroll.on')[0], {
                click: true,
                mouseWheel: true
            });
            setTimeout(function () {
                layerScrollWeb.refresh();
            }, 0);
            $(layerId).find('.d_layer_scroll').on('touchend touchmove', '.check-skin', function() {
                if ($(this).find('input[type = checkbox]').prop('checked')) {
                    $(this).find('input[type = checkbox]').prop('checked','');
                }else {
                    $(this).find('input[type = checkbox]').prop('checked','checked');
                }
            });
            $(layerId).find('.d_layer_scroll').on('touchend touchmove', '.rdo-skin', function() {
                $(this).find('input[type = radio]').prop('checked','checked');
            });
        }
        if ($(layerId).find('.d_layer_scroll_x').length > 0) {
            $(layerId).find('.d_layer_scroll_x .d_layer_scroll_x_w').css('width',$(layerId).find('.d_layer_scroll_x .d_layer_scroll_x_w table').width() + 20);
            $(layerId).find('.d_layer_scroll_x').css('max-width',$(layerId).width());
            $(layerId).find('.d_layer_scroll_x').addClass('on');
            layerScrollX = new IScroll($(layerId).find('.d_layer_scroll_x.on')[0], {
                click: true,
                scrollX: true,
                scrollY: false,
                mouseWheel: true
            });
            setTimeout(function () {
                layerScrollX.refresh();
            }, 0);
        }
        $('#contents,.webview-layer-title01, .webview-pop-wrap').bind('touchmove', function(e){ e.preventDefault() });
        //$('#contents a,#contents input,#contents select').bind('click touchstart touchend touchsmove', function(e){ e.preventDefault() });
    },
    webviewClose: function(e) {
        var layerId = $(e.target).parents('.webview-layer-wrap').attr('id');
        if (layerTarget != undefined) {
            layerTarget.focus();
        }
        $(e.target).parents('.webview-layer-wrap').fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        if ($(e.target).parents('.webview-layer-wrap').find('.d_layer_scroll').length > 0) {
            $(e.target).parents('.webview-layer-wrap').find('.d_layer_scroll').css('max-height','');
            $(e.target).parents('.webview-layer-wrap').find('.d_layer_scroll').removeClass('on');
            layerScrollWeb.destroy();
        }
        $('#contents,.webview-layer-title01, .webview-pop-wrap').unbind();
    },
    webviewCloseNow: function(e) {
        var layerId = e;
        if (layerTarget != undefined) {
            layerTarget.focus();
        }
        $(layerId).fadeOut(100,function() {
            //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
        });
        if ($(layerId).find('.d_layer_scroll').length > 0) {
            $(layerId).find('.d_layer_scroll').css('max-height','');
            $(layerId).find('.d_layer_scroll').removeClass('on');
            layerScrollWeb.destroy();
        }
        $('#contents,.webview-layer-title01, .webview-pop-wrap').unbind();
    },
    close: function(e) {
        if (!$(e).parents().is('.layer-popup-cont') && !$(e).hasClass('layer-popup-cont') && $(e).hasClass('layer-popup')) {
            $(e).fadeOut(100,function() {
                //$('#contents a,#contents input,#contents select').unbind('click touchstart touchend touchsmove');
            });
            if ($(e).find('.d_layer_scroll').length > 0) {
                $(e).find('.d_layer_scroll').css('max-height','');
                $(e).find('.d_layer_scroll').removeClass('on');
            }
            $('#contents,.layer-popup-cont, .layer-popup-title').unbind();
        }
    }
};

//scrollAnchor
var scrollAnchor = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventSel: '.d_layer_scroll_anchor'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventSel).on('click','a', function(e) {
            e.preventDefault();
            _this.anchor(e);
        });
    },
    anchor: function(e) {
        if ($(e.target).parents().is('.webview-layer-wrap')) {
            if (layerScrollWeb != undefined) {
                layerScrollWeb.scrollTo(0, -($($(e.target).attr('href')).offset().top - $(window).scrollTop() -layerScrollWeb.absStartY -110));
            }
        }
    }
};

//radioSelect
var radioSelect = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventSel: '.d_radio_select'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventSel).not(':disabled').on('click', function(e) {
            e.preventDefault();
            _this.objToggle(e);
        });
    },
    objToggle: function(e) {
        $(e.currentTarget).addClass('on').siblings(this.eventObj.eventSel).removeClass('on');
    }
};

//iconToggle
var iconToggle = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventCont: '.d_icon_toggle'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventCont).on('click', function(e) {
            e.preventDefault();
            _this.objToggle(e);
        });
    },
    objToggle: function(e) {
        $(e.currentTarget).toggleClass('on');
    }
};

//toggleBtn
var toggleBtn = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventCont: '.d_toggle_btn'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventCont).on('click','button', function(e) {
            e.preventDefault();
            _this.objToggle(e);
        });
    },
    objToggle: function(e) {
        if ($(e.currentTarget).hasClass('d_toggle_on')) {
            $(e.currentTarget).parents('.d_toggle_btn').find('.d_toggle_on').hide();
            $(e.currentTarget).parents('.d_toggle_btn').find('.d_toggle_off').show();
        }else {
            $(e.currentTarget).parents('.d_toggle_btn').find('.d_toggle_off').hide();
            $(e.currentTarget).parents('.d_toggle_btn').find('.d_toggle_on').show();
        }
    }
};

//scrollEv
var scrollEv = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventTop: '.top',
        eventQuick: '.d_quick_menu',
        eventPayment: '.d_payment'
    },
    bindEvt: function() {
        var _this = this;

        if ($(_this.eventObj.eventPayment).length > 0) {
            var payTop = $(_this.eventObj.eventPayment).offset().top - $(window).height() + 60;
            _this.topView2(payTop);
            _this.quickView(payTop);
            _this.paymentView(payTop);
            $(window).scroll(function(){
                _this.topView2(payTop);
                _this.quickView(payTop);
                _this.paymentView(payTop);
            });
            $(window).resize(function() {
                _this.topView2(payTop);
                _this.quickView(payTop);
                _this.paymentView(payTop);
            });
        }else {
            _this.topView();
            $(window).scroll(function(){
                _this.topView();
            });
            $(window).resize(function() {
                _this.topView();
            });
        }
        $(this.eventObj.eventTop).click(function() {
            $(window).scrollTop(0);
        });
    },
    topView: function(e) {
        if (window.scrollY > 1000) {
            $(this.eventObj.eventTop).addClass('up-type01');
        }else {
            $(this.eventObj.eventTop).removeClass('up-type01');
        }
    },
    topView2: function(e) {
        if (window.scrollY > 1000) {
            $(this.eventObj.eventTop).addClass('up-type02');
        }else {
            $(this.eventObj.eventTop).removeClass('up-type02');
        }
    },
    quickView: function(e) {
        if (window.scrollY > e) {
            $(this.eventObj.eventQuick).addClass('up-type');
        }else {
            $(this.eventObj.eventQuick).removeClass('up-type');
        }
    },
    paymentView: function(e) {
        if (window.scrollY > e) {
            $(this.eventObj.eventPayment).addClass('up-type');
        }else {
            $(this.eventObj.eventPayment).removeClass('up-type');
        }
    }
};

//toggle
var toggle = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventCont: '.d_toggle',
        eventSel: '.d_toggle_select'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventSel).off().on('click', function(e) {
            e.preventDefault();
            _this.objToggle(e);
        });
    },
    objToggle: function(e) {
        $(e.target).parents(this.eventObj.eventCont).eq(0).toggleClass('on');
        if (layerScrollWeb != undefined) {
            setTimeout(function () {
                layerScrollWeb.refresh();
            }, 0);
        }
    }
};

//starScore
var starScore = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventCont: '.d_star_score'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click','.d_star_score .d_score_sel', function(e) {
            e.preventDefault();
            _this.objToggle(e);
        });
    },
    objToggle: function(e) {
        $(e.currentTarget).parents('.d_star_score').find('.d_score_sel').removeClass('on');
        for (var i = 0; i < $(e.currentTarget).index() + 1; i++) {
            $(e.currentTarget).parents('.d_star_score').find('.d_score_sel').eq(i).addClass('on');
        }
    }
};

var globalClose = {
    init: function() {
        this.bindEvt();
    },
    bindEvt: function() {
        $('html').on('click touchend touchmove', this.closeAll);
    },
    closeAll: function(e) {
        dropdown.close(e.target);
        select.close(e.target);
        layerPopup.close(e.target);
    }
};

$(document).ready(function() {

    //datepicker
    if ($('body').find('.calendar').length > 0) {
        $( '.calendar' ).datepicker({
            showOn: 'button',
            buttonText: '날짜선택',
            //buttonImage: '../../images/common/bg_calendar.png',
            dayNamesMin: ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
            nextText: '다음 달',
            prevText: '이전 달',
            dateFormat: 'yy-mm-dd',
            yearSuffix: '.',
            showMonthAfterYear: true,
            ignoreReadonly: true,
            allowInputToggle: true,
            beforeShow: function(input, inst) {
                if ($(this).parents().is('.webview-layer-wrap')) {
                    if (layerScrollWeb != undefined) {
                        layerScrollWeb.scrollTo(0, -($(this).offset().top - $(window).scrollTop() -layerScrollWeb.absStartY -110));
                    }
                }else {
                    window.scrollTo(0,$(this).offset().top - ($('body').height() - 506));
                }
                $('html').on('click', function(e) {
                    if (!$(e.target).parents().is('.ui-corner-all')) {
                        $( '.calendar' ).datepicker('hide');
                    }
                });
            }
        });
    }

    gnb.init();
    allMenu.init();
    dropdown.init();
    dropdown02.init();
    quickMenu.init();
    tab.init();
    tab02.init();
    accordion.init();
    select.init();
    layerPopup.init();
    scrollAnchor.init();
    radioSelect.init();
    iconToggle.init();
    toggleBtn.init();
    scrollEv.init();
    toggle.init();
    starScore.init();
    globalClose.init();
});