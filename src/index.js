import React from 'react';
import ReactDOM from 'react-dom';
import MathJax from 'react-mathjax';
import Sketch from 'react-p5';

import './index.css';
import planetEarth from './planet-earth.svg';
import emTraj from './traj-6.gif';
import chaotic3bp from './Three-body_Problem_Animation_with_COM.gif';
import pseudoPEGraph from './psuedo.png';
import hohmann from './hohmann-transfer.png';

import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const mu = `\\mu=\\frac{m_2}{m^*}=\\frac{m_2}{m_1+m_2}`;
const pcr3bp_model = `\\ddot { x } - 2 \\dot { y } = \\Omega _ { x } , \\quad \\ddot { y } + 2 \\dot { x } = \\Omega _ { y }, \\\\ \\quad \\text  { where } \\quad \\Omega = \\frac { x ^ { 2 } + y ^{2}}{2} + \\frac { 1 - \\mu } { r _ { 1 } } + \\frac { \\mu } { r _ { 2 } } + \\frac { \\mu ( 1 - \\mu ) } { 2 }`;
const rotating_frame_equation = `\\begin{array} { l } { \\ddot { x } - 2 \\dot { y } - x = - \\frac { ( 1 - \\mu ) ( x + \\mu ) } { d ^ { 3 } } - \\frac { \\mu ( x - 1 + \\mu ) } { r ^ { 3 } } } \\\\ { \\ddot { y } + 2 \\dot { x } - y = - \\frac { ( 1 - \\mu ) y } { d ^ { 3 } } - \\frac { \\mu y } { r ^ { 3 } } } \\\\ { \\ddot { z } = - \\frac { ( 1 - \\mu ) z } { d ^ { 3 } } - \\frac { \\mu z } { r ^ { 3 } } } \\end{array}`;
const forceAsGradientOfPE = `\\vec{ F } = - \\nabla \\Omega`;
const pseudoPE = `\\Omega * = \\frac { 1 - \\mu } { d } + \\frac { \\mu } { r } + \\frac { x ^ { 2 } + y ^ { 2 } } { 2 }`;
const nonDim_equation = ` \\begin{array} { l } { \\vec { \\rho } = \\frac { \\vec { r } _ { 3 } } { l * } = x \\hat { x } + y \\hat { y } + z \\hat { z } } \\\\ { \\vec { d } = \\frac { \\vec { r } _ { 13 } } { l _ { 4 } } = x + \\mu \\hat { x } + y \\hat { y } + z \\hat { z } } \\\\ { \\vec { r } = \\frac { \\vec { r } _ { 23 } } { l _ { * } } = x - 1 + \\mu \\hat { x } + y \\hat { y } + z \\hat { z } } \\end{array}`;
const r1r2_distance = `|\\vec {r2}| = \\mu  {l ^ *}, \\ |\\vec{r1}| = (1 - \\mu) {l ^ *}`;
const kinematicTransportTh = `\\frac{dp}{dt}^{\\omega} = ^I\\frac{dp}{dt} + \\omega \\times p`;
const rhodotdot = `^I\\ddot{\\vec{\\rho}}= (\\ddot{x}-2y-x)\\hat{x}+(\\ddot{y}+2\\dot{x}-y)\\hat{y}+\\ddot{z}\\hat{z}`;
const tau = `\\tau = \\frac{t}{t ^ *}`;
const F13 = `\\vec{F}_{13} =-\\frac{\\tilde{G}m_3m_1}{r_{13}^3} \\vec{r_{13}}`;
const F23 = ` \\vec{F}_{23} =-\\frac{\\tilde{G}m_3m_2}{r_{23}^3} \\vec{r_{23}}`;
const F3 = ` \\vec{F}_{3} =  m_3 \\vec{\\ddot{r_3}} = \\frac{-Gm_1m_3\\vec{r_{13}}}{|r_{13}|^3}-\\frac{Gm_2m_3\\vec{r_{23}}}{|r_{23} |^3}`;

const NondimRhodotdot = `\\ddot{\\vec{\\rho}}=-\\frac{1-\\mu}{d^3}\\vec{d}- \\frac{\\mu}{r^3}\\vec{3}`;









function Intro(props) {
return (
  <div className="white-box">
    <p>Traditional <b className="hi-text">Hohmann Method</b> for Earth Moon Transfer</p>
    <img src={hohmann} height="300px" width="300px" alt="./hohmann-transfer.png"/>

    <iframe title="Hohmann" width="560" height="315"
            src="https://www.youtube.com/embed/pFq3_ZCHA4E"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
    </iframe>

  </div>
);
}

function Intro2(props) {
  return (
    <div className="white-box">
      <p>New Method Utillize the Pertubation of Sun</p>
      <p>Use Sum-Earth and Earth-Moon, two <b className="hi-text">3-body systems</b></p>

    </div>

  );
}

