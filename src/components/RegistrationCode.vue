<template>
  <div class="container">
  <div class="numberEntry">
  <h1>Enter Registration Code</h1>
  <span id="display">

  </span>
    <div id="keyboard">
    <ol class="keys">
        <li data-number='1'>1</li>
        <li data-number='2'>2</li>
        <li data-number='3'>3</li>
        <li data-number='4'>4</li>
        <li data-number='5'>5</li>
        <li data-number='6'>6</li>
        <li data-number='7'>7</li>
        <li data-number='8'>8</li>
        <li data-number='9'>9</li>
        <li class="hidden"></li>
        <li data-number='0'>0</li>
    </ol>
    </div>
  </div>
  <div class= "options">
  <a href="/">
    <div class="button" style="background-color: white;
    border-style: solid;
    border-width: 3px;
    border-color: #E57373;
    color: #E57373;">Exit</div>
  </a>
  <a href="/">
    <div class="button" style="background-color: white;
    border-style: solid;
    border-width: 3px;
    border-color: #64B5F6;
    color: #64B5F6;">Clear</div>
  </a>
   <a href="/">
    <div class="button" style="background-color:#4CAF50;border-width: 3px;border-color: #4CAF50;">Enter</div>
  </a>
  </div>
  </div>

  
</template>

<style scoped>
h1{
    margin-bottom:10px;
    margin-top:15px;
}

div#keyboard {
  width:340px;
  height:150px;
  margin:0 auto;
}
ol.keys {
  list-style-type:none;
}

ol.keys li {
    width: 77px;
    display: block;
    text-align: center;
    height: 77px;
    float: left;
    font-size: 2em;
    font-family: sans-serif;
    line-height: 77px;
    margin-top: 5px;
    margin-right: 12px;
    border-radius: 46px;
    border: 1px solid rgb(100,100,100);
    color: grey;
}

a{
    text-decoration:none;
    line-height:65px;
}

.button{
    width: 165px;
    height: 65px;
    margin-top: 14px;
    background: whitesmoke;
    text-align: center;
    border-radius: 53px;
    color: white;
    font-weight: bold;
    padding: 0px;
}

ol.keys li:hover {
  cursor:pointer;
}
ol.keys li:active {
  background-color:rgb(200,200,200);
  color:#000;
}
#display {
    clear: both;
    width: 260px;
    margin: 0 auto;
    display: block;
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    color: white;
    font-family: 'Helvetica';
    font-size: 2em;
    padding: .3em;
    height: 25px;
}

.hidden{
    visibility:hidden;
}
div.numberEntry{
    vertical-align:top;
    width:400px;
    display:inline-block;
    margin-left:45px;
}
div.options{
    display:inline-block;
    width:200px;
    margin-top: 125px;
}
</style>


<script>


</script>
