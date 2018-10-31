function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    var messtime = timeleft;
    var days = Math.floor(messtime / (3600*24));
    messtime -= days*3600*24;
    var hrs = Math.floor(messtime / 3600);
    if (hrs < 10) {hrs = "0" + hrs}
    messtime -= hrs*3600;
    var mnts = Math.floor(messtime / 60);
    if (mnts < 10) {mnts = "0" + mnts}
    messtime -= mnts*60;
    if (messtime < 10) {messtime = "0" + messtime}
  
    $element.find('div').animate({ width: progressBarWidth }, 500).html(days + ":" + hrs + ":" + mnts + ":" + messtime + " // " + timeleft);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress((1544850000 - (Math.floor(Date.now() / 1000))), 3888000, jQuery('#progressBar'));