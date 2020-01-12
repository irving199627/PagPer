$(document).ready(function() {
    var ruta = 'img/certificados/';
    var certificados = ['UC-05B8XLS6.jpg', 'UC-50J7IUCT.jpg', 'UC-FGUW32A9.jpg', 'UC-OADSK4P5.jpg'];
    var x = window.matchMedia("(max-width: 700px)");

    responsive(x);
    x.addListener(responsive);

    function responsive(x) {
        if (!x.matches) {
            var cabecera = `
            <div class="row">
                <div class="col-md-12  ">

                    <div class="sub-title mb-40">
                        <h2 class="uppercase">Formaciones Adicionales</h2>
                    </div>

                </div>
            </div>
            `;

            var elementos =
                `<ul class="mosaico">
            <li class="content-mosaico">A</li>
            <li class="content-mosaico">B</li>
            <li class="content-mosaico">C</li>
            <li class="content-mosaico">D</li>
            <li class="content-mosaico">E</li>
            <li class="content-mosaico">6</li>
            <li class="content-mosaico">7</li>
            <li class="content-mosaico">8</li>
            <li class="content-mosaico">9</li>
        </ul>`;

            $('#formAdic').append(cabecera);

            certificados.forEach((img) => {
                $('.gallery').append(elementos);
            });
            $(".mosaico").each(function(index) {
                $(".content-mosaico", this)
                    .css('background-image', 'url(' + ruta + certificados[index] + ')');
            });
        } else {
            $('.mosaico').remove();
            $('#formAdic').remove(".row");
        }
    }
});