import './style.css'

const ThemeChanger = () => {

const changeTheme = (ev) => {
  if(ev.target.checked){
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.setAttribute('theme', 'light');
  }
}

return (
  <div className="theme-container">
    <input type="checkbox" class="theme-checkbox" onClick={changeTheme} />
  </div>
)
}

export default ThemeChanger;