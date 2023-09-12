function setup() {
  createCanvas(800,630);
   background(210,212,209);
  //bottom to top tan color
  strokeWeight(0)
  fill(237,232,212)
  quad(0,465,800,477,800,630,0,630)
  quad(258,33,800,69,800,193,369,280)
  quad(562,0,800,0,800,45,562,13)
}

function draw() {
  
  //thick background lines
  strokeWeight(15)
  stroke(181,158,142)
  line(372,635,800,375)
  line(777,635,810,608)
  line(0,566,805,255)
   fill(150,140,140)
  strokeWeight(13)
  line(0,396,800,190)
  strokeWeight(10)
  line(0,295,800,150)
  //weird thick background line
  strokeWeight(15)
  line(620,0,635,133)
  strokeWeight(23)
  line(631,133,551,0)
  
    //light gray background lines_bottom to top
  strokeWeight(1)
  stroke(162,162,160)
  line(0,372,358,476)
  line(0,246,800,450)
  //i move the next line a bit bc apparently theyre curved >_<
  line(0,221,357,315)
  line(82,230,800,393)
  
  
    //orange diamonds left to right
  strokeWeight(0)
  fill(243,102,39)
  triangle(95,0,163,0,124,63)
  beginShape(TESS)
  vertex(498,0)
  vertex(544,0)
  vertex(566,29)
  vertex(514,81)
  vertex(473,25)
  endShape(CLOSE)
  
      //big blue blocks
  strokeWeight(0)
  fill(31,95,160)
  quad(0,273,800,300,800,311,0,302)
  quad(312,255,517,265,267,330,143,331)
  
     //red bubble lines
  strokeWeight(17)
  stroke(222,37,39)
  line(271,253,306,253)
  line(309,254,334,251)

  //beak lines
  stroke(1)
  strokeWeight(2)
  fill(4,4,5)
  //top line
  line(108,429,311,469)
  line(311,469,548,401)
  //middle line
  line(119,506,309,554)
  line(309,554,528,480)
  //bottom line
  line(124,551,315,610)
  line(315,610,540,537)
  //intersecting top line
  line(356,373,615,477)
  line(615,477,797,394)
  
  //overlaying squonky rectangular lines
  line(120,181,349,193)
  line(349,193,350,198)
  line(350,198,121,197)
  line(121,197,120,181)
  //the one to the right
  line(384,197,544,189)
  line(583,178,783,179)
  line(783,179,782,191)
  line(782,191,410,211)
  line(410,211,384,197)
  
  // banner flags. right to left (black)
  fill(2,4,3)
  quad(737,300,798,306,797,370,747,361)
  quad(579,273,640,285,623,332,596,325)
  quad(465,250,507,260,495,298,471,292)
  quad(377,230,410,239,399,272,383,265)
  quad(304,213,329,217,320,245,308,241)
  quad(244,195,264,200,260,223,248,220)
  quad(198,180,212,184,208,201,202,201)
  quad(159,169,172,172,166,187,160,183)
  quad(132,157,140,160,136,173,132,173)
  triangle(107,147,116,149,109,162)
  triangle(86,138,92,141,88,153)
  
  //banner flags_right to left_yellow
  fill(255,200,21)
  strokeWeight(0)
  quad(650,285,726,297,708,351,666,341)
  quad(512,259,572,272,551,314,523,305)
  quad(414,238,458,249,444,283,419,277)
  quad(335,219,366,227,356,256,340,249)
  quad(274,203,294,210,288,233,277,229)
  quad(220,186,236,190,232,213,226,209)
  quad(175,172,190,176,186,194,177,192)
  quad(145,160,155,166,148,181,146,181)
  quad(119,149,129,156,124,168,120,169)
  triangle(96,142,105,145,100,161)
  triangle(78,133,84,137,78,149)
  
  
}