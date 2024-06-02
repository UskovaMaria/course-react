import React from 'react';
import { useSelector } from 'react-redux';
import { Course } from './Course'; 
import "./courses.css";
import { selectCoursesList } from '../../../store/selectors'

export const SectionCourses = () => {
  // const coursesList = useSelector(state => state.products.prodsList.filter(prod => prod.type === 'course'));
  const coursesList = useSelector(selectCoursesList);

  return (
      <section className="courses section">
        <div className="container section__inner">
          <div className="section__descr">
            <h2 className="title">
              Наші курси
            </h2>
            <p className="section__text">
              Наші курси дозволяють зробити перший крок в новій кар'єрі або поглибити
              знання в своїй галузі, розвиватися як професіонал, а також покращити якість
              свого життя.
            </p>
          </div>
          <div className="products__content courses__content section__content-descr section--decor">
            {
              coursesList.map(course => <Course key={course.id} data={course} />)
            }
          </div>
        </div>
      </section>
  );
};
