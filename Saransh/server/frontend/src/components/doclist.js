import React from 'react'
import lists from "../list.json";
import Table from 'react-bootstrap/Table';


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
    <div className='container mt-5 mb-5 doc-list'>
        <h1 className="center-aligna">Doctors List with other information</h1>
        <div className='container mt-5'>
          {
            lists.map( list => {
              return(
                <div className='list-div'>

                  <Table striped>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Experience</th>
                            <th>Clinic Address</th>
                            <th>Clinic Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{list.id}</td>
                            <td>{list.name}</td>
                            <td>{list.speciality}</td>
                            <td>{list.experience}</td>
                            <td>{list.address}</td>
                            <td>{list.phone}</td>
                          </tr>
                          <tr>
                            <br></br>
                          <button className='btn btn-primary appointment-btn' href={`/${list.aplink}`}>Get Appointment</button>
                          </tr>
                        </tbody>
                      </Table>
                </div>
              )
            })
          }
        </div>  
    </div>
  )
}

export default Visiontest
