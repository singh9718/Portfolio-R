import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <div>
            <section id='skills'>
                <span className="skillTitle">
                    What I do
                </span>
                <span className="skillDesc">I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={UIDesign} alt="" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>This is a demo text, you can write your content here.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={WebDesign} alt="" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2></h2>
                            <p>This is a demo text, you can write your content here.</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <img src={AppDesign} alt="" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2></h2>
                            <p>This is a demo text, you can write your content here.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;
