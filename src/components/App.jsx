//MODUL 1 A -INTRODUCTION TO REACT
import Menu from './Menu';
import SearchBar from './SearchBar';
import Books from './books/Books';
import TutorsList from './TutorsList';
import Button from './Button';

//MODUL 2 A- EVENTS AND STATES IN REACT
import Panel from 'components/Panel';
import PanelTwo from './PanelTwo';

export default function App() {
  const isVisible = true;
  const menuItems = [
    {
      id: 1,
      name: 'Acasa',
    },
    {
      id: 2,
      name: 'Despre noi',
    },
    {
      id: 3,
      name: 'Contact',
    },
  ];

  const data = {
    name: 'MIT',
    description:
      'Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ',
    tutors: [
      {
        firstName: 'John',
        lastName: 'Smith',
        phone: '+1 302-865-7394',
        email: 'johnsmith@goit.global',
        city: 'New York',
        options: 'Group creation',
      },
      {
        firstName: 'Antonio',
        lastName: 'García',
        phone: '+34 456 890 302',
        email: 'antonio.garcia@goit.global',
        city: 'Madrid',
        options: 'Group creation, editing teacher profiles',
      },
    ],
    cities: ['Kyiv', 'London', 'Berlin'],
    department: [
      { name: 'Faculty of Computer Science' },
      { name: 'Faculty of Automation' },
      { name: 'Faculty of Neural Networks' },
    ],
  };

  return (
    <div>
      <h1>Introduction to React (1 A)</h1>
      <h2>Exercitiul 1</h2>
      <SearchBar text={'My new product'} isVisible={isVisible} price={23}>
        <p>Text 1</p>
        <p>Text 2</p>
        <p>Text 3</p>
      </SearchBar>
      <p>Some React exercises</p>

      <h2>Exercitiul 2</h2>
      <Books />

      <h2>Exercitiul 3</h2>
      <Menu items={menuItems} />

      <h2>Exercitiul 4</h2>
      <TutorsList tutors={data.tutors} />

      <h2>Exercitiul 5</h2>
      <Button
        text={'Button'}
        icon="&"
        handleClick={() => console.log('Cand dau click se va afisa asta')}
      />

      <h1>Stylization in React (1 B)</h1>
      <h3>
        link spre repo-ul cu stilizarea
        https://ralucaelenab.github.io/react-exercises-stylization/
      </h3>

      <h1>Events and States in React (2 A)</h1>
      <h2>Exercitiul 1</h2>
      <Panel index={1} />
      <PanelTwo index={2} />

      <h1>Forms (2 B)</h1>
    </div>
  );
}
