// import React from 'react';

// export default function Portfolio() {
//   return (
//     <div>
//       <h1>Portfolio Page</h1>
//       <p>
//         Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
//         Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
//         mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
//         lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
//         in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
//       </p>
//     </div>
//   );
// }

import React from 'react'; 
import ProjectCards from './Project'
import portfolio from '../../projects.json'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  
    return (
        <section>
          <div className="project">
            <h1 className="title">Projects</h1>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    );
}

export default Portfolio;