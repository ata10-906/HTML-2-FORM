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
  alert("Form submitted successfully!!"
}
     
</script>
  
