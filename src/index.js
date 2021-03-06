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
import earthMoonXY from './EarthMoonXY.png';
import xyMu from './xyMu.gif';
import xzMu from './xzMu.gif';
import lagrangeRotation from './LagrangeRotatingEM-2.gif';
import lagrangeP from './lagrange.gif';
import lowETrajectory from './loweneryTrajectory.png';
import tracedet from './tracedet.png';
import forbbiden1 from './icZVC.png';
import forbbiden2 from './ZCVL0L11.gif';
import forbbiden3 from './trajSwingW1.gif';
import hiten from './hiten.jpeg';

import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const mu = `\\mu=\\frac{m_2}{m^*}=\\frac{m_2}{m_1+m_2}`;
const pcr3bp_model = `\\ddot { x }  = 2 \\dot { y } + \\Omega _ { x },\\\\ \\ddot{ y }  = - 2 \\dot { x } + \\Omega _ { y } ,\\\\ \\ddot {z} = \\Omega_z, \\\\ \\text  { where } \\quad \\Omega = \\frac { x ^ { 2 } + y ^{2}}{2} + \\frac { 1 - \\mu } { d } + \\frac { \\mu } { r }`;
const rotating_frame_equation = `\\begin{array} { l } { \\ddot { x } - 2 \\dot { y } - x = - \\frac { ( 1 - \\mu ) ( x + \\mu ) } { d ^ { 3 } } - \\frac { \\mu ( x - 1 + \\mu ) } { r ^ { 3 } } } \\\\ { \\ddot { y } + 2 \\dot { x } - y = - \\frac { ( 1 - \\mu ) y } { d ^ { 3 } } - \\frac { \\mu y } { r ^ { 3 } } } \\\\ { \\ddot { z } = - \\frac { ( 1 - \\mu ) z } { d ^ { 3 } } - \\frac { \\mu z } { r ^ { 3 } } } \\end{array}`;
const forceAsGradientOfPE = `\\vec{ F } = - \\nabla \\Omega`;
const pseudoPE = `\\Omega = \\frac { 1 - \\mu } { d } + \\frac { \\mu } { r } + \\frac { x ^ { 2 } + y ^ { 2 } } { 2 }`;
const nonDim_equation = ` \\begin{array} { l } { \\vec { \\rho } = \\frac { \\vec { r } _ { 3 } } { l * } = x \\hat { x } + y \\hat { y } + z \\hat { z } } \\\\ { \\vec { d } = \\frac { \\vec { r } _ { 13 } } { l _ { 4 } } = x + \\mu \\hat { x } + y \\hat { y } + z \\hat { z } } \\\\ { \\vec { r } = \\frac { \\vec { r } _ { 23 } } { l _ { * } } = x - 1 + \\mu \\hat { x } + y \\hat { y } + z \\hat { z } } \\end{array}`;
const r1r2_distance = `|\\vec {r2}| = \\mu  {l ^ *}, \\ |\\vec{r1}| = (1 - \\mu) {l ^ *}`;
const kinematicTransportTh = `\\frac{dp}{dt}^{\\omega} = ^I\\frac{dp}{dt} + \\omega \\times p`;
const rhodotdot = `^I\\ddot{\\vec{\\rho}}= (\\ddot{x}-2y-x)\\hat{x}+(\\ddot{y}+2\\dot{x}-y)\\hat{y}+\\ddot{z}\\hat{z}`;
const tau = `\\tau = \\frac{t}{t ^ *}`;
const F13 = `\\vec{F}_{13} =-\\frac{\\tilde{G}m_3m_1}{r_{13}^3} \\vec{r_{13}}`;
const F23 = ` \\vec{F}_{23} =-\\frac{\\tilde{G}m_3m_2}{r_{23}^3} \\vec{r_{23}}`;
const F3 = ` \\vec{F}_{3} =  m_3 \\vec{\\ddot{r_3}} = \\frac{-Gm_1m_3\\vec{r_{13}}}{|r_{13}|^3}-\\frac{Gm_2m_3\\vec{r_{23}}}{|r_{23} |^3}`;
const NondimRhodotdot = `\\ddot{\\vec{\\rho}}=-\\frac{1-\\mu}{d^3}\\vec{d}- \\frac{\\mu}{r^3}\\vec{r}`;
const Energy = `E = \\frac { 1 } { 2 } \\left( \\dot { x } ^ { 2 } + \\dot { y } ^ { 2 } \\right) - \\Omega ( x , y )`;
const SumAccAndVelocity = `\\dot{x}\\ddot{x}+\\dot{y}\\ddot{y}+\\dot{z}\\ddot{z}= \\Omega_x\\dot{x}+ \\Omega_y\\dot{y}+ \\Omega_z\\dot{z}`;
const IntWithTau = `\\frac{1}{2}(\\dot{x}^2+\\dot{y}^2+\\dot{z}^2) = \\Omega-\\frac{J}{2}`;
const Jacobi = `J = 2\\Omega - v ^ 2`;
const zdd = `\\ddot{z}=-\\frac{(1-\\mu)z}{d^3}-\\frac{\\mu z}{r^3}=\\Omega_z`;
const v2 = `\\dot{x}^2+\\dot{y}^2+\\dot{z}^2 = |\\vec{V}|^2 = v^2`;
const xddeq0 = `0 = \\frac{(1-\\mu)(x+\\mu)}{d^3}- \\frac{\\mu(x-1+\\mu)}{r^3} = \\Omega_x`;
const yddeq0 = `0 = \\frac{(1-\\mu)y}{d^3}- \\frac{\\mu y}{r^3}= \\Omega_y`;
const zddeq0 = `0 = \\frac{(1-\\mu)z}{d^3}- \\frac{\\mu z}{r^3}= \\Omega_z`;
const vectuple6 = `[x,y,z,\\dot{x},\\dot{y},\\dot{z}]`;
const vectuple4 = `[x,y,\\dot{x},\\dot{y}]`;