function ThreeBodyContext(props) {
  return (
    <div className="dark-box">
      <h4>3 Body Problem</h4>
      <p>- Three bodies
         <br/>
         - Known masses
         <br/>
         - Only interact gravitatinally
      </p>
      <p className="hi-text"> - 3 body problem are chaotic,
         <br/> cannot be solved analytically</p>
      <img src={chaotic3bp} alt="./Three-body_Problem_Animation_with_COM.gif"/>
    </div>
  );
}

function PCThreeBody(props) {
  return (
   <div className="white-box">
    <h4>Planar Constrained 3 Body Problem</h4>
    <p>Add constrains to make it easier to work with</p>
    <p>- Three bodies
       <br/>
       - Known masses
       <br/>
       - Only interact gravitatinally
       <br/>
      <span className="hi-text">- m1, m2 >> m3</span>
       <br/>
      <span className="hi-text">- circular, or small eccentricity</span>

    </p>

   </div>
 );

}

function EarthMoonTrajectory(props) {
  return (
   <div className="dark-box">
    <img src={emTraj} height="500px" width="700px" alt="./traj-6.gif"/>
   </div>
 );

}


function BaryCenter(props) {
  let angle;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.rectMode(p5.CENTER);
    angle = 0;
  };

  const draw = (p5)=>{
    p5.background(0);

    p5.translate(p5.width / 2, p5.height / 2);
    p5.push();
      p5.rotate(angle);
      p5.ellipse(-80, -50, 200, 200);
      p5.ellipse(90, 90, 50, 50);

    p5.pop();

    p5.rect(0, -1, 2, 30);
    p5.rect(-1, 0, 30, 2);


    p5.push();
    p5.rotate(p5.sin(p5.frameCout * 1) * p5.HALF_PI);
    p5.pop();
    angle = angle - p5.TWO_PI / 300;

  }

  return (
   <div className="white-box">
    <h4>Moon-Earth Barycenter</h4>
    <Sketch setup={setup} draw={draw}/>
   </div>
  );

}

function RotatingFrameDigram(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5)=>{
    //p5.background(//);
    // inertial reference frame
    const [earthx, earthy] = [400, 100];
    const [moonx, moony] = [100, 400];
    const [satex, satey] = [250, 100];
    const showRotatingFrame = [5, 5];
    const showRVecs = [450, 5];
    const showArc = [450, 450];

    p5.push();
    p5.noStroke();
    p5.fill("#09d3ac");
    p5.ellipse(showRotatingFrame[0], showRotatingFrame[1], 10, 10);
    p5.ellipse(showRVecs[0], showRVecs[1], 10, 10);
    p5.ellipse(showArc[0], showArc[1], 10, 10);
    p5.pop();

    p5.push();
    p5.strokeWeight(6);
    p5.fill("#09d3ac");
    p5.line(200, 80, 200, 900);
    p5.line(0, 300, 430, 300);
    p5.pop();


    if (Math.abs(p5.mouseX - showRotatingFrame[0]) < 3 &&
        Math.abs(p5.mouseY - showRotatingFrame[1]) < 3) {
      // rotating reference frame
      p5.push();
      p5.strokeWeight(2);
      p5.stroke("#09d3ac");
      p5.line(430, 70, 50, 450);

      p5.textSize(20);
      p5.fill("#09d3ac");
      p5.text('R1', 170, 320);
      p5.text('R2', 300, 220);
      p5.text('X\'', 435, 60);
      p5.text('Y\'', 25, 120);
      p5.pop();

    }


    if (Math.abs(p5.mouseX - showRVecs[0]) < 3 &&
        Math.abs(p5.mouseY - showRVecs[1]) < 3) {
      //r vectors
      p5.push();

      p5.stroke("#75d3f0");
      p5.strokeWeight(2);
      p5.line(earthx, earthy, satex, satey);
      p5.line(moonx, moony, satex, satey);
      p5.line(200, 300, satex, satey);

      p5.textSize(25);
      p5.fill("#75d3f0");
      p5.text('R13', 120, 290);
      p5.text('R3', 230, 200);
      p5.text('R23', satex + 30, satey);

      p5.pop();

    }

    if (Math.abs(p5.mouseX - showArc[0]) < 3 &&
        Math.abs(p5.mouseY - showArc[1]) < 3) {
      p5.push();
      p5.stroke("#09d3ac");
      p5.noFill();
      p5.strokeWeight(5);
      p5.arc(200, 300, 150, 150, -0.75, 0);
      p5.textSize(35);
      p5.text('ω', 230, 280);
      p5.pop();

    }


    p5.push();
    // ball
    p5.fill("#09d3ac");
    p5.ellipse(earthx, earthy, 30, 30); // Earth
    p5.ellipse(moonx, moony, 70, 70); // Moon

    p5.fill("#282c34");
    p5.ellipse(satex, satey, 20, 20); // Satellite
    p5.pop();


    //text
    p5.push();
    p5.fill("#282c34");
    p5.textSize(18);
    p5.text('P2 (Moon)', 380, 80);
    p5.text('P1 (Earth)', 100, 350);
    p5.text('P3 (Satellite)', 250, 80);

    p5.textSize(20);
    p5.text('X', 440, 300);
    p5.text('Y', 200, 70);
    p5.pop();




  }

  return (
   <div className="white-box">
    <h4> Rotating frame of reference </h4>
    <Sketch setup={setup} draw={draw}/>
   </div>
 );

}

