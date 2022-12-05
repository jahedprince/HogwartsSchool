const { db, Campus, Student } = require("./server/db");

const seed = async () => {
  try {
    const campuses = [
      {
        name: "Gryffindor",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/9/98/Gryffindor.jpg/revision/latest?cb=20110503103732",
        address: "Gryffindor Tower",
        description:
          "Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion,it's representative gemstone was rubies, and its colours were scarlet and gold. The founder of the House was Godric Gryffindor.",
      },
      {
        name: "Hufflepuff",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg/revision/latest?cb=20110817075555",
        address: "Hufflepuff Basement",
        description:
          "Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, it's representative gemstone was yellow diamonds, and yellow and black were its colours. The founder of the House was Helga Hufflepuff.",
      },
      {
        name: "Ravenclaw",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/3/3c/RavenclawCrest.jpg/revision/latest?cb=20120602130800",
        address: "Ravenclaw Tower",
        description:
          "Ravenclaw valued intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, it's representative gemstone was sapphires, and its colours were blue and bronze. The founder of the House was Rowena Ravenclaw.",
      },
      {
        name: "Slytherin",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Slytherin.jpg/revision/latest?cb=20100708234521",
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
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/c/c7/Harry-potter-and-the-sorcerers-stone.jpg/revision/latest/scale-to-width-down/108?cb=20150717165720",
        gpa: 3.5,
        campusId: 1,
      },
      {
        firstName: "Hermione",
        lastName: "Granger",
        email: "hgranger@gryffindor.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/0/0a/Hermione_Granger_OOTP_promo_f_1.jpg/revision/latest/scale-to-width-down/120?cb=20210928153839",
        gpa: 4.0,
        campusId: 1,
      },
      {
        firstName: "Ron",
        lastName: "Weasley",
        email: "rweasley@gryffindor.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/8/87/DH1_Ron_Weasley_promo_01.jpg/revision/latest/scale-to-width-down/120?cb=20110202095952",
        gpa: 3.0,
        campusId: 1,
      },
      {
        firstName: "Cedric",
        lastName: "Diggory",
        email: "cdiggory@hufflepuff.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png/revision/latest/scale-to-width-down/700?cb=20161123045136",
        gpa: 3.7,
        campusId: 2,
      },
      {
        firstName: "Zacharias",
        lastName: "Smith",
        email: "zsmith@hufflepuff.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/d/d3/Zacharias_Smith_OOTPF.jpg/revision/latest?cb=20180215164827",
        gpa: 3.2,
        campusId: 2,
      },
      {
        firstName: "Luna",
        lastName: "Lovegood",
        email: "llovegood@ravenclaw.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/c/ca/Luna_HPHBP.jpg/revision/latest/scale-to-width-down/200?cb=20100925141354",
        gpa: 3.8,
        campusId: 3,
      },
      {
        firstName: "Myrtle",
        lastName: "Warren",
        email: "mwarren@ravenclaw.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/b/b8/Myrtle_Warren_profile.png/revision/latest/scale-to-width-down/700?cb=20170113020338",
        gpa: 3.6,
        campusId: 3,
      },
      {
        firstName: "Draco",
        lastName: "Malfoy",
        email: "dmalfoy@slytherin.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/7/7c/Draco_Malfoy_HBP.jpg/revision/latest/scale-to-width-down/115?cb=20081021061733",
        gpa: 3.7,
        campusId: 4,
      },
      {
        firstName: "Vincent",
        lastName: "Crabbe",
        email: "vcrabbe@slytherin.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/a/a9/CrabbeHBP.png/revision/latest/scale-to-width-down/120?cb=20110822110748",
        gpa: 2.5,
        campusId: 4,
      },
      {
        firstName: "Gregory",
        lastName: "Goyle",
        email: "ggoyle@slytherin.com",
        imageUrl:
          "https://static.wikia.nocookie.net/harrypotter/images/e/e7/Gregory_Goyle_DH2.jpg/revision/latest/scale-to-width-down/120?cb=20180306163743",
        gpa: 2.5,
        campusId: 4,
      },
    ];
    await db.sync({ force: true });

    await Promise.all(campuses.map((campus) => Campus.create(campus)));

    await Promise.all(students.map((student) => Student.create(student)));

    // seed your database here!
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
    console.error("Oh noes! Something went wrong!");
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
