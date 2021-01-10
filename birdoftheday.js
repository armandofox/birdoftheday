$(function() {
  $('#reveal').click(Botd.reveal);
  $('#new').click(Botd.getNewImage);
  $('#answer').click(function() { $('#label').show(); });
});
  
Botd = {
  step: 20
  ,current: 10
  ,flickrKey: '7dc972d2d75dac855123f14a7ee987ba'
  ,flickrSecret: '4e32e1f9bac04455'
  ,ebirdKey: 'oprdap02obh5'
  
  ,reveal: function(e) {
    Botd.current += Botd.step;
    $(".reveal").animate({"height": Botd.current.toString() + "px"},200);
    e.preventDefault();
  }
  ,photoResults: {}
  ,flickrPhotos: function(searchString) {
    var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&' +
        'format=json&nojsoncallback=1&api_key=' +  Botd.flickrKey +
        '&text=' +  encodeURIComponent(searchString);
    $.ajax({
      dataType: "json",
      url: url,
      success: function(data) { Botd.setImage(data, 0); },
      failure: function(data) { $('#error').text("Flickr error"); }
    });
  }
  ,setImage: function(photoData, ndx) {
    var p = photoData.photos.photo[ndx];
    var photoUrl = 'https://live.staticflickr.com/' + p.server + '/' +
        p.id + '_' + p.secret + '_b.jpg';
    $('#img').html('<img src="' + photoUrl + '">');
  }
  ,getNewImage: function(e) {
    var whichBird = Math.floor(Math.random() * taxonomy.length);
    var commonName = taxonomy[whichBird].comName;
    var sciName = taxonomy[whichBird].sciName;
    // hide image again
    $('#img').css({"height": "10px"});
    Botd.current = 10;
    $('#label').hide();
    Botd.flickrPhotos(commonName);
    $('#label').text(commonName + ' (' + sciName + ')');
    e.preventDefault();
  }
};

  
  
/*
call URL:
 https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key={{flickr_key}}&text={{searchString}}&format=json&nojsoncallback=1

example return from photo search call:

{ "photos": { "page": 1, "pages": 22, "perpage": 100, "total": "2114", 
    "photo": [
      { "id": "50745597076", "owner": "154642826@N03", "secret": "e0695232e3", "server": "65535", "farm": 66, "title": "IMG_0293 Toucan Barbet 4x6", "ispublic": 1, "isfriend": 0, "isfamily":

photo URL is 

url  https://live.staticflickr.com/{{server}}/{{id}}_{{secret}}_b.jpg

*/
