var cnv;
let imgs = []; // array of images
let n=8; //number of images
let x =280;  // standard x coor value of images
let y=300;  // standard y coor value of images
let btnY = 50; //standard y coor value of buttons
let a =220; // side of images (square)
var btns; // array of all buttons

function preload()
{
  for (let i=0;i<n;i++)
  {
    imgs[i]=loadImage(links[i]); // filling imgs with images
  }
}

function setup()
{
  cnv = createCanvas(1070, 520); // canvas
  cnv.position(20,130)
  background(255);
  //cnv.mouseOver(mouseCoor)
}

function draw()
{
  background(255); // clearing canvas
  mouseCoor();   // mouse check
  // drawing images on canvas
  for (let i=0;i<btns.length;i++)
  {
      if($(btns[i]).hasClass("on"))
      {
        let xcor = (i%4)*x; // x coor of images
        let ycor = int(i/4)*y;  // y coor of images
        image(imgs[i],xcor,ycor,a+10,a);
      }
  }
}

$(document).ready(function()
{
  btns= document.querySelectorAll("button"); // getting all buttons
  setButton(); // setting coor & stuff
  $("button").on("click",function() // toggling btw on & off
   {
     if($(this).hasClass("on"))
     {
       $(this).removeClass("on")
     }
     else
     {
       $(this).addClass("on")
     }
   });
});

function setButton()
{
  $("button").css("font-size", "30px");
  $("button").css("position", "absolute");
  $("button").css("right", "20px");
  $("button").addClass("on");

  for (let i=0;i<btns.length;i++) //setting y coordinate of buttons
  {
    $(btns[i]).css("top", btnY*i + 180);
  }
}

function mouseCoor()
{
  if(mouseX>0 & mouseY>0 & mouseX<cnv.width & mouseY<height)
  {
    let numbX; // x coordinate number for the images
    let numbY  // y coordinate number for the images

    numbX = int(mouseX/x);
    if(mouseX<(numbX*x)+a) // satisfies x constraints
    {
      if(mouseY<a)
      {
        cursor(HAND); // satisfies first row y coords
        return numbX;
      }
      if(mouseY>y)     // satisfies second row y coords
      {
        cursor(HAND);
        return numbX + 4;
      }
    }
  }
  cursor(ARROW);
  return -1;
}

function mousePressed()
{
  let index=mouseCoor();
  if(index!=-1)
  {
    $(btns[index]).removeClass("on")
  }
}
