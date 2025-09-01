function getFormvalue() {
    //Write your code here
event.preventDefault(); // stop form refresh

      // Access form fields
      const form = document.getElementById("form1");
      const firstName = form.elements["fname"].value.trim();
      const lastName = form.elements["lname"].value.trim();

      // Concatenate and display
      const fullName = firstName + " " + lastName;
      alert(fullName);
}
