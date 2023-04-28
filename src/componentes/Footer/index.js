import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <section>
                <ul>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/twitter.png" alt="twitter" />
                        </a>
                    </li>   
                    <li>
                        <a href="https://www.instagram.com/hirrua_/" target="_blank">
                            <img src="/imagens/instagram.png" alt="instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <a href="https://www.linkedin.com/in/hirrua/" target="_blank">
                    <img src="/imagens/logo.png" alt="logo projeto" />
                </a>
            </section>

        </footer>
    )
}

export default Footer