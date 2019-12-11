class Projectile{

    constructor(circle, startingLoc = {x: 20, y: 20}, velocity = {x: 10, y: 10}, size = {x: 20, y: 20}){    
        this.size = size
        this.location = startingLoc
        this.velocity = velocity
        this.img = circle
        this.setFlightPattern()
    }


    // setFlightPattern(){
    //     this.interval = setInterval(() => {
    //         const rand = Math.floor(Math.random() * 10)
    //         if(rand === 4){
    //             const newVelMag = 10 + (2 * rand)
    //             this.velocity.x = -1 * this.sign(this.velocity.x) * rand * 10
    //             this.velocity.y = newVelMag
    //         }
    //     }, 500)
    // }

    setFlightPattern(){
        setTimeout(() =>{

            this.velocity = {
                x: 1000, y: 10
            }
            setTimeout(() => {
                this.velocity = {
                    x: 0, y: 90
                }
                setTimeout(() => {
                    this.velocity = {
                        x: -100, y: -100
                    }
                    setTimeout(() => {
                        this.velocity = {
                            x: 100, y: -100
                        }
                        setTimeout(() => {
                            this.velocity = {
                                x: 100, y: 100
                            }
                            setTimeout(() => {
                                this.velocity = {
                                    x: -100, y: 100
                                }
                                this.setFlightPattern()
                            }, 200)
                        }, 200)
                    }, 200)
                }, 200)
            }, 1000)

        }, 1000)
       
        
    }

    sign(num){
        if(num < 0 ){
            return -1
        }else if(num > 0){
            return 1
        }else{
            return 0
        }
    }

    updateLocation(){
        this.location = {
            x: this.location.x + this.velocity.x * 0.01,
            y: this.location.y + this.velocity.y * 0.01
        }
        if(this.location.x >= 580 || this.location.x <= 0){
            this.velocity.x = -1 * this.velocity.x
        }
    }






    draw(ctx){ 
        ctx.drawImage(this.img, this.location.x, this.location.y, this.size.x, this.size.y)
    }

    

}