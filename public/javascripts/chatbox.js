setInterval(send, 500);

function send() {
    $.post('refresh', function(data) {
        document.getElementById('display').innerHTML = '';
        for (var i = 0; i < data.length; i++) {
            document.getElementById('display').innerHTML += '<p class="list-group-item">' + data[i] + '</p>';
        }
    });
}

function scrolldown() {
    var dis = document.getElementById('display');
    dis.scrollTop = dis.scrollHeight;
}
