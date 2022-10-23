import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import smily1 from "./img/SMILY100.png";
import smily2 from "./img/SMILY50.png";
import smily3 from "./img/SMILY0.png";
import { useHistory } from "react-router-dom";
import colortestimg1 from "./img/colortestimg-1.png";
import login from "./Signin";



const getUserReport = (e) => {
  e.preventDefault();
  Show_reportdiv();
  // console.warn(visionTestDataV);

}
//espd = eye sight power default, esp = eye sight power
let ESPD, ESP1, ESP2, ESP3, ESP4, ESP5, ESP6;

const getUserData = (e) => {
  e.preventDefault();
  const visionTestDataV = e.target.visionTestDataValue.value;
  console.warn(visionTestDataV);
  console.log("click from test page function");
  console.log(sessionStorage.getItem("UserName"));

  // image adding funvtion
  //   var myImage = function myImage(img) {
  //     var sheldon = document.getElementById('sheldon');
  //     sheldon.innerHTML = '<img src="' + img + '"/>';
  // };


  if( visionTestDataV === "Yes" ) {
    ESP1 = "Congratulations";
    ESP6 =
    "You cleared the near vision test.";
    ESP2 = "You can read all the text from <b>40cm</b> away. You seem to have good near vision. Feel free to redo this test regularly to monitor your vision. However, if you feel the need to hold a document further away to read, particularly in low light, you probably have presbyopic tendencies. Make an appointment with an eye care professional to do an evalaution of your vision and to find out more about the different corrective solutions available to you."
  // console.log("You got eagle eyes, visit doctor for other eye diseases")
  } else if(visionTestDataV === "No"){
    ESP5 = "<b>Your vision is not 6/6</b>. You should visit a doctor</b>"
  } else{
    ESPD = "<b>Invalid answer</b>. Please read all the instructions carefully";
    //   // console.log("Please read instructions carefully for more accurate results")
  }

  

  Show_visionresult();
  Show_resultdiv();
};

const Testcolor = () => (
  // function Testcolor () {
  <div id="results" className="search-results">
    <div className="navbar navbar-expand-lg navbar-light bg-black">
      Color Blindness Test
    </div>
    <div  className="colortest-img-div">
      <img className="colortest-img" src={colortestimg1} />
      </div>
    
    <div>
      <form onSubmit={getUserDataColor}>
        <label for="testdata" class="form-label"></label>
        <input
          type="number"
          name="colorTestDataValue"
          className="form-control visiondata"
          id="testdata"
          aria-describedby="emailHelp"
          placeholder="Enter the line number"
        />
        <div className="bg-black center-aligna margin-top ">
        <button type="submit" class="btn btn-primary btn-test">
          Submit
        </button>
        </div>
      </form>
    </div>
  </div>
 
);

let ESCP1, ESCP2, ESCP3, ESCPD;

const getUserDataColor = (e) => {
  e.preventDefault();
  const colorTestDataV = e.target.colorTestDataValue.value;
console.log(colorTestDataV);
  if(colorTestDataV === "74") {
    ESCP1 = "Congratulations";
    ESCP2 = "You cleared the color vision test.";
    console.log("correct")
  }else {
    ESCP3 = "Your answer is not correct. You should visit a doctor";
    ESCPD = "Please read the instruction carefully and try again";
    console.log("Incorrect")
  }

  Show_resultdivColor();
}

