import React from 'react'
import lists from "../list.json";

const Visiontest = () => {

  // fetch("list.json").then(function (response) {
  //    console.log(list);
  //   return response.json();
  // }).then(function(obj) {
  //   console.log(obj);
  //   console.log(list);
  // }).catch(function(err){
  //   console.log("check error");
  //   // console.log(list);
  // })
  return (
    <div className='container mt-5 mb-5'>
        <p className="red center-aligna">Welcome to Vision+</p>
                      <br></br>
                      

          <div>
                      <h4 className="center-aligna"> This interactive eye exam will test your sight for 20/20 or 6/6 vision.</h4>
                      <br></br><br></br>


                     <h5> How you can take this test using vision+ website.?</h5><br></br>

                      <ul>
                        <li>You need to sign up on vision+. (Your information is safe with us.)</li>
                        <li>You just need to signin with your email id and password.</li>
                        <li>You need to select the test from select test menu. You can choose from near vision test and color blindness test.</li>
                        <li>After selecting the test. Read the instructions carefully and follow all the instructions correctly to get the accurate result.</li>
                        <li>After submitting the test you will result cleared or not cleared message.</li>
                        <li>You can check you report after submitting the test for more information.</li>
                      </ul>
                      <br></br>
                      <br></br>

                      <h5>How to take Near Vision Test ?</h5>
                     <p> For near vision test, you just need to follow the test screen instructins and you have to write Yes or No in the input box in the same manner that you will see on your test screen.</p>


                     <h5> How to take color blindness test</h5>
                      <p>
                      For color blindness test, You just need to enter the number that you will see on you screen with different colors.
                      </p>
                      <br></br>
                      <br></br>


                     <h5> How vision+ near vision test works ?</h5>

                      <p>
                      In near vision test, we set up a screen with different text that is similar to clinical test. All the lines are of different size. If you can read all the line without any problem then you probably have a good vision.
                      This test result is based on data that we collected from many perfect vision people. By doing this test you are comparing your vision with people who has 6/6 or perfect vision. However, this test is not 100% accurate (based on users data).
                      </p>
                      <br></br>
                      <br></br>

                     <h5> How vision+ colorblind test works ? </h5>
                     <p>
                      This is the most common type of color blindness test. Here we will will ask you to look at an image made up of colored dots with a differently colored number or shape in the middle. If the shape blends into the background 
                      and you can’t see it, you may have a type of color blindness. Different color plates can check for different types of color blindness.
                      </p>
                      <br></br>
                      <br></br>

                      <h6>
                      If you wear glasses or contact lenses, it's important to test both with and without your corrective lenses. This will give you an idea as to whether your current script is the correct strength for you.
                      </h6>
          </div>
    </div>
  )
}

export default Visiontest