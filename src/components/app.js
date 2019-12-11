class App{

    constructor(){
        this.projectiles = []
        this.initBindingsAndEventListeners()
        this.beginTravel()
    }

    initBindingsAndEventListeners(){
        this.canvas = document.querySelector('#canvas')
        this.ctx = canvas.getContext('2d')
        this.img = document.querySelector('#circle')

        this.canvas.addEventListener('click', this.handleCanvasClick.bind(this))


    }

    addProjectile(location, velocity = {x: 30, y: 60}){
        this.projectiles.push(new Projectile(this.img, location, velocity))
    }

    handleCanvasClick(e){
        for(let p of this.projectiles){
            p.velocity = {...p.velocity, x: -1 * p.velocity.x}
        }
    }


    beginTravel(){
        this.interval = setInterval(() => {
            this.ctx.fillRect(0,0, 600,600)
            for(let p of this.projectiles){
                p.updateLocation()
                p.draw(this.ctx)
                const newProjectiles = this.projectiles.filter(p => p.location.y < 600)
                const lostProjectiles = this.projectiles.length - newProjectiles.length
                this.projectiles = newProjectiles
                for(let i = 0; i < lostProjectiles; i++){
                    this.addProjectile({x: 10, y: 50})
                }
                
            }
        }, 10)
    }


    render(){


    }

}