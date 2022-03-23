class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","enter your name")
    this.playbutton=createButton("play")
    this.titleImage=createImg("./assets/title.png","gametitle")
    this.greeting=createElement("h2")
  }
setElemetsPosition(){
  this.titleImage.position(120,100)
  this.input.position(width/2-110,height/2-80)
  this.playerbutton.position(width/2-90,height/2-20)
  this.greeting.position(width/2-300,height/2-100)
  
}
//hide(){
  //this.greeting.hide()
  //this.playerbutton.hide()
  //this.input.hide()

//}
handleMousePressed(){
  this.playerbutton.mousePressed(()=>{
    this.input.hide()
    this.playerbutton.hide()
    var message = ` 
    Hello ${this.input.value()}
     </br>wait for another player to join...`;
      this.greeting.html(message); player.name = this.input.value();
       player.index = 1;
  })
}
display(){
  this.setElemetsPosition()
  this.handleMousePressed();
}

}
