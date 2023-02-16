class Luffy{
    constructor(game, theId){
        this.game = game;
        this.id = theId;
        this.weapons = [new Gomu(game)];
        this.game.player = this;

        //sprite
        this.spriteSheet = ASSET_MANAGER.getAsset("./img/luffy7.png");
        this.loadAnimation(this.spriteSheet);

        //states
        this.states = 0; // 0 = idle, 1 = walking 2 = dead
        this.facing = 0; // 0 = right, 1 = left
        this.dead = false;

        // player hitbox
        this.x =  512;
        this.y =  384;
        this.radius = 10;
        this.direction = Direction.Up;

        this.scale = 1.2;

        //stats
        this.health = 100;
        this.speed = 200;

    };

    loadAnimation(spriteSheet){
        this.animation = [];
        for(var i = 0; i < 3; i++){
            this.animation.push([]);
            for(var j = 0; j < 2; j++){
                this.animation[i].push([]);
            }
        }

        // idle right
        this.animation[0][0] = new Animator(spriteSheet, 0, 0, 79, 88, 3, .3, false, true);
        // idle left
        this.animation[0][1] = new Animator(spriteSheet, 239, 0, 79, 88, 3, .3, false, true);

        // walking right
        this.animation[1][0] = new Animator(spriteSheet, 0, 88, 79, 88, 8, .2, false, true);
        // walking left
        this.animation[1][1] = new Animator(spriteSheet, 645,88, 79, 88, 8, .2, true, true);

        // dead right
        this.animation[2][0] = new Animator(spriteSheet, 5, 176, 79, 88, 5, .2, false, false);
        // dead left
        this.animation[2][1] = new Animator(spriteSheet, 5, 264, 79, 88, 5, .2, false, false);
    }

    update(){

        
        // changes the state of the player and the direction of the player when moving
        if(this.game.keys.a || this.game.keys.A){
            this.states = 1;
            this.facing = 1;
            this.direction = Direction.Left;
            this.x -= this.game.clockTick * this.speed;
        }
        if(this.game.keys.d || this.game.keys.D){
            this.states = 1;
            this.facing = 0;
            this.direction = Direction.Right;
            this.x += this.game.clockTick * this.speed;
        }
        if(this.game.keys.w || this.game.keys.W){
            this.states = 1;
            this.direction = Direction.Up;
            this.y -= this.game.clockTick * this.speed;
        }
        if(this.game.keys.s || this.game.keys.S){
            this.states = 1;
            this.direction = Direction.Down;
            this.y += this.game.clockTick * this.speed;
        }
        if(!(this.game.keys.a || this.game.keys.A) && !(this.game.keys.d || this.game.keys.D) &&
         !(this.game.keys.w || this.game.keys.W) && !(this.game.keys.s || this.game.keys.S)){
            this.states = 0;
        }

        // changes the direction of the player's direction
        for (let i = 0; i < this.weapons.length; i++) {
            let weapon = this.weapons[i];

            weapon.update();
            weapon.direction = this.direction;


        }

        // checks if the player is dead
        if (this.health <= 0){
            this.dead = true;
            this.states = 2;
        }
        this.game.playerLocation.x = this.x;
        this.game.playerLocation.y = this.y;


    };

    draw(ctx){
        for (let i = 0; i < this.weapons.length; i++) {
            let weapon = this.weapons[i];
            weapon.draw(ctx);

        }

        this.animation[this.states][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scale);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x - this.game.camera.x + 52, this.y - this.game.camera.y + 53, this.radius, 0, 2 * Math.PI);
        ctx.stroke(); 
    }
}

class Zoro{
    constructor(game, theId){
        this.game = game;
        this.id = theId;
        this.weapons = [new Gomu(game)];
        this.game.player = this;

        //sprite
        this.spriteSheet = ASSET_MANAGER.getAsset("./img/zoro1.png");
        this.loadAnimation(this.spriteSheet);

        //states
        this.states = 0; // 0 = idle, 1 = walking 2 = dead
        this.facing = 0; // 0 = right, 1 = leftd
        this.dead = false;

        // player hitbox
        this.x =  512;
        this.y =  384;
        this.radius = 10;
        this.direction = Direction.Up;

        this.scale = 1.2;

        //stats
        this.health = 100;
        this.speed = 200;

    };

    loadAnimation(spriteSheet){
        this.animation = [];
        for(var i = 0; i < 3; i++){
            this.animation.push([]);
            for(var j = 0; j < 2; j++){
                this.animation[i].push([]);
            }
        }

        // idle right
        this.animation[0][0] = new Animator(spriteSheet, 0, 0, 90, 88, 4, .25, false, true);
        // idle left
        this.animation[0][1] = new Animator(spriteSheet, 0, 90, 90, 88, 4, .25, false, true);

        // walking right
        this.animation[1][0] = new Animator(spriteSheet, 0, 180, 90, 88, 8, .2, false, true);
        // walking left
        this.animation[1][1] = new Animator(spriteSheet, 0, 270, 90, 88, 8, .2, true, true);

        // dead right
        this.animation[2][0] = new Animator(spriteSheet, 0, 360, 90, 88, 4, .25, false, true);
        // dead left
        this.animation[2][1] = new Animator(spriteSheet, 0, 450, 90, 88, 4, .25, false, false);
    }