const pertx = `x = x_{L_i} + \\xi`;
const perty = `y = y_{L_i} + \\eta`;
const ddxi = `\\ddot{\\xi}-2\\dot{\\eta}= \\Omega_{xx}\\xi+\\Omega_{xy}\\eta`;
const ddeta = `\\ddot{\\eta}+2\\dot{\\xi} = \\Omega_{xy}\\xi+\\Omega_{yy}\\eta`;

const omegaxx = `\\Omega_{xx}= 1-\\frac{1-\\mu}{d^3}-\\frac{\\mu}{r^3}+\\frac{3(1-\\mu)(x+\\mu)^2}{d^5}+\\frac{3\\mu(x-1+\\mu)^2}{r^5}`;
const omegayy = `\\Omega_{yy}= 1-\\frac{1-\\mu}{d^3}-\\frac{\\mu}{r^3}+\\frac{3(1-\\mu)y^2}{d^5}+\\frac{3\\mu y^2}{r^5}`;
const omegaxy = `\\Omega_{xy}= \\Omega_{yx}= \\frac{3(1-\\mu)(x+\\mu)y}{d^5}+\\frac{3\\mu(x-1+\\mu)y}{r^5}`;
const jacobian = `A = \\begin{bmatrix} 0&0&1&0\\\\ 0&0&0&1\\\\ \\Omega_{xx} & \\Omega_{xy} &0&2\\\\\\Omega_{xy} & \\Omega_{yy} &-2&0\\end{bmatrix}`;
const chareq = `\\lambda^4 + (4-\\Omega_{xx}-\\Omega_{yy}) \\lambda^2+ (\\Omega_{xx}\\Omega_{yy}-\\Omega_{xy}\\Omega_{yx})=0`;
const simplifiedchareq = `\\lambda ^2 + 2\\beta_1 \\Lambda - \\beta _2^2=0`;
const simcheqvars = `\\begin{array} { l } { \\beta _ { 1 } = 2 - \\frac { \\Omega _ { x x } + \\Omega _ { y y } } { 2 } } \\\\ { \\beta _ { 2 } ^ { 2 } = - \\Omega _ { x x } \\Omega _ { y y } + \\Omega _ { x y } \\Omega _ { y x } } \\\\ { \\lambda _ { 1,2 } = \\pm \\sqrt { \\Lambda _ { 1 } } } \\\\ { \\lambda _ { 3,4 } = \\pm \\sqrt { \\Lambda _ { 2 } } } \\end{array}`;
const colinearLambda = `\\Lambda_1 > 0, \\Lambda_2 < 0`;

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
       - Only interact gravitationally
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
      p5.fill("#09d3ac");
      p5.stroke("#09d3ac");
      p5.line(200, 300, 70, 150);
      p5.textSize(25);
      p5.text('Y\'', 25, 120);
      p5.noFill();
      p5.strokeWeight(5);
      p5.arc(200, 300, 150, 150, -0.75, 0);
      p5.textSize(35);
      p5.text('??', 230, 280);
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