const TestVision = () => (
  <div id="results" className="search-results">
    <div className="bg-black">
      <p className="test-heading">Near Vision Test </p>
    </div>

    <form onSubmit={getUserData}>
      {/* <p id="nv-text-number-1">1</p> */}
      <p id="nv-text-1">D F N P T X Z C </p>
      {/* <p id="nv-text-number-2">2</p> */}
      <p id="nv-text-2">P T X Z G X </p>
      {/* <p id="nv-text-number-3">3</p> */}
      <p id="nv-text-3">U Z D T </p>
      {/* <p id="nv-text-number-4">4</p> */}
      <p id="nv-text-4">D F N </p>
      {/* <p id="nv-text-number-5">5</p> */}
      <p id="nv-text-5">P H </p>
      {/* <p id="nv-text-number-6">6</p> */}
      <p id="nv-text-6">K</p>
      <br />

      <p className="center-aligna">
        <p id="instructions">
          <strong>Instructions</strong>
        </p>
        To perform the test, remove your glasses and move back 16” to 18” from
        the screen. Clover left eye with your left hand and try to read the text
        to the end and repeat with the right eye.
      </p>
      <br />

      <input
        type="text"
        name="visionTestDataValue"
        className="form-control visiondata"
        aria-describedby="emailHelp"
        placeholder="Please write Yes or No"
      />
      <br />
      <div className="bg-black center-aligna margin-top">
        <button type="submit" class="btn btn-primary btn-test">
          Submit
        </button>
      </div>
    </form>
  </div>
);

// RESULT DIV

const reportMain = {
  color: 'green',
  fontSize: "x-large",
fontWeight: "600"
  
};

const reportSecondary = {
  textAlign: "justify"
  
};


const ResultDiv = () => (
  <div id="results" className="search-results">
    <div className="bg-black">
      <p className="test-heading">Near Vision Test </p>
    </div>

    <div className="container-fluid">
     
      <p className="center-aligna" dangerouslySetInnerHTML={{ __html: ESP5 }}></p>
      <p
        className="center-aligna"
        dangerouslySetInnerHTML={{ __html: ESP1 }} style={reportMain}
      ></p>
      <p className="center-aligna" dangerouslySetInnerHTML={{ __html: ESPD }} ></p>
    </div>
    <form onSubmit={getUserReport}>
    <div className="bg-black center-aligna margin-top">
        <button type="submit" class="btn btn-primary btn-test">
          Check Report
        </button>
    </div>
    </form>
  </div>
);


const ResultDivColor = () => (
  <div id="results" className="search-results">
    <div className="bg-black">
      <p className="test-heading">Color Vision Test </p>
    </div>

    <div className="container-fluid">
     
      <p className="center-aligna" dangerouslySetInnerHTML={{ __html: ESCP1 }}></p>
      <p
        className="center-aligna"
        dangerouslySetInnerHTML={{ __html: ESCP2 }} style={reportMain}
      ></p>
      <p className="center-aligna" dangerouslySetInnerHTML={{ __html: ESCP3 }} ></p>
    </div>
   
  </div>
);


// let Yesh , No;

// if (!ESP6 === "") {
//   Yesh = ESP6;
//   console.log(Yesh) // for testing purpose
// }
// console.log(Yesh) // for testing purpose

// reprt div
const ReportDiv = () => (


  <div id="results" className="search-results">
    <div className="bg-black">
      <p className="test-heading">Near Vision Report </p>
    </div>

    <div className="container-fluid">
    <div className="col-lg-10 offset-lg-1">
            Hi, {sessionStorage.getItem("UserName")}{" "}
          </div>
      <p className="center-aligna" dangerouslySetInnerHTML={{ __html: ESP5 }}></p>
      


      {/* // good */}
      <p
        className="center-aligna"
        dangerouslySetInnerHTML={{ __html: ESP1}} style={reportMain}
      ></p>
      <p
        className="center-aligna"
        dangerouslySetInnerHTML={{ __html: ESP6}} 
      ></p>
      <p
        className="center-aligna"
        dangerouslySetInnerHTML={{ __html: ESP2}} style={reportSecondary}
      ></p>
   

      <p className="center-aligna" dangerouslySetInnerHTML={{ __html: ESPD }} ></p>
    </div>
      <p dangerouslySetInnerHTML={{ __html: "Generally, people with <b>6/6 vision</b> can easily read all the text in this test. But we recommend to see a doctor if you have any pain or any other problme in your eyes."}} style={reportSecondary}></p>
  </div>
);

let Show_visionresult, Show_resultdiv, Show_reportdiv, Show_resultdivColor;

