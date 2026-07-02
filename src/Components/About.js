import React from 'react'

export default function About( props) {

    const mystyle=(
        {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#3583d1':'white',
        border: ' 1px solid white'
    })
    
    
  return (
         <div className='container ' style={mystyle}> 
              <h3 className="mx-5">About TextUtils</h3>
                 <div className="accordion accordion-flush" id="accordionFlushExample">
                 <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What is TextUtils?
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">TextUtils is a React-based web application that helps users quickly analyze and transform text. Whether you want to convert text to uppercase, lowercase,  or copy content with one click, TextUtils provides a fast and simple solution.

This project was built to practice React concepts such as components, props, state management, routing, and responsive UI design. </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    ✨ Features
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">• Convert text to Uppercase
• Convert text to Lowercase
• Copy text instantly
• Count Words and Characters
• Estimate Reading Time
• Dark and Light Mode
• Responsive Design</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Technologies Used
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> This project is built using modern web technologies:

• React.js
• JavaScript (ES6)
• Bootstrap 5
• HTML5
• CSS3
The application follows a component-based architecture, making it reusable, maintainable, and easy to scale.   </div>
            </div>
            </div>
        
                </div>
                </div>
  )
}