function TrajectoryOnDifferentPlanes(props) {

return (
	<div className="white-box">
    <h4>
      Trajectory looks different under different reference frames
    </h4>
    <p>rotating frame of reference show some hidden structure of the system</p>
		<iframe title="Trajs"
						width="560"
					  height="315"
					  src="https://www.youtube.com/embed/wusat71RXF4"
					 frameborder="0"
					 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					 allowfullscreen>
		</iframe>

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
     <p>z is uncoupled from x and y, if we only <br/>
        simulate planar motion it will always be in xy axis.</p>
      <p>We have a system of 2nd order differential equation.</p>
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
    <h4>Sketch</h4>
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
      <p> Think ??? as z'' so that it become a system with 3 variables</p>
    </div>
  );
}

function EnergyAndLyapunov(props) {
  return (
    <div className="white-box">

      <MathJax.Provider>
        <h4>Because it's a <b className="hi-text">Hamiltonian System with two-degree of freedom</b>,
            we have energy as a <b className="hi-text">Lyapunov function</b></h4>
        <p>note: has x' y' is because the system is 2nd order.</p>
        <MathJax.Node formula={Energy}  / >
      </MathJax.Provider>
    </div>
  );
}


function LagrangePoints(props) {
  return (
    <div className="dark-box">
      <h4><b className="hi-text">LagrangePoints</b> are fixed points in PCR3BP</h4>
      <img src={lagrangeRotation} height="500px" width="700px" alt="./LagrangeRotatingEM-2.gif"/>
    </div>
  );
}

function FindingLagrangePoints(props) {
  return (
    <div className="white-box">
      <h4> Finding lagrange points</h4>
      <MathJax.Provider>
        <MathJax.Node formula={xddeq0}  / >
        <MathJax.Node formula={yddeq0}  / >
        <MathJax.Node formula={zddeq0}  / >
        <p>z should be 0 for third equation to be zero, so we can ignore z</p>
      </MathJax.Provider>


    </div>
  );
}

function FindingLagrangePointsColinear(props) {
  return (
    <div className="dark-box">
      <h4> Finding lagrange points</h4>
      <p><b className="hi-text">Colinear</b> Lagrange point L1, L2, L3</p>

      <MathJax.Provider>
        <p>When y=0, left one equation</p>
        <MathJax.Node formula={xddeq0}  / >
        <p>It gives us three Equilibrium points along x axis, called L1, L2, L3 respectively</p>
      </MathJax.Provider>

    </div>
  );
}


function FindingLagrangePointsEquilateral(props) {
  return (
    <div className="white-box">
      <h4> Finding lagrange points</h4>
      <p><b className="hi-text">Equilateral</b> Lagrange point L4, L5</p>

      <MathJax.Provider>
        <p>When y is not 0, solve get L4, L5</p>
        <p>Both L4, L5 are </p>
        <p>It turns out L4, P1, P2 or L5, P1, P2 form equilateral triangle</p>
      </MathJax.Provider>

    </div>
  );

}

function FindingLagrangePointsGraph(props) {
  return (
    <div className="white-box">
      <h4>All five lagrange points</h4>
      <img src={lagrangeP} alt="./lagrange.gif"/>
    </div>
  );
}

function StabilityOfLagrangePoints(props) {
  return (
    <div className="dark-box">
      <h4>Stability of Lagrange Points </h4>
      <MathJax.Provider>
        <p>We can linearize the system about lagrange points </p>
        <p>First rewrite into a system of 1st order<br/> differential equation</p>

        <MathJax.Node formula={vectuple6}  / >

        <p>Because the motion is constrained in a plane, <br/>
           also z is decoupled from x and y, <br/>
           we can simply it by removing z component
          </p>
        <MathJax.Node formula={vectuple4}  / >
      </MathJax.Provider>


    </div>
  );
}

function StabilityOfLagrangePointsLinearize1(props) {
  return (
    <div className="white-box">
      <h4>Stability of Lagrange Points</h4>

      <MathJax.Provider>
        <p>Now we define perturbation as </p>

        <MathJax.Node formula={pertx}  / >

        <MathJax.Node formula={perty}  / >
      </MathJax.Provider>


    </div>
  );
}

