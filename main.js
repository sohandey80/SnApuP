function preload()
{

}
function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(450,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";


}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
   // Grayscale integer value
strokeWeight(4);
stroke(51);
rect(20, 20, 60, 60);
describe('White rect at center with dark charcoal grey outline.');
}
function take_snapshot()
{
    save("rcb.png");
}
