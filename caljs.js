var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var ResultField=document.getElementById('X is What % of Y');
form.addEventListener('submit',function(event){
                      
if(!numField1.value ||!numField2.value){
alert("Please enter both the values");

}else{
    var x=parseFloat(numField1.value);
    var y=parseFLoat(numField2.value);
  var result =(x/y);
    var percent= result*100;
    
    ResultField.innerText="Answer: "+percent+"%";
    event.preventDefault();
}
});

 