import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="row d-flex justify-content-between">
                    <div className="col-md-4">
                        <h2 className="titleHeading">Let us handle your<br/>project, professionally.</h2>
                        <p className="paragraph">With well written codes we build amazing app for of <br/>planforms mobile and web app in geheral</p>
                    </div>
                    <div className="col-md-7">
                             <div className="container">
                               
                                    <form action="#">
                                        <input placeholder="Enter email address" className="form-control " type="text" name="text" id=""/>
                                        <input placeholder="Enter name / company's name" className="form-control my-3" type="text" name="text" id=""/>
                                        <textarea placeholder="Your message" className="form-control mb-3" rows="7">

                                        </textarea>
                                        <input className="btn btn-dark btn_custom" type="submit" name="text" id=""/>
                                    </form>
                               
                            </div>
                    </div>
                </div>
    <p className="text-center pt-5 mt-3 text-secondary"><small>copyright Orange labs {new Date().getFullYear()}</small></p>
            </div>
            
        </footer>
    );
};

export default Footer;