import { useState } from "react";
import LinkModal from "../LinkModal";
import ProjectDetails from "../ProjectDetails";
import "./ProjectsContainer.scss";
import { gsap } from "gsap";

let livePath = '';
let gitPath = '';
let desc = '';
let role = '';
let imgs = [];
let title = '';
let vidlink = '';
let tech = '';

export default function ProjectsContainer() {

    const [filter, setFilter] = useState('all');
    const [show, setShow] = useState(false);

    const linkTarget = (link, titleData, liveData, gitData, descData, roleData, imgsData, vidlinkData, techData) => {
        vidlink = { vidlinkData };
        title = { titleData };
        livePath = { liveData };
        gitPath = { gitData };
        desc = { descData };
        role = { roleData };
        imgs = Object.values({ imgsData });
        tech = { techData }
        setShow(true);
    }

    const handleFilterChange = (event) => {
        const projects = document.getElementsByClassName('projectFeat');
        const onCompleteAll = () => {
            setFilter(event.target.value);
        };
        Array.from(projects).forEach((project, index, array) => {
            gsap.to(project, {
                opacity: 0,
                scale: .95,
                onComplete: () => {
                    if (index === array.length - 1) {
                        onCompleteAll();
                    }
                }
            });
        })
    };

    return (
        <>
            <section className="col-md-11 col-lg-8 projects">
                <div className="col-12 mb-4 projectHeadBG">
                    <h2 className="col-5">My Projects</h2>
                    <div className="col-5 filters">
                        <i className="bi bi-filter"></i>

                        <select className="align-self-center filterSelect" aria-label="Project type options" onChange={handleFilterChange}>
                            <option disabled>
                                Filter Projects
                            </option>
                            <optgroup label="All Projects">
                                <option value="all">
                                    All Projects
                                </option>
                            </optgroup>
                            <optgroup label="Software Dev">
                                <option value="dev">
                                    All Software Dev
                                </option>
                                <option value="next">
                                    Next.js
                                </option>
                                <option value="react">
                                    React
                                </option>
                                <option value="sass">
                                    SASS
                                </option>
                            </optgroup>
                            <optgroup label="Video">
                                <option value="vid">
                                    All Video
                                </option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="col-12 d-flex flex-wrap justify-content-around pb-4 projectDetails">
                    < ProjectDetails linkTarget={linkTarget} filter={filter} />
                </div>

            </section>

            <LinkModal livePath={livePath.liveData} gitPath={gitPath.gitData} desc={desc.descData} role={role.roleData} vidlink={vidlink.vidlinkData} imgs={imgs} title={title.titleData} setShow={setShow} show={show} tech={tech.techData} />
        </>
    )


}