import React from 'react';

// import '@/styles/resume.css';
import { HomeOutlined, LinkedinFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';

// ResumeEng.propTypes = {
//   children: PropTypes.node,
// };

export default function ResumeEng() {
  return (
    <>
      <div className={ 'resume' }>
        <article id="9bbbea2b-2ef9-4615-bea9-fa5343bf5f06" className={ 'page sans' }>
          <header>
            <h1 className="page-title"> Jeonghoo Lee</h1>
          </header>

          <div className="page-body">
            <hr id="fa22d30a-7e5e-4048-acc8-40aa438e61a5"/>
            <div id="375edfaa-5c8e-4063-acae-26864beea1d6" className="column-list info">
              <div id="a0f3e5b9-bb89-46ab-a88d-f09e468d0c57" style={ { width: '26%' } } className="column info-item">
                <p id="bf361bce-b031-4abf-9dd5-48f9023120c0" className=""><MailOutlined /> jeonghoo@gmail.com
                </p>
              </div>
              <div id="d9540d65-6439-4b18-9a0f-de0835082105" style={ { width: '24%' } } className="column info-item">
                <p id="18206a5c-7390-430c-9bc9-b426eb04d884" className="">
                  <HomeOutlined /> www.jeonghoo.com
                </p>
              </div>
              <div id="8c6ef50f-ae31-4b31-b39d-cc044b7d67c4" style={ { width: '27%' } } className="column info-item">
                <p id="f12fc853-4258-4add-9f9a-bec029cdcaee" className="">
                  <span><LinkedinFilled /> </span>
                  <a href="https://www.notion.sowww.linkedin.com/in/jeonghoo">linkedin.com/in/jeonghoo</a>
                </p>
              </div>
              <div id="0c944343-adf5-4d59-b46a-2e3b333e2961" style={ { width: '23%' } } className="column info-item">
                <p id="8a9a6a54-1b1a-44ad-b2df-c02d000aad56" className="">
                  <PhoneOutlined /> +82) 10 - 000 - 0000
                </p>
              </div>
            </div>


            { /* ************* Profile ************* */ }
            <div className={ 'section' }>
              <h2 id="e1e5f929-bc74-4201-8b2c-176c8d30a3ea" className=""><strong>Profile</strong></h2>
              <hr id="6e6dd18b-df89-4102-b42d-9c8c9fb0b057"/>
              <p id="952f4014-8480-4820-bea7-e4dec7cefc1b" className="profile-indent">
                <span className={ 'profile highlight-blue_background' }> Highly motivated and passionately driven full stack developer </span> with approximately 1 year of experience in the development field.
                Actively invested in personal growth by organizing and participating in group study sessions to fill any knowledge gaps,
                especially in programming languages such as Java and Javascript.
              </p>

              <p id="952f4014-8480-4820-bea7-e4dec7cefc1c" className="profile-indent">Specializing in web application services, <span className={ 'profile highlight-blue_background' }> successfully
              completed several projects
                including an E-commerce vertical platform and a PMS (Project Management System) project </span> for the former company.
              </p>

              <p id="952f4014-8480-4820-bea7-e4dec7cefc1d" className="profile-indent"><span className={ 'profile highlight-blue_background' }> Possesses an exceptional ability to quickly adapt to new challenges
                and seamlessly integrate into organizational dynamics. </span>
                Drawing from a decade-long tenure in the service
                industry, <span className={ 'profile highlight-blue_background' }> well-honed communication skills underpin adept interactions. </span>
              </p>
            </div>

            { /* ************* Skills Tools ************* */ }
            <div className={ 'section' }>
              <h2 id="4d38578d-dba1-4978-a59c-c0dd31c4dea7" className=""><strong>Skills &amp; Tools</strong></h2>
              <hr id="7f0100bf-ca7f-468c-91f0-294fc8705085"/>
              <ul id="31c1c726-5b67-452c-a7ed-fe2be62d810f" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  <strong>
                    <em>PROGRAMMING LANGUAGES &amp; DATABASE: </em>
                  </strong>
                Java, JavaScript, Typescript, HTML, CSS, Oracle, MySQL, Postgre, MongoDB
                </li>
              </ul>
              <ul id="9391ee69-045b-451a-bd41-96c0a3457b25" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  <strong>
                    <em>FRAMEWORKS &amp; LIBRARIES: </em>
                  </strong>
                MVC, RESTful API, Spring, jQuery, Vue.js 3, Nuxt.js 3, React.js, Next.js 13, Vuetify, Bootstrap 5,
                ANT Design, Daisy UI, Headless UI
                </li>
              </ul>
              <ul id="214cc721-4108-457b-92f5-ce1a3b7e04ff" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  <strong>
                    <em>TOOLS: </em>
                  </strong>
                Git, SVN, Notion, Jira, Redmine, Slack, Figma
                </li>
              </ul>
              <ul id="76fbc657-f023-4823-86c7-6a63bf919f41" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  <strong>
                    <em>INTERPERSONAL: </em>
                  </strong>
                Collaborated, Adaptability,
                Organized, Problem-Solving, Client Relations, Cultural Sensitivity, Networking, Active Listening
                </li>
              </ul>
              <p id="788e5049-5386-4457-93f8-f5be55df0af0" className=""></p>
            </div>

            { /* ************* Projects ************* */ }
            <div className={ 'section' }>
              <h2 id="b2ca0211-c994-4afd-a3bf-76653cbf25a1" className=""><strong>Projects</strong></h2>
              <hr id="f9077823-be09-422e-b46c-4b1cb4b0cbfd"/>

              <div id="06c90ce7-6583-4878-98c2-d079fea70b40" className="column-list">
                <div id="2c6d9252-d1ec-4ee8-a3c1-bd8c477f57a4" style={ { width: '81.25%' } } className="column">
                  <p id="f4ddc3c3-e490-45ca-af14-7770834047b6" className="">
                    <strong>Frontend Developer | </strong>
                    <mark className="highlight-blue">
                      <strong>E-Commerce Vertical Platform </strong>
                    </mark>
                    <mark className="highlight-gray">Artistry, Canada</mark>
                  </p>
                </div>
                <div id="a58cd715-aaea-4d00-9b78-59828a670fa9" style={ { width: '18.750000000000007%' } } className="column">
                  <p id="e5bdbb83-128f-4a27-9417-e3948de80ba1" className="">
                    <mark className="highlight-gray">08.2023 - Present</mark>
                  </p>
                  <p id="20ba3918-9dcc-40e4-a70f-9a0d87792037" className="">
                  </p>
                </div>
              </div>
              <ul id="7f0cd79c-78e0-4152-a93c-5e1c78f5d61b" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Contributed as a full stack developer, handling both backend and frontend development by using Next.js and Postgre, for the art exhibitions platform development project
                </li>
              </ul>
              <ul id="28644233-2242-4a78-a533-c44b66073602" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  Developed the main page of the exhibition section and the account management section using both Daisy UI and Headless UI, which are CSS frameworks
                </li>
              </ul>

              <div id="1bf41c09-fc1c-4983-98fa-daa00af4c7f0" className="column-list">
                <div id="9307facd-4c02-45f1-af16-b6c29e002873" style={ { width: '81.25%' } } className="column">
                  <p id="ad9ee156-7c90-438b-bcc9-d7a4c831ed5f" className="">
                    <strong>Full Stack Developer | </strong>
                    <mark className="highlight-blue">
                      <strong>E-Commerce Fashion Vertical Platform</strong>
                    </mark>
                    <mark className="highlight-gray"> CJ ENM, Seoul, South Korea</mark>
                  </p>
                </div>
                <div id="0d50f754-cb99-4667-922b-277eb3b77c50" style={ { width: '18.750000000000007%' } } className="column">
                  <p id="11b4b22c-b42c-4f71-bb3c-fe8448089d27" className="">
                    <mark className="highlight-gray">04.2023 - 10.2023</mark>
                  </p>
                  <p id="f8640005-fe3c-4c55-8794-e395275f0b41" className="">
                  </p></div>
              </div>
              <ul id="9d2c5586-a4ac-43e5-b17b-ac37ea36cd68" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Developed application using MVC architecture, RESTFul APIs, Oracle
                Database, JavaScript, and Spring Framework
                </li>
              </ul>
              <ul id="b8e1bf1d-4b08-430c-9b0b-ecf594bdd5ba" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Contributed as a full-stack developer to the backoffice web application
                within an e-commerce fashion vertical platform development project
                </li>
              </ul>
              <ul id="c53ddccd-bdf7-4c3e-a83d-c706aa2687a4" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Led the development of 50% of the display section, encompassing 8 out of
                16 categories
                </li>
              </ul>

              <div id="bf1e7a2a-d53f-452a-b186-4a2a28034460" className="column-list">
                <div id="8b7c86fb-0b64-48d2-84ec-b482e3fb9cbe" style={ { width: '81.25%' } } className="column">
                  <p id="9a1cdf18-1518-4eb4-b2e4-132cb59905c6" className="">
                    <strong>Full Stack Developer | </strong>
                    <mark className="highlight-blue"><strong>Digital Signage Web Application</strong></mark>
                    <mark className="highlight-gray"> Crewmate, Seoul, South Korea</mark>
                  </p>
                </div>
                <div id="1efe3e33-108f-45c1-b0df-a4716804fb22" style={ { width: '18.750000000000007%' } } className="column">
                  <p id="9bbd492b-53c3-4ad0-b530-1c79715cea5e" className="">
                    <mark className="highlight-gray">04.2023 - 10.2023</mark>
                  </p>
                </div>
              </div>
              <ul id="a9aa5390-62e8-4680-bbac-16204f58131f" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Developed a bus arrival information display page and a weather forecast
                display page using Vue.js 3 and Nuxt.js 3 with open APIs from the Public Data Portal of Korea and
                OpenWeather
                </li>
              </ul>
              <ul id="20f1d6e0-38b5-4196-9a42-cb624427f2f9" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Contributed as a backend and a frontend developer for the backoffice web
                application in an e-commerce fashion vertical platform development project
                </li>
              </ul>
              <ul id="dc7befd7-1037-4c76-a3e0-c1c47ee2c58c" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>Successfully led the team by setting up rules for coding convention,
                  designing the project structure and devised Developed using MVC, RESTFul API, Oracle Database, Javascript
                  and Spring Framework
                </li>
              </ul>
            </div>

            { /* ************* Experience ************* */ }
            <div className={ 'section' }>
              <h2 id="abbae1c8-d82e-417a-9e52-371aa267847a" className=""><strong>Experience</strong></h2>
              <hr id="c5bed318-6cf6-484a-9474-f184b1fb081f"/>

              <div id="495b39c9-d269-4342-9f4e-b702d83d7796" className="column-list">
                <div id="31d88474-ac3e-45a5-b85b-3fc0162a7aa1" style={ { width: '81.25%' } } className="column">
                  <p id="260d618e-3072-49d3-8b52-0ad598b336f9" className="">
                    <strong>Full Stack Developer | </strong>
                    <mark className="highlight-blue"><strong>Blog Web Application</strong></mark>
                    <em>
                      <mark className="highlight-gray"> Personal project</mark>
                    </em>
                    <mark className="highlight-gray">, Seoul, South Korea</mark>
                  </p>
                </div>
                <div id="e362e434-08ce-4e57-872b-7b7128238efe" style={ { width: '18.750000000000007%' } } className="column">
                  <p id="3d2bc5cc-0bfa-4610-8e75-e109af02517a" className="">
                    <mark className="highlight-gray">07.2023 - 12.2023</mark>
                  </p>
                </div>
              </div>
              <ul id="8b6aa72c-142a-41c8-b8e5-3e5fcc2d33ed" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  Developed a blog web application as a personal project, starting from the selection of technologies such as RDB and frameworks. Led the project design, handled the development process in all areas including backend and frontend, and actively participated in the design phase
                </li>
              </ul>
              <ul id="4f468740-ad54-4f7b-b7c0-17c25c90ef89" className="bulleted-list">
                <li style={ { listStyleType: 'disc' } }>
                  Successfully deployed the application using AWS and currently responsible for its ongoing operation and maintenance as an active web application
                </li>
              </ul>
              { /*<ul id="611c550f-2866-47da-90fc-f96032720979" className="bulleted-list">*/ }
              { /*  <li style={ { listStyleType: 'disc' } }>??</li>*/ }
              { /*</ul>*/ }
            </div>

            { /* ************* Education ************* */ }
            <div className={ 'section' }>
              <h2 id="819cf18f-c654-4cf4-a9da-9e1abc1ef65b" className=""><strong>Education</strong></h2>
              <hr id="c19cd641-3b71-45e8-8289-5f8f57eb8774"/>
              <h3 id="39136604-a154-4ece-b2cd-b6ab45443dc3" className="">
              Full-Stack Web Developer Course
              (Government-Funded)
              </h3>
              <p id="6686567f-a0e9-4087-839b-6b99eededc25" className=""><em>
                <mark className="highlight-gray">at DDIT (Daedeok Human Resource Development Foundation), Daejeon, Korea
                [03.2022 - 10.2022]
                </mark>
              </em>
              </p>
              <h3 id="b79ae57a-a330-4567-9354-c926481d15a3" className="">
              Bachelor&#x27;s Degree in Linguistics
              </h3>
              <p id="5eec80af-7f8f-496f-bdaa-163f978b012e" className="">
                <em>
                  <mark className="highlight-gray">at Chungnam National University, Daejeon, Korea [02.2017]
                  </mark>
                </em>
              </p>
              <h3 id="8be8b7c1-3956-4a05-a7b9-7c7b2ccb4bf4" className="">Bachelor&#x27;s Degree in English and
              English Literature</h3>
              <p id="c1f21feb-8204-4aab-9e1d-832dd351877b" className="">
                <em>
                  <mark className="highlight-gray">double majored at Chungnam National University, Daejeon, Korea [02.2017]
                  </mark>
                </em>
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
// <p id="8ad7b5a3-5ca1-48f3-b095-97b1800b4ded" className="">
// </p>
// <p id="e044ea2d-4cc3-493e-8444-af61cad2413a" className="">
// </p>
// <p id="7fa1a919-b644-4848-bb81-cb1f998ab01c" className="">
// </p>
// <p id="39eb3fe8-2140-493b-82e8-f26e6597e183" className="">
// </p>
