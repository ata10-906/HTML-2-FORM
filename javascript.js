<script>
  fuction validateForm() {
      let Username = document.forms["myForm"]["username"].value
      let Email = document.forms["myForm"]["email"].value
      let Telephone = document.forms["myForm"]["telephone"].value
      let Position = document.forms["myForm"]["job position"].value

      if(Username == ""){
            alert("Please enter your name");
                  return false;
        
      }

      if(Email == ""){
            alert("Please enter your email address");
                  return false;
        
      }

      if(Telephone == ""){
            alert("Please enter your telephone number");
                  return false;
        
      }

      if(Position == ""){
            alert("Please select a job position");
                  return false;
        
      }

      let relocate = document.getElementsByName("relocate");
      let selected = false;

      for (let i = 0; i<relocate.length; i++) {
        if (relocate[i].checked) {
          selected = true;
        break;
      }
    }

      if (!selected) {
        alert("Please select your willingness to relocate.");
       return false;
     }

      return true;
  }
</script>
  
