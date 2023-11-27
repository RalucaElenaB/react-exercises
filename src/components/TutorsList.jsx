import PropTypes from 'prop-types';

const TutorsList = ({ tutors }) => {
  //   function renderList(items) {
  //     return items.map((item) => (
  //       // <li key={item.phone}>
  //       //   {item.lastName} {item.firstName}
  //       // </li>
  //       <li key={item.phone}>{`${item.lastName} ${item.firstName}`}</li>
  //     ));
  //   }
  //   return (
  //     <ul className="TutorsList">
  //       <h1>Tutors List</h1>
  //       {renderList(tutors)}
  //     </ul>
  //   );
  // };

  return (
    <ul className="TutorsList">
      {tutors.map(item => (
        <li key={item.phone}>{`${item.lastName} ${item.firstName}`}</li>
      ))}
    </ul>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.array,
};

export default TutorsList;
