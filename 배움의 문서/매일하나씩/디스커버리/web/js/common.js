//gnb
var iScrollPos01 = 0;
var gnbType01 = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '#gnb'
    },
    bindEvt: function() {
        var _this = this;

        _this.gnbScroll();
        $('#wrap').scroll(function(e) {
            _this.gnbScroll(e);
        });

        $(window).resize(function(e) {
            _this.gnbScroll(e);
        });
    },
    gnbScroll: function(e) {
        var _this = this;

        if ($(_this.eventObj.eventWrap).find('.gnb-style01').css('display') == 'none') {
            $(_this.eventObj.eventWrap).css('top', 0);
            return false;
        }
        var iCurScrollPos = $('#wrap').scrollTop(),
            gnbTop = parseInt($(_this.eventObj.eventWrap).find('.gnb-style01 .depth1').css('margin-top')),
            delta;
        if (iCurScrollPos > iScrollPos01) {
            if (gnbTop <= window.innerHeight - $(_this.eventObj.eventWrap).find('.gnb-style01 .depth1').height() - 200) {
                delta = 0;
            }else {
                delta = -10;
            }
        } else {
            if (gnbTop >= 0) {
                delta = 0;
            }else {
                delta = 10;
            }
        };
        iScrollPos01 = iCurScrollPos;

        $(_this.eventObj.eventWrap).find('.gnb-style01 .depth1').css('margin-top', gnbTop + delta);

        if ($('#container').outerHeight() - $(_this.eventObj.eventWrap).find('.gnb-style01').outerHeight() - 160 < $('#wrap').scrollTop()) {
            $(_this.eventObj.eventWrap).css('top',($('#container').outerHeight() - $(_this.eventObj.eventWrap).find('.gnb-style01').outerHeight() - 160) - $('#wrap').scrollTop());
        }else {
            $(_this.eventObj.eventWrap).css('top', 0);
        };
    }
};

var iScrollPos02 = 0;
var gnbType02 = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '#gnb'
    },
    bindEvt: function() {
        var _this = this;

        $(document).on('click','.gnb-style02 .nav-open', function(e) {
            e.preventDefault();
            _this.gnbOpen(e);
        });
        $(document).on('click','.gnb-style02 .nav-close', function(e) {
            e.preventDefault();
            _this.gnbClose(e);
        });
    },
    gnbOpen: function() {
        $(this.eventObj.eventWrap).find('.gnb-style02').addClass('on');
    },
    gnbClose: function() {
        $(this.eventObj.eventWrap).find('.gnb-style02').removeClass('on');
    },
    close: function(e) {
        if (!$(e).parents().is('.gnb-style02-layer') && !$(e).is('.gnb-style02-layer')) {
            $(this.eventObj.eventWrap).find('.gnb-style02').removeClass('on');
        }
    }
};

//dropdown
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
        if ($(e.target).parents(this.eventObj.eventWrap).hasClass('on')) {
            $(e.target).parents(this.eventObj.eventWrap).removeClass('on');
        }else {
            $(this.eventObj.eventWrap).removeClass('on');
            $(e.target).parents(this.eventObj.eventWrap).addClass('on');
        }
    },
    close: function(e) {
        if (!$(e).parents().is(this.eventObj.eventWrap)) {
            $(this.eventObj.eventWrap).removeClass('on');
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

//search
var search = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_search'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click','.d_search .d_search_sel', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });
    },
    toggle: function(e) {
        $(e.target).parents(this.eventObj.eventWrap).addClass('on').find('input').focus();
    },
    close: function(e) {
        if (!$(e).parents().is(this.eventObj.eventWrap)) {
            $(this.eventObj.eventWrap).removeClass('on');
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
        $(this.eventObj.eventWrap).find('.d_tab02_cont').eq($(e.target).parents('li').index()).show().siblings('.d_tab02_cont').hide();
        layoutFix.init();
    }
};

//tab03
var tab03 = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_tab03'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventWrap).on('click','.d_tab03_select a', function(e) {
            e.preventDefault();
            _this.toggle(e);
        });
    },
    toggle: function(e) {
        $(this.eventObj.eventWrap).find('.d_tab03_cont').hide();
        $($(e.target).attr('href')).show();
    }
};

