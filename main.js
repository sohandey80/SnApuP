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
    stroke(255, 204, 0);
strokeWeight(4);

}
function take_snapshot()
{
    save("rcb.png");
}
