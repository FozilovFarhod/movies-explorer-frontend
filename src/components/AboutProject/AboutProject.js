import './AboutProject.css';

function AboutProject() {
  return (
        <section className='about-project' id='aboutProject'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__articles'>
            <div className='about-project__article'>
            <h3 className='about-project__article-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text-content'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about-project__article'>
            <h3 className='about-project__article-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text-content'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            </div>
            <div className='about-project__infographic'>
                <p className='about-project__small-block-infographic-colored'>1 неделя</p>
                <p className='about-project__large-block-infographic-colored'>4 недели</p>
                <p className='about-project__small-block-infographic-caption'>Back-end</p>
                <p className='about-project__large-block-infographic-caption'>Front-end</p>
            </div>
        </section>
  );
}

export default AboutProject;
