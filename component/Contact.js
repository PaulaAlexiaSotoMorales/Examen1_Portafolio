const Contact = ({ }) => {
    return (
        <section>
           
                <h1 className='title'>Click each app description to contact me</h1>
                <div className="app">
                <img className="imgWhap" src="/WhatsApp.png" alt="not found" />
                <a className='whap' href="https://wa.me/50685089343" target="_blank">WhatsApp</a>
                </div>
                <div className="apps">
                <img className="imgGit" src="/git.png" alt="not found" />
                <a className='git' href="https://github.com/PaulaAlexiaSotoMorales" target="_blank">GitHub</a>
                </div>
                <div className="appss">
                <img className="imgInst" src="/instagram.png" alt="not found" />
                <a className='inst'href="https://instagram.com/soto_pau08?igshid=ZGUzMzM3NWJiOQ==" target="_blank">Instagram</a>
                </div>
                <div className="appsss">
                <img className="imgLink" src="/Linkedin.png" alt="not found" />
                <a className="link"href="https://www.linkedin.com/in/paula-alexia-soto-morales" target="_blank">Linkedlin</a>
                </div>
                <div className="appssss">
                <img className="imgFace" src="/Facebook.png" alt="not found" />
                <a className='face'href="https://www.facebook.com/paulaalexia.sotomorales?mibextid=ZbWKwL" target="_blank">Facebook</a>
                </div>
            
            
        </section>
        
    )
}

export default Contact
