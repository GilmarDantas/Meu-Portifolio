<script>
    var pixels_mover = 3; //Escolha a quantidade de pixels que serão deslocados.
    var velocidade_funcao = 100; //Escolha em quantos milissegundos será a velocidade da bg.

    function mexer_bg(){
        pixels_mover += 1;
    jQuery('body').css('background-position', '-'+pixels_mover+'px -'+pixels_mover+'px');
    }


    setInterval("mexer_bg()", velocidade_funcao);
</script>