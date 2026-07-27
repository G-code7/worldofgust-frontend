declare module '*.css' {
  const content: any
  export default content
}

interface Window {
  gtag?: (...args: any[]) => void
}