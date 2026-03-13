<script>
  fuction validateForm() {
      var Username=
        document.getElementById("name").value

       var Email=
        document.getElementById("email").value

       var Telephone=
        document.getElementById("telephone").value

       var Position=
        document.getElementById("job position").value




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
  alert("Form submitted successfully!!");
    return true;
}
     
</script>
  