//scrollTab
var scrollTab = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_scroll_tab'
    },
    bindEvt: function() {
        var _this = this;
        if ($(_this.eventObj.eventWrap).length > 0) {
            $(_this.eventObj.eventWrap).on('click','a',function(e) {
                e.preventDefault();
                _this.move(e);
            });

            _this.toggle();

            $('#wrap').scroll(function(){
                 _this.toggle();
            });
        }
    },
    move: function(e) {
        var _this = this;
        $('#wrap').scrollTop($($(e.target).attr('href')).offset().top + $('#wrap').scrollTop() - 105);
    },
    toggle: function() {
        var _this = this;
        $(_this.eventObj.eventWrap).find('li').each(function() {
            if ($('#wrap').scrollTop() >= $($(this).find('a').attr('href')).offset().top + $('#wrap').scrollTop() - 110) {
                $(this).addClass('on').siblings().removeClass('on');
            }
        });
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
        if ($('#quickMenuList01').length > 0) {
            quickMenuList01.update();
            quickMenuList02.update();
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
       if(!$(e.currentTarget).hasClass('d_no_option')) {
          $(e.currentTarget).parents('.d_select').find('button > span').html($(e.currentTarget).html());
       }else {
          $(e.currentTarget).parents('.d_select').find('button > span').html('선택하세요');
       }
       $(e.currentTarget).removeClass('d_no_option')
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
        eventClose: '.d_layer_close'
    },
    bindEvt: function() {
        var _this = this;
        $(document).on('click',_this.eventObj.eventOpen, function(e) {
            e.preventDefault();
            layerTarget = $(this);
            _this.popupOpen(e);
        });
        $(document).on('click',_this.eventObj.eventClose, function(e) {
            e.preventDefault();
            _this.popupClose(e);
        });
    },
    popupOpen: function(e) {
        $('.layer-popup').hide();
        var layerId = $(e.currentTarget).attr('href');

        $(layerId).css('display','flex').find('.layer-popup-cont').focus();

        $('#container').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    },
    popupOpenNow: function(e) {
        $('.layer-popup').hide();
        var layerId = e;

        $(layerId).css('display','flex').find('.layer-popup-cont').focus();

        $('#container').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    },
    popupClose: function(e) {
        var layerId = $(e.target).parents('.layer-popup').attr('id');
        if (layerTarget != undefined) {
            layerTarget.focus();
        }
        $(e.target).parents('.layer-popup').hide();

        $('#container').off('scroll touchmove mousewheel');
    },
    close: function(e) {
    }
};

