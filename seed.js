const { db, Campus, Student } = require("./server/db");

const campuses = [
  {
    name: "Gryffindor",
    imageUrl: "/houses/gryffindor.png",
    address: "Gryffindor Tower",
    description:
      "Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion,it's representative gemstone was rubies, and its colours were scarlet and gold. The founder of the House was Godric Gryffindor.",
  },
  {
    name: "Hufflepuff",
    imageUrl: "/houses/hufflepuff.png",
    address: "Hufflepuff Basement",
    description:
      "Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, it's representative gemstone was yellow diamonds, and yellow and black were its colours. The founder of the House was Helga Hufflepuff.",
  },
  {
    name: "Ravenclaw",
    imageUrl: "/houses/ravenclaw.png",
    address: "Ravenclaw Tower",
    description:
      "Ravenclaw valued intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, it's representative gemstone was sapphires, and its colours were blue and bronze. The founder of the House was Rowena Ravenclaw.",
  },
  {
    name: "Slytherin",
    imageUrl: "/houses/slytherin.png",
    address: "Slytherin Dungeon",
    description:
      "Slytherin valued ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, it's representative gemstone was emeralds, and its colours were emerald green and silver.",
  },
];

const students = [
  {
    firstName: "Harry",
    lastName: "Potter",
    email: "hpotter@gryffindor.com",
    imageUrl: "/students/harrypotter.jpeg",
    gpa: 3.5,
    campusId: 1,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    email: "hgranger@gryffindor.com",
    imageUrl: "/students/hermione.jpeg",
    gpa: 4.0,
    campusId: 1,
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    email: "rweasley@gryffindor.com",
    imageUrl: "/students/ronweasley.jpeg",
    gpa: 3.0,
    campusId: 1,
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    email: "cdiggory@hufflepuff.com",
    imageUrl: "/students/cedric.jpeg",
    gpa: 3.7,
    campusId: 2,
  },
  {
    firstName: "Luna",
    lastName: "Lovegood",
    email: "llovegood@ravenclaw.com",
    imageUrl: "/students/luna.jpeg",
    gpa: 3.8,
    campusId: 3,
  },
  {
    firstName: "Myrtle",
    lastName: "Warren",
    email: "mwarren@ravenclaw.com",
    imageUrl: "/students/myrtle.jpeg",
    gpa: 3.6,
    campusId: 3,
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    email: "dmalfoy@slytherin.com",
    imageUrl: "/students/dracomalfoy.jpeg",
    gpa: 3.7,
    campusId: 4,
  },
  {
    firstName: "Vincent",
    lastName: "Crabbe",
    email: "vcrabbe@slytherin.com",
    imageUrl: "/students/vincent.jpeg",
    gpa: 2.5,
    campusId: 4,
  },
  {
    firstName: "Gregory",
    lastName: "Goyle",
    email: "ggoyle@slytherin.com",
    imageUrl: "/students/goyle.jpeg",
    gpa: 2.5,
    campusId: 4,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [gryffindor, hufflepuff, ravenclaw, slytherin] = await Promise.all(
      campuses.map((campus) => {
        return Campus.create(campus);
      })
    );
    // );
    const [harry, hermione, ron, cedric, luna, myrtle, draco, crabbe, goyle] =
      await Promise.all(
        students.map((student) => {
          return Student.create(student);
        })
      );

    await gryffindor.addStudents([harry, hermione, ron]);
    await hufflepuff.addStudents(cedric);
    await ravenclaw.addStudents([luna, myrtle]);
    await slytherin.addStudents([draco, crabbe, goyle]);
  } catch (err) {
    console.log(err);
  }
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed();
    console.log("Seeding success!");
  } catch (err) {
    console.error("Oh no! Something went wrong!");
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}

module.exports = { seed };
