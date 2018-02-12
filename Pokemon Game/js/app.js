var vm = new Vue({
    el: '#app',
    data: {
        player: 'Venonat',
        enemy: 'Sandshrew',
        playerImage:'https://static.giantbomb.com/uploads/scale_small/13/135472/1892300-048venonat.png',
        enemyImage:'https://static.giantbomb.com/uploads/scale_small/13/135472/1891822-027sandshrew.png',
        playerHealth: 100,
        enemyHealth: 100,
        healCount: 4,
        gameOn: false,
        note:' On every player action, the enemy will be giving an opposite reaction except on healing :p'
    },
    methods: {
        startGame: function(){
            this.gameOn = true;
            this.player = 'Venonat';
            this.enemy = 'Sandshrew';
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.healCount = 4;
            this.playerImage = 'https://static.giantbomb.com/uploads/scale_small/13/135472/1892300-048venonat.png';
            this.enemyImage = 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891822-027sandshrew.png';
        },
        attack: function(){
            this.enemyHealth -=  this.calcDamage(3,10);

            if(this.enemyHealth <= 0){
                this.player += ' Wins';
                this.enemyHealth = 0;
                this.gameOn = false;
                this.enemyImage = '';
            }

            this.playerHealth -= this.calcDamage(2,10);
            if(this.playerHealth <= 0){
                this.enemy += ' Wins';
                this.playerHealth = 0;
                this.gameOn = false;
                this.playerImage = '';
            }

            if((this.playerHealth == 0) && (this.enemyHealth == 0)){
                this.player = 'Game';
                this.enemy = ' Draw';
                this.gameOn = false;
            }
        },
        specialAttack: function(){
            this.enemyHealth -= this.calcDamage(6,15);

            if(this.enemyHealth <= 0){
                this.player += ' Wins';
                this.enemyHealth = 0;
                this.gameOn = false;
                this.enemyImage = '';
            }

            this.playerHealth -= this.calcDamage(4,14);
            if(this.playerHealth <= 0){
                this.enemy += ' Wins';
                this.playerHealth = 0;
                this.gameOn = false;
                this.playerImage = '';
            }
        },
        heal: function(){
           if((this.healCount != 0 ) && (this.playerHealth <=75 )){
                if((this.playerHealth <=90) && (this.playerHealth >70)){
                    this.playerHealth+= 7;
                    this.healCount--;
                    return;
                }
                else if((this.playerHealth <=70) && (this.playerHealth >50)){
                    this.playerHealth+= 12;
                    this.healCount--;
                    return;
                }
                else if((this.playerHealth <=50) && (this.playerHealth >38)){
                    this.playerHealth+= 20;
                    this.healCount--;
                    return;
                }
                else{
                    this.playerHealth+= 25;
                    this.healCount--;
                    return;
                }
            }
            else{
                return;
                
            }
            
        },
        giveUp: function(){
            this.gameOn = false;
        },
        calcDamage: function(min, max){
            console.log("yeah");
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        // checkVictory: function(){
        //     if(this.playerHealth <= 0){
        //         this.playerHealth = 0;
        //         if(confirm("Ouch! Pikachu Lost :( , New Game ?")){
        //             this.startGame();
        //         }
        //         else{
        //             this.gameOn = false;
        //         }
        //         return;
        //     }
        //     else if(this.enemyHealth <= 0){
        //         this.enemyHealth = 0;
        //         if(confirm("Well done Pikachu! New Game ?")){
        //             this.startGame();
        //         }
        //         else{
        //             this.gameOn = false;
        //         }
        //         return;
        //     }    
        //     return false;        
        // }
    }
});