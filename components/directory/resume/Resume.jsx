import React from 'react';
import PropTypes from 'prop-types';
import { HomeOutlined, LinkedinFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';

ResumePage.propTypes = {
  children: PropTypes.node,
};

export default function ResumePage({children}) {
  const highlight = 'profile highlight-blue_background simple-table-header';
  const encodedLink = encodeURIComponent('https://jeonghoo.github.io');
  const encodedTitle = encodeURIComponent('Jeonghoo Lee - Resume');
  const encodedTag = encodeURIComponent('Resume, Artistry');

  return (
    <div className={'resume'}>
      <article id="1abd38c7-b04d-808e-a8ea-f49b0975bb4b" className="page sans">
        <header>
          <h1 className="page-title">Jeonghoo Lee</h1><p className="page-description"></p>
        </header>

        <a href={ `https://tumblr.com/share/link?url=${encodedLink}&postType=link&title=${encodedTitle}&caption=${encodedTitle}&tags=${encodedTag}` }>onclick</a>
        <a href={ `https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=${encodedLink}&title=${encodedTitle}&caption=${encodedTitle}&tags=${encodedTag}&posttype=link` }>onclick2</a>
        <div className="page-body">
          <hr id="1abd38c7-b04d-80e4-aff5-f8a3aea80577"/>

          <div id="1abd38c7-b04d-80a4-9eca-f6eeb77be303" className="column-list">
            <div id="1abd38c7-b04d-8076-9b55-eb31182baaaf" style={{width: '50%' }} className="column">
              <p id="1abd38c7-b04d-8091-95f3-c3c020d786a4" className="">
                <span><MailOutlined /></span> <span>jeonghoo@gmail.com</span>
              </p>
            </div>
            <div id="1abd38c7-b04d-80c3-ac1a-c6123eb0bc2d" style={{width: '50%' }} className="column">
              <p id="1abd38c7-b04d-809e-9453-e90625344dda" className="block-color-default">
                <span><LinkedinFilled/> </span>
                <a href="https://linkedin.com/in/jeonghoo">linkedin.com/in/jeonghoo</a>
              </p>
            </div>
            {/*<div id="1abd38c7-b04d-80c3-ac1a-c6123eb0bc2c" style={{width: '50%' }} className="column">*/}
            {/*  <p id="1abd38c7-b04d-809e-9453-e90625344ddb" className="block-color-default">*/}
            {/*    <PhoneOutlined /> +82) 10 - 000 - 0000*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>

          {/* -------------------------------- Profile section -------------------------------- */}
          <h1 id="1abd38c7-b04d-8062-8587-d7c602e2416a" className="">Profile</h1>
          <hr id="1abd38c7-b04d-80b6-95f3-e03733a44066"/>

          <p id="1abd38c7-b04d-804f-ab63-dd280f7f88b6" className="profile-indent">
            <span className={ highlight }>Highly motivated full stack developer</span> with approximately <span className={ highlight }>three years of experience</span> in web development, driven by a <span className={ highlight }>passion for creating dynamic applications.</span> Committed to <span className={ highlight }>continuous learning</span> by attending seminars to stay updated on technology trends and investing significant time in self-development through study group activities to maintain professional expertise as a developer. Specialized in web application services, having successfully completed key projects including an e-commerce vertical platform project and CAMS(Central Archives Management System) of Mongolia. Demonstrates <span className={ highlight }>exceptional adaptability</span> to new challenges and seamlessly integrates into team environments. Leverages a decade of experience in the service industry to provide excellent <span className={ highlight }>communication and collaboration skills.</span>
          </p>


          {/* -------------------------------- Skills section -------------------------------- */}
          <h1 id="1abd38c7-b04d-8091-b115-e9aa9d74b61b" className="">Skills &amp; Tools</h1>
          <hr id="1abd38c7-b04d-808e-865c-d8c098e075be"/>

          <ul id="1abd38c7-b04d-80df-be11-c4c09b970b86" className="bulleted-list">
            <li
              style={{listStyleType:'disc'}}>Languages: <code>Java</code> | <code>Javascript</code>, <code>React</code>, <code>Vue.js</code> | <code>Oracle</code>, <code>MySQL</code>, <code>MSSQL</code>
            </li>
          </ul>
          <ul id="1abd38c7-b04d-8059-ba36-cc404166fe48" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Frameworks &amp; Libraries
              : <code>Spring</code>, <code>Next.js</code>, <code>Nuxt.js</code>, <code>ANTD</code>, <code>MUI</code>, <code>Tailwind</code>
            </li>
          </ul>
          <ul id="1abd38c7-b04d-800a-a618-d05b4a722b5d" className="bulleted-list">
            <li
              style={{listStyleType:'disc'}}>Tools: <code>Git</code>, <code>SVN</code>, <code>Jenkins</code>, <code>Jira</code>, <code>Figma</code>, <code>Slack</code>
            </li>
          </ul>


          {/* -------------------------------- Projects section -------------------------------- */}
          <h1 id="1abd38c7-b04d-8083-91fc-c68e8592ea31" className="">Projects</h1>
          <hr id="1abd38c7-b04d-8013-93ff-f4724fcc148d"/>

                      {/* Artistry */}
          <div id="1abd38c7-b04d-8075-b1cb-f62252b6ea95" className="column-list">
            <div id="1abd38c7-b04d-80f2-b49b-edd3e89f3c9a" style={{width: '81.25%' }} className="column">
              <p id="1abd38c7-b04d-80c5-b393-deca142953c6" className="">
                <strong>Frontend Developer | </strong>
                <mark className="highlight-blue"><strong>Artistry (Online Gallery web platform)</strong></mark>
                <br/><br/>
                <mark className="highlight-gray">Artistry, Canada</mark>
              </p>
            </div>
            <div id="1abd38c7-b04d-8043-8cfc-e3f78c1a4c58" style={{width: '18.749999999999993%' }} className="column">
              <p id="1abd38c7-b04d-8063-8f9e-e36d08c71ec1" className="">
                <mark className="highlight-gray">08.2023 - Present</mark>
              </p>
            </div>
          </div>
          <p id="1b1d38c7-b04d-80f5-81c5-fcceb527388a" className="">Artistry is a responsive web application which
            provides local Canadian artists with opportunities to showcase their work through online exhibitions,
            supporting artists and enhancing accessibility to art for the public</p>
          <ul id="1abd38c7-b04d-8010-8e6a-dbaddd35d514" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Implemented the ‘Likes’ feature of users, enhancing user engagement and
              interaction within the web application
            </li>
          </ul>
          <ul id="1abd38c7-b04d-8087-99b9-c6c5537b256e" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Developed CRUD functionality for managing user address information,
              ensuring secure and efficient data handling
            </li>
          </ul>
          <ul id="1abd38c7-b04d-802b-849f-fb3d465ffc31" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Created a responsive landing page for exhibition listings, incorporating
              scroll events to improve user experience and navigation
            </li>
          </ul>

                      {/* CMAS */}
          <div id="1b1d38c7-b04d-8043-b8e5-d2ab6120bc8f" className="column-list">
            <div id="1b1d38c7-b04d-804c-bc03-d44a564070a5" style={{width: '81.25%' }} className="column">
              <p id="1b1d38c7-b04d-8050-a092-d46bcc6c15ae" className="">
                <strong>Full Stack Developer | </strong>
                <mark className="highlight-blue"><strong>Central Archives Management System</strong></mark>
                <br/><br/>
                <mark className="highlight-gray">Crewmate, Korea</mark>
              </p>
            </div>
            <div id="1b1d38c7-b04d-80a7-a63f-d0ca3ebe05e4" style={{width: '18.75%' }} className="column">
              <p id="1b1d38c7-b04d-8033-b768-f0e247f82c9f" className="">
                <mark className="highlight-gray">11.2023 - 11.2024</mark>
              </p>
            </div>
          </div>
          <p id="1b1d38c7-b04d-8028-bda0-da67a144946b" className="">The Central Archives Management System of Mongolia
            is a comprehensive digital platform that electronically acquires, evaluates, preserves, and provides access
            to final records from public agencies through its records management system. </p>
          <ul id="1b1d38c7-b04d-8084-bbd7-f4d7f3a45f0c" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Developed and maintained reusable frontend components, enhancing the
              productivity of individual developers and ensuring design consistency across the application through
              updated documentation and standardized CSS classes
            </li>
          </ul>
          <ul id="1b1d38c7-b04d-801e-a830-e6a7c38e7c19" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Managed error messages and codes in the backend to provide intuitive
              feedback for users while facilitating easier development for team members
            </li>
          </ul>
          <ul id="1b1d38c7-b04d-803d-a461-d6983dce1c76" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Implemented access control mechanisms for data retrieval, modification, and
              deletion based on user permissions, including logging actions to track success or failure
            </li>
          </ul>


                      {/* CJ */}
          <div id="1abd38c7-b04d-8011-8c85-f5bd2c24d03c" className="column-list">
            <div id="1abd38c7-b04d-80a3-aa05-f95e2bbe60ef" style={{width: '81.25%' }} className="column">
              <p id="1abd38c7-b04d-801a-b041-c7439bcb0cd7" className="">
                <strong>Full Stack Developer | </strong>
                <mark className="highlight-blue"><strong>E-Commerce Fashion Vertical Platform</strong></mark>
                <br/><br/>
                <mark className="highlight-gray">CJ ENM, Korea</mark>
              </p>
            </div>
            <div id="1abd38c7-b04d-8072-b1d3-ee3c3ccacdda" style={{width: '18.750000000000007%' }} className="column">
              <p id="1abd38c7-b04d-80bc-8e41-d9961420f232" className="">
                <mark className="highlight-gray">04.2023 - 10.2023</mark>
              </p>
            </div>
          </div>
          <p id="1b1d38c7-b04d-8032-9871-f10f3f8a4810" className="">An administrative dashboard for a fashion-focused
            vertical platform, enabling efficient management of fashion brands and consumer interactions to streamline
            operations and enhance the user experience.</p>
          <ul id="1abd38c7-b04d-8027-aca0-d67b5cf762dd" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Developed and managed the display functionality for 8 out of 16 menu items,
              allowing brands to efficiently showcase their products and prioritize visibility within the platform
            </li>
          </ul>
          <ul id="1b1d38c7-b04d-802f-8576-e860650b2fab" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Implemented CRUD operations for managing product displays, ensuring
              seamless updates and maintenance of brand information
            </li>
          </ul>
          <ul id="1b1d38c7-b04d-8098-802f-d4abe67d092a" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Handled binary file processing, including extracting aspect ratios form
              video files and enabling administrators to organize and manage video content based on these ratios
            </li>
          </ul>


          {/* -------------------------------- Experience section -------------------------------- */}
          <h1 id="1abd38c7-b04d-80a8-9734-e521d241d1d0" className="">Experience</h1>
          <hr id="1abd38c7-b04d-80cb-9006-f74a078821d4"/>

          <div id="1abd38c7-b04d-8017-a2d2-c33fed1d7c5d" className="column-list">
            <div id="1abd38c7-b04d-80ef-ba39-cd5508760f1b" style={{width: '81.25%' }} className="column">
              <p id="1abd38c7-b04d-805e-bba7-d680004128fa" className="">
                <strong>iOS &amp; Full Stack Developer | </strong>
                <mark className="highlight-blue"><strong>Jetlow (</strong></mark>
                <mark className="highlight-blue"><strong><a
                  href="https://apps.apple.com/kr/app/%EC%A0%9C%ED%8A%B8%EB%A1%9C-jet-low-%EA%B0%80%EC%9E%A5-%EC%89%AC%EC%9A%B4-%EC%B5%9C%EC%A0%80%EA%B0%80-%ED%95%AD%EA%B3%B5%EA%B6%8C-%EA%B2%80%EC%83%89/id6739669034"><span
                  style={{borderBottom:'0.05em solid'}}>App Store</span></a></strong></mark>
                <mark className="highlight-blue"><strong>)</strong></mark>
                <br/><br/>
                <mark className="highlight-gray">Crewmate, Korea</mark>
              </p>
            </div>
            <div id="1abd38c7-b04d-80e0-9afe-e2ab2130db10" style={{width: '18.749999999999993%' }} className="column">
              <p id="1abd38c7-b04d-8003-b481-fea6e975a99a" className="">
                <mark className="highlight-gray">12.2024 - Present</mark>
              </p>
            </div>
          </div>
          <p id="1b1d38c7-b04d-8006-8591-f2fd8c94198f" className="">A mobile application developed by Swift/Kotlin,
            React, Next.js, Java to help users search for the lowest-priced flight tickets among various Korean
            airlines. </p>
          <ul id="1abd38c7-b04d-8061-a613-e7d8c4143420" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Developed a Java web crawler to gather flight data from various airlines of
              Korea and implemented queries to display the lowest-priced tickets for specific routes
            </li>
          </ul>
          <ul id="1abd38c7-b04d-8012-946e-e709266ef557" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Implemented Universal Links and sharing functionality for the iOS app,
              enhancing user experience and engagement
            </li>
          </ul>
          <ul id="1add38c7-b04d-8060-85eb-c5eb67bb7c9b" className="bulleted-list">
            <li style={{listStyleType:'disc'}}>Built a responsive web application using React and Next.js displayed within
              a web view in the iOS app, showcasing flight listings and detailed view, while integrating weather
              information from an open API and visualizing it through graphs
            </li>
          </ul>


          {/* -------------------------------- Education section -------------------------------- */}
          <h1 id="1abd38c7-b04d-80a2-8a6a-cec66c1c75e6" className="">Education</h1>
          <hr id="1abd38c7-b04d-8090-b43b-f01d041f7521"/>

          <h3 id="1abd38c7-b04d-80bc-9e5d-ed40bb7ccfed" className="">Bachelor of Science in Computer Science (In
            Progress)</h3>
          <div id="1abd38c7-b04d-80e5-a8e4-e5542b6fba67" className="column-list">
            <div id="1abd38c7-b04d-8005-bc17-c4bff086f4bd" style={{width: '75%' }} className="column">
              <p id="1abd38c7-b04d-8001-b213-e983bce0d842" className=""><em>
                <mark className="highlight-gray">at Korea National Open University, Korea</mark>
              </em></p>
            </div>
            <div id="1abd38c7-b04d-806a-bd90-c5ace9456f13" style={{width: '25%' }} className="column">
              <p id="1abd38c7-b04d-80dd-9b3e-cb15e536de2a" className=""><em>
                <mark className="highlight-gray">[Expected Graduation: 02.2027 ]</mark>
              </em></p>
            </div>
          </div>

          <h3 id="1abd38c7-b04d-80b1-80aa-fa0c1d9dfae6" className="">Full-Stack Web Developer Course
            (Government-Funded)</h3>
          <div id="1abd38c7-b04d-8055-b693-ce8decd3fd9b" className="column-list">
            <div id="1abd38c7-b04d-80e6-8252-fb4db0dd1d92" style={{width: '81.25%' }} className="column">
              <p id="1abd38c7-b04d-80b4-b631-e1b12c7fa1c3" className=""><em>
                <mark className="highlight-gray">at DDIT (Daedeok Human Resource Development Foundation), Korea</mark>
              </em></p>
            </div>
            <div id="1abd38c7-b04d-8060-ad58-f911f13cbb50" style={{width: '18.749999999999993%' }} className="column">
              <p id="1abd38c7-b04d-8083-aae0-ec41ceacd445" className=""><em>
                <mark className="highlight-gray">[03.2022 - 10.2022]</mark>
              </em></p>
            </div>
          </div>

          <h3 id="1abd38c7-b04d-80bf-8523-e71192ad9a3a" className=""><strong>Bachelor&#x27;s Degree in
            Linguistics</strong></h3>
          <div id="1abd38c7-b04d-80e1-bbd2-c598d0ba6445" className="column-list">
            <div id="1abd38c7-b04d-800e-8f60-d1d2ba9ab046" style={{width: '87.5%' }} className="column">
              <p id="1abd38c7-b04d-805b-bbeb-d153568881a2" className=""><em>
                <mark className="highlight-gray">at Chungnam National University, Korea</mark>
              </em></p>
            </div>
            <div id="1abd38c7-b04d-8027-a146-d79e5aa66216" style={{width: '12.499999999999995%' }} className="column">
              <p id="1abd38c7-b04d-806e-a0d2-fe4c57121752" className=""><em>
                <mark className="highlight-gray">[02.2017]</mark>
              </em></p>
            </div>
          </div>

          <h3 id="1abd38c7-b04d-8070-b9ac-ea92c709de45" className=""><strong>Bachelor&#x27;s Degree in English and
            English Literature</strong></h3>
          <div id="1abd38c7-b04d-80c2-a3e2-df3e9e6c6fd6" className="column-list">
            <div id="1abd38c7-b04d-8055-87b5-ccb608099eb7" style={{width: '87.5%' }} className="column">
              <p id="1abd38c7-b04d-80dc-b309-f59f18f0d3e2" className=""><em>
                <mark className="highlight-gray">double majored at Chungnam National University, Korea</mark>
              </em></p>
            </div>
            <div id="1abd38c7-b04d-80f6-bd79-c02eab68f453" style={{width: '12.499999999999995%' }} className="column">
              <p id="1abd38c7-b04d-803c-964a-d08997553a90" className=""><em>
                <mark className="highlight-gray">[02.2017]</mark>
              </em></p>
            </div>
          </div>
          <p id="1abd38c7-b04d-80a1-8ac5-f00432289909" className=""></p>
        </div>
      </article>
    </div>
  )
}