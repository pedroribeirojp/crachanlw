const LinksSocialMedia = {
        
  github: "pedroribeirojp",
  youtube : "UCmLd6PwrR-yif2jbT2sTnew",
  facebook :"pedroribeiro",
  instagram : "pedroribeiro_jp",
  twitter : "pedroribeirojp"
}



function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
 

changeSocialMediaLink()

function getGitHubProfileInfos(){
 const url = `https://api.github.com/users/${LinksSocialMedia.github}` 

 fetch(url)
 .then(response =>response.json())
 .then(data => {
   userName.textContent = data.name
   userBio.textContent = data.bio
   userLink.href = data.html_url
   UserImage.src = data.avatar_url
   userLogin.textContent = data.userLogin
 })



}


getGitHubProfileInfos()











