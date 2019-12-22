import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                   
                </div>

                <button className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}

// axios.get(API+"/sample/all").then(res => {
//        const allSamples = res.data;
//        let userSamples = [];
//        allSamples.forEach(sample => {
//          if (sample["ownerId"] === this.props.userAuth.id) {
//            userSamples.push(sample);
//          }
//        });
//        if (userSamples.length) {
//          this.setState({
//            samples: userSamples,
//            selectedSample: userSamples[0],
//            selectedName: userSamples[0].name + " (" + userSamples[0]._id + ")"
//          });
//        }
//      });
