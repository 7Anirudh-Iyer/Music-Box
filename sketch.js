var c,d,e,f,g,a,b
var ww,wh
var box
var plg
var nc,nd,ne,nf,ng,na,nb,nc1

function preload(){
   d=loadSound("D.mp3")
   c=loadSound("C.mp3")
   e=loadSound("E.mp3")
   f=loadSound("F.mp3")
   g=loadSound("G.mp3")
   a=loadSound("A.mp3")
   b=loadSound("B.mp3")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    ww=windowWidth
    wh=windowHeight

    box=createSprite(ww/4,wh/2,ww/4,ww/4)
    nc=createSprite(box.x,box.y-box.height/4,ww/7,ww/100)
    nd=createSprite(box.x,nc.y+nc.height*2,ww/7,ww/100)
    ne=createSprite(box.x,nd.y+nd.height*2,ww/7,ww/100)
    nf=createSprite(box.x,ne.y+ne.height*2,ww/7,ww/100)
    ng=createSprite(box.x,nf.y+nf.height*2,ww/7,ww/100)
    na=createSprite(box.x,ng.y+ng.height*2,ww/7,ww/100)
    nb=createSprite(box.x,na.y+na.height*2,ww/7,ww/100)

    plg=new Group()

}
function draw(){
    background(0)

    box.shapeColor=(25)
    nc.shapeColor="red"
    nd.shapeColor="orange"
    ne.shapeColor="yellow"
    nf.shapeColor="green"
    ng.shapeColor="blue"
    na.shapeColor="indigo"
    nb.shapeColor="violet"

    if(plg.collide(nc)){
        c.play()
        plg.destroyEach()
    }
    if(plg.collide(nd)){
        d.play()
        plg.destroyEach()
    }
    if(plg.collide(ne)){
        e.play()
        plg.destroyEach()
    }
    if(plg.collide(nf)){
        f.play()
        plg.destroyEach()
    }
    if(plg.collide(ng)){
        g.play()
        plg.destroyEach()
    }
    if(plg.collide(na)){
        a.play()
        plg.destroyEach()
    }
    if(plg.collide(nb)){
        b.play()
        plg.destroyEach()
    }
    if(plg.x<0){
        plg.destroyEach()
    }



    drawSprites()
hit()
 
}

function hit(){
    if(frameCount%10===0){
        var whack=createSprite(ww,random(wh/4,wh/1.5),ww/100,ww/100)
        whack.velocityX=-100
        whack.shapeColor="white"

        plg.add(whack)
    }
}
