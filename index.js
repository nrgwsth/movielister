import App from "./components/App"

import 'bulma/css/bulma.css'
import "./style.css"

const app = new App()

const body = document.body

body.appendChild(app.render())
const footer = document.createElement("footer")
footer.setAttribute("class", "footer")
footer.innerHTML = `<footer class="footer">Made by &nbsp;<a href="https://github.com/nrgwsth">Anurag Awasthi</a></footer>`

body.appendChild(footer)
