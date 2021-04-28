document.onmousemove=handleMouseMove;


function handleMouseMove(e){
  const height=window.innerHeight;
  const width=window.innerWidth;
  
  const yaxisDeg=e.pageX/width*40-20;
  const xaxisDeg=e.pageY/height*-1*40+20;
  
  e.target.style.transform=`rotateY(${yaxisDeg}deg) rotateX(${xaxisDeg}deg)`;
  
  setSheenPosition(e.pageX/width,e.pageY/width);
  
}
function setSheenPosition(xRatio,yRatio){
  const xOffset=1-(xRatio-0.5)*800;
  const yOffset= 1-(yRatio-0.5)*800;
   style.setProperty('--sheenX',`${xOffset}px`);
  style.setProperty('--sheenY',`${yOffset}px`);
  
}