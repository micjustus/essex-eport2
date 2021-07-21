export const module = {
  id: 2,
  title: "Object-oriented Information Systems",
  outcomes: [
    "Appraise and evaluate critically the concepts and principles of information systems.",
    "Design or modify and document an object-oriented information system using appropriate tools.",
    "Develop an object-oriented information system design, implementing this knowledge in applicable programming languages, such as Python and SQL.",
    "Develop, implement and evaluate critically information system solutions to facilitate business decisions.",
  ],
  units: [
    {
      title: "Unit 1",
      description: "Introduction to Information Systems",
      outcomes: [
        "Understand the core elements of an information system",
        "Appreciate the common issues that can arise when deploying a system.",
        "Gain an understanding of the SDLC, its phases and their importance.",
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vSi3xebYOpKEfD2j074nWIXStcLGI1sVFxB8jLgLRQMEb_gTTZkT-x3W3eFz6DogDiLOnKwIR-oj_Kq/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U1.pdf",

      reading: {
        required: [
          "Sommerville, I. (2016) Software Engineering. Harlow: Pearson, Chapter 1",
          "BBC (2015) US Prisoners Released Early by Software Bug.",
          "Barrett, L. (2003) Hospital Revives its Dead Patients",
        ],
        optional: [
          "Computer World (2020) Top Software Failures in Recent History",
          "Sommerville, I. (2013) System Success and Failure",
          "Engineering Truth (2020) What is an Information System?",
        ],
      },
      activities: [
        {
          title: "Discussion Forum",
          description:
            "Identify an instance of a failure with an information system, with a focus on the reasons for the failure.",
          // href: "/assets/activity-m2u1.html",
          ref: "pdf",
          href: "../assets/artefacts/Reflections-M2-U1-Initial_Post.pdf",
        },
        {
          ref: "pdf",
          title: "Seminar 1 Preparation",
          description:
            "Prepare for seminar which focuses on the En Route Automation Modernization failure. <em>Please refer to Reflective Writing for additional information</em>",
          // href: "https://docs.google.com/document/d/e/2PACX-1vQ6sMs36WZZgqc8ly-Oi3CwTccpVN73FSXgJDt1ZG6RFF6fvj4JOQjvJa2KqA9wDB57WNvYzjGxMOxL/pub?embedded=true"
          href: "../assets/artefacts/Reflections-M2-U1-Seminar1_Preparation.pdf",
        },
      ],
    },
    {
      title: "Unit 2",
      description: "Information Systems and their Importance",
      outcomes: [
        "Understand the core components of an information system and their importance.",
        "Evaluate a range of issues and appropriate solutions or mitigations.",
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vRms_xQ9HNJJ3auWwZ5cuRLxjqwg6H-91IVFF62LTRTwI7abODBwZo_nsSyXfGngMMazEFwY3rzyAu_/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U2.pdf",
      activities: [
        {
          title: "Seminar 1 - En Route Automation Modernization (ERAM) System",
          description: `Discussion around information system failure for ERAM.`,
          display: "date",
          ref: "pdf",
          month: "May",
          day: 11,
          // href: "https://docs.google.com/document/d/e/2PACX-1vQ6sMs36WZZgqc8ly-Oi3CwTccpVN73FSXgJDt1ZG6RFF6fvj4JOQjvJa2KqA9wDB57WNvYzjGxMOxL/pub?embedded=true"
          href: "../assets/artefacts/Reflections-M2-U1-Seminar1_Preparation.pdf",
        },
      ],
      reading: {
        required: [
          "Bourgeois, D. (2014) Welcome to Information Systems for Business and Beyond. Saylor Academy. Chapter 1: Introduction to Information systems",
        ],
        optional: [
          "Bourgeois, D. (2014) Welcome to Information Systems for Business and Beyond. Saylor Academy. Chapters 2 - 10",
        ],
      },
    },
    {
      title: "Unit 3",
      description: "Fundamentals of Object-oriented Design",
      outcomes: [
        "Identify the appropriate objects within a system.",
        "Develop an object-oriented design for a system.",
        "Correctly apply composition and inheritance where appropriate.",
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vTL8mLFC19cPpHEI21-MgTEzjAlXHvfwmXM8v0ojC4c5P-K9s0_K4PPF3csN-VCeDA3PlWtPD-I7dw0/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U3.pdf",
      activities: [
        {
          title: "Discussion Post Summary",
          description:
            "Identify an instance of a failure with an information system, with a focus on the reasons for the failure.",
          ref: "pdf",
          // href: "/assets/activity-m2u3.html",

          href: "../assets/artefacts/Reflections-M2-U3-Summary_Post.pdf",
        },
        {
          title: "Practical Activity",
          description:
            "This activity for this unit involves putting your object-oriented design skills into practice. Create an object model to represent a supermarket.",
          // href: "/assets/activity-m2u3-2.html",
          ref: "pdf",
          href: "../assets/artefacts/Reflections-M2-U3_Practical.pdf",
          postClass: "image-only",
        },
        {
          title: "Seminar 2 - Preparation",
          description:
            "Python Programming that covers classes and objects, class functions and methods and inheritance.",
        },
      ],
      reading: {
        required: [
          "Philips, D. (2018) Python 3 Object-Oriented programming. 3rd ed. Packt Publishing Chapters 1&5",
        ],
      },
    },
    {
      title: "Unit 4",
      description: "Object-oriented Development using Python",
      outcomes: [
        "Design object-oriented models of a system.",
        "Develop object-oriented software using the Python programming languages.",
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vRM4FWo0EuDuQkR-5cCX--iBe7C94gUBE-4S469qdLuEPC_n13zGYs_ofw8tQRaH1hbzzqnjmTx7n74/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U4.pdf",
      activities: [
        {
          title: "Python Programming Exercises",
          description:
            "Use the Codio environment to conduct Python programming for classes and objects, class functions and methods and inheritance.",
        },
        {
          display: "date",
          month: "May",
          day: 27,
          title: "Seminar 2 - Python Programming",
          description:
            "Classes and objects, class functions and methods and inheritance.",
          ref: "pdf",
          href: "../assets/artefacts/Reflections-M2-U4-Seminar2.pdf",
        },
      ],
      reading: {
        required: [
          "Philips, D. (2018) Python 3 Object-Oriented programming. 3rd ed. Packt Publishing Chapters 1&5",
        ],
      },
    },
    {
      title: "Unit 5",
      description: "Introduction to Unified Modelling Language (UML).",
      outcomes: [
        "Use UML to develop an object-oriented system design.",
        "Develop a sequence diagram to model the interactions between objects.",
        "Identify and use the correct elements of UML to design a system.",
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vQLSmYMvm1q3HpZ22CaWU2oiBrQoDiTFi9HUDYPt12OdR_2EhMAdMlOyztAzeKESfQZCUM8BgqAek_d/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U5.pdf",
      reading: {
        required: [
          "Fowler, M. (2013) UML Distilled: a brief guide to the standard object modeling language. 3rd ed. Boston, MA: Addison Wesley Chapters 3, 4, 10 & 11",
          "Ambler, S. (2003) Elements of UML Style. Cambridge: Cambridge University Press Chapters 1, 2, 3",
        ],
        optional: [
          "Kong, J., Xu, D. and Zeng, X.(2010). UML-based modeling and analysis of security threats. International Journal of Software Engineering and Knowledge Engineering 20(6): 875-897.",
          "Bell, D. (2003) An Introduction to the Unified Modeling Language. IBM Developer Works.",
        ],
      },
      activities: [
        {
          title: "Practical Activity",
          description:
            "Extend object model from <strong>Unit 3</strong> into a UML class diagram.",
          ref: "pdf",
          href: "../assets/artefacts/Reflections-M2-U5_Practical.pdf",
        }       
      ],
    },
    {
      title: "Unit 6",
      description: "Hands-on with UML",
      outcomes: [
        "Identify the potential classes in a system brief.",
        "Develop a set of UML documentation for a specific scenario",
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vQLSmYMvm1q3HpZ22CaWU2oiBrQoDiTFi9HUDYPt12OdR_2EhMAdMlOyztAzeKESfQZCUM8BgqAek_d/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U6.pdf",
      reading: {
        required: [
          "Ambler, S. (2003) Elements of UML Style. Cambridge: Cambridge University Press Chapters 4, 6, 8 & 9",
          "Lucidchart (n.d.) UML Class Diagram Tutorial",
          "Banas, D. (2012) UML 2.0 Tutorial"
        ],
        optional: [
          "Bruegge, B. (2014) Object-oriented software engineering : using UML, patterns, and Java. Harlow: Pearson Chapter 2",
        ],
      },
      activities: [
        {
          title: "Seminar 3 Preparation - Working with UML",
          display: "date",
          month: "May",
          day: 10,
          description:
            "Develop a class diagram, sequence diagram and activity diagram for a given scenario.",
          href: "../assets/artefacts/Reflections-M2-U6-Seminar3.pdf",
          ref: "pdf"
        },
      ],
    },

    {
      title: "Unit 7",
      description: "Database Design",
      outcomes: [
        "Develop knowledge and skills to apply database design principles",
        "Design a database that has been correctly normalised"
      ],
      writing:
        // "https://docs.google.com/document/d/e/2PACX-1vQLSmYMvm1q3HpZ22CaWU2oiBrQoDiTFi9HUDYPt12OdR_2EhMAdMlOyztAzeKESfQZCUM8BgqAek_d/pub?embedded=true",
        "../assets/artefacts/Reflections-M2-U7.pdf",
      reading: {
        required: [
          "Connolly, T. & Beg, C. (2015) Database Systems: A Practical Approach to Design, Implementation, and Management. Global Edition. Edinburgh: Pearson. Chapters 1, 4 & 14.",
        ],
        optional: [
          "Kroenke, D. (2015) Database processing : fundamentals, design, and implementation. Upper Saddle River: Pearson. Chapters 1, 3, 4",
        ],
      },
      activities: [
        {
          title: "Mid-Module Assignment: System Design",
          description:
            "Develop a class diagram, activity and state diagram for a given scenario describing online shopping.",
          href: "../assets/artefacts/M2_Mid-module_Assignment.pdf",
          ref: "pdf"
        },

        {
          title: "Mid-Module Assignment: Feedback",
          description: "Tutor feedback of submitted work",
          href: "../assets/artefacts/M2_Mid-module_Assignment_Feedback.pdf",
          ref: "pdf"
        }
      ],
    },

    {
      title: "Unit 8",
      description: "Hands-on with Database Design",
      outcomes: [
        "Develop a structure for a database for a given scenario.",
        "Create an entity relationship diagram to document your design.",
      ],
      writing:
        "../assets/artefacts/Reflections-M2-U8.pdf",
      reading: {
        required: [
          "Connolly, T. & Beg, C. (2015) Database Systems: A Practical Approach to Design, Implementation, and Management. Global Edition. Edinburgh: Pearson. Chapters 12, 13.",
          "Lucidchart (2017) What is an Entity Relationship Diagram?",
        ],
        optional: [
          "Kroenke, D. (2015) Database processing : fundamentals, design, and implementation. Upper Saddle River: Pearson. Chapter 5.",
          "Creately (2020) Ultimate Entity Relationship Diagram Tutorial"
        ],
      },
      activities: [
        {
          title: "Seminar 3 Preparation - Database Design",
          display: "date",
          month: "May",
          day: 10,
          description:
            "Consider a worked example of database design from beginning to end and construct an ERD.",
          href: "../assets/artefacts/Reflections-M2-U8-Seminar4.pdf",
          ref: "pdf"
        },

        {
          title: "Collaborative Discussion - Alternatives to SQL",
          description:
            "Consider a worked example of database design from beginning to end and construct an ERD.",
          href: "../assets/artefacts/Reflections-M2-U8-Initial_Post.pdf",
          ref: "pdf"
        },

        {
          title: "Collaborative Discussion - Reponses",
          description:
            "Continue the discussion concerning alternatives to traditional relational database systems.",
            href: "../assets/artefacts/Reflections-M2-U8-Discussions.pdf",
            ref: "pdf"
        }
      ],
    },

    {
      title: "Unit 9",
      description: "Implementing Databases with SQL",
      outcomes: [
        "Implement a database design using SQL.",
        "Create appropriate queries using SQL.",
        "Understand the access and security issues around SQL."
      ],
      writing:
        "../assets/artefacts/Reflections-M2-U9.pdf",
      reading: {
        required: [
          "Han J., Haihong E., Guan L. & Jian D. (2011) 'Survey on NoSQL database'. 2011 6th International Conference on Pervasive Computing and Applications. Port Elizabeth, South Africa, 26-28 October. IEEE. 363-366. doi: 10.1109/ICPCA.2011.6106531.",
          "MySQL Training (2020) MySQL 8.0 Reference Manual"
        ],
        optional: [
          "Sharma, V. & Dave, M. (2012) SQL and NoSQL Databases. International Journal of Advanced Research in Computer Science and Software Engineering 2(8): 20-27.",
          "IBM Big Data & Analytics Hub (2018) The Four V's of Big Data",
          "Be a Better Dev (2020) SQL vs NoSQL Explained",
          "Stajano, F. (1998) A gentle introduction to relational and object oriented databases. ORL Technical Report."
        ],
      },
      activities: [
      
      ],
    },

    {
      title: "Unit 10",
      description: "Working with SQL",
      outcomes: [
        "Implement a table structure based on a specification.",
        "Perform simple queries in order to extract information.",
        "Develop queries requiring multiple tables using either subqueries or joins."
      ],
      writing:
        "../assets/artefacts/Reflections-M2-U10.pdf",
      reading: {
        required: [
          "Connolly, T. & Beg, C. (2015) Database Systems: A Practical Approach to Design, Implementation, and Management. Global Edition. Edinburgh: Pearson. Chapters 6, 7, 8",
        ],
        optional: [
          "Bruegge, B. (2014) Object-oriented software engineering : using UML, patterns, and Java. Harlow: Pearson Chapter 2",
        ],
      },
      activities: [
        {
          title: "Seminar 5 Preparation - System Implementation Discussion",
          display: "date",
          month: "Jul",
          day: 9,
          description:
            "Consider an example of creating a system based on a design document.",
          href: "../assets/artefacts/Reflections-M2-U10-Seminar5.pdf",
          ref: "pdf"
        },

        {
          title: "Codio Exercies - MySQL",
          description:
            "Continue coding exercises to gain experience with MySQL.",
          href: "../assets/artefacts/Reflections-M2-U10-Practical.pdf",
          ref: "pdf"
        },
      ],
    },

    {
      title: "Unit 11",
      description: "Web Development in Python",
      outcomes: [
        "Implement a simple web server.",
        "Create dynamic templates using Jinja.",
        "Connect a database to a Flask application.",
        "Understand some of the security considerations around web applications."
      ],
      writing:
        "../assets/artefacts/Reflections-M2-U11.pdf",
      reading: {
        required: [
          "Ginberg, M. (2017) The Flask Mega Tutorial",
          "Pallets Projects (2010) Flask Tutorial"
        ],
        optional: [
          "RealPython (n.d.) Flask Tutorials"
        ],
      },
      activities: [
        {
          title: "Codio - Introduction to Flask",
          description:
            "Learn to instantiate a simple web server and show data via a template.",
          href: "../assets/artefacts/Reflections-M2-U11-Practical.pdf",
          ref: "pdf"
        },
      ],
    },

    {
      title: "Unit 12",
      description: "The Future of Information Systems",
      outcomes: [
        "Consider the importance of securing information systems.",
        "Explore the privacy concerns associated with modern information systems.",
        "Discuss the emerging technologies in information systems."       
      ],
      writing:
        "../assets/artefacts/Reflections-M2-U12.pdf",
      reading: {
        required: [
          "Valacich, J. & Schneider, C. (2014) Information Systems Today: Managing in the Digital World. 6th ed. Boston, MA: Pearson. Chapters 1, 10.",
          "Bourgeois, D. (2014) Welcome to Information Systems for Business and Beyond. Saylor Academy., Chapters 11, 12, 13.",
          "Jablonski, J. & Robak, S. (2019) 'Information Systems Development and Usage with Consideration of Privacy and Cyber Security Aspects', in: Ganzha, M., Maciaszek, L. & Paprzycki, M. (eds) Proceedings of the 2019 Federated Conference on Computer Science and Information Systems ACSIS. 18: 547–554. doi: 10.15439/2019F261.",
          "Brooks, N., Greer, T. & Morris, S. (2018) Information systems security job advertisement analysis: Skills review and implications for information systems curriculum. Journal of Education for Business 93(5): 213–221. doi: 10.1080/08832323.2018.1446893."
        ],
        optional: [
        
        ],
      },
      activities: [
        {
        
        },
      ],
    },
  ],
};
