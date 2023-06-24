//function to change the text of blog page
function blog(){
        var element = document.getElementById('disadvantages');
        element.innerHTML ="Technology has changed our habits and our tastes. Although technology helps to speed up satisfying work, many people do not realize that it can have serious consequences. Technology has weakened the relationship between family members. Before the advent of various machines, family members lived together and played games. However, since the exhibition of video games, entertainment has evolved into a stand-alone game. The influence of such games on family relationships is obvious. Today, instead of watching television together or having family meals, each family member lives in a separate room, performing his or her individual duties such as playing video games, watching favorite television programs, talking on the phone or texting. People are fascinated by their smartphones and laptops for many hours a day. As a result, spending less time with family and more time with different gadgets can result in loss of communication and intimacy. ";
        element.style.color = "#FFC0CB";
        }
        
//function to display date and time in the footer
function local() {
        document.getElementById('localTime').innerHTML = Date();
        setTimeout(local,100);
      }
      local();
