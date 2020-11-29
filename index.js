const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

//Issue and Repo objects and templates

function Issue(attributes) {
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes) {
  
}

function getIssues(data) {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then(data => {
        for (let i=0; i < data.length; i++){
          displayIssue(new Issue(data[i]));
        }
      })
    })
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token${getToken}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
  
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
