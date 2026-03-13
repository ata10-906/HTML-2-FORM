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
<body>
  <form onsubmit="return validateForm()">
  <label>Username:</label><br>
  <input type="text" id="username"><br><br>

  <label>Email:</label><br>
  <input type="text" id="email"><br><br>

  <label>Telephone:</label><br>
  <input type="text" id="telephone"><br><br>

  <label>Position:</label><br>
  <input type="text" id="job position"><br><br>

  <input type="submit" value="Submit">
 <input type="reset" value="Reset">
  </form>
  </body>

  
