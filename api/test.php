<?php

$html = '<p><img src="images/GLFR/GLFR.png" alt="GLFR" style="margin-right: 10px; float: left;" />Hornbæk Golfklub har anskaffet en digital baneguide, og i den forbindelse har vi brug for et par ambassadører som er teknisk interesserede. Gerne en Apple og en Android fan :)</p>
<p>&nbsp;</p>
<p>Du kan læse "jobopslaget" fra GLFR <a href="http://www.ingeniumgolf.com/download/AmbassadorsPDF.pdf?utm_source=ERFA+2017+Follow+Up+Other&amp;utm_campaign=faee766c34-EMAIL_CAMPAIGN_2017_03_21&amp;utm_medium=email&amp;utm_term=0_a569d38d01-faee766c34-114502865" target="_blank">HER</a></p>
<p>&nbsp;</p>
<p>Er du interesseret, så skriv til os i <a href="mailto:sekretariat@hornbaekgolf.dk?subject=GLFR%20Ambassadør" target="_blank">Sekretariatet</a> senest mandag den 27. marts 2017. Så udvælger vi 2 ambassadører for klubben.</p>
<p>&nbsp;</p>
<p>Vi ser frem til at høre fra dig.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>';

$string = str_replace('src="', 'src="http://hornbaekgolf.dk/', $html);
$string = str_replace('</a>', 'class="external" </a>', $html);

echo $string;

?>