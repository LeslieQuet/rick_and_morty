import style from './About.module.css'

export default function About() {
   return (
      <div className={style.container}>
        <h2 style={{fontSize: '2em'}}>Hola, soy Leslie! Bienvenid@s a About Me</h2>
        <h5>¡Todo lo que se de programación lo aprendí con Soy Henry y esta es mi primer App!</h5>
        <h5 style={{fontSize: '1em'}}>Soy FullStack Developer en formación en la comunidad de SoyHenry! A continuación lo que espero que les cuente mi portfolio en un futuro cercano</h5>
        <p style={{fontSize: '1.2em'}}>Hi! I am Leslie Quetglas, Web Designer & Web Developer
I’m currently living in the countryside at La Rioja, Argentina. I spend my days enjoying nature and mostly working on different areas of web development, from back end programming to front end engineering with emphasis on responsive design.
I am passionate about my work and I love simplicity and efficiency. My goal while developing is to provide a great experience for the users and to have a gratifying relationship with my clients.</p>
      </div>
   );
}
