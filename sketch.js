
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ninjaAnimationRun,ninjaAnimationAttack,ninjaAnimationJump,ninjaAnimationDead,ninjaAnimationIdle;
var  zombieAnimation;

var ninja;

function preload()
{
//	ninjaAnimationRun = loadAnimation("ninja/Run_000.png", "ninja/Run_001.png", "ninja/Run_002.png", "ninja/Run_003.png",
//	 "ninja/Run_004.png", "ninja/Run_005.png", "ninja/Run_006.png", "ninja/Run_007.png", "ninja/Run_008.png", "ninja/Run_009.png");

//	ninjaAnimationAttack = loadAnimation("ninja/Attack_001", "ninja/Attack_002", "ninja/Attack_003",
	// "ninja/Attack_004", "ninja/Attack_005", "ninja/Attack_006", "ninja/Attack_007", "ninja/Attack_008",
	 // "ninja/Attack_009");

	 // ninjaAnimationJump = loadAnimation("ninja/Jump_000", "ninja/Jump_001", "ninja/Jump_002", "ninja/Jump_003", 
	  //"ninja/Jump_004", "ninja/Jump_005", "ninja/Jump_006", "ninja/Jump_007", "ninja/Jump_008", "ninja/Jump_009", );

	//  ninjaAnimationIdle = loadAnimation();
//var nin = loadImage("ninja/Attack_000.png");

}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//var ninja = new Ninja(100,100,20,20);

	ninja = createSprite(100,displayHeight/2,20,20);
	//ninja.addAnimation("n_run",ninjaAnimationRun);
	//ninja.addImage("ninimg",nin);


	Engine.run(engine);
  
}


function draw() {
  
  background("black");
 // NINJA.display();
  drawSprites();
 
}



