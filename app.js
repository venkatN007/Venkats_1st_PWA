function startApplication(){
    setPageHight();
    loadPageData();
}function setPageHight(){
    var h = $(window).outerHeight();
    var w = $(window).outerWidth();
    $('.drawMenu, .openMenu .actionbar-icon, .searchPatient .actionbar-icon').hide();
    var alw = $('.actionbar-logo').outerWidth();
    var atw = $('.actionbar-title .logo-text').outerWidth();
    var omw = $('.dropdown-block').outerWidth();
    var niw = 0;
    var navItems = $('.nav-links>li');
    for(var i=0; i<navItems.length; i++) {
        niw += $(navItems[i]).outerWidth();
    } var tw = alw+atw+omw+niw+50;
    if(w < tw) {
        $('.drawMenu, .openMenu .actionbar-icon, .searchPatient .actionbar-icon').show();
        $('.dropdown-block, .nav-links, .searchPatient .input').hide();
    } else {
        $('.dropdown-block, .nav-links, .searchPatient .input').show();
    }
    var ph = $('.page-header').outerHeight();
    var pf = $('.page-footer').length != 0? $('.page-footer').outerHeight(): 0;
    $('.page-body').css('height', (h-ph-pf)+'px');
    $('.drawMenu, .drawer-gray-box, .openMenu, .profileBtn, .logoutBtn, .dropOption').unbind();
}function loadPageData(){
    var view = '<div class="sub-page spHosEmps">'
        +'<div class="white-card">'
            +'<div class="tab-header">'
                +'<div class="v-center">'
                    +'<div class="col-5">'
                        +'<p class="medium-light-title ml-6 text-secondary">Total Employees (5)</p>'
                    +'</div>'
                +'</div>'
            +'</div>'
            +'<div class="tab-body mr-6 ml-6">'
                +'<table class="table">'
                    +'<thead>'
                        +'<tr>'
                            +'<th>Sl.No</th>'
                            +'<th>Name</th>'
                            +'<th>Gender</th>'
                            +'<th>Registered Mail</th>'
                            +'<th>Experience</th>'
                            +'<th>Status</th>'
                            +'<th class="text-center">Actions</th>'
                        +'</tr>'
                    +'</thead>'
                    +'<tbody class="hmsList"></tbody>'
                +'</table>'
            +'</div>'
        +'</div>'
        +'<div class="sp-footer v-center">'
            +'<div class="hEmpPn col-6 p-6 pb-0"></div>'
            +'<div class="small-light-title text-primary text-emphasis text-right col-6">> Employees </div>'
        +'</div>'
    +'</div>';
    $('.pageContent').html(view);
    $('.pageContent *').unbind();
    var obj = [
        {name:'Abhi', gender:'Male', mail:'Venkat@gmail.com', exp:'5 Years', sttaus:'Active'},
        {name:'Ramji', gender:'Male', mail:'ramji@gmail.com', exp:'1 Years', sttaus:'Active'},
        {name:'Radhaa', gender:'Female', mail:'radha@gmail.com', exp:'3 Years', sttaus:'In-Active'},
        {name:'Bhargav', gender:'Male', mail:'bhargav@gmail.com', exp:'2 Years', sttaus:'Active'},
        {name:'Rani', gender:'Female', mail:'rani@gmail.com', exp:'3 Years', sttaus:'In-Active'},
    ];
    for(var i=0; i<obj.length; i++) {
        var emp = obj[i];
        var view = '<tr>'
            +'<td>'
                +'<p class="item-text">'+(i+1)+'</p>'
            +'</td>'
            +'<td class="v-center">'
                +'<p class="item-text pl-6 text-ellipsis" title="'+emp.name+'">'+emp.name+'</p>'
            +'</td>'
            +'<td>'
                +'<p class="item-text">'+emp.gender+'</p>'
            +'</td>'
            +'<td>'
                +'<p class="item-text">'+emp.mail+'</p>'
            +'</td>'
            +'<td>'
                +'<p class="item-text">'+emp.exp+'</p>'
            +'</td>'
            +'<td>'
                +'<p class="item-text">'+emp.sttaus+'</p>'
            +'</td>'
            +'<td class="content-center">'
                +'<div class="small-icon bg-secondary block-round">'
                    +'<img src="./icons/view-white.png" alt="View">'
                +'</div>'
            +'</td>'
        +'</tr>';
        $('.hmsList').append(view);
    }
}