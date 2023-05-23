import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import {useFormik} from 'formik';
import "./detect.scss";

export default function Contact(){

    const formik = useFormik({
        initialValues:{
           name:"",
           email:"", 
        },
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit : values => {
            
        }
    })

    return(
        <div className="contactContainer">
            <div className="HContainer">
                <div className="left">
                    <span className="ico"><MailIcon sx={"scale:6"}/></span>
                    <span>
                        If you have questions or just want to get in touch, use the form. We look forward to hearing from you!
                    </span>
                </div>
                <div className="right">
                    <h1>Contact Us</h1>
                    <form>
                        <input {...formik.getFieldProps} type="text" placeholder="Your Name"/>
                        <input type="text" placeholder="Your Email" name="" id="" />
                        <textarea placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}