function SomeVarDefines(props) {
  return (
   <div className="dark-box">
     <h4>Define some variables for convenience</h4>
     <MathJax.Provider>
       <p className="white-text"> The ratio of second mass with total mass
                                 <b className="hi-text" > m*</b></p>
       <MathJax.Node formula={mu}  / >
       <p className="white-text"> |r1| + |r2| =
                                 <b className="hi-text" > l*</b>, so
       </p>
       <MathJax.Node formula={r1r2_distance}  / >
     </MathJax.Provider>

   </div>
 );
}

function NonDimVectorsDefine(props) {
  return (
   <div className="white-box">
     <h4>Non-dimensionalize vector r3, r13, and r23</h4>
     <MathJax.Provider>
       <p className="white-text"> <b className="hi-text" >l* </b>
         is the constant length between the Earth and the Moon</p>
       <MathJax.Node formula={nonDim_equation}  / >
       <p text="white-text">Non dimensionalize time</p>
       <MathJax.Node formula={tau}  / >

     </MathJax.Provider>

   </div>
 );

}

function FictitiousForceAndKinematic(props) {
  return (
    <div className="white-box">
     <MathJax.Provider>
       <h4>Dealing with <b className="hi-text">fictitious force</b> in rotating reference frame
          <br/>
        when taking derivative</h4>
       <p></p>
       <p>Kinematic Transport Theorem (no detail :( )</p>
       <MathJax.Node formula={kinematicTransportTh}  / >
       <p>Apply it twice to rho we get</p>
       <MathJax.Node formula={rhodotdot}  / >
     </MathJax.Provider>
    </div>
  )
}

function AccOfr3(props) {
  return (
    <div className="white-box">
      <p>Apply Newton's second law, substitute back
        <br/>to non dimensionalize the force</p>
      <MathJax.Provider>
       <MathJax.Node formula={F13}  / >
       <MathJax.Node formula={F23}  / >
       <MathJax.Node formula={F3}  / >
        <p>We get</p>
       <MathJax.Node formula={NondimRhodotdot}  / >
     </MathJax.Provider>

    </div>
  );
}


function RotatinFrameEq(props) {
  return (
   <div className="dark-box">

     <h4>Define the equation of motion in <b className="hi-text">rotating frame</b></h4>
     <p>Note z is uncoupled from x and y,
        <br/>
      we can ignore it if we only simulate planar motion</p>
     <MathJax.Provider>
       <MathJax.Node formula={rotating_frame_equation}  / >
     </MathJax.Provider>

   </div>
 );

}

function PseudoPotentialEnergy(props) {
  return (
   <div className="white-box">
     <h4>Gravitational Potential</h4>
     <p className="dark-text">Force as the gradient of potential</p>
     <MathJax.Provider>
       <MathJax.Node formula={forceAsGradientOfPE}  / >
     </MathJax.Provider>

     <p className="dark-text">Define the <b className="hi-text">pseudo potential</b> in rotating frame</p>
     <p className="dark-text"></p>
     <MathJax.Provider>
       <MathJax.Node formula={pseudoPE}  / >
     </MathJax.Provider>

   </div>
 );

}

function PseudoPEGraph(props) {
  return (
   <div className="white-box">
    <h4>Shape of Ω</h4>
    <img src={pseudoPEGraph} height="500px" width="700px" alt="./traj-6.gif"/>
   </div>

  );
}

function PCR3BP(props) {
  return (
    <div className="dark-box">
      <h4 >Rewrite the equation of motion with pseudo potential</h4>

      <MathJax.Provider>
        <MathJax.Node formula={pcr3bp_model}  / >
      </MathJax.Provider>

    </div>
  );
}


class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="dark-box">
          <img src={planetEarth}  height="200px" width="200px" alt="title"/>
          <h3 >Low Energy Earth Transfer to <b className="hi-text">the Moon</b></h3>
        </div>

        {/* Intro of the presentation. Motivation, */}
        <Intro/>
        <Intro2/>

        <ThreeBodyContext/>

        <PCThreeBody/>
        {/* Intro PCR3BP problem */}
        <EarthMoonTrajectory/>
        <BaryCenter/>
        <RotatingFrameDigram/>
        <SomeVarDefines/>
        <NonDimVectorsDefine/>
        <FictitiousForceAndKinematic/>
        <AccOfr3/>
        <RotatinFrameEq/>
        <PseudoPotentialEnergy/>
        <PseudoPEGraph/>
        <PCR3BP/>
      </div>
    );
  }
}


ReactDOM.render(<Board />, document.getElementById('root'));
serviceWorker.unregister();

