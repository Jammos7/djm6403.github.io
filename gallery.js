$(document).ready(function(){
   $('li img').on('click',function(){
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');
        var img = '<img src="' + src + '" class="img-responsive"/><h4>'+alt+'</h4>';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
   });
});