function StabilityOfLagrangePointsLinearize2(props) {
  return (
    <div className="white-box">
      <h4>Stability of Lagrange Points</h4>

      <MathJax.Provider>
        <p>Use taylor expansion get first order terms</p>

        <MathJax.Node formula={ddxi}  / >

        <MathJax.Node formula={ddeta}  / >
      </MathJax.Provider>


    </div>
  );
}


function StabilityOfLagrangePointsLinearize3(props) {
  return (
    <div className="white-box">
      <h4>Stability of Lagrange Points</h4>

      <MathJax.Provider>
        <p>Double derivatives terms looks like</p>

        <MathJax.Node className="dark-text" formula={omegaxx}  / >
        <MathJax.Node className="dark-text" formula={omegayy}  / >
        <MathJax.Node className="dark-text" formula={omegaxy}  / >
      </MathJax.Provider>


    </div>
  );
}

function StabilityOfLagrangePointsLinearize4(props) {
  return (
    <div className="white-box">
      <h4>Stability of Lagrange Points</h4>

      <MathJax.Provider>
        <p>Calculate Jacobian A</p>

        <MathJax.Node className="dark-text" formula={jacobian}  / >


      </MathJax.Provider>


    </div>
  );
}


function StabilityOfLagrangePointsCharEq(props) {
  return (
    <div className="white-box">

      <h4>Stability of Lagrange Points</h4>
      <MathJax.Provider>
        <p>Characteristic equation is</p>
        <MathJax.Node className="dark-text" formula={chareq}  / >
        <p>Simplify it </p>
        <MathJax.Node className="dark-text" formula={simplifiedchareq}  / >
        <p>where</p>
        <MathJax.Node className="dark-text" formula={simcheqvars}  / >
      </MathJax.Provider>

    </div>
  );
}

function StabilityOfLagrangePointsColinear1(props) {
  return (
    <div className="dark-box">

      <h4>Stability of Lagrange Points</h4>
      <MathJax.Provider>
        <p>For <b className="hi-text">colinear lagrange points </b>, y = 0</p>
        <p>Solve the equation we get</p>
        <MathJax.Node formula={colinearLambda}  / >
      </MathJax.Provider>

    </div>
  );
}


function StabilityOfLagrangePointsColinear2(props) {
  return (
    <div className="dark-box">

      <h4>Stability of Lagrange Points of <b className="hi-text">colinear lagrange points </b></h4>
      <MathJax.Provider>
        <p>Because we have</p>
        <MathJax.Node formula={simcheqvars}  / >
        <p>We get four ??s, one is <b className="hi-text">positive real</b>,
            one is <b className="hi-text">negative real</b></p>
        <p>Other two are <b className="hi-text">pure imaginary</b></p>
        <p>So Colinear Lagrange points are <b className="hi-text">Unstable Saddle Node</b></p>
      </MathJax.Provider>

    </div>
  );
}


function StabilityOfLagrangePointsEq(props) {
  return (
    <div className="white-box">
      <h4>Lagrange Points L4, L5 are stable when ?? is less then 0.3852</h4>
      <p>if ?? ??? 03852 we get two different imaginary roots.<br/>
        Each one of these roots correspond to a different period of oscillation.</p>
    </div>
  );
}


function JacobiConstant(props) {
  return (
    <div className = "dark-box">
      <MathJax.Provider>
        <h4 className="hi-text">Jacobi Constant</h4>
        <p>Jacobi Constant is the only known conserved quantity for the circular restricted three-body problem.</p>
        <p>It is a constant generated by integration, so also called Jacobi Integral</p>



        <MathJax.Node formula={SumAccAndVelocity}  / >

        <p>Integrate both sides with ?? get</p>
        <MathJax.Node formula={IntWithTau}  / >

        <p>Rearrange:</p>
        <MathJax.Node formula={Jacobi}  / >

        <p>??? is a function of position, J is a constant
          <MathJax.Node formula={v2}  / > is the square of velocity.
        </p>

      </MathJax.Provider>
      <p></p>

    </div>
  );
}

function JacobiContour1(props) {
  return (
    <div className="white-box">
      <h4>Contour for different Jacobi</h4>
      <img src={earthMoonXY} width="650px" height="550px" alt="./EarthMoonXY.png"/>
    </div>
  );
}


function JacobiContour2(props) {
  return (
    <div className="white-box">
      <h4>Jacobi Contour with change of ??</h4>
      <img src={xyMu} width="650px" height="550px" alt="./xyMu.gif"/>
    </div>
  );
}

