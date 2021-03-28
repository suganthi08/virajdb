var car;
var database,pos;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    car = createSprite(250,250,10,10);
    car.shapeColor = "red";

    var readRef = database.ref("car/position");
    readRef.on("value", readData);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   
var writeRef = database.ref ("car/position");
writeRef.set({
x : car.x + x,
y : car.y + y
})

}

function readData(data){
pos = data.val()

car.x = pos.x;
car.y = pos.y;

}