//layoutFix
var scrollLeft = 0;
var layoutFix = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventWrap: '.d_fix'
    },
    bindEvt: function() {
        var _this = this;

        if ($(_this.eventObj.eventWrap).length > 0) {
             _this.fixed();

            $('#wrap').scroll(function(){
                _this.fixed();
            });
            $(window).scroll(function(){
                scrollLeft = -this.scrollX;

                return scrollLeft;
            });
        }
    },
    fixed: function() {
        var _this = this,
            scrollLeft = -$(window).scrollLeft();
        $(_this.eventObj.eventWrap).each(
            function() {
                var standThis = $(this),
                    standThisH = standThis.find('.d_fix_obj').height(),
                    fixLeft = standThis.offset().left;
                if ($('#wrap').scrollTop() > standThis.offset().top + $('#wrap').scrollTop() + parseInt(standThis.find('.d_fix_obj').css('top'))) {

                    standThis.addClass('d_fix_on');
                    standThis.find('.d_fix_obj').css('position', 'fixed');
                    standThis.find('.d_fix_obj').css('left',fixLeft + scrollLeft);
                    standThis.find('.d_fix_obj').width(parseInt(standThis.width()));

                    if ($('#container').outerHeight() - standThis.find('.d_fix_obj').outerHeight() - 160 < $('#wrap').scrollTop()) {
                        standThis.find('.d_fix_obj').css('top',($('#container').outerHeight() - standThis.find('.d_fix_obj').outerHeight()) - $('#wrap').scrollTop() - 160);
                    }else {
                        standThis.find('.d_fix_obj').css('top', 0);
                    }

                    $(window).resize(function() {
                        fixLeft = standThis.offset().left;
                        standThis.find('.d_fix_obj').width(parseInt(standThis.width()));
                        standThis.find('.d_fix_obj').css('position', 'fixed');
                        standThis.find('.d_fix_obj').css('left',fixLeft + scrollLeft);
                    });
                }else {
                    standThis.removeClass('d_fix_on');
                    standThis.find('.d_fix_obj').css('position', 'static');
                }
                $(window).resize(function() {
                    if ($('#wrap').scrollTop() > standThis.offset().top + parseInt(standThis.find('.d_fix_obj').css('top'))) {
                        fixLeft = standThis.offset().left;
                        standThis.find('.d_fix_obj').width(parseInt(standThis.width()));
                        standThis.find('.d_fix_obj').css('position', 'fixed');
                        standThis.find('.d_fix_obj').css('left',fixLeft + scrollLeft);
                    }else {
                        standThis.find('.d_fix_obj').css('position', 'static');
                    }
                });
            }
        );
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

//toggleHover
var toggleHover = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventCont: '.d_toggle_hover'
    },
    bindEvt: function() {
        var _this = this;
        $(_this.eventObj.eventCont).on('mouseenter focusin','.d_toggle_hover_sel', function(e) {
            e.preventDefault();
            _this.objToggleOn(e);
        });
        $(_this.eventObj.eventCont).on('mouseleave', function(e) {
            e.preventDefault();
            _this.objToggleOff(e);
        });
    },
    objToggleOn: function(e) {
        $(e.currentTarget).parents(this.eventObj.eventCont).addClass('on').find('.d_toggle_hover_cont').focus();
    },
    objToggleOff: function(e) {
        $(e.currentTarget).removeClass('on');
    }
};

//topUp
var topUp = {
    init: function() {
        this.bindEvt();
    },
    eventObj: {
        eventCont: '.top'
    },
    bindEvt: function() {
        var _this = this;

        if ($(_this.eventObj.eventCont).length > 0) {
             _this.topView();
            layoutFix.init();
            $('#wrap').scroll(function(){
                _this.topView();
            });
            $(window).resize(function() {
                _this.topView();
            });

            $(this.eventObj.eventCont).on('click', function() {
                $('#wrap').scrollTop(0);
            });
        }
    },
    topView: function(e) {
        if ($('#wrap').scrollTop() > 1000) {
            $(this.eventObj.eventCont).fadeIn();
        }else {
            $(this.eventObj.eventCont).fadeOut();
        }
        if (window.innerHeight < 790) {
            $(this.eventObj.eventCont).find('.top-cont').css('padding-top', 730 - (790 - window.innerHeight));
        }else {
            $(this.eventObj.eventCont).find('.top-cont').css('padding-top', 760);
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
        $(_this.eventObj.eventSel).on('click', function(e) {
            e.preventDefault();
            _this.objToggle(e);
        });
    },
    objToggle: function(e) {
        $(e.target).parents(this.eventObj.eventCont).eq(0).toggleClass('on');
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
        // $(e.currentTarget).toggleClass('on');
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
        $('html').on('click', this.closeAll);
    },
    closeAll: function(e) {
        dropdown.close(e.target);
        search.close(e.target);
        select.close(e.target);
        gnbType02.close(e.target);
    }
};

$(document).ready(function() {

    //datepicker
    if ($('body').find('.calendar').length > 0) {
        $( '.calendar' ).datepicker({
            //showOn: 'button',
            //buttonText: '날짜선택',
            //buttonImage: '../../../images/common/ico_calendar_on.png',
            dayNamesMin: ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
            nextText: '다음 달',
            prevText: '이전 달',
            dateFormat: 'yy-mm-dd',
            yearSuffix: '.',
            showMonthAfterYear: true,
        });
    }

    gnbType01.init();
    gnbType02.init();
    dropdown.init();
    dropdown02.init();
    search.init();
    tab.init();
    tab02.init();
    tab03.init();
    scrollTab.init();
    accordion.init();
    select.init();
    layerPopup.init();
    layoutFix.init();
    radioSelect.init();
    iconToggle.init();
    toggleBtn.init();
    toggleHover.init();
    topUp.init();
    toggle.init();
    starScore.init();
    globalClose.init();
});