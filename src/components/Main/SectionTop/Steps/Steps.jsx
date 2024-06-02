import React from 'react';
import './steps.css';

export const Steps = () => {
    return (
        <section className="steps section">
        <div className="container section__inner">
          <div className="steps__descr section__descr">
            <h2 className="steps__title title">
              Етапи створення свічок
            </h2>
            <p className="steps__text section__text">
              Створення свічки із соєвого воску може складатися з наступних етапів:
            </p>
          </div>
          <ol className="steps__list section__content-descr section--decor">
            <li className="steps__item steps__item--odd">
              <p className="steps__item-text">
                Підготовка матеріалів: дрібні фрагменти соєвого воску, фітіль для свічки, ароматизатори, барвники та інші
                додаткові матеріали.
              </p>
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s1.jpg'} alt="" />
            </li>
            <li className="steps__item steps__item--odd">
              <p className="steps__item-text">
                Підготовка форми: вибір форми для свічки та підготовка її до наповнення воском.
              </p>
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s2.jpg'} alt="" />
            </li>
            <li className="steps__item steps__item--even">
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s3.jpg'} alt="" />
              <p className="steps__item-text">
                Приготування воску: розплавлення соєвого воску у плавильному пристрої до потрібної температури.
                Додавання ароматизаторів та барвників за необхідності.
              </p>
            </li>
            <li className="steps__item steps__item--even">
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s4.jpg'} alt="" />
              <p className="steps__item-text">
                Підготовка фітіля: вставлення фітіля до форми та зафіксування його так, щоб він був рівномірно напружений.
              </p>
            </li>
            <li className="steps__item steps__item--odd">
              <p className="steps__item-text">
                Підготовка матеріалів: дрібні фрагменти соєвого воску, фітіль для свічки, ароматизатори, барвники та інші
                додаткові матеріали.
              </p>
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s5.jpg'} alt="" />
            </li>
            <li className="steps__item steps__item--odd">
              <p className="steps__item-text">
                Наповнення форми: воск налити до форми, поки вона не заповниться повністю. Чекати, доки він затвердіє.
              </p>
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s6.jpg'} alt="" />
            </li>
            <li className="steps__item steps__item--even">
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s7.jpg'} alt="" />
              <p className="steps__item-text">
                Приготування воску: розплавлення соєвого воску у плавильному пристрої до потрібної температури.
                Додавання ароматизаторів та барвників за необхідності.
              </p>
            </li>
            <li className="steps__item steps__item--even">
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s8.jpg'} alt="" />
              <p className="steps__item-text">
                Підготовка фітіля: вставлення фітіля до форми та зафіксування його так, щоб він був рівномірно напружений.
              </p>
            </li>
            <li className="steps__item steps__item--odd">
              <p className="steps__item-text">
                Підготовка матеріалів: дрібні фрагменти соєвого воску, фітіль для свічки, ароматизатори, барвники та інші
                додаткові матеріали.
              </p>
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s9.jpg'} alt="" />
            </li>
            <li className="steps__item steps__item--odd">
              <p className="steps__item-text">
                Наповнення форми: воск налити до форми, поки вона не заповниться повністю. Чекати, доки він затвердіє.
              </p>
              <img className="steps__item-img" src={process.env.PUBLIC_URL + '/images/s10.jpg'} alt="" />
            </li>
          </ol>
        </div>
      </section>
    );
};

