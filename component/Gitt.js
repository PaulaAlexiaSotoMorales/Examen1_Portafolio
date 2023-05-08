import { useState } from 'react';
import Head_pages from "./Head_pages";

function Seach() {
  const [username, setUsername] = useState('PaulaAlexiaSotoMorales');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  async function searchUser(event) {
    event.preventDefault();
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      setUser(userData);
      setRepos(reposData);
    } catch (error) {
      console.error(error);
      setUser(null);
      setRepos([]);
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

 
    

  return (
    <div className='pag'>

      <div className='contain'>
      
      <form onSubmit={searchUser}>
        
          
          <div className='buscar'>Repository of <input type="text" value={username} onChange={handleUsernameChange} /><div className='subb'><button type="submit">Click on me to search the repositories</button></div></div>
        
        
      </form>
        
        {user && (
          <div>

            <div className='title' >Repositories</div>
            <ul>

              {repos.map(repo => (
                <div className='kk'>
                 
                  <div className='container'>
                    
                    <li key={repo.id}>
                      <h2>{user.name}</h2>
                      <div className='img'>
                        <img src={user.avatar_url} alt={`${user.name}'s avatar`} />
                      </div>
                      <div className='nombre'><p>{repo.owner.login}</p></div>
                      <div className='letra'>Repository: </div><div className='name'><h>{repo.name}</h></div>
                      <div className='click'>Click on url:</div> <div className='url'><a href={repo.html_url} target="_blank" rel="noopener noreferrer"> {repo.html_url}</a></div>
                      <div className='c'>
                        <div className='lenguaje'><h>{repo.language}</h></div>
                      </div>
                      <div className='con'>
                        <div className='visil'><h>{repo.visibility}</h></div>

                      </div>
                      <div className='wat'><h>{repo.watchers}</h> watchers</div>
                      <div className='iss'><h>{repo.open_issues}</h> issues</div>

                    </li>
                  </div>
                </div>
              ))}

            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Seach;
