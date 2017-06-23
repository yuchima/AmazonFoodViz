 //0   1       2          3             4               5                    6        7    8    9        //Id,ProductId,UserId,ProfileName,HelpfulnessNumerator,HelpfulnessDenominator,Score,Time,Summary,Text

 var table, id, pid, uid, pname, total, n, d, score, t, s, txt, sco,sum;
 var scoreF = [];
  var sco = [];
  var y2 = 800;
  var y = 800;
    var limit = 800;
  var l = [];
  var pi = [];
  var ratio = [];
  var increase = 40; 

  var lines = 260;
  var shorts = 240; 

 function preload() {
   table = loadTable("assets/Reviews.csv", "csv", "header");
 }

 function setup() {
  // colorMode(HSB)

   
   createCanvas(2000,1600);
   background(0);
   
   noFill();
   stroke(210,40);
   strokeWeight(1);
   for(var i =0; i<40; i++){
      arc(800,800,800,y2, 0,PI);
      arc(800,800,800,y2, PI,0);
     
    if(y2>800){
      y2 += 40;
    }else {
      y2 -= 40;
    }
    
   }
   
   
   id = table.getColumn(0);

   total = table.getRowCount();
   uid = table.getColumn(2);
   n = table.getColumn(4);
   d = table.getColumn(5);
   score = table.getColumn(6);
   txt = table.getColumn(9);
   sum = table.getColumn(8);
   stroke(30);
   text("Summaries", 1300, 360);


  for(var i=0; i<total; i++){
    // console.log(id[i]);
    if(id[i]<lines&&id[i]>shorts){
    l[i] = txt[i].length;
    pi[i] = map(l[i], 0, 1000, 2*PI,0);
    
    ratio[i] = n[i]/(d[i]+1); 
    console.log(ratio[i]);
    // console.log(l);
    scoreF[i] = float(score[i]);
    sco[i] = map(scoreF[i], 1, 5 , 0, 255);
    // console.log(sco[i]);
    
    noFill();
    stroke(200,100,2*sco[i]/3,60);
    strokeWeight(3);
    arc(800,800,800,y, 0,pi[i]);
    // arc(800,800,800,y, pi[i],0);

    if(y>limit){
      y += increase;
    }else {
      y -= increase;
    }
    stroke(120);
    strokeWeight(1);
    // text(sum[i], 800, 2*y/3+400);
    
    text(sum[i], 1300, y/2+400);

    // textAlign(CENTER);
  }
}
 }



 function draw() {

 }