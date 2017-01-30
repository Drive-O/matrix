window.onload = () => {
  const c = document.querySelector("#container");
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const letterSize = 12;
  const columns = c.width/letterSize;

  let textTo = "0";
  textTo = textTo.split("");
  let textTo2 = "1";
  textTo2 = textTo2.split("");

  let letters = [];
  for(let i=0; i<columns; i++){
    letters[i] = 1;
  }

  context = c.getContext("2d");

  const draw = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, c.width, c.height);
    context.fillStyle= "#0f0";
    context.font= letterSize+"px arial";

    for(let i=0; i<letters.length; i++){
      text=textTo;
      text2=textTo2;

      if(i%2==1){
        context.fillText(text, i*letterSize, letters[i]*letterSize);
      }else{
        context.fillText(text2, i*letterSize, letters[i]*letterSize);
      }

      if(letters[i]*letterSize > c.height && Math.random()>0.975){
        letters[i]=0;
      }
      letters[i]++;
    }
  }
  setInterval(draw, 120);
}
