var Tamagocha   = Object(
    {
        hungry: 0,
        sleep: 0,
        happiness: 100,
        health: 100,
        giveFood : function(){
            console.log(this.hungry);
            this.hungry = (this.hungry<20)?0:(this.hungry-20);
            document.getElementById('hungry').innerHTML=this.hungry;
            return this.hungry;

        },
        timeChanges: function(){
            this.hungry+=20;
            document.getElementById('hungry').innerHTML=this.hungry;
            this.happiness-=10;
            document.getElementById('happiness').innerHTML=this.happiness;
            this.sleep+=10;
            document.getElementById('sleep').innerHTML=this.sleep;
            this.health-=5;
            document.getElementById('health').innerHTML=this.health;
        }
    }
);
var timeLapse =function(){
    setTimeout(function(){
        Tamagocha.timeChanges();
    }, 5000)
};
timeLapse();