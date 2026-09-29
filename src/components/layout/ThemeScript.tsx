/** Runs before paint so the saved theme never flashes. Keep it tiny. */
export function ThemeScript() {
  const code = `try{var t=localStorage.getItem('wog-theme');if(t==='light'||t==='dark'||t==='daltonism')document.documentElement.dataset.theme=t}catch(e){}`
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
