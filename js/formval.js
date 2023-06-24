//local date and time
function local() {
        document.getElementById('localTime').innerHTML = Date();
        setTimeout(local,100);
      }
      local();

//validating form
function validation(){
        //check name field
        var name = document.getElementById('name').value;
        if(name == ""){
                document.getElementById('namee').innerHTML = "* Name is mandotory";
                return false;
        }
        else{
                document.getElementById('namee').innerHTML ="";
        }

        if(name.length <= 2){
                document.getElementById('namee').innerHTML = "* Name is very short.";
                return false;
        }
        else{
                document.getElementById('namee').innerHTML ="";
        }
        
        //checking mail field
        var mail = document.getElementById('email').value;
        if(mail == ""){
                document.getElementById('maile').innerHTML = "* E-mail is mandotory.";
                return false;
        } 
        else{
                document.getElementById('maile').innerHTML ="";
        }

        //checking the PIN field
        var pass = document.getElementById('pass').value;
        var cpass = document.getElementById('cpass').value;

        if(pass == ""){
                document.getElementById('passe').innerHTML = "* PIN required.";
                return false;
        }
        else{
                document.getElementById('passe').innerHTML ="";
        }

        
        if(pass.length <= 3){
                document.getElementById('passe').innerHTML = "* Please input at least 4 characters.";
                return false;
        }
        else{
                document.getElementById('passe').innerHTML ="";
        }

        //checking the confirm PIN field
        if(cpass == ""){
                document.getElementById('cpasse').innerHTML = "* Confirm your PIN.";
                return false;
        }
        else{
                document.getElementById('cpasse').innerHTML ="";
        }
        
        //Checking the values of PIN and Confirm PIN field
        if(pass != cpass){
               document.getElementById('cpasse').innerHTML = "* The PIN does not match.";
                return false; 
        }
        else{
                alert("Thank you " + name + ". Find it, love it, buy it.")
        }
}