function TestPage() {
  const history = useHistory();

  const CallTestPage1 = async () => {
    try {
      const res = await fetch("/TestPage", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.warn(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      // e.preventDefault();
    } catch (err) {
      console.log(err);
      history.push("/testpage");
    }
  };
  useEffect(() => {
    CallTestPage1();
  }, []);

  // const [visiontest, setvisiontest] = useState(false);

  const [showTestVision, setShowTestVision] = useState(false);
  const [showTestColor, setShowTestColor] = useState(false);
  const [showVisionResult, setshowVisionResult] = useState(true);
  const [showResultDiv, setshowResultDiv] = useState(false);
  const [showResultDivColor, setshowResultDivColor] = useState(false);
  const [showReportDiv, setshowReportDiv] = useState(false);

  Show_visionresult = () => {
    console.log("clicked");
    setshowVisionResult(false);
    setShowTestVision(false);
    console.log(showVisionResult);
    setshowResultDivColor(false);
    console.log(ESP1);
    //   return ( )
  };

  const Show_visiontest = () => {
    console.log("clicked");
    setShowTestVision(true);
    setShowTestColor(false);
    setshowResultDiv(false);
    setshowReportDiv(false);
    setshowResultDivColor(false);

    // use useState instead
    ESPD = "";
    ESP1 = "";
    ESP2 = "";
    ESP3 = "";
    ESP4 = "";
    ESP5 = "";
    ESP6 = "";

    console.log(showTestVision);
    // return (
    //   <div>
    //     <input type="submit" value="Show_visiontest" onClick={onClick} />
    //   </div>
    // )
  };

  const Show_colortest = () => {
    console.log("clicked");
    setShowTestColor(true);
    setShowTestVision(false);
    setshowResultDivColor(false);
    setshowReportDiv(false);

    ESCP1 = "";
    console.log(showTestColor);
    // return (
    //   <div>
    //     <input type="submit" value="Show_visiontest" onClick={onClick} />
    //   </div>
    // )
  };

  Show_resultdiv = () => {
    console.log("clicked");
    setshowResultDiv(true);

    console.log(showTestColor);
    // return ( )
  };

  Show_resultdivColor = () => {
    console.log("clicked");
    setshowResultDivColor(true);
    setShowTestColor(false);


    console.log(showTestColor);
    // return ( )
  };


  Show_reportdiv = () => {
    console.log("clicked for report div");
    setshowReportDiv(true);
    setShowTestVision(false);
    setshowResultDiv(false);
    setshowVisionResult(false);

    console.log(showReportDiv);
    // return ( )
  };


  let displayname =  sessionStorage.getItem("UserName")
  return (
    <>
      <div className="container mt-5 mb-5">
        {/* <div className='container mt-5 mb-5'>  */}
        <form method="GET">

         
          <div className="col-lg-10 offset-lg-1"  dangerouslySetInnerHTML={{ __html: "Hey, "  + displayname }}>
           
          </div>
        </form>
        <br />
        <div className="col-lg-10 offset-lg-1">
          <p className="red center-aligna">
            <strong>Disclaimer:</strong>
          </p>
          <p  dangerouslySetInnerHTML={{ __html: "This Online Vision Screening is used to give a first impression about the current eye performance. It is not a medical test and is not a replacement for eye care by a trained professional. It is not intended for use in the diagnosis of disease or mitigation, treatment, or prevention of disease. This exam is only meant to give you a general idea of your visual acuity and whether a professional eye test is advisable. We recommend having your eyes checked by an eye care professional once every two years, or sooner if you recognise changes to your vision. Vision+ do not accept any liability for damages or consequences arising as a result of the Online Vision Screening an/or information provided. These tests have no diagnostic value. In case of difficulties, only an eye care professional can carry out a complete eye examination to detect any eventual visual problems. No personal health information is collected or retained as the result of taking these tests."}} style={reportSecondary}>
            
          </p>
        </div>
        {/* </div> */}
      </div>
      <section className=" register-page testing-hall">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container-fluid">
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 item-center">
                  {/* <li className="nav-item">
                      <NavLink className="nav-link active color-white" aria-current="page" to="/">Near Vision Test</NavLink>
                    </li> */}
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle color-white"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Test
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item nv-1"
                          onClick={() => Show_visiontest()}
                        >
                          Near Vision
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nv-2"
                          onClick={() => Show_colortest()}
                        >
                          Color blindness
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {showTestVision ? <TestVision /> : null}
          {showTestColor ? <Testcolor /> : null}
          {showResultDiv ? <ResultDiv /> : null}
          {showResultDivColor ? <ResultDivColor /> : null}
          {showReportDiv ? <ReportDiv /> : null}
        </div>
      </section>
    </>
  );
}

export default TestPage;

// -------------------------------------------------------------LINE BY LINE TEST---------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const getUserData =(e) =>{
//   e.preventDefault();
//   const visionTestDataV1 = e.target.visionTestDataValue1.value;
//   console.warn(visionTestDataV1);

//   // const str = 'D  F  N P  T  X  Z  C';
// //   const re = /(D  F  N P  T  X  Z  C \d+(\.\d)*)/i;
// //   const found = visionTestDataV1.match(re);

// // console.log(found);
//   if(visionTestDataV1 === "D  F  N  P  T  X  Z  C"){
//     console.log("6/6");
//   }
//   else if () {
//     console.log("You should visit the doctor");
//   }
//   else {
//     console.log("You should visit the doctor");
//   }
// }

// const TestVision = () => (

//   <div id="results" className="search-results">

//         <div className="bg-black">
//             <p className="test-heading">Near Vision Test </p>
//         </div>

//         <form onSubmit={getUserData}>
//         <p id='nv-text-1' >D  F  N  P  T  X  Z  C  </p>
//         <input type="text" name="visionTestDataValue1" className="form-control visiondata" aria-describedby="emailHelp" placeholder='Write the above line here' />
//         <p id='nv-text-2' >P  T  X  Z  G  X   </p>
//         <input type="text" name="visionTestDataValue2" className="form-control visiondata" aria-describedby="emailHelp" placeholder='Write the above line here' />
//         <p id='nv-text-3' >U  Z  D  T    </p>
//         <input type="text" name="visionTestDataValue3" className="form-control visiondata" aria-describedby="emailHelp" placeholder='Write the above line here' />
//         <p id='nv-text-4' >D  F  N  </p>
//         <input type="text" name="visionTestDataValue4" className="form-control visiondata" aria-describedby="emailHelp" placeholder='Write the above line here' />
//         <p id='nv-text-5' >P  H   </p>
//         <input type="text" name="visionTestDataValue5" className="form-control visiondata" aria-describedby="emailHelp" placeholder='Write the above line here' />
//         <p id='nv-text-6' >K</p>
//         <input type="text" name="visionTestDataValue6" className="form-control visiondata" aria-describedby="emailHelp" placeholder='Write the above line here' />
//         <br />
//         <div className="bg-black center-aligna margin-top">
//         <button type="submit" class="btn btn-primary btn-test">Submit</button>
//         </div>
//         </form>
//   </div>
// )

// // function getUserData(val) {
// //   console.warn(val.target)
// // }

// const Testcolor = () => (

// // function Testcolor () {
//   <div id="results" className="search-results">
//     <div className="navbar navbar-expand-lg navbar-light bg-black">
//               Color Blindness Test
//         </div>
//     <p id='nv-text-1'>Add image here </p>
//     <div >
//     <form >
//       <label for="testdata" class="form-label"></label>
//       <input type="number" name="visionTestDataValue"  class="form-control" id="testdata" aria-describedby="emailHelp" placeholder='Enter the line number' />
//       <button type="submit" class="btn btn-primary">Submit</button>
//     </form>
//      </div>

//   </div>
// )

// function TestPage() {

//   // const [visiontest, setvisiontest] = useState(false);
//   const [showTestVision, setShowTestVision] = useState(false);
//   const [showTestColor, setShowTestColor] = useState(false);

//   const Show_visiontest = () => {
//     console.log("clicked");
//    setShowTestVision(true);
//    setShowTestColor(false);

//    console.log(showTestVision);
//     // return (
//     //   <div>
//     //     <input type="submit" value="Show_visiontest" onClick={onClick} />
//     //   </div>
//     // )
//   }

//   const Show_colortest = () => {
//     console.log("clicked");
//    setShowTestColor(true);
//    setShowTestVision(false);

//    console.log(showTestColor);
//     // return (
//     //   <div>
//     //     <input type="submit" value="Show_visiontest" onClick={onClick} />
//     //   </div>
//     // )
//   }

//   return (
//     <>
//     <section className  = " register-page">
//         <div className='container mt-5 mb-5'>
//         <nav className="navbar navbar-expand-lg navbar-light bg-black">
//   <div className="container-fluid">
//     {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button> */}
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         {/* <li className="nav-item">
//           <NavLink className="nav-link active color-white" aria-current="page" to="/">Near Vision Test</NavLink>
//         </li> */}
//         <li className="nav-item dropdown">
//           <NavLink className="nav-link dropdown-toggle color-white" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Select Test
//           </NavLink>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item nv-1" onClick={() => Show_visiontest()} >Near Vision</a></li>
//             <li><a className="dropdown-item nv-2" onClick={() => Show_colortest()}>Color blindness</a></li>
//           </ul>
//         </li>
//         {/* <button onClick={() => Show_visiontest()}>Vision Test</button> */}

//         {/* <li className="nav-item">
//           <NavLink className="nav-link color-white" to="/login">LOGIN</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link color-white" to="/testpage">LOGIN</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link color-white" to="/signup">Register</NavLink>
//         </li> */}
//         {/* <li className="nav-item">
//           <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
//         </li> */}
//       </ul>
//       {/* <form className="d-flex"> */}
//         {/* <input className="form-control me-2" type="button" placeholder="Search" aria-label="Search" /> */}
//         {/* <button className="btn btn-outline-success" type="submit">BOOK APPOINTMENT</button> */}
//       {/* </form> */}
//     </div>
//   </div>
// </nav>

//  {/* const show_nv_text =  () => {

//   } */}

// { showTestVision ? <TestVision /> : null }
// { showTestColor ? <Testcolor /> : null }

//         </div>
//       </section>
//     </>
//   )
// }

// export default TestPage;

























// switch (visionTestDataV) {
  //   case "1":
  //     // console.log("You should visit the doctor 1")
  //     ESP1 = "You should visit the doctor 1";
  //     break;
  //   case "2":
  //     ESP2 = "You should visit the doctor 2";
  //     // console.log("You should visit the doctor 2")
  //     break;
  //   case "3":
  //     ESP3 = "You should visit the doctor 3";
  //     // console.log("You should visit the doctor 3")
  //     break;
  //   case "4":
  //     ESP4 = "You should visit the doctor 4";
  //     // console.log("You should visit the doctor 4")
  //     break;
  //   case "No":
  //     ESP5 =
  //       "You can't read all the text from 40cm away. We recommend you make an appointment with an eye care professional to do an evaluation of your vision and to find out more about the different corrective solutions available to you.";
  //     // console.log("You have good eye sight but You can visit the doctor for more accurate results")
  //     break;
  //   case "Yes":
  //     ESP6 =
  //       "<b>Congratulations</b>, You cleared the near vision test.";
  //     // console.log("You got eagle eyes, visit doctor for other eye diseases")
  //     break;
  //   default:
  //     ESPD = "Place yourself 40 centimeters from the screen.";
  //   // console.log("Please read instructions carefully for more accurate results")
  // }





















  
// const TestPage1 = () => {
// const history = useHistory();
// const CallTestPage1 = async () => {
//     try {
//         const res = await fetch('/TestPage1', {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type" : "application/json"
//           },
//           credentials: "include"
//         });

//         const data = await res.json();

//         console.log(data);

//         if(!res.status === 200) {
//           const error = new Error(res.error);
//           throw error;
//         }

//     }catch (err) {
//         console.log(err);
//         history.push("/signin");
//     }

// }
// useEffect(() => {
//   CallTestPage1();
// },[]);