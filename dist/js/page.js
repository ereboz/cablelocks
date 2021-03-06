/**
 * Created by javaBoxer on 7/17/2017
 */

$(document).ready(function(){

// PRELOAD NAV TOOL-TIP IMAGES FOR HOVER STATE
// ==========================================================================
    
    function preloadimages(arr) {
        var newimages=[]
        var arr=(typeof arr!="object")? [arr] : arr //force arr parameter to always be an array
        
        for (var i=0; i<arr.length; i++) {
            newimages[i]=new Image()
            newimages[i].src=arr[i];
        }
    }
    
    preloadimages(['/skins/skin_22_cablelocks/dist/images/tool-tip-python-hover-8413ka.png',
        '/skins/skin_22_cablelocks/dist/images/tool-tip-cable-lock-hover-8109d.png"',
        '/skins/skin_22_cablelocks/dist/images/tool-tip-gunlock-hover-99dspt.png"',
        '/skins/skin_22_cablelocks/dist/images/tool-tip-cable-lock-hover-8109d.png"',
        '/skins/skin_22_cablelocks/dist/images/tool-tip-master-lock-cable-hover-72dpf.png'])
    
    
    
    // smooth transition on homepage slider fade effect. using carousel-fade instead of carousel targets just the
    // first carousel.
    $('.carousel-fade').carousel();
    // end smooth transition on homepage slider fade effect
    
    //// affixes top nav to be sticky
    $(".wrapper-subnav").affix({
        offset: {
            top: $('.bg-banner').height()
        }
    });
    
    $("#topnavbar").height($(".wrapper-subnav").height() + $(".bg-banner").height());
    
    // $('#topnavbar').affix({
    //     offset: {
    //         top: $('#banner').height()
    //     }
    // });

// Add Sale sticker to sale items
// Assuming backend is writing the sale price strike through, we can toggle sale sticker in upper left of product.
// iterate over each product-wrapper and search for value of retail-price.
// if not empty, then it's on sale. Toggle Less class to display sale sticker in upper left of parent wrapper
    
    $('.product-wrapper').each(function () {
        var salePrice = $(this).find('.sale-price');        // target to center price vertically if no retail price
        var retailValue = $(this).find('.retail-price');
        var retailValueText = $(retailValue).text();

        if(retailValueText) {
            $(this).find('.product-sale').addClass("sale-on");
        }

        else {
            $(this).find('.product-sale').addClass("sale-off");
            $(this).find(salePrice).addClass("saleOnly");       // no retail price, so center price vertically
        }
  })
    
    // Checkout Page - move the shopping cart section from the bottom of the page to the top
    // above "Account"
    
    var cartDetails = $(".checkout-details .cart-details");
    var checkoutAccount = $(".checkout-details .checkout-account");
    $(cartDetails).remove();
    $(cartDetails).insertBefore(checkoutAccount);
    
});



$(window).load(function() {
    var loc = window.location.href.toLowerCase();
    var locPath = window.location.pathname.toLowerCase();
    var viewportWidth = $(window).width();
    var pageWrapper = "";
    
    // *************** All MOBILE PAGES ***************
    
    // find .search-wrapper (top nav) and wrap it with a new div (.mobile-search-wrapper) in preparation to move into mobile DOM.
    // move the search feature out of the top nav and insert between the mobile nav and container for handheld mobile.
    if (viewportWidth <=600) {
        $('.search-wrapper').wrap("<div class='mobile-search-wrapper'></div>");
        var mobileSearch = ('.mobile-search-wrapper');
        var mobileNav = ('.main-nav');
        
        $(mobileSearch).detach().insertAfter(mobileNav);
    }
    
    // *************** HOME PAGE ***************
    
    // if on homepage, and viewport <= 600, find (.best-seller .item) within a .carousel. if not active (2nd item) add
    // .active class. This will display both rows (all 6 products) for mobilel
    
    if (locPath != "/") {              // local (there is something in the path. toggle to show effects)
    // if (locPath === "/") {              // server (nothing in the path)
        pageWrapper = $(".carousel");
        
        if (viewportWidth <= 600) {
            $(pageWrapper).each(function () {
                var item = $(this).find('.best-sellers .item');
                item.addClass('active');
            })
            
        }
    }
    
// *************** BILL TO/SHIP TO ADDRESS FORM (from checkout page) ***************

// NEED TO MAKE THE ADD NEW SHIPPING, ADD NEW BILLING ADDRESS .container CLASS 50% WIDTH TO REDUCE THE SIZE AND CENTER IT ON SCREEN
// FOR DESKTOP > 800PX.
// IT DOES NOT HAVE A UNIQUE CLASS AND SETTING WIDTH ON .container AFFECTS EVERY PAGE ON THE SITE.
// READ IN THE URL AND APPLY STYLING ONLY TO THE ADDRESS PAGE for SHIPPING/BILLING(address/detail)
// APPLIES TO:
// https://combolock.com/address/detail
    
    if (loc.indexOf('/address/detail') > -1) {
        pageWrapper = $(".create-account-page");
        $(pageWrapper).addClass("addressMobileWidth");
        
        if (viewportWidth > 800) {
            $(pageWrapper).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
        }
    
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 800) {
                $(pageWrapper).removeClass("addressDesktopWidth").addClass("addressMobileWidth");
            }
            if (viewportWidth > 800) {
                $(pageWrapper).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
            }
        });
    }
    
    // *************** CONTACT US PAGE ***************
    // Center the page with a left margin class when in Desktop view > 800px
    
    if (loc.indexOf('/contactus') > -1) {
        pageWrapper = $(".contact-us-page");
        $(pageWrapper).addClass("contactMobileWidth");
        
        if (viewportWidth > 800) {
            $(pageWrapper).removeClass("contactMobileWidth").addClass("contactDesktopWidth");
        }
        
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 800) {
                $(pageWrapper).removeClass("contactDesktopWidth").addClass("contactMobileWidth");
            }
            if (viewportWidth > 800) {
                $(pageWrapper).removeClass("contactMobileWidth").addClass("contactDesktopWidth");
            }
        });
        
        // Replace all occurrences of (required) to *
    
        $('.form-label-suffix-required').each(function() {
            var txt = $(this).html();
            txt = txt.replace('(required)','*');
            $(this).html(txt);
        });
        
    }
    
});

