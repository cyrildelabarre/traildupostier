/*
OnlineOpinion v5.9.9
Released: 08/02/2016. Compiled 08/02/2016 02:01:40 PM -0500
Branch: master 2a8b05f36a87035a4e8fac9b85c18815b63da4e3
Components: Full
UMD: disabled
The following code is Copyright 1998-2016 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/

(function (w, d) {
    'use strict';

    if (w.location.href.indexOf('local.sec.samsung.com') > -1) {
      var assetDirectory = '//www.samsung.com/common/js/onlineopinionV5/new/'; // Samsung Update
    } else {
      var assetDirectory = '/common/js/onlineopinionV5/new/'; // Samsung Update
    }

    var loadOpinionLab = function (url, callback) {

        if (typeof OOo === 'undefined') {
            var script = d.createElement('script');
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function () {
                    callback();
                };
            }

            script.src = url;
            d.getElementsByTagName('head')[0].appendChild(script);

            var link  = d.createElement('link');
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = assetDirectory + 'oo_style.css';

            d.getElementsByTagName('head')[0].appendChild(link);
        } else {
            callback();
        }

    };

    loadOpinionLab(assetDirectory + 'oo_engine.min.js', function () {

      var tabText = 'Feedback',
          webText = 'Website<br /><br /><span class="subtitle">Feedback about the Page on our Website</span><span class="screen_reader"> This will open a new window</span>',
          prodText = 'Product<br /><br /><span class="subtitle">Feedback about your Experience with our Products</span><span class="screen_reader"> This will open a new window</span>',
          servText = 'Service<br /><br /><span class="subtitle">Feedback about our On/Offline Customer Service Experience <br />(Online Chat, Phone, Email, Service Center etc)</span><span class="screen_reader"> This will open a new window</span>',
          wpIntro = 'Have feedback for us?<br /><span class="subtitle">Pick a topic below</span>',
          poweredBy = 'Powered by OpinionLab. This will open a new window.',
          closeDialog = 'Close dialog',
          path = w.location.href;

      if (/\/de\//i.test(path)) {
          tabText = 'Feedback';
          webText = 'Website<br /><br /><span class="subtitle">Feedback zu unserer Website</span><span class="screen_reader"> Dies &#246;ffnet ein neues Fenster.</span>';
          prodText = 'Produkt<br /><br /><span class="subtitle">Feedback zu Ihrer Erfahrung mit unseren Produkten</span><span class="screen_reader"> Dies &#246;ffnet ein neues Fenster.</span>';
          servText = 'Service<br /><br /><span class="subtitle">Feedback zu unserem Kundenservice<br />(Live-Chat, Telefon, E-Mail, Servicecenter usw.)</span><span class="screen_reader"> Dies &#246;ffnet ein neues Fenster.</span>';
          wpIntro = '<strong>Haben Sie ein Feedback f&#252;r uns?</strong><br /><span class="subtitle">W&#228;hlen Sie ein Thema</span>';
          poweredBy = 'Unterst&#252;tzt durch OpinionLab. Dies &#246;ffnet ein neues Fenster.';
          closeDialog = 'Dialog schlie&#223;en';
      } else if (/\/es\//i.test(path) || /\/ar\//ig.test(path))  {
          tabText = 'Comentarios';
          webText = 'Sitio web<br /><br /><span class="subtitle">Comentarios sobre la p&#225;gina en nuestro sitio web</span><span class="screen_reader"> Esto abrir&#225; una nueva ventana</span>';
          prodText = 'Producto<br /><br /><span class="subtitle">Comentarios sobre tu experiencia con nuestros productos</span><span class="screen_reader"> Esto abrir&#225; una nueva ventana</span>';
          servText = 'Servicio<br /><br /><span class="subtitle">Comentarios sobre tu experiencia con nuestro servicio de atenci&#243;n al cliente en l&#237;nea y fuera de l&#237;nea <br />(Chat en l&#237;nea, tel&#233;fono, correo electr&#243;nico, centro de atenci&#243;n al cliente, etc.)</span><span class="screen_reader"> Esto abrir&#225; una nueva ventana</span>';
          wpIntro = '<strong>&#191;Tienes alg&#250;n comentario para nosotros?</strong><br /><span class="subtitle">Elige un tema a continuaci&#243;n</span>';
          poweredBy = 'Con tecnolog&#237;a de OpinionLab. Esto abrir&#225; una nueva ventana';
          closeDialog = 'Cerrar cuadro de di&#225;logo';
      } else if (/\/fr\//i.test(path)) {
          tabText = 'Commentaires';
          webText = 'Site Internet<br /><br /><span class="subtitle">Commentaire &#224; propos de la page sur notre site internet</span><span class="screen_reader"> Une nouvelle fen&#234;tre va s&#8217;ouvrir.</span>';
          prodText = 'Produit<br /><br /><span class="subtitle">Commentaire &#224; propos de votre exp&#233;rience avec nos produits</span><span class="screen_reader"> Une nouvelle fen&#234;tre va s&#8217;ouvrir.</span>';
          servText = 'Service<br /><br /><span class="subtitle">Commentaire &#224; propos de notre exp&#233;rience de service client en / hors ligne <br />(Chat en ligne, T&#233;l&#233;phone, Courriel, Centre de service, etc.)</span><span class="screen_reader"> Une nouvelle fen&#234;tre va s&#8217;ouvrir.</span>';
          wpIntro = '<strong>Vous avez un commentaire &#224; nous laisser&#160;?</strong><br /><span class="subtitle">Choisissez un des sujets ci-dessous</span>';
          poweredBy = 'Par OpinionLab. Une nouvelle fen&#234;tre va s&#8217;ouvrir.';
          closeDialog = 'Fermer la bo&#238;te de dialogue';
      } else if (/\/id\//i.test(path)) {
          tabText = 'Masukan';
          webText = 'Situs Web<br /><br /><span class="subtitle">Masukan tentang Halaman Situs Web kami</span><span class="screen_reader"> Ini akan membuka jendela baru</span>';
          prodText = 'Produk<br /><br /><span class="subtitle">Masukan tentang pengalaman Anda pada Produk kami</span><span class="screen_reader"> Ini akan membuka jendela baru</span>';
          servText = 'Layanan<br /><br /><span class="subtitle">Masukan untuk layanan bantuan Online/Offline kami<br />(Chat Online, Telepon, Email, Pusat Layanan, dll)</span><span class="screen_reader"> Ini akan membuka jendela baru</span>';
          wpIntro = '<strong>Ada masukan untuk kami?</strong><br /><span class="subtitle">Pilih kategori topik di bawah ini</span>';
          poweredBy = 'Didukung oleh OpinionLab. Ini akan membuka jendela baru';
          closeDialog = 'Tutup obrolan';
      } else if (/\/sec\//i.test(path) || /local.sec/i.test(path)) {
          tabText = '\uACE0\uAC1D\uC124\uBB38';
          webText = '&#50937;&#49324;&#51060;&#53944;<br /><br /><span class="subtitle">&#48169;&#47928;&#54616;&#49888; &#50937;&#54168;&#51060;&#51648;&#50640; &#45824;&#54620; &#51032;&#44204;&#51012; &#45224;&#44200; &#51452;&#49901;&#49884;&#50724;.</span><span class="screen_reader"> &#49352; &#52285;&#51004;&#47196; &#50676;&#47549;&#45768;&#45796;.</span>';
          prodText = '&#51228;&#54408;<br /><br /><span class="subtitle">&#49340;&#49457; &#51228;&#54408; &#44221;&#54744;&#50640; &#45824;&#54620; &#51032;&#44204;&#51012; &#45224;&#44200; &#51452;&#49901;&#49884;&#50724;.</span><span class="screen_reader"> &#49352; &#52285;&#51004;&#47196; &#50676;&#47549;&#45768;&#45796;.</span>';
          servText = '&#49436;&#48708;&#49828;<br /><br /><span class="subtitle">&#50728;/&#50724;&#54532;&#46972;&#51064; &#44256;&#44061; &#49436;&#48708;&#49828; &#44221;&#54744;&#50640; &#45824;&#54620; &#51032;&#44204;&#51012; &#45224;&#44200;&#51452;&#49901;&#49884;&#50724;.<br />(&#52292;&#54021;, &#51204;&#54868;&#49345;&#45812;, &#51060;&#47700;&#51068;, &#49436;&#48708;&#49828;&#49468;&#53552; &#46321;)</span><span class="screen_reader"> &#49352; &#52285;&#51004;&#47196; &#50676;&#47549;&#45768;&#45796;.</span>';
          wpIntro = '<strong>&#44480; &#44592;&#50872;&#50668; &#46307;&#44192;&#49845;&#45768;&#45796;.</strong><br /><span class="subtitle">&#45817;&#49888;&#51032; &#49373;&#44033;&#51012; &#46308;&#47140;&#51452;&#49464;&#50836;.</span>';
          poweredBy = '&#50724;&#54588;&#45768;&#50616; &#47017; &#51228;&#44277; &#49352; &#52285;&#51004;&#47196; &#50676;&#47549;&#45768;&#45796;.';
          closeDialog = 'Close dialog';
      } else if (/\/br\//i.test(path)) {
          tabText = 'Feedback';
          webText = 'Site<br /><br /><span class="subtitle">Opini&#227;o sobre a p&#225;gina em nosso site</span><span class="screen_reader"> Isso vai abrir uma nova janela</span>';
          prodText = 'Produto<br /><br /><span class="subtitle">Opini&#227;o sobre sua experi&#234;ncia com nossos produtos</span><span class="screen_reader"> Isso vai abrir uma nova janela</span>';
          servText = 'Atendimento<br /><br /><span class="subtitle">Opini&#227;o sobre a experi&#234;ncia de atendimento ao cliente on-line/off-line <br />(Chat on-line, por telefone, e-mail, central de atendimento, etc.)</span><span class="screen_reader"> Isso vai abrir uma nova janela</span>';
          wpIntro = '<strong>Gostaria de compartilhar sua opini&#227;o conosco?</strong><br /><span class="subtitle">Selecione um tema abaixo</span>';
          poweredBy = 'Desenvolvido pela OpinionLab Isso vai abrir uma nova janela';
          closeDialog = 'Fechar caixa de di&#225;logo';
      } else if (/\.ru\/|\/ru\//i.test(path)) {
          tabText = '\u041E\u0442\u0437\u044B\u0432';
          webText = '&#1042;&#1077;&#1073;-&#1089;&#1072;&#1081;&#1090;<br /><br /><span class="subtitle">&#1054;&#1090;&#1079;&#1099;&#1074; &#1086; &#1089;&#1090;&#1088;&#1072;&#1085;&#1080;&#1094;&#1077; &#1074;&#1077;&#1073;-&#1089;&#1072;&#1081;&#1090;&#1072;</span><span class="screen_reader"> &#1054;&#1090;&#1082;&#1088;&#1086;&#1077;&#1090;&#1089;&#1103; &#1085;&#1086;&#1074;&#1086;&#1077; &#1086;&#1082;&#1085;&#1086;</span>';
          prodText = '&#1055;&#1088;&#1086;&#1076;&#1091;&#1082;&#1090;<br /><br /><span class="subtitle">&#1054;&#1090;&#1079;&#1099;&#1074; &#1086; &#1085;&#1072;&#1096;&#1077;&#1084; &#1087;&#1088;&#1086;&#1076;&#1091;&#1082;&#1090;&#1077;</span><span class="screen_reader"> &#1054;&#1090;&#1082;&#1088;&#1086;&#1077;&#1090;&#1089;&#1103; &#1085;&#1086;&#1074;&#1086;&#1077; &#1086;&#1082;&#1085;&#1086;</span>';
          servText = '&#1054;&#1073;&#1089;&#1083;&#1091;&#1078;&#1080;&#1074;&#1072;&#1085;&#1080;&#1077;<br /><br /><span class="subtitle">&#1054;&#1090;&#1079;&#1099;&#1074; &#1086; &#1082;&#1072;&#1095;&#1077;&#1089;&#1090;&#1074;&#1077; &#1086;&#1073;&#1089;&#1083;&#1091;&#1078;&#1080;&#1074;&#1072;&#1085;&#1080;&#1103; <br />(&#1074; &#1095;&#1072;&#1090;&#1077;, &#1087;&#1086; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;&#1091;, &#1087;&#1086; &#1101;&#1083;&#1077;&#1082;&#1090;&#1088;&#1086;&#1085;&#1085;&#1086;&#1081; &#1087;&#1086;&#1095;&#1090;&#1077;, &#1074; &#1089;&#1077;&#1088;&#1074;&#1080;&#1089;&#1085;&#1086;&#1084; &#1094;&#1077;&#1085;&#1090;&#1088;&#1077; &#1080;&#1083;&#1080; &#1074; &#1076;&#1088;&#1091;&#1075;&#1086;&#1084; &#1084;&#1077;&#1089;&#1090;&#1077;)</span><span class="screen_reader"> &#1054;&#1090;&#1082;&#1088;&#1086;&#1077;&#1090;&#1089;&#1103; &#1085;&#1086;&#1074;&#1086;&#1077; &#1086;&#1082;&#1085;&#1086;</span>';
          wpIntro = '<strong>&#1046;&#1077;&#1083;&#1072;&#1077;&#1090;&#1077; &#1086;&#1089;&#1090;&#1072;&#1074;&#1080;&#1090;&#1100; &#1086;&#1090;&#1079;&#1099;&#1074;?</strong><br /><span class="subtitle">&#1042;&#1099;&#1073;&#1077;&#1088;&#1080;&#1090;&#1077; &#1090;&#1077;&#1084;&#1091; &#1085;&#1080;&#1078;&#1077;.</span>';
          poweredBy = '&#1054;&#1087;&#1088;&#1086;&#1089; &#1086;&#1090; &#1082;&#1086;&#1084;&#1087;&#1072;&#1085;&#1080;&#1080; OpinionLab &#1054;&#1090;&#1082;&#1088;&#1086;&#1077;&#1090;&#1089;&#1103; &#1085;&#1086;&#1074;&#1086;&#1077; &#1086;&#1082;&#1085;&#1086;';
          closeDialog = '&#1047;&#1072;&#1082;&#1088;&#1099;&#1090;&#1100; &#1076;&#1080;&#1072;&#1083;&#1086;&#1075;&#1086;&#1074;&#1086;&#1077; &#1086;&#1082;&#1085;&#1086;';
      } else if (/\.cn\/|\/cn\//i.test(path)) {
          tabText = '\u53CD\u9988';
          webText = '&#32593;&#31449;<br /><br /><span class="subtitle">&#20851;&#20110;&#32593;&#31449;&#39029;&#38754;&#30340;&#21453;&#39304;</span><span class="screen_reader"> &#27492;&#25805;&#20316;&#23558;&#22312;&#26032;&#31383;&#21475;&#25171;&#24320;</span>';
          prodText = '&#20135;&#21697;<br /><br /><span class="subtitle">&#20851;&#20110;&#25105;&#20204;&#20135;&#21697;&#20351;&#29992;&#20307;&#39564;&#30340;&#21453;&#39304;</span><span class="screen_reader"> &#27492;&#25805;&#20316;&#23558;&#22312;&#26032;&#31383;&#21475;&#25171;&#24320;</span>';
          servText = '&#26381;&#21153;<br /><br /><span class="subtitle">&#20851;&#20110;&#25105;&#20204;&#32447;&#19978;/&#32447;&#19979;&#23458;&#25143;&#26381;&#21153;&#20307;&#39564;&#30340;&#21453;&#39304;<br/>&#65288;&#22312;&#32447;&#32842;&#22825;&#12289;&#23458;&#26381;&#28909;&#32447;&#12289;&#30005;&#23376;&#37038;&#20214;&#12289;&#26381;&#21153;&#20013;&#24515;&#31561;&#65289;</span><span class="screen_reader"> &#27492;&#25805;&#20316;&#23558;&#22312;&#26032;&#31383;&#21475;&#25171;&#24320;</span>';
          wpIntro = '<strong>&#27426;&#36814;&#24744;&#25552;&#20986;&#24314;&#35758;&#25110;&#21453;&#39304;&#12290;</strong><br /><span class="subtitle">&#35831;&#36873;&#25321;&#38656;&#35201;&#21453;&#39304;&#30340;&#20027;&#39064;</span>';
          poweredBy = '&#30001;OpinionLab&#25552;&#20379;&#25216;&#26415;&#25903;&#25345;';
          closeDialog = '&#20851;&#38381;&#23545;&#35805;&#26694;';
      } else if (/\/th\//i.test(path)) {
          tabText = '\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19';
          webText = '&#3648;&#3623;&#3655;&#3610;&#3652;&#3595;&#3605;&#3660;<br /><br /><span class="subtitle">&#3588;&#3623;&#3634;&#3617;&#3588;&#3636;&#3604;&#3648;&#3627;&#3655;&#3609;&#3648;&#3585;&#3637;&#3656;&#3618;&#3623;&#3585;&#3633;&#3610;&#3648;&#3614;&#3592;&#3610;&#3609;&#3648;&#3623;&#3655;&#3610;&#3652;&#3595;&#3605;&#3660;&#3586;&#3629;&#3591;&#3648;&#3619;&#3634;</span><span class="screen_reader"> &#3592;&#3632;&#3648;&#3611;&#3636;&#3604;&#3627;&#3609;&#3657;&#3634;&#3605;&#3656;&#3634;&#3591;&#3651;&#3627;&#3617;&#3656;</span>';
          prodText = '&#3612;&#3621;&#3636;&#3605;&#3616;&#3633;&#3603;&#3601;&#3660;<br /><br /><span class="subtitle">&#3588;&#3623;&#3634;&#3617;&#3588;&#3636;&#3604;&#3648;&#3627;&#3655;&#3609;&#3648;&#3585;&#3637;&#3656;&#3618;&#3623;&#3585;&#3633;&#3610;&#3611;&#3619;&#3632;&#3626;&#3610;&#3585;&#3634;&#3619;&#3603;&#3660;&#3607;&#3637;&#3656;&#3588;&#3640;&#3603;&#3652;&#3604;&#3657;&#3619;&#3633;&#3610;&#3592;&#3634;&#3585;&#3612;&#3621;&#3636;&#3605;&#3616;&#3633;&#3603;&#3601;&#3660;&#3586;&#3629;&#3591;&#3648;&#3619;&#3634;</span><span class="screen_reader"> &#3592;&#3632;&#3648;&#3611;&#3636;&#3604;&#3627;&#3609;&#3657;&#3634;&#3605;&#3656;&#3634;&#3591;&#3651;&#3627;&#3617;&#3656;</span>';
          servText = '&#3610;&#3619;&#3636;&#3585;&#3634;&#3619;<br /><br /><span class="subtitle">&#3588;&#3623;&#3634;&#3617;&#3588;&#3636;&#3604;&#3648;&#3627;&#3655;&#3609;&#3648;&#3585;&#3637;&#3656;&#3618;&#3623;&#3585;&#3633;&#3610;&#3610;&#3619;&#3636;&#3585;&#3634;&#3619;&#3621;&#3641;&#3585;&#3588;&#3657;&#3634;&#3649;&#3610;&#3610;&#3629;&#3629;&#3609;&#3652;&#3621;&#3609;&#3660;/&#3629;&#3629;&#3615;&#3652;&#3621;&#3609;&#3660;&#3586;&#3629;&#3591;&#3648;&#3619;&#3634; <br />(&#3626;&#3609;&#3607;&#3609;&#3634;&#3629;&#3629;&#3609;&#3652;&#3621;&#3609;&#3660;, &#3650;&#3607;&#3619;&#3624;&#3633;&#3614;&#3607;&#3660;, &#3629;&#3637;&#3648;&#3617;&#3621;, &#3624;&#3641;&#3609;&#3618;&#3660;&#3610;&#3619;&#3636;&#3585;&#3634;&#3619; &#3631;&#3621;&#3631;)</span><span class="screen_reader">&#3592;&#3632;&#3648;&#3611;&#3636;&#3604;&#3627;&#3609;&#3657;&#3634;&#3605;&#3656;&#3634;&#3591;&#3651;&#3627;&#3617;&#3656;</span>';
          wpIntro = '<strong>&#3588;&#3640;&#3603;&#3605;&#3657;&#3629;&#3591;&#3585;&#3634;&#3619;&#3649;&#3626;&#3604;&#3591;&#3588;&#3623;&#3634;&#3617;&#3588;&#3636;&#3604;&#3648;&#3627;&#3655;&#3609;&#3651;&#3594;&#3656;&#3627;&#3619;&#3639;&#3629;&#3652;&#3617;&#3656;?</strong><br /><span class="subtitle">&#3648;&#3621;&#3639;&#3629;&#3585;&#3627;&#3633;&#3623;&#3586;&#3657;&#3629;&#3607;&#3637;&#3656;&#3604;&#3657;&#3634;&#3609;&#3621;&#3656;&#3634;&#3591;&#3609;&#3637;&#3657;</span>';
          poweredBy = '&#3586;&#3633;&#3610;&#3648;&#3588;&#3621;&#3639;&#3656;&#3629;&#3609;&#3650;&#3604;&#3618; OpinionLab &#3592;&#3632;&#3648;&#3611;&#3636;&#3604;&#3627;&#3609;&#3657;&#3634;&#3605;&#3656;&#3634;&#3591;&#3651;&#3627;&#3617;&#3656;';
          closeDialog = '&#3611;&#3636;&#3604;&#3585;&#3621;&#3656;&#3629;&#3591;&#3650;&#3605;&#3657;&#3605;&#3629;&#3610;';
      } else if (/\/nl\//i.test(path) || /\/be\//ig.test(path)) {
          tabText = 'Feedback';
          webText = 'Website<br /><br /><span class="subtitle">Feedback op de pagina op onze website</span><span class="screen_reader"> Er wordt nu een nieuw venster geopend</span>';
          prodText = 'Product<br /><br /><span class="subtitle">Feedback op je ervaringen met onze producten</span><span class="screen_reader"> Er wordt nu een nieuw venster geopend</span>';
          servText = 'Service<br /><br /><span class="subtitle">Feedback op je ervaringen met onze klantenservice online/offline <br />(Online chat, telefoon, e-mail, servicecentrum, enz.)</span><span class="screen_reader"> Er wordt nu een nieuw venster geopend</span>';
          wpIntro = '<strong>Heb je feedback voor ons?</strong><br /><span class="subtitle">Kies hieronder een onderwerp</span>';
          poweredBy = 'Mogelijk gemaakt door OpinionLab Er wordt nu een nieuw venster geopend';
          closeDialog = 'Dialoogvenster sluiten';
      } else if (/\.pl\/|\/pl\//i.test(path)) {
          tabText = 'Opinie';
          webText = 'Strona www<br /><br /><span class="subtitle">Oce&#324; nasz&#261; stron&#281; internetow&#261;.</span><span class="screen_reader"> Zostanie otwarte nowe okno.</span>';
          prodText = 'Produkt<br /><br /><span class="subtitle">Oce&#324; Twoje do&#347;wiadczenia zwi&#261;zane z naszymi produktami.</span><span class="screen_reader"> Zostanie otwarte nowe okno.</span>';
          servText = 'Obs&#322;uga Klienta<br /><br /><span class="subtitle">Oce&#324; Twoje do&#347;wiadczenia zwi&#261;zane z naszym wsparciem online i offline <br />(czat internetowy, telefon, e-mail, centrum serwisowe itp.).</span><span class="screen_reader"> Zostanie otwarte nowe okno.</span>';
          wpIntro = '<strong>Wyra&#378; swoj&#261; opin&#281;.</strong><br /><span class="subtitle">Wybierz temat</span>';
          poweredBy = 'Powered by OpinionLab. Zostanie otwarte nowe okno.';
          closeDialog = 'Zamknij okno.';
      } else if (/\/se\//i.test(path)) {
          tabText = 'Synpunkter';
          webText = 'Webbplats<br /><br /><span class="subtitle">Synpunkter p&#229; sidorna p&#229; v&#229;r webbplats</span><span class="screen_reader"> Detta kommer att &#246;ppna ett nytt f&#246;nster</span>';
          prodText = 'Produkt<br /><br /><span class="subtitle">Synpunkter p&#229; din upplevelse av v&#229;ra produkter</span><span class="screen_reader"> Detta kommer att &#246;ppna ett nytt f&#246;nster</span>';
          servText = 'Service<br /><br /><span class="subtitle">Synpunkter p&#229; upplevelsen av v&#229;r kundtj&#228;nst on- och offline <br />(Online chatt, telefon, e-post, servicecenter etc)</span><span class="screen_reader"> Detta kommer att &#246;ppna ett nytt f&#246;nster</span>';
          wpIntro = '<strong>Har du synpunkter till oss?</strong><br /><span class="subtitle">V&#228;lj ett &#228;mne nedan</span>';
          poweredBy = 'Drivs av OpinionLab Detta kommer att &#246;ppna ett nytt f&#246;nster';
          closeDialog = 'St&#228;ng dialog';
      } else if (/\/tr\//i.test(path)) {
          tabText = 'Geri bildirim';
          webText = 'Web sitesi<br /><br /><span class="subtitle">Web Sitemizdeki Sayfa hakkında geri bildirim</span><span class="screen_reader"> Yeni pencerede a&#231;&#305;lacakt&#305;r</span>';
          prodText = '&#220;r&#252;n<br /><br /><span class="subtitle">&#220;r&#252;nlerimizle ilgili Deneyiminiz hakk&#305;nda geri bildirim</span><span class="screen_reader"> Yeni pencerede a&#231;&#305;lacakt&#305;r</span>';
          servText = 'Hizmet<br /><br /><span class="subtitle">&#199;evrimi&#231;i/&#199;evrimd&#305;&#351;&#305; M&#252;&#351;teri Hizmetleri Deneyimi hakk&#305;nda geri bildirim <br />(&#199;evrimi&#231;i Sohbet, Telefon, E-posta, Servis Merkezi vb.)</span><span class="screen_reader"> Yeni pencerede a&#231;&#305;lacakt&#305;r</span>';
          wpIntro = '<strong>Geri bildirimde mi bulunmak istiyorsunuz?</strong><br /><span class="subtitle">A&#351;a&#287;&#305;daki konulardan birini se&#231;in</span>';
          poweredBy = 'OpinionLab tarafından desteklenmektedir. Yeni pencerede a&#231;&#305;lacakt&#305;r';
          closeDialog = '&#304;leti&#351;im kutusunu kapat';
      } else if (/\/vn\//i.test(path)) {
          tabText = 'Ph\u1EA3n h\u1ED3i';
          webText = 'Trang web<br /><br /><span class="subtitle">&#221; ki&#7871;n ph&#7843;n h&#7891;i v&#7873; Trang tr&#234;n Trang web c&#7911;a ch&#250;ng t&#244;i</span><span class="screen_reader"> Thao t&#225;c n&#224;y s&#7869; m&#7903; m&#7897;t c&#7917;a s&#7893; m&#7899;i</span>';
          prodText = 'S&#7843;n ph&#7849;m<br /><br /><span class="subtitle">&#221; ki&#7871;n ph&#7843;n h&#7891;i v&#7873; Tr&#7843;i nghi&#7879;m c&#7911;a b&#7841;n v&#7899;i S&#7843;n ph&#7849;m c&#7911;a ch&#250;ng t&#244;i</span><span class="screen_reader"> Thao t&#225;c n&#224;y s&#7869; m&#7903; m&#7897;t c&#7917;a s&#7893; m&#7899;i</span>';
          servText = 'D&#7883;ch v&#7909;<br /><br /><span class="subtitle">&#221; ki&#7871;n ph&#7843;n h&#7891;i v&#7873; Tr&#7843;i nghi&#7879;m D&#7883;ch v&#7909; Kh&#225;ch h&#224;ng Tr&#7921;c tuy&#7871;n/Ngo&#7841;i tuy&#7871;n c&#7911;a ch&#250;ng t&#244;i <br />(Tr&#242; chuy&#7879;n tr&#7921;c tuy&#7871;n, &#272;i&#7879;n tho&#7841;i, Email, Trung t&#226;m D&#7883;ch v&#7909;, v.v.)</span><span class="screen_reader"> Thao t&#225;c n&#224;y s&#7869; m&#7903; m&#7897;t c&#7917;a s&#7893; m&#7899;i</span>';
          wpIntro = '<strong>B&#7841;n c&#243; &#253; ki&#7871;n ph&#7843;n h&#7891;i cho ch&#250;ng t&#244;i?</strong><br /><span class="subtitle">Ch&#7885;n m&#7897;t ch&#7911; &#273;&#7873; d&#432;&#7899;i &#273;&#226;y</span>';
          poweredBy = '&#272;&#432;&#7907;c h&#7895; tr&#7907; b&#7887;i OpinionLab. Thao t&#225;c n&#224;y s&#7869; m&#7903; m&#7897;t c&#7917;a s&#7893; m&#7899;i';
          closeDialog = '&#272;&#243;ng h&#7897;i tho&#7841;i';
      } else if (/\.com\/it\//i.test(path)) {
          tabText = 'Feedback';
          webText = 'Sito web<br /><br /><span class="subtitle">Feedback sulla pagina del nostro sito web</span><span class="screen_reader"> Si aprir&#224; in una nuova finestra</span>';
          prodText = 'Prodotto<br /><br /><span class="subtitle">Feedback sulla tua esperienza con i nostri prodotti</span><span class="screen_reader"> Si aprir&#224; in una nuova finestra</span>';
          servText = 'Assistenza<br /><br /><span class="subtitle">Feedback sulla tua esperienza con il nostro servizio di assistenza clienti online/presso centro di assistenza<br />(chat, telefono, e-mail, centro assistenza ecc.)</span><span class="screen_reader"> Si aprir&#224; in una nuova finestra</span>';
          wpIntro = '<strong>Vuoi lasciarci il tuo feedback?</strong><br /><span class="subtitle">Scegli un argomento</span>';
          poweredBy = 'Powered by OpinionLab. Si aprir&#224; in una nuova finestra';
          closeDialog = 'Chiudi finestra di dialogo';
      }

        OOo.oo_tab = new OOo.Ocode({
            tab: {
                position: 'right',
                title: tabText,
                tabType: 0,
                verbiage: tabText,
                iconPath: assetDirectory
            },
            disableShow: true
        });

        OOo.oo_waypoint = new OOo.Waypoint({
        /* REQUIRED - Asset identification */
            pathToAssets: assetDirectory,
            companyLogo: assetDirectory + 'samsung_logo.png',
            companySlogan: 'Samsung',
            categories: {
                website: {
                    oCode: {
                        referrerRewrite: w.location.href + (/\?/.test(w.location.href) ? '&olSegment=wpWebsite' : '?olSegment=wpWebsite'),
                        customVariables: {
                            amcv: OOo.readCookie('AMCV_48855C6655783A647F000101%40AdobeOrg'),
                            olSegment: 'wpWebsite',
                            s_vi: OOo.readCookie('s_vi'),
                            s_pagename: typeof s !== 'undefined' ? typeof s.pageName !== 'undefined' ? s.pageName : '' : '',
                            s_account: typeof s_account !== 'undefined' ? s_account.replace(/,/g, '%2C') : 'sssamsungnexttest%2Csssamsung4mstglobaldev'
                        }
                    },
                    icon: 'icon_web.png',
                    buttonText: webText
                },
                product: {
                    oCode: {
                        referrerRewrite: w.location.href + (/\?/.test(w.location.href) ? '&olSegment=wpProduct' : '?olSegment=wpProduct'),
                        customVariables: {
                            amcv: OOo.readCookie('AMCV_48855C6655783A647F000101%40AdobeOrg'),
                            olSegment: 'wpProduct',
                            s_vi: OOo.readCookie('s_vi'),
                            s_pagename: typeof s !== 'undefined' ? typeof s.pageName !== 'undefined' ? s.pageName : '' : '',
                            s_account: typeof s_account !== 'undefined' ? s_account.replace(/,/g, '%2C') : 'sssamsungnexttest%2Csssamsung4mstglobaldev'
                        }
                    },
                    icon: 'icon_product.png',
                    buttonText: prodText
                },
                service: {
                    oCode: {
                        referrerRewrite: w.location.href + (/\?/.test(w.location.href) ? '&olSegment=wpService' : '?olSegment=wpService'),
                        customVariables: {
                            amcv: OOo.readCookie('AMCV_48855C6655783A647F000101%40AdobeOrg'),
                            olSegment: 'wpService',
                            s_vi: OOo.readCookie('s_vi'),
                            s_pagename: typeof s !== 'undefined' ? typeof s.pageName !== 'undefined' ? s.pageName : '' : '',
                            s_account: typeof s_account !== 'undefined' ? s_account.replace(/,/g, '%2C') : 'sssamsungnexttest%2Csssamsung4mstglobaldev'
                        }
                    },
                    icon: 'icon_other.png',
                    buttonText: servText
                }
            },
            wpmarkup: '<div id="oo_waypoint_prompt" role="dialogue" aria-describedby="oo_waypoint_message"><div id="oo_waypoint_company_logo"></div><div id="oo_waypoint_content"><p id="oo_waypoint_message">' + wpIntro + '</p><p id="waypoint_icons"></p><p id="ol_waypoint_brand_logo"><a href="http://www.opinionlab.com/company/"" target="_blank" aria-label="' + poweredBy + '"></a></p></div><a id="oo_waypoint_close_prompt" href="#" aria-label="' + closeDialog + '"><div class="screen_reader">' + closeDialog + '</div><span aria-hidden="true">&#10006;</span></a></div>'
        });

        OOo.appendWaypoint('oo_tab');

        var ooTab = OOo.$('oo_tab');

        if (!!ooTab) {
            OOo.addEventListener(ooTab, 'click', function (e) {
                if (typeof s !== 'undefined' && typeof s.sa !== 'undefined' && typeof s.tl !== 'undefined') {
                    var sAccount = typeof s_account !== 'undefined' ? s_account : 'sssamsungnexttest,sssamsung4mstglobaldev';
                    // s.sa(sAccount);
                    // s.eVar51 = 'ol survey:tab click';
                    // s.tl();
					sendClickCode('survey_click', 'ol survey:tab click');
                    console.log('Adobe Tracking v51 - ' + s.eVar51);
                }
            }, false);
        }

    });

})(window, document);
