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
  ],
};
