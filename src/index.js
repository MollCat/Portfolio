const name= "Hollie"

const inst= "HollieJo88"

const gh= "Mollcat"

const about= "HOLLIE KRAUSER IS A MIDWESTERN WEB DEVELOPER WHO USES HTML, CSS, AND JAVASCRIPT TO CREATE BEAUTIFUL PROFESSIONAL WEBSITES."

const email= "LILIARCH225@GMAIL.COM"

function render(project) {
    const anchor = document.createElement('a');
    anchor.href = project.html_url;
    
    const projectDiv = document.createElement('div');
    const name = document.createElement('h1')
    name.className = 'project-name';
    const projects = document.getElementById('projects')
    projectDiv.className =`project`;
    anchor.innerHTML = project.name;
    name.appendChild(anchor);
    projectDiv.appendChild(name);
    projects.appendChild(projectDiv);
    
}

async function onPageLoad() {
    const response = await fetch(`https://api.github.com/users/${gh}/repos`);
    const projects = await response.json();
    for (let project of projects) {
        render(project);
    }


    const nameH1= document.getElementById("name")
    nameH1.innerHTML=`i am ${name}`;  
    const instagram= document.getElementById("instagram-link");
    instagram.href=`https://instagram.com/${inst}`; 
    
    const summary= document.getElementById("about-webdev");
    summary.innerHTML=about; 
    
    const emailP= document.getElementById("contact-email");
    emailP.innerHTML=`email: ${email}`;
   
      
}