    update(){

        
        // changes the state of the player and the direction of the player when moving
        if(this.game.keys.a || this.game.keys.A){
            this.states = 1;
            this.facing = 1;
            this.direction = Direction.Left;
            this.x -= this.game.clockTick * this.speed;
        }
        if(this.game.keys.d || this.game.keys.D){
            this.states = 1;
            this.facing = 0;
            this.direction = Direction.Right;
            this.x += this.game.clockTick * this.speed;
        }
        if(this.game.keys.w || this.game.keys.W){
            this.states = 1;
            this.direction = Direction.Up;
            this.y -= this.game.clockTick * this.speed;
        }
        if(this.game.keys.s || this.game.keys.S){
            this.states = 1;
            this.direction = Direction.Down;
            this.y += this.game.clockTick * this.speed;
        }
        if(!(this.game.keys.a || this.game.keys.A) && !(this.game.keys.d || this.game.keys.D) &&
         !(this.game.keys.w || this.game.keys.W) && !(this.game.keys.s || this.game.keys.S)){
            this.states = 0;
        }

        // changes the direction of the player's direction
        for (let i = 0; i < this.weapons.length; i++) {
            let weapon = this.weapons[i];

            weapon.update();
            weapon.direction = this.direction;


        }

        // checks if the player is dead
        if (this.health <= 0){
            this.dead = true;
            this.states = 2;
        }
        this.game.playerLocation.x = this.x;
        this.game.playerLocation.y = this.y;


    };

    draw(ctx){
        for (let i = 0; i < this.weapons.length; i++) {
            let weapon = this.weapons[i];
            weapon.draw(ctx);

        }

        this.animation[this.states][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scale);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x - this.game.camera.x + 52, this.y - this.game.camera.y + 53, this.radius, 0, 2 * Math.PI);
        ctx.stroke(); 
    }
}

class Brook{
    constructor(game, theId){
        this.game = game;
        this.id = theId;
        this.weapons = [new Gomu(game)];
        this.game.Zoro = this;

        //sprite
        this.spriteSheet = ASSET_MANAGER.getAsset("./img/zoro1.png");
        this.loadAnimation(this.spriteSheet);

        //states
        this.states = 0; // 0 = idle, 1 = walking 2 = dead
        this.facing = 0; // 0 = right, 1 = leftd
        this.dead = false;

        // player hitbox
        this.x =  512;
        this.y =  384;
        this.radius = 10;
        this.direction = Direction.Up;

        this.scale = 1.2;

        //stats
        this.health = 100;
        this.speed = 200;

    };

    loadAnimation(spriteSheet){
        this.animation = [];
        for(var i = 0; i < 3; i++){
            this.animation.push([]);
            for(var j = 0; j < 2; j++){
                this.animation[i].push([]);
            }
        }

        // idle right
        this.animation[0][0] = new Animator(spriteSheet, 0, 0, 90, 88, 4, .25, false, true);
        // idle left
        this.animation[0][1] = new Animator(spriteSheet, 0, 90, 90, 88, 4, .25, false, true);

        // walking right
        this.animation[1][0] = new Animator(spriteSheet, 0, 180, 90, 88, 8, .2, false, true);
        // walking left
        this.animation[1][1] = new Animator(spriteSheet, 0, 270, 90, 88, 8, .2, true, true);

        // dead right
        this.animation[2][0] = new Animator(spriteSheet, 0, 360, 90, 88, 4, .25, false, true);
        // dead left
        this.animation[2][1] = new Animator(spriteSheet, 0, 450, 90, 88, 4, .25, false, false);
    }

    update(){

        
        // changes the state of the player and the direction of the player when moving
        if(this.game.keys.a || this.game.keys.A){
            this.states = 1;
            this.facing = 1;
            this.direction = Direction.Left;
            this.x -= this.game.clockTick * this.speed;
        }
        if(this.game.keys.d || this.game.keys.D){
            this.states = 1;
            this.facing = 0;
            this.direction = Direction.Right;
            this.x += this.game.clockTick * this.speed;
        }
        if(this.game.keys.w || this.game.keys.W){
            this.states = 1;
            this.direction = Direction.Up;
            this.y -= this.game.clockTick * this.speed;
        }
        if(this.game.keys.s || this.game.keys.S){
            this.states = 1;
            this.direction = Direction.Down;
            this.y += this.game.clockTick * this.speed;
        }
        if(!(this.game.keys.a || this.game.keys.A) && !(this.game.keys.d || this.game.keys.D) &&
         !(this.game.keys.w || this.game.keys.W) && !(this.game.keys.s || this.game.keys.S)){
            this.states = 0;
        }

        // changes the direction of the player's direction
        for (let i = 0; i < this.weapons.length; i++) {
            let weapon = this.weapons[i];

            weapon.update();
            weapon.direction = this.direction;


        }

        // checks if the player is dead
        if (this.health <= 0){
            this.dead = true;
            this.states = 2;
        }
        this.game.playerLocation.x = this.x;
        this.game.playerLocation.y = this.y;


    };

    draw(ctx){
        for (let i = 0; i < this.weapons.length; i++) {
            let weapon = this.weapons[i];
            weapon.draw(ctx);

        }

        this.animation[this.states][this.facing].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y - this.game.camera.y, this.scale);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x - this.game.camera.x + 52, this.y - this.game.camera.y + 53, this.radius, 0, 2 * Math.PI);
        ctx.stroke(); 
    }
}