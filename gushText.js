console.log(text1);
;(function(txt){
    var Canvas = {};
    Canvas.anim = {
        //初始化
        init: function() {
            var canvas = document.getElementById('text-canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.ctx = canvas.getContext('2d');
            this.cw = canvas.width;
            this.ch = canvas.height;
            this.particles = [];
            this.letters = txt;
        },
        //执行动画
        render: function() {
            //显示位置 
            var particle = {
                x: this.cw / 2,
                y: this.ch,
                character: this.letters[Math.floor(Math.random() * this.letters.length)],
                xSpeed: (Math.random() * 10) - 5,
                ySpeed: (Math.random() * 10) - 5,
                color: [155, 100, 50, .7]
            }
            this.particles.push(particle);
            this.drawparticles();
        },
        //绘制字母
        drawparticles: function() {
            this.fadeCanvas()
            var particleCount = this.particles.length;
            for (var i = 0; i < particleCount; i++) {
                var particle = this.particles[i];
                var h = particle.color[0],
                    s = particle.color[1] + '%',
                    l = particle.color[2] + '%',
                    a = particle.color[3];
                var hsla = `hsla(${h},${s},${l},${a})`
                this.ctx.font = '18px sans-serif';
                this.ctx.fillStyle = hsla; //字体颜色

                this.ctx.fillText(particle.character, particle.x, particle.y); //字体属性
                particle.x += particle.xSpeed
                particle.y += particle.ySpeed
                particle.y *= 0.98;
                particle.color[2] *= 0.99;
                particle.color[0] += 1;
                if (particle.color[0] > 253) {
                    particle.color[2] = 0;
                }
            }
        },
        //先清除画布
        fadeCanvas: function() {
            this.ctx.fillStyle = 'rgba(0,0,0,.5)'
            this.ctx.fillRect(0, 0, this.cw, this.ch);
        }
    }
    Canvas.anim.init();
    Canvas.anim.render();
    setInterval(function() {
        Canvas.anim.render();
    }, 90)
    // window.onresize = function() {
    //     Canvas.anim.init();
    // }
})(text1);


