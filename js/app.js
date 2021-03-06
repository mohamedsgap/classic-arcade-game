// Enemies our player must avoid
var Enemy = function(x,y,fast) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x= x;
    this.y= y+ 55;
    this.fast= fast;
    this.distX= 101;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // if the enemy not pass the boundry
    if (this.x <this.distX *5){
      this.x += this.fast*dt;
    } else {
      // rest position
      this.x = - this.distX;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
 class BraveMan {
  constructor(){
    this.distX= 101;
    this.startX= this.distX *2;
    this.x= this.startX ;
    this.distY= 83;
    this.startY= (this.distY *4) + 55;
    this.y= this.startY;
    this.sprite= 'images/char-boy.png';
    this.win= false;
  }

  render (){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  update () {

    for (let enemy of allEnemies){

      if (this.y === enemy.y && (enemy.x + enemy.distX/2 > this.x && enemy.x < this.x + this.distX/2) ){
        this.reset();
      }

    }
    if (this.y === 55){
      console.log("WIN!");
      this.win= true;
    }
  }
  reset(){
    this.x= this.startX;
    this.y= this.startY;
  }
// this function for moving the player!
  handleInput(input) {
    switch (input) {
      case 'left':
      if (this.x >0) {
        this.x -= this.distX;
        }
        break;
      case 'up':
      if (this.y > 0){
        this.y -= this.distY;
        }
        break;
      case 'right':
      if (this.x < this.distX *4) {
        this.x += this.distX;
         }
        break;
      case 'down':
      if(this. y < this.distY * 4) {
        this.y += this.distY;
        }
        break;
    }
  }

}

const player= new BraveMan();
const bug0= new Enemy(-101, 0,200);
const bug1= new Enemy(-101, 83,200);
const bug2= new Enemy((-101*2.5),0,300);
const bug3= new Enemy((-101*2.5),83,300);
const bug4= new Enemy(-101, 166,200);
const bug5= new Enemy((-101*2.5),166,300);
const bug6= new Enemy((-101*3.5),0,400);
const bug7= new Enemy((-101*3.5),83,400);
const bug8= new Enemy((-101*3.5),166,400);
const bug9= new Enemy(-101, 0,550);
const bug10= new Enemy(-101, 83,750);
const bug11= new Enemy(-101, 166,900);

const allEnemies= [];
allEnemies.push(bug0,bug1,bug2,bug3,bug4,bug5,bug6,bug7,bug8,bug9,bug10,bug11);
console.log(allEnemies);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
