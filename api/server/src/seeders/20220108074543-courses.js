'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          courseName:'Food Photography',
          image: "/foodphotog.jpg",
          category: 'Photography',
          price: 30,
          stripeid: 'price_1K83SYFKmYdidSXKtrwk7K1R',
          description:'Enhancing your photos with Lightroom' ,
          top:'yes' ,
          status:'Enroll Now',
          createdAt: new Date(),
          updatedAt: new Date(),   

        },
        {
          courseName:'Video Editing',
          image: "/contentcreation.png",
          category: 'Marketing',
          price: 20,
          stripeid: '',
          description:'Create professional eye-catching videos' ,
          top:'yes' ,
          status:'Join Waitlist',
          createdAt: new Date(),
          updatedAt: new Date(),   

        },
        {
          courseName:'Natural Makeup Styling',
          image: "/makeup.jpg",
          category: 'Lifestyle',
          price: 40,
          stripeid: 'price_1KFZLyFKmYdidSXKKXOjo32x',
          description:'Enhance your best features and acheive the polished look' ,
          top:'yes' ,
          status:'Enroll Now' ,
          createdAt: new Date(),
          updatedAt: new Date(),   

        },
        {
          courseName:'UX Design',
          image: "/webdevReact.jpeg",
          category: 'Computer Science',
          price: 60,
          stripeid: '',
          description:'Learn end to end deisgn process',
          top:'no' ,
          status:'Coming Soon' ,
          createdAt: new Date(),
          updatedAt: new Date(),   

        },
        {
          courseName:'Search Engine Optimization',
          image:  "/webdevReact.jpeg",
          category: 'Marketing',
          price: 30,
          stripeid: '',
          description:'Optimize content for the best search engine ranking',
          top:'no' ,
          status:'Coming Soon' ,
          createdAt: new Date(),
          updatedAt: new Date(),   

        },

        {
          courseName:'Graphic Design',
          image:  "/webdevReact.jpeg",
          category: 'Computer Science',
          price: 30,
          stripeid: '',
          description:'Creating moodboards for interior designers',
          top:'no' ,
          status:'Coming Soon' ,
          createdAt: new Date(),
          updatedAt: new Date(),   

        },
       
       
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("courses", null, {});
  }
};



