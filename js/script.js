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