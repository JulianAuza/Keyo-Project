<template>
    <div class="hello">
    <img src="../assets/logo.png">
    <h1>Join Keyo</h1>
    <a href="/">
    <div class="buttonJoin">Join Keyo</div>
    </a>
  </div>
</template>


<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'All you need is your palm',
      number(){
        var num;
        num = Math.floor( Math.random()*999) + 1000;
        alert("Your code is " + num);
      },
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight:200;
}
a{
  text-decoration:none;
  display:inline-block;
  font-size:26px;
  line-height:88px;
}
.button{
    width: 341px;
    height: 89px;
    background: whitesmoke;
    text-align: center;
    border-radius: 53px;
    color: white;
    font-weight: bold;
    padding:0px;
}
.buttonJoin{
    margin-top:30px;
    width: 715px;
    height: 89px;
    border-color:#979797;
    border-style: solid;
    border-width: 3px;
    background: white;
    text-align: center;
    border-radius: 53px;
    color: #979797;
    font-weight: bold;
    padding:0px;
}

</style>