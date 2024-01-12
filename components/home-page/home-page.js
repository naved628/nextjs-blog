import Image from "next/image";
import classes from './hero.module.css'

function Hero() {

  let name ="Hi I'm Navz";
  let describe = 'I blog about web development - especially frontend frameworks like Angular or React';
  return (
    <section className={classes.hero} >
      <div className={classes.image}>
        <Image
          src="/images/site/resume_profile.jpg"
          alt="An image showing Navz"
          width={300}
          height={300}
        />
      </div>
      <h1>{name}</h1>
      <p>{describe}</p>
    </section>
  );
}

export default Hero;