function JacobiContour3(props) {
  return (
    <div className="white-box">
      <h4>Jacobi Contour with change of ??</h4>
      <img src={xzMu} width="650px" height="550px" alt="./xzMu.gif"/>
    </div>
  );
}

function ForbiddenArea1(props) {
  return (
    <div className="dark-box">
      <h4>Forbidden Area</h4>
      <p>Jacobi Integral decrase as velocity increase</p>
      <p>It's like trading position with velocity</p>
      <p>When satellite is far from the Earth enough, it will lose velocity</p>
      <img src={forbbiden1} height="400px" width="800px" alt="./icZVC.png"/>
    </div>
  );
}

function ForbiddenArea2(props) {
  return (
    <div className="dark-box">
      <h4>Forbidden Area</h4>
      <p>Jacobi Integral decrase as velocity increase</p>
      <p>It's like trade position with velocity</p>
      <p>When satellite is far from the Earth enough, it will lose velocity</p>
      <img src={forbbiden2} height="400px" width="800px" alt="./ZCVL0L11.gif"/>
    </div>
  );
}
function ForbiddenArea3(props) {
  return (
    <div className="dark-box">
      <h4>Forbidden Area</h4>
      <p>Jacobi Integral decrase as velocity increase</p>
      <p>It's like trade position with velocity</p>
      <p>When satellite is far from the Earth enough, it will lose velocity</p>
      <img src={forbbiden3} height="400px" width="800px" alt="./trajSwingW1.gif"/>
    </div>
  );
}

function StableManifoldTube(props) {
  return (
    <div className="dark-box">
      <h4></h4>
    </div>
  );
}

// Combined Trajectory
function Trajectory(props) {
  return (
    <div className="white-box">
      <h4>Low energy trajectory</h4>
      <p>
      The spacecraft leaves the Earth parking orbit through a stable/unstable
        <br/>manifolds in the Sun-Earth system, makes a swing aroundL1(orL2),</p>
      <p>
      then it is connected to stable manifold of the Earth-Moon system.
      </p>
      <img src={lowETrajectory} alt="./loweneryTrajectory.png"/>
    </div>
  );
}

function Efficient(props) {
  return (
    <div className="dark-box">
      <p>Japanese spacecraft <b className="hi-text">Hiten </b>used<br/>
        low energy transfers in 1991 <br/>
        due to a limited propellant budget<br/>
        The saving approach 25% after leaving <br/>
        the Earth orbit, and it allows for a <br/>
        doubling of payload
      </p>

      <img src={hiten} height="400px" width="400px" alt="./hiten.jpeg"/>
    </div>
  );
}

function References(props) {
  return (
    <div className="white-box">
      <h1>Thank you!</h1>
      <h4>References</h4>
      <a href="http://www.gg.caltech.edu/~mwl/publications/papers/lowEnergy.pdf">
        Low Energy Transfer to the Moon</a>

      <a href="https://gereshes.com/category/math/astrodynamics/cr3bp/">CR3BP</a>
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
			  <TrajectoryOnDifferentPlanes/>

        <SomeVarDefines/>
        <NonDimVectorsDefine/>
        <FictitiousForceAndKinematic/>
        <AccOfr3/>
        <RotatinFrameEq/>
        <PseudoPotentialEnergy/>
        <PseudoPEGraph/>
        <PCR3BP/>

        <EnergyAndLyapunov/>

        <LagrangePoints/>
        <FindingLagrangePoints/>
        <FindingLagrangePointsColinear/>
        <FindingLagrangePointsEquilateral/>
        <FindingLagrangePointsGraph/>

        <StabilityOfLagrangePoints/>
        <StabilityOfLagrangePointsLinearize1/>
        <StabilityOfLagrangePointsLinearize2/>
        <StabilityOfLagrangePointsLinearize3/>
        <StabilityOfLagrangePointsLinearize4/>
        <StabilityOfLagrangePointsCharEq/>
        <StabilityOfLagrangePointsColinear1/>
        <StabilityOfLagrangePointsColinear2/>
        <StabilityOfLagrangePointsEq/>

        <JacobiConstant/>
        <JacobiContour1/>
        <JacobiContour2/>
        <JacobiContour3/>

        <ForbiddenArea1/>
        <ForbiddenArea2/>
        <ForbiddenArea3/>
        <Trajectory/>
        <Efficient/>
        <References/>

      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
serviceWorker.unregister();














