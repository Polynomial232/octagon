/* COPY IP */
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("copied").style.visibility= "visible";
    document.getElementById("copied").innerHTML = "Ip has been copied!";
    timer = setInterval(() => {
        document.getElementById("copied").style.visibility= "hidden";    
    }, 2000);
}

/* ACTIVE SECTION NAV */
var topMenu = $(".nav"),
topMenuHeight = topMenu.outerHeight()+15,
menuItems = topMenu.find("a"),
scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
});
$(window).scroll(function(){
var fromTop = $(this).scrollTop()+topMenuHeight;
var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
    return this;
});
cur = cur[cur.length-1];
if(cur[0].id == "home" || cur[0].id == "community"){
    document.getElementsByClassName("nav")[0].classList.remove("d-lg-block");
}else{
    document.getElementsByClassName("nav")[0].classList.add("d-lg-block");
}
var id = cur && cur.length ? cur[0].id : "";
menuItems
    .parent().removeClass("active")
    .end().filter("[href='#"+id+"']").parent().addClass("active");
});

/* DISABLE INCTERACTION USER */
document.addEventListener('contextmenu', event => event.preventDefault());
$("img").mousedown(function(){
    return false;
});
document.onkeydown=function(e){
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
    }
}

/* DELETE HASH AT URL */
history.replaceState(null, null, ' ');
function delhash(){
    timehash = setInterval(remhash, 1);
}
function remhash(){
    history.replaceState(null, null, ' ');
    clearInterval(timehash);
}

/* JSON MINECRAFT-MP */
$.ajax({
    url: 'https://minecraft-mp.com/api/',
    type: 'get',
    dataType: 'json',
    data:{
        'object': 'servers',
        'element': 'detail',
        'key': '3Jlijd5ucy7Bf5rIH5ycqWx9RRlYVG32SKK'
    },
    success: function(result){
        console.log(result);

        $('#title').html(
            result.name
        )
        $('#ip').html(
            result.address
        )
    }
})

sortTable(0);
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}