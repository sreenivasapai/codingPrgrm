function area_circle(radius){
    return 3.14*radius*radius;
}
function area_rectangle(length, width){
    return length*width;
}
function area_triangle(base, height){
    return 0.5*base*height;
}

module.exports = { area_circle, area_rectangle, area_triangle };