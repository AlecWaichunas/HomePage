var setbackground = function(img){
    $(document.body).css('background-image', 'url(\"'+img+'\")');
}

var bubble = $('.appholder');
var app = $('.app');

bubble.css('visibility', 'hidden');
bubble.appendTo(document.body);
//app.css('visibility', 'hidden');

var createbubble = function(appname, img, searchurl, quicklinks){
    var newbubble = bubble.clone();
    newbubble.find('.bubbleimg').attr('src', img);
    newbubble.css('visibility', 'visible');
    //newbubble.find('.app').css('visibility', 'hidden');
    newbubble.appendTo('.quickapps');
}

$.ajax({
    url: 'scripts/data.json',
    dataType: 'json',
    contentType: 'application/json',

    beforeSend: (xhr) => {
        if(xhr.overrideMimeType)
            xhr.overrideMimeType('application/json');
    },

    success: (data) => {
        setbackground(data["background"]);
        
        //create bubbles
        Object.keys(data["apps"]).forEach(e => {
            var appname = e;
            var img = data["apps"][e].img;
            var searchurl = data["apps"][e].searchurl;
            var quicklinks = data["apps"][e].quicklinks;
            createbubble(appname, img, searchurl, quicklinks);
        });
    }
});

console.log('test');