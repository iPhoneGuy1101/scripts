## Bouncy Shapes Script
Easy to use!
<br/><br/>
If I want to use this script, copy <br/>
<a>&lt;script src="https://iphoneguy1101.github.io/scripts/BouncyBalls/bouncyballs.js" &gt;&lt;/script&gt;</a><br/>
 to the beginning of the code. Then, let's say I want 2 squares and a circle.<br/>I would use the <a>&lt;shapes&gt;</a> tag.
 <br/>
 So now, my code should look like this (I am not showing the script url part you copied):<br/>
 <a>
  &lt;shapes&gt;
  
  &lt;/shapes&gt;
 </a><br/><br/>
 Then, add <a>&lt;square&gt;</a>s and <a>&lt;circle&gt;</a>s inside.<br/>
 <a>
  &lt;shapes&gt;<br/>
  &nbsp;&nbsp;&lt;square size=64 color="red"&gt; &lt;square&gt;<br/>
  &nbsp;&nbsp;&lt;circle speed=5&gt; &lt;circle&gt;<br/>
  &lt;/shapes&gt;
 </a><br/>
 As you may have noticed, I customized them using attributes. A 64px red square and a circle (random color+size) with speed 5px/s.
<br/><br/>
P.S. &nbsp;&nbsp;&nbsp;add "<a>data:text/html,</a>" before the code and paste it in the URL bar of a web browser (safari) on iPad
