<div>
  <span></span>
  <span></span>
  <span></span>
</div>
<div>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<p></p>
<p></p>
<style>
  *{
    margin:0;
  }
  body{
    background:#6592CF;
    display:flex;
  }
  div{
    display:flex;
    margin-top:140;
    width:100%;
    margin-left:45px;
  }
  div:nth-child(2){
    margin-left:-25px;
  }
  span {
    background:#243D83;
    width:10;
    height:50;
    position:relative;
    z-index:2;
    margin-right:35;
  }
  span:before {
    content:'';
    position:absolute;
    top:-10;
    left:-5.1;
    width:20px;
    height:20px;
    border-radius:50%;
    background:#243D83;
    z-index:2;
  }
  p:nth-child(3){
    position:fixed;
    top:120;
    left:30;
    background:#EEB850;
    height:40;
    width:40;
    border-radius:25px;
    -webkit-box-reflect:right 50px;
  }
    p:nth-child(4){
    position:fixed;
    top:100;
    left:65;
    background:#EEB850;
    height:60;
    width:60;
    border-radius:50px;
  }
</style